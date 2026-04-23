import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  Gauge,
  Layers3,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import HeartbeatFooter from "@/components/HeartbeatFooter";
import HeartbeatNavbar from "@/components/HeartbeatNavbar";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  hasMinimumWords,
  MINIMUM_WORD_VALIDATION_MESSAGE,
  PHONE_INPUT_PATTERN,
  PHONE_VALIDATION_MESSAGE,
  sanitizeEmailInput,
  sanitizePhoneInput,
  validateLeadContactInfo,
} from "@/lib/leadValidation";
import {
  AUDIT_BOOKING_URL,
  AUDIT_QUESTIONS,
  buildAuditBlueprint,
  calculateAuditResult,
  submitAuditCompletion,
  submitAuditLeadInfo,
  type AuditBlueprint,
  type AuditLeadData,
  type AuditLeadInfo,
  type AuditResponse,
} from "@/lib/audit";
import { toast } from "sonner";

type AuditView = "intro" | "questions" | "processing" | "results";

const heroStats = [
  { label: "Completion Time", value: "4-5 min" },
  { label: "Outcome", value: "Priority roadmap" },
  { label: "Next Step", value: "Strategy call" },
];

const trustPoints = [
  {
    icon: Clock3,
    title: "Pinpoint revenue leaks",
    description: "We surface where lead response, follow-up, and handoff are costing you real opportunities.",
  },
  {
    icon: Workflow,
    title: "See the right system first",
    description: "Instead of guessing, you get a practical first build based on your business and current workflow maturity.",
  },
  {
    icon: ShieldCheck,
    title: "Built for real operations",
    description: "Recommendations are grounded in your team's process, tooling, and comfort level with new systems.",
  },
];

const pillarHeadlines: Record<string, string> = {
  "Strategy & Context": "Clarify the outcome.",
  "People & Culture": "Assess team readiness.",
  "Lead Revenue & Handling": "Find the conversion leak.",
  "Data & Systems": "Inspect the data foundation.",
  "Tools & Security": "Check the systems stack.",
  "Processes & Operations": "Tighten execution.",
};

const pillarShortLabels: Record<string, string> = {
  "Strategy & Context": "Strategy",
  "People & Culture": "People",
  "Lead Revenue & Handling": "Lead flow",
  "Data & Systems": "Data",
  "Tools & Security": "Tools",
  "Processes & Operations": "Process",
};

const upsertResponse = (responses: AuditResponse[], nextResponse: AuditResponse) => {
  const existingIndex = responses.findIndex((response) => response.questionId === nextResponse.questionId);

  if (existingIndex === -1) {
    return [...responses, nextResponse];
  }

  const nextResponses = [...responses];
  nextResponses[existingIndex] = nextResponse;
  return nextResponses;
};

