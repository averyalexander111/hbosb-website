import React from "react";
import { Link } from "react-router-dom";
import { Inbox, MessageSquare, Bell, ClipboardList, ArrowRight } from "lucide-react";

const SampleTag = () => (
  <span className="inline-block rounded-full border border-navy-foreground/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-navy-foreground/60">
    Sample
  </span>
);

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-wrap justify-between gap-x-3 gap-y-0.5 text-xs">
    <dt className="text-navy-foreground/60">{label}</dt>
    <dd className="font-medium text-navy-foreground">{value}</dd>
  </div>
);

const steps = [
  {
    icon: Inbox,
    title: "Inquiry received",
    desc: "A website request enters the approved intake.",
    sample: (
      <>
        <p className="text-xs font-semibold text-navy-foreground">Jordan · Sample customer</p>
        <p className="mt-1 text-xs text-navy-foreground/75 leading-relaxed">
          “We have water damage in our kitchen and would like someone to take a look.”
        </p>
      </>
    ),
  },
  {
    icon: MessageSquare,
    title: "Acknowledgment sent",
    desc: "An approved message lets the customer know the request arrived.",
    sample: (
      <p className="text-xs text-navy-foreground/75 leading-relaxed">
        “Thanks for reaching out. Your request has been received. Our team will review it and follow up.”
      </p>
    ),
  },
  {
    icon: Bell,
    title: "Team notified",
    desc: "The right people get an internal alert with the key details.",
    sample: (
      <dl className="space-y-1.5">
        <Row label="Inquiry type" value="Water damage" />
        <Row label="Assigned to" value="Office team" />
        <Row label="Next action" value="Review and contact" />
      </dl>
    ),
  },
  {
    icon: ClipboardList,
    title: "Opportunity tracked",
    desc: "The lead is recorded so nothing waits without an owner.",
    sample: (
      <dl className="space-y-1.5">
        <Row label="Status" value="Follow-up needed" />
        <Row label="Owner" value="Office team" />
        <Row label="Next action" value="Contact the customer" />
      </dl>
    ),
  },
];

const SystemWalkthroughSection = () => (
  <section className="py-20 bg-background" aria-labelledby="walkthrough-heading">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary mb-6 border border-primary/20">
          Illustrative System Walkthrough
        </p>
        <h2 id="walkthrough-heading" className="section-title text-foreground font-display">
          See How an Inquiry Moves Through the System
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Using a sample restoration-business website inquiry, here is one example of how approved intake, acknowledgment, internal notification, and lead tracking can connect.
        </p>
      </div>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {steps.map((s, i) => (
          <li key={s.title} className="flex flex-col rounded-2xl bg-navy p-6 border border-navy-foreground/10">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20">
                <s.icon className="h-5 w-5 text-signal" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-signal">Step {i + 1}</span>
            </div>
            <h3 className="text-lg font-semibold text-navy-foreground">{s.title}</h3>
            <p className="mt-1.5 text-sm text-navy-foreground/70 leading-relaxed">{s.desc}</p>
            <div className="mt-5 rounded-xl border border-navy-foreground/15 bg-navy-light p-4">
              <div className="mb-2.5"><SampleTag /></div>
              {s.sample}
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Sample business and customer data. Actual workflows depend on your approved scope and connected tools.
      </p>
      <p className="mt-6 text-center text-base font-medium text-foreground">
        Your team handles the conversations, service decisions, and customer care.
      </p>

      <div className="mt-10 text-center">
        <Link
          to="/assessment"
          className="inline-flex max-w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 sm:px-10 py-4 text-base font-semibold text-primary-foreground text-center border-glow-spin hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-[box-shadow] duration-300"
        >
          Start Your AI Revenue System Assessment
          <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />
        </Link>
      </div>
    </div>
  </section>
);

export default SystemWalkthroughSection;
