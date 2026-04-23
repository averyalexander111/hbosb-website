import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import {
  hasMinimumWords,
  MINIMUM_WORD_VALIDATION_MESSAGE,
  PHONE_INPUT_PATTERN,
  PHONE_VALIDATION_MESSAGE,
  sanitizeEmailInput,
  sanitizePhoneInput,
  validateLeadContactInfo,
} from "@/lib/leadValidation";
import { toast } from "sonner";

const DEFAULT_CONTACT_WEBHOOK_URL =
  "https://n8n.srv1035849.hstgr.cloud/webhook/9f28ea66-de6e-4810-bc3a-78d401b205a3";

interface ContactFormProps {
  areaOfInterest?: string;
  formIdPrefix?: string;
  showHeadline?: boolean;
}

interface ContactSubmissionPayload {
  full_name: string;
  email_address: string;
  phone_number: string;
  message: string;
  area_of_interest: string;
  sms_consent: boolean;
}

const getContactWebhookUrl = () =>
  import.meta.env.VITE_CONTACT_WEBHOOK_URL?.trim() || DEFAULT_CONTACT_WEBHOOK_URL;

const shouldUseDirectContactWebhook = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const isProductionHost =
    window.location.hostname === "heartbeatofsouthbay.com" ||
    window.location.hostname === "www.heartbeatofsouthbay.com";

  return isProductionHost && window.location.pathname === "/contact";
};

const submitToContactWebhook = async (payload: ContactSubmissionPayload) => {
  const response = await fetch(getContactWebhookUrl(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      event: "contact_form_submission",
      timestamp: new Date().toISOString(),
      source: `${window.location.origin}/contact`,
      ...payload,
    }),
  });

  if (!response.ok) {
    throw new Error("Webhook submission failed");
  }
};

const submitToEdgeFunction = async (payload: ContactSubmissionPayload) => {
  const { data, error } = await supabase.functions.invoke("submit-contact-form", {
    body: payload,
  });

  if (error || !data?.success) {
    throw new Error(data?.error || error?.message || "Submission failed");
  }
};