const Audit = () => {
  const [view, setView] = useState<AuditView>("intro");
  const [leadInfo, setLeadInfo] = useState<AuditLeadInfo>({
    name: "",
    email: "",
    phone: "",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<AuditResponse[]>([]);
  const [textValue, setTextValue] = useState("");
  const [direction, setDirection] = useState(0);
  const [processingProgress, setProcessingProgress] = useState(18);
  const [leadData, setLeadData] = useState<AuditLeadData | null>(null);
  const [blueprint, setBlueprint] = useState<AuditBlueprint | null>(null);

  const question = AUDIT_QUESTIONS[currentStep];
  const progress = ((currentStep + 1) / AUDIT_QUESTIONS.length) * 100;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  useEffect(() => {
    if (view !== "questions" || !question) {
      return;
    }

    if (question.type === "text") {
      const savedResponse = responses.find((response) => response.questionId === question.id);
      setTextValue(savedResponse?.textResponse || "");
      return;
    }

    setTextValue("");
  }, [currentStep, question, responses, view]);

  useEffect(() => {
    if (view !== "processing" || !leadData || !blueprint) {
      return;
    }

    setProcessingProgress(18);

    const intervalId = window.setInterval(() => {
      setProcessingProgress((current) => (current >= 92 ? current : current + 6));
    }, 110);

    void submitAuditCompletion(leadData, blueprint);

    const timeoutId = window.setTimeout(() => {
      setProcessingProgress(100);
      setView("results");
    }, 1600);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [blueprint, leadData, view]);

  const handleLeadInfoChange = (field: keyof AuditLeadInfo, value: string) => {
    let nextValue = value;

    if (field === "email") {
      nextValue = sanitizeEmailInput(value);
    }

    if (field === "phone") {
      nextValue = sanitizePhoneInput(value);
    }

    setLeadInfo((current) => ({ ...current, [field]: nextValue }));
  };

  const startAudit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = leadInfo.name.trim();
    if (!trimmedName || !leadInfo.email.trim() || !leadInfo.phone.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!event.currentTarget.reportValidity()) {
      return;
    }

    const validatedContactInfo = validateLeadContactInfo({
      email: leadInfo.email,
      phone: leadInfo.phone,
    });

    if (!validatedContactInfo.isValid) {
      toast.error(validatedContactInfo.error);
      return;
    }

    if (!hasMinimumWords(trimmedName)) {
      toast.error(`Name: ${MINIMUM_WORD_VALIDATION_MESSAGE}`);
      return;
    }

    const trimmedLeadInfo = {
      name: trimmedName,
      email: validatedContactInfo.email,
      phone: validatedContactInfo.phone,
    };

    setLeadInfo(trimmedLeadInfo);
    setResponses([]);
    setCurrentStep(0);
    setDirection(1);
    setView("questions");
    void submitAuditLeadInfo(trimmedLeadInfo);
  };

  const finalizeAudit = (finalResponses: AuditResponse[]) => {
    const businessName =
      finalResponses.find((response) => response.questionId === "company_name")?.textResponse?.trim() || "Your Business";
    const auditResult = calculateAuditResult(finalResponses);

    const nextLeadData: AuditLeadData = {
      ...leadInfo,
      businessName,
      responses: finalResponses,
      auditResult,
    };

    setLeadData(nextLeadData);
    setBlueprint(buildAuditBlueprint(nextLeadData));
    setView("processing");
  };

  const moveForward = (nextResponses: AuditResponse[]) => {
    if (currentStep === AUDIT_QUESTIONS.length - 1) {
      finalizeAudit(nextResponses);
      return;
    }

    setDirection(1);
    setCurrentStep((current) => current + 1);
  };

  const selectOption = (optionText: string) => {
    if (!question?.options) {
      return;
    }

    const selectedOption = question.options.find((option) => option.text === optionText);
    if (!selectedOption) {
      return;
    }

    const nextResponses = upsertResponse(responses, {
      questionId: question.id,
      selectedOption,
    });

    setResponses(nextResponses);

    window.setTimeout(() => {
      moveForward(nextResponses);
    }, 180);
  };

  const submitTextStep = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedValue = textValue.trim();
    if (!trimmedValue) {
      return;
    }

    if (!hasMinimumWords(trimmedValue)) {
      toast.error(MINIMUM_WORD_VALIDATION_MESSAGE);
      return;
    }

    const nextResponses = upsertResponse(responses, {
      questionId: question.id,
      textResponse: trimmedValue,
    });

    setResponses(nextResponses);
    moveForward(nextResponses);
  };

  const goBack = () => {
    if (currentStep === 0) {
      setView("intro");
      return;
    }

    setDirection(-1);
    setCurrentStep((current) => current - 1);
  };

  const restartAudit = () => {
    setView("intro");
    setLeadInfo({ name: "", email: "", phone: "" });
    setCurrentStep(0);
    setResponses([]);
    setTextValue("");
    setLeadData(null);
    setBlueprint(null);
    setProcessingProgress(18);
  };

  const chartData = leadData
    ? Object.entries(leadData.auditResult.pillarPercentages).map(([name, score]) => ({
        name: pillarShortLabels[name] || name,
        score,
      }))
    : [];

  return (
    <>
      <SEOHead
        title="AI Revenue Assessment | Heartbeat of South Bay"
        description="Take the Heartbeat of South Bay AI revenue assessment to uncover where leads, follow-up, and operations are leaking revenue."
        ogTitle="AI Revenue Assessment | Heartbeat of South Bay"
        ogDescription="Get a practical assessment of your lead handling, systems, and automation readiness."
        canonicalUrl={`${window.location.origin}/assessment`}
      />
      <HeartbeatNavbar forceSolid={view !== "intro"} />

      <main className="bg-background min-h-screen">
        {view === "intro" && (
          <>
            <section className="relative overflow-hidden bg-navy pt-32 pb-20">
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
              <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(hsl(var(--navy-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--navy-foreground)) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />

              <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  <div className="max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-navy-foreground/90">
                      <Sparkles className="h-4 w-4 text-primary" />
                      AI Revenue Assessment
                    </span>
                    <h1 className="mt-6 text-4xl font-extrabold leading-tight text-navy-foreground sm:text-5xl md:text-6xl">
                      You're getting leads. But not all of them are turning into business.
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-foreground/70">
                      Find where they're slipping through the cracks. Answer a few quick questions and get a clear breakdown of
                      your response speed, follow-up gaps, and the fastest way to fix them.
                    </p>

                    <div className="mt-10 grid gap-4 sm:grid-cols-3">
                      {heroStats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-2xl border border-navy-foreground/10 bg-white/5 p-5 backdrop-blur"
                        >
                          <p className="text-xs uppercase tracking-[0.2em] text-navy-foreground/65">{stat.label}</p>
                          <p className="mt-2 text-xl font-semibold text-navy-foreground">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
                  >
                    <div className="mb-8">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Start with your details</p>
                      <h2 className="mt-3 text-2xl font-bold text-navy-foreground">Begin your assessment</h2>
                      <p className="mt-2 text-sm leading-relaxed text-navy-foreground/75">
                        Your details keep the assessment personalized and the follow-up tied to the right business.
                      </p>
                    </div>

                    <form onSubmit={startAudit} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="audit_name" className="text-navy-foreground/90">
                          Full name
                        </Label>
                        <Input
                          id="audit_name"
                          required
                          minLength={2}
                          maxLength={100}
                          autoComplete="name"
                          value={leadInfo.name}
                          onChange={(event) => handleLeadInfoChange("name", event.target.value)}
                          placeholder="Your full name"
                          className="h-12 rounded-xl border-white/25 bg-white/10 text-navy-foreground placeholder:text-navy-foreground/55"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="audit_email" className="text-navy-foreground/90">
                          Email
                        </Label>
                        <Input
                          id="audit_email"
                          type="email"
                          required
                          maxLength={255}
                          autoComplete="email"
                          inputMode="email"
                          value={leadInfo.email}
                          onChange={(event) => handleLeadInfoChange("email", event.target.value)}
                          placeholder="you@company.com"
                          className="h-12 rounded-xl border-white/25 bg-white/10 text-navy-foreground placeholder:text-navy-foreground/55"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="audit_phone" className="text-navy-foreground/90">
                          Phone
                        </Label>
                        <Input
                          id="audit_phone"
                          type="tel"
                          required
                          maxLength={20}
                          autoComplete="tel"
                          inputMode="tel"
                          pattern={PHONE_INPUT_PATTERN}
                          title={PHONE_VALIDATION_MESSAGE}
                          value={leadInfo.phone}
                          onChange={(event) => handleLeadInfoChange("phone", event.target.value)}
                          placeholder="(555) 123-4567"
                          className="h-12 rounded-xl border-white/25 bg-white/10 text-navy-foreground placeholder:text-navy-foreground/55"
                        />
                      </div>

                      <Button type="submit" size="lg" className="mt-2 h-14 w-full rounded-xl text-base">
                        Start the assessment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </motion.div>
                </div>
              </div>
            </section>

            <section className="py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">What you get</p>
                  <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
                    A cleaner starting point than a generic quiz
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    The questions are tuned around lead conversion, systems, and operational bottlenecks, so the recommendations point toward a real implementation path.
                  </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                  {trustPoints.map((point) => (
                    <div
                      key={point.title}
                      className="rounded-3xl border border-border/70 bg-card p-8 shadow-elegant transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                        <point.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mt-6 text-xl font-semibold text-foreground">{point.title}</h3>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{point.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {view === "questions" && (
          <section className="relative overflow-hidden bg-background pt-28 pb-20">
            <div className="absolute top-0 left-0 h-[420px] w-full bg-gradient-to-b from-primary/[0.06] to-transparent" />
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                <div className="rounded-[2rem] bg-navy p-8 text-navy-foreground shadow-2xl">
                  <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    <Gauge className="h-4 w-4" />
                    {question.pillar}
                  </p>

                  <h2 className="mt-8 text-3xl font-bold sm:text-4xl">{pillarHeadlines[question.pillar] || "Assessment in progress."}</h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-navy-foreground/80">
                    Step {currentStep + 1} of {AUDIT_QUESTIONS.length}. We are mapping where your current workflow is helping
                    and where the next system should remove friction.
                  </p>

                  <div className="mt-10">
                    <div className="flex items-center justify-between text-sm text-navy-foreground/75">
                      <span>Progress</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/10">
                      <motion.div
                        className="h-2 rounded-full bg-primary"
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.35 }}
                      />
                    </div>
                  </div>

                  <div className="mt-12 space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                    <div className="flex items-start gap-3">
                      <Target className="mt-0.5 h-5 w-5 text-primary" />
                      <p className="text-sm leading-relaxed text-navy-foreground/85">
                        Focus on how things actually work today, not the ideal version.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Bot className="mt-0.5 h-5 w-5 text-primary" />
                      <p className="text-sm leading-relaxed text-navy-foreground/85">
                        The goal is to reveal the highest-leverage automation, not to score perfection.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Layers3 className="mt-0.5 h-5 w-5 text-primary" />
                      <p className="text-sm leading-relaxed text-navy-foreground/85">
                        Your answers feed the recommendations and the booking handoff on the results screen.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <motion.div
                    key={question.id}
                    custom={direction}
                    initial={{ opacity: 0, y: direction > 0 ? 24 : -24, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="rounded-[2rem] border border-border/80 bg-card p-6 shadow-elegant sm:p-10"
                  >
                      <div className="mb-8 flex items-center justify-between gap-4">
                        <div className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                          Question {currentStep + 1}
                        </div>
                        <p className="text-sm text-muted-foreground">{question.pillar}</p>
                      </div>

                      <h3 className="text-2xl font-bold leading-snug text-foreground sm:text-3xl">{question.question}</h3>

                      <div className="mt-8">
                        {question.type === "scored" && (
                          <div className="space-y-4">
                            {question.options?.map((option) => {
                              const isSelected =
                                responses.find((response) => response.questionId === question.id)?.selectedOption?.text ===
                                option.text;

                              return (
                                <button
                                  key={option.text}
                                  type="button"
                                  onClick={() => selectOption(option.text)}
                                  className={`group flex w-full items-start justify-between rounded-3xl border px-5 py-5 text-left transition-all duration-200 ${
                                    isSelected
                                      ? "border-primary bg-primary/10 shadow-[0_0_0_1px_hsl(var(--primary)/0.2)]"
                                      : "border-border bg-background hover:border-primary/40 hover:bg-primary/[0.04]"
                                  }`}
                                >
                                  <span className="max-w-[92%] pr-6 text-base leading-relaxed text-foreground">{option.text}</span>
                                  <span
                                    className={`mt-1 flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${
                                      isSelected
                                        ? "border-primary bg-primary text-primary-foreground"
                                        : "border-border bg-card text-muted-foreground group-hover:border-primary/40"
                                    }`}
                                  >
                                    <CheckCircle2 className="h-4 w-4" />
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {question.type === "text" && (
                          <form onSubmit={submitTextStep} className="space-y-6">
                            <Textarea
                              required
                              autoFocus
                              minLength={2}
                              value={textValue}
                              onChange={(event) => setTextValue(event.target.value)}
                              placeholder={question.placeholder}
                              className="min-h-[180px] rounded-3xl border-border bg-background px-5 py-4 text-base leading-relaxed text-foreground placeholder:text-muted-foreground/70"
                            />

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                              <p className="text-sm text-muted-foreground">
                                The more specific you are, the more useful the recommendation becomes.
                              </p>
                              <Button type="submit" size="lg" className="rounded-xl px-8">
                                Continue
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </form>
                        )}
                      </div>
                  </motion.div>

                  <div className="mt-6 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={goBack}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      {currentStep === 0 ? "Back to intro" : "Previous question"}
                    </button>
                    <p className="text-sm text-muted-foreground">
                      {AUDIT_QUESTIONS.length - currentStep - 1} questions remaining
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {view === "processing" && (
          <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy px-4 pt-20">
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
            <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />

            <div className="relative z-10 w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center text-navy-foreground backdrop-blur-xl sm:p-10">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2.2, ease: "linear", repeat: Infinity }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary border-t-transparent"
                />
              </div>
              <h2 className="mt-8 text-3xl font-bold">Mapping your assessment results...</h2>
              <p className="mt-3 text-base leading-relaxed text-navy-foreground/80">
                We are turning your answers into a recommended rollout, a priority order, and the booking handoff.
              </p>

              <div className="mx-auto mt-10 max-w-md text-left">
                <div className="mb-3 flex items-center justify-between text-sm text-navy-foreground/80">
                  <span>Processing</span>
                  <span>{processingProgress}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <motion.div
                    className="h-2 rounded-full bg-primary"
                    animate={{ width: `${processingProgress}%` }}
                    transition={{ duration: 0.25 }}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {view === "results" && leadData && blueprint && (
          <>
            <section className="relative overflow-hidden bg-navy pt-32 pb-20">
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
              <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
              <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl">
                  <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-3xl">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Assessment complete</p>
                      <h1 className="mt-4 text-4xl font-extrabold leading-tight text-navy-foreground sm:text-5xl">
                        {blueprint.headline}
                      </h1>
                      <p className="mt-5 text-lg leading-relaxed text-navy-foreground/85">{blueprint.summary}</p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:min-w-[320px]">
                      <p className="text-sm uppercase tracking-[0.18em] text-navy-foreground/65">Readiness score</p>
                      <div className="mt-3 flex items-end gap-3">
                        <span className="text-5xl font-extrabold text-navy-foreground">
                          {leadData.auditResult.readinessPercentage}%
                        </span>
                        <span className="mb-1 rounded-full bg-primary/15 px-3 py-1 text-sm font-semibold text-primary">
                          {leadData.auditResult.level}
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-navy-foreground/80">
                        {leadData.auditResult.recommendation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-elegant sm:p-8">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                        <Gauge className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-foreground">Readiness by pillar</h2>
                        <p className="text-sm text-muted-foreground">Where the strongest gaps and strengths show up.</p>
                      </div>
                    </div>

                    <div className="h-[340px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData} layout="vertical" margin={{ top: 0, right: 16, bottom: 0, left: 16 }}>
                          <CartesianGrid strokeDasharray="4 4" horizontal={false} stroke="hsl(var(--border))" />
                          <XAxis type="number" domain={[0, 100]} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                          <YAxis
                            dataKey="name"
                            type="category"
                            axisLine={false}
                            tickLine={false}
                            width={80}
                            tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
                          />
                          <Tooltip
                            formatter={(value: number) => [`${value}%`, "Readiness"]}
                            cursor={{ fill: "hsl(var(--primary) / 0.08)" }}
                            contentStyle={{
                              backgroundColor: "hsl(var(--card))",
                              borderColor: "hsl(var(--border))",
                              borderRadius: "16px",
                              color: "hsl(var(--foreground))",
                            }}
                          />
                          <Bar dataKey="score" radius={[0, 10, 10, 0]} barSize={22}>
                            {chartData.map((entry) => (
                              <Cell
                                key={entry.name}
                                fill={
                                  entry.score >= 75
                                    ? "hsl(var(--primary))"
                                    : entry.score >= 50
                                      ? "hsl(205 73% 58%)"
                                      : "hsl(207 45% 72%)"
                                }
                              />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-elegant sm:p-8">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                        <Target className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-foreground">What stands out</h2>
                        <p className="text-sm text-muted-foreground">The highest-signal findings based on your answers.</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {blueprint.keyFindings.map((finding) => (
                        <div key={finding} className="rounded-3xl border border-border/70 bg-background p-5">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                            <p className="leading-relaxed text-foreground/85">{finding}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-navy py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Recommended rollout</p>
                  <h2 className="mt-3 text-3xl font-bold text-navy-foreground sm:text-4xl">
                    A practical 90-day implementation sequence
                  </h2>
                  <p className="mt-4 text-lg text-navy-foreground/80">
                    This mirrors the source form's intent, but it now lives inside the main site and uses the site's visual system.
                  </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                  {blueprint.actionPlan.map((step, index) => (
                    <div
                      key={step.title}
                      className="rounded-[2rem] border border-navy-foreground/10 bg-navy-light/60 p-8 backdrop-blur-sm"
                    >
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-lg font-bold text-primary">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-navy-foreground">{step.title}</h3>
                      <p className="mt-4 leading-relaxed text-navy-foreground/85">{step.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-elegant sm:p-8">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                        <Bot className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-foreground">Systems to start with</h2>
                        <p className="text-sm text-muted-foreground">The first systems most likely to create movement.</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {blueprint.recommendedSystems.map((system) => (
                        <div key={system.title} className="rounded-3xl border border-border/70 bg-background p-5">
                          <h3 className="text-lg font-semibold text-foreground">{system.title}</h3>
                          <p className="mt-3 leading-relaxed text-muted-foreground">{system.body}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 rounded-3xl border border-primary/15 bg-primary/[0.06] p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Best next move</p>
                      <p className="mt-3 leading-relaxed text-foreground/85">
                        Book the strategy session while this context is fresh. We'll use your answers to decide what gets built
                        first and how ambitious the rollout should be.
                      </p>
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Button asChild size="lg" className="rounded-xl">
                        <a href={AUDIT_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                          Book the assessment review
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="rounded-xl">
                        <Link to="/contact">Prefer to talk first</Link>
                      </Button>
                    </div>

                    <button
                      type="button"
                      onClick={restartAudit}
                      className="mt-5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Start over
                    </button>
                  </div>

                  <div className="rounded-[2rem] border border-border/70 bg-card p-4 shadow-elegant sm:p-5">
                    <div className="rounded-[1.5rem] border border-border/70 bg-background p-5">
                      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h2 className="text-xl font-semibold text-foreground">Schedule your strategy session</h2>
                          <p className="text-sm text-muted-foreground">
                            Use the calendar below to book the next step from this assessment.
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                          <CalendarCheck2 className="h-4 w-4" />
                          Next step
                        </span>
                      </div>

                      <div className="overflow-hidden rounded-[1.5rem] border border-border/70 bg-white">
                        <iframe
                          src={`${AUDIT_BOOKING_URL}?embed=true`}
                          title="Heartbeat assessment booking"
                          className="min-h-[720px] w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <HeartbeatFooter />
    </>
  );
};

export default Audit;