const ContactForm = React.memo(({
  areaOfInterest = "General Inquiry",
  formIdPrefix = "cf",
  showHeadline = true,
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    full_name: "",
    email_address: "",
    phone_number: "",
    message: "",
  });
  const [smsConsent, setSmsConsent] = useState(false);
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = formData.full_name.trim();
    const trimmedMessage = formData.message.trim();

    if (
      !trimmedName ||
      !formData.email_address.trim() ||
      !formData.phone_number.trim() ||
      !trimmedMessage
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!e.currentTarget.reportValidity()) {
      return;
    }

    const validatedContactInfo = validateLeadContactInfo({
      email: formData.email_address,
      phone: formData.phone_number,
    });

    if (!validatedContactInfo.isValid) {
      toast.error(validatedContactInfo.error);
      return;
    }

    if (!hasMinimumWords(trimmedName)) {
      toast.error(`Name: ${MINIMUM_WORD_VALIDATION_MESSAGE}`);
      return;
    }

    if (!hasMinimumWords(trimmedMessage)) {
      toast.error(`Message: ${MINIMUM_WORD_VALIDATION_MESSAGE}`);
      return;
    }

    setIsSubmitting(true);
    try {
      const payload: ContactSubmissionPayload = {
        full_name: trimmedName,
        email_address: validatedContactInfo.email,
        phone_number: validatedContactInfo.phone,
        message: trimmedMessage,
        area_of_interest: areaOfInterest,
        sms_consent: smsConsent,
      };

      if (shouldUseDirectContactWebhook()) {
        await submitToContactWebhook(payload);

        // Preserve the existing Supabase/Airtable path when available, but don't block the lead if it fails.
        void submitToEdgeFunction(payload).catch((error) => {
          console.error("Secondary contact sync failed:", error);
        });
      } else {
        await submitToEdgeFunction(payload);
      }

      toast.success("Thank you! Your message has been sent successfully.");
      setFormData({ full_name: "", email_address: "", phone_number: "", message: "" });
      setSmsConsent(false);
    } catch {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConsentChange = (checked: boolean | "indeterminate") => {
    setSmsConsent(checked === true);
  };

  const id = (name: string) => `${formIdPrefix}_${name}`;

  return (
    <div className="max-w-2xl mx-auto">
      {showHeadline && (
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-navy-foreground">
            Prefer to Send a Message?
          </h3>
          <p className="mt-2 text-navy-foreground/60 text-sm">
            Tell us a bit about what you're looking for and we'll get back to you shortly.
          </p>
        </div>
      )}

      <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name & Email row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <Label htmlFor={id("name")} className="text-navy-foreground/70">
                Name *
              </Label>
              <Input
                id={id("name")}
                type="text"
                placeholder="Your full name"
                value={formData.full_name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, full_name: e.target.value }))
                }
                minLength={2}
                maxLength={100}
                required
                className="rounded-lg bg-white/10 border-white/20 text-navy-foreground placeholder:text-navy-foreground/40 shadow-sm transition-shadow focus:shadow-md"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor={id("email")} className="text-navy-foreground/70">
                Email *
              </Label>
              <Input
                id={id("email")}
                type="email"
                placeholder="your@email.com"
                value={formData.email_address}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email_address: sanitizeEmailInput(e.target.value) }))
                }
                maxLength={255}
                autoComplete="email"
                inputMode="email"
                required
                className="rounded-lg bg-white/10 border-white/20 text-navy-foreground placeholder:text-navy-foreground/40 shadow-sm transition-shadow focus:shadow-md"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <Label htmlFor={id("phone")} className="text-navy-foreground/70">
              Phone Number *
            </Label>
            <Input
              id={id("phone")}
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.phone_number}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phone_number: sanitizePhoneInput(e.target.value) }))
              }
              maxLength={20}
              autoComplete="tel"
              inputMode="tel"
              pattern={PHONE_INPUT_PATTERN}
              title={PHONE_VALIDATION_MESSAGE}
              required
              className="rounded-lg bg-white/10 border-white/20 text-navy-foreground placeholder:text-navy-foreground/40 shadow-sm transition-shadow focus:shadow-md"
            />
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <Label htmlFor={id("message")} className="text-navy-foreground/70">
              Message *
            </Label>
            <Textarea
              id={id("message")}
              placeholder="How can we help you?"
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              maxLength={1000}
              minLength={2}
              rows={4}
              required
              className="rounded-lg bg-white/10 border-white/20 text-navy-foreground placeholder:text-navy-foreground/40 shadow-sm transition-shadow focus:shadow-md"
            />
          </div>

          {/* Consent Container */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs text-navy-foreground/60 font-medium mb-2">
              Optional: Check this box to receive SMS updates regarding your inquiry.
            </p>
            <div className="flex items-start gap-3 min-h-[44px]">
              <Checkbox
                id={id("sms_consent")}
                checked={smsConsent}
                onCheckedChange={handleConsentChange}
                className="mt-0.5 border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <label
                htmlFor={id("sms_consent")}
                className="text-xs text-navy-foreground/60 leading-relaxed cursor-pointer select-none"
              >
                I agree to receive SMS messages from Heartbeat of South&nbsp;Bay
                regarding my inquiry, appointments, and service-related
                communications. Message and data rates may apply. Reply STOP to
                opt out or HELP for assistance. Consent is not a condition of
                purchase.
              </label>
            </div>

            <p className="mt-3 text-xs text-navy-foreground/40">
              View our{" "}
              <Link
                to="/terms-and-conditions"
                className="underline text-primary/70 hover:text-navy-foreground transition-colors"
              >
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy-policy"
                className="underline text-primary/70 hover:text-navy-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full transition-transform hover:scale-[1.01] active:scale-[0.99]"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>

          {/* Microcopy */}
          <p className="text-center text-xs text-navy-foreground/50">
            We typically respond within 24 hours.
          </p>

          {/* Trust Line */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-navy-foreground/40">
            <Shield className="w-3.5 h-3.5" />
            <span>Secure. No spam. Your information is never shared.</span>
          </div>
        </form>
      </div>
    </div>
  );
});

ContactForm.displayName = "ContactForm";

export default ContactForm;
