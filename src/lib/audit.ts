export const AUDIT_BOOKING_URL = "https://cal.com/hbosb/heartbeat-audit";

export const AUDIT_PILLARS = {
  STRATEGY: "Strategy & Context",
  DATA: "Data & Systems",
  PROCESSES: "Processes & Operations",
  PEOPLE: "People & Culture",
  TOOLS: "Tools & Security",
  LEAD_HANDLING: "Lead Revenue & Handling",
} as const;

export type AuditPillar = (typeof AUDIT_PILLARS)[keyof typeof AUDIT_PILLARS];
export type AuditQuestionType = "scored" | "text";

export interface AuditQuestionOption {
  text: string;
  score: number;
}

export interface AuditQuestion {
  id: string;
  pillar: AuditPillar;
  type: AuditQuestionType;
  question: string;
  options?: AuditQuestionOption[];
  placeholder?: string;
}

export interface AuditResponse {
  questionId: string;
  selectedOption?: AuditQuestionOption;
  textResponse?: string;
}

export interface AuditLeadInfo {
  name: string;
  email: string;
  phone: string;
}

export interface AuditResult {
  totalScore: number;
  readinessPercentage: number;
  pillarScores: Record<string, number>;
  pillarMaxScores: Record<string, number>;
  pillarPercentages: Record<string, number>;
  level: "Low" | "Medium" | "High";
  recommendation: string;
}

export interface AuditLeadData extends AuditLeadInfo {
  businessName: string;
  responses: AuditResponse[];
  auditResult: AuditResult;
}

export interface AuditInsightSection {
  title: string;
  body: string;
}

export interface AuditBlueprint {
  headline: string;
  summary: string;
  keyFindings: string[];
  actionPlan: AuditInsightSection[];
  recommendedSystems: AuditInsightSection[];
}

export const AUDIT_QUESTIONS: AuditQuestion[] = [
  {
    id: "company_name",
    pillar: AUDIT_PILLARS.STRATEGY,
    type: "text",
    question: "What's the name of your company?",
    placeholder: "e.g., Acme Corporation",
  },
  {
    id: "q1",
    pillar: AUDIT_PILLARS.STRATEGY,
    type: "text",
    question: "Give us the quick version of your business - who you serve and what you offer.",
    placeholder: "e.g., We run a marketing agency for HVAC companies in the Pacific Northwest...",
  },
  {
    id: "q2",
    pillar: AUDIT_PILLARS.PEOPLE,
    type: "scored",
    question: "Who's involved day-to-day, and how comfortable are they with new tools?",
    options: [
      { text: "Solo (just me)", score: 5 },
      { text: "Team, mostly comfortable with tools", score: 4 },
      { text: "Team, mixed comfort with tools", score: 3 },
      { text: "Team is mostly resistant to new tools", score: 2 },
    ],
  },
  {
    id: "q3",
    pillar: AUDIT_PILLARS.LEAD_HANDLING,
    type: "scored",
    question: "Approximately how many new inquiries or leads does your business receive each month?",
    options: [
      { text: "0-10 leads", score: 2 },
      { text: "10-50 leads", score: 3 },
      { text: "50-100 leads", score: 4 },
      { text: "100+ leads", score: 5 },
    ],
  },
  {
    id: "q4",
    pillar: AUDIT_PILLARS.DATA,
    type: "scored",
    question: "Where does your customer and lead data primarily live today?",
    options: [
      { text: "Inbox/DMs (email, Instagram, etc.)", score: 1 },
      { text: "Spreadsheets (Google Sheets/Excel)", score: 2 },
      { text: "Paper/notes", score: 1 },
      { text: "Multiple places - not centralized", score: 2 },
      { text: "Centralized CRM (HubSpot, Salesforce, etc.)", score: 5 },
    ],
  },
  {
    id: "q5",
    pillar: AUDIT_PILLARS.TOOLS,
    type: "scored",
    question: "How automated is your current lead follow-up and customer communication?",
    options: [
      { text: "None - everything is 100% manual", score: 1 },
      { text: "Simple built-in app notifications only", score: 2 },
      { text: "A few Zapier/Make connections for small tasks", score: 3 },
      { text: "Several key workflows are automated", score: 4 },
      { text: "Automation is core to our operations", score: 5 },
    ],
  },
  {
    id: "q6",
    pillar: AUDIT_PILLARS.PROCESSES,
    type: "scored",
    question: "How consistent is your team in following the same process for handling leads or customers?",
    options: [
      { text: "No consistent process - everyone handles it differently", score: 1 },
      { text: "We have rough steps but the team doesn't always follow them", score: 2 },
      { text: "Some consistency, but it depends on who's handling it", score: 3 },
      { text: "Mostly consistent - team generally follows the same process", score: 4 },
      { text: "Fully consistent - same process every time, for every lead", score: 5 },
    ],
  },
  {
    id: "q7",
    pillar: AUDIT_PILLARS.LEAD_HANDLING,
    type: "scored",
    question: "How often do new inquiries go without a response or proper follow-up?",
    options: [
      { text: "Very often", score: 1 },
      { text: "Occasionally", score: 2 },
      { text: "Rarely", score: 4 },
      { text: "Never - all leads are responded to", score: 5 },
    ],
  },
  {
    id: "q8",
    pillar: AUDIT_PILLARS.LEAD_HANDLING,
    type: "scored",
    question: "How quickly does your business typically respond to new leads?",
    options: [
      { text: "Next day or later", score: 1 },
      { text: "Same day", score: 3 },
      { text: "Within a few hours", score: 4 },
      { text: "Immediately (within minutes)", score: 5 },
    ],
  },
  {
    id: "q9",
    pillar: AUDIT_PILLARS.LEAD_HANDLING,
    type: "scored",
    question: "What typically happens after someone contacts your business?",
    options: [
      { text: "We respond manually when available", score: 1 },
      { text: "We respond, but timing is inconsistent", score: 2 },
      { text: "We have a basic follow-up process in place", score: 3 },
      { text: "Leads are automatically responded to immediately", score: 5 },
    ],
  },
  {
    id: "q10",
    pillar: AUDIT_PILLARS.LEAD_HANDLING,
    type: "scored",
    question: "How many times do you typically follow up with a lead before moving on?",
    options: [
      { text: "We don't have a structured follow-up process", score: 1 },
      { text: "1 time", score: 2 },
      { text: "2-3 times", score: 3 },
      { text: "4-5 times", score: 5 },
    ],
  },
  {
    id: "q11",
    pillar: AUDIT_PILLARS.PEOPLE,
    type: "scored",
    question: "How comfortable are you or your team using AI tools in your daily workflow?",
    options: [
      { text: "Never used AI tools", score: 1 },
      { text: "Tried once or twice - didn't stick", score: 2 },
      { text: "Use occasionally for drafting or ideas", score: 3 },
      { text: "Use weekly for specific workflows", score: 4 },
      { text: "AI is integrated into our daily tools", score: 5 },
    ],
  },
  {
    id: "q12",
    pillar: AUDIT_PILLARS.TOOLS,
    type: "scored",
    question: "Are there strict industry rules, privacy requirements, or tool restrictions?",
    options: [
      { text: "Extreme regulations (HIPAA/Fin) & strict IT", score: 1 },
      { text: "Some privacy rules but no clear guidance", score: 2 },
      { text: "Moderate rules, we have a general idea", score: 3 },
      { text: "Minimal constraints, mostly flexible", score: 4 },
      { text: "No restrictions, we can use any tools", score: 5 },
    ],
  },
  {
    id: "q13",
    pillar: AUDIT_PILLARS.STRATEGY,
    type: "text",
    question: "In the next 90 days, what would need to happen for this to feel like a successful investment for your business?",
    placeholder: "e.g., Every lead responded to within 5 minutes, 20% more booked calls...",
  },
  {
    id: "q14",
    pillar: AUDIT_PILLARS.STRATEGY,
    type: "scored",
    question: "If every lead was responded to immediately and followed up consistently, what impact would that have on your business?",
    options: [
      { text: "Small improvement", score: 2 },
      { text: "Moderate improvement", score: 3 },
      { text: "Significant growth", score: 4 },
      { text: "Game-changing", score: 5 },
    ],
  },
  {
    id: "q15",
    pillar: AUDIT_PILLARS.STRATEGY,
    type: "scored",
    question: "How would you prefer to get started?",
    options: [
      { text: "Start with one high-impact system to generate results quickly", score: 4 },
      { text: "Build a more complete system across multiple areas", score: 5 },
      { text: "Not sure - recommend what would have the biggest impact", score: 3 },
    ],
  },
  {
    id: "q16",
    pillar: AUDIT_PILLARS.STRATEGY,
    type: "scored",
    question: "Would you like a breakdown of what systems your business needs and how to implement them?",
    options: [
      { text: "Yes - show me my recommendations", score: 5 },
      { text: "Yes - I'd like to discuss this with your team", score: 4 },
      { text: "Not right now", score: 2 },
    ],
  },
];

const DEFAULT_WEBHOOK_URL =
  "https://n8n.srv1035849.hstgr.cloud/webhook/7aec9fc3-a20d-446d-91b4-531f1687495e";

const getWebhookUrl = () => {
  const envUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;

  if (typeof envUrl === "string" && envUrl.trim()) {
    return envUrl;
  }

  return DEFAULT_WEBHOOK_URL;
};

const getResponse = (responses: AuditResponse[], questionId: string) =>
  responses.find((response) => response.questionId === questionId);

const getAnswerText = (responses: AuditResponse[], questionId: string) => {
  const response = getResponse(responses, questionId);

  if (!response) {
    return "";
  }

  return response.textResponse?.trim() || response.selectedOption?.text || "";
};

const getAnswerScore = (responses: AuditResponse[], questionId: string) =>
  getResponse(responses, questionId)?.selectedOption?.score ?? 0;

export const calculateAuditResult = (responses: AuditResponse[]): AuditResult => {
  const scoredQuestions = AUDIT_QUESTIONS.filter((question) => question.type === "scored");
  const totalScore = scoredQuestions.reduce((sum, question) => {
    const score = getResponse(responses, question.id)?.selectedOption?.score ?? 0;
    return sum + score;
  }, 0);

  const maxPossible = scoredQuestions.reduce((sum, question) => {
    const maxQuestionScore = Math.max(...(question.options?.map((option) => option.score) ?? [0]));
    return sum + maxQuestionScore;
  }, 0);

  const pillarScores: Record<string, number> = {};
  const pillarMaxScores: Record<string, number> = {};

  scoredQuestions.forEach((question) => {
    const score = getResponse(responses, question.id)?.selectedOption?.score ?? 0;
    const maxQuestionScore = Math.max(...(question.options?.map((option) => option.score) ?? [0]));

    pillarScores[question.pillar] = (pillarScores[question.pillar] || 0) + score;
    pillarMaxScores[question.pillar] = (pillarMaxScores[question.pillar] || 0) + maxQuestionScore;
  });

  const pillarPercentages = Object.fromEntries(
    Object.entries(pillarScores).map(([pillar, score]) => [
      pillar,
      Math.round((score / (pillarMaxScores[pillar] || 1)) * 100),
    ]),
  );

  const readinessPercentage = maxPossible ? Math.round((totalScore / maxPossible) * 100) : 0;

  let level: AuditResult["level"] = "Low";
  if (readinessPercentage >= 70) {
    level = "High";
  } else if (readinessPercentage >= 40) {
    level = "Medium";
  }

  const missedLeadScore = getAnswerScore(responses, "q7");
  const responseSpeedScore = getAnswerScore(responses, "q8");
  const followUpScore = getAnswerScore(responses, "q10");

  let recommendation = "Your audit points to a strong case for tightening response speed and follow-up.";

  if (missedLeadScore <= 2 || responseSpeedScore <= 3) {
    recommendation =
      "Your biggest opportunity is an instant-response system that captures every inquiry and starts follow-up automatically.";
  } else if (followUpScore <= 2) {
    recommendation =
      "Your next highest-leverage move is a structured follow-up engine so warm leads do not go cold after first contact.";
  } else if (level === "High") {
    recommendation =
      "You already have a strong foundation. The best next move is layering smarter automation and reporting on top of what is working.";
  }

  return {
    totalScore,
    readinessPercentage,
    pillarScores,
    pillarMaxScores,
    pillarPercentages,
    level,
    recommendation,
  };
};

export const buildAuditBlueprint = (leadData: AuditLeadData): AuditBlueprint => {
  const businessName = leadData.businessName || "your business";
  const businessSummary = getAnswerText(leadData.responses, "q1");
  const successMetric = getAnswerText(leadData.responses, "q13");
  const impactLevel = getAnswerText(leadData.responses, "q14");
  const startingPreference = getAnswerText(leadData.responses, "q15");
  const dataLocation = getAnswerText(leadData.responses, "q4");
  const automationLevel = getAnswerText(leadData.responses, "q5");
  const responseSpeed = getAnswerText(leadData.responses, "q8");
  const missedLeads = getAnswerText(leadData.responses, "q7");
  const followUpDepth = getAnswerText(leadData.responses, "q10");
  const aiComfort = getAnswerText(leadData.responses, "q11");
  const processConsistency = getAnswerText(leadData.responses, "q6");

  const leadHandlingPercent = leadData.auditResult.pillarPercentages[AUDIT_PILLARS.LEAD_HANDLING] ?? 0;
  const dataPercent = leadData.auditResult.pillarPercentages[AUDIT_PILLARS.DATA] ?? 0;
  const toolsPercent = leadData.auditResult.pillarPercentages[AUDIT_PILLARS.TOOLS] ?? 0;

  const primaryLeak =
    leadHandlingPercent < 65
      ? `Lead handling is the clearest revenue leak. New inquiries are being worked at "${responseSpeed || "an inconsistent pace"}" and follow-up is currently "${followUpDepth || "not clearly defined"}".`
      : `Your operational foundation is decent, but there is still room to tighten response speed, automation depth, and reporting so ${businessName} converts more of the demand it already has.`;

  const dataConstraint =
    dataPercent < 60
      ? `Customer information currently lives in "${dataLocation || "multiple disconnected places"}", which makes automation harder and limits visibility across the pipeline.`
      : `Your data foundation is workable, which means the next gain likely comes from better orchestration and stronger automations.`;

  const rolloutGuidance =
    toolsPercent < 60
      ? `Because your current automation stack is "${automationLevel || "still fairly manual"}" and team AI comfort is "${aiComfort || "still developing"}", the safest rollout is a human-in-the-loop system that improves speed without overwhelming the team.`
      : `Because your team already has some comfort with automation, you can move faster into multi-step workflows and reporting.`;

  const keyFindings = [
    primaryLeak,
    dataConstraint,
    processConsistency
      ? `Operational consistency today is "${processConsistency}". That tells us the implementation should reinforce one repeatable workflow rather than add more manual choices.`
      : "Consistency across the team will matter just as much as the tooling itself.",
  ];

  const actionPlan: AuditInsightSection[] = [
    {
      title: "Phase 1: Capture and respond immediately",
      body:
        leadHandlingPercent < 65
          ? `Install an intake system that responds within minutes, routes leads to the right place, and starts follow-up automatically. This directly addresses the missed-response pattern you reported as "${missedLeads || "inconsistent"}".`
          : `Tighten the first-touch experience so every lead gets a branded confirmation, qualification step, and clear path to booking without delay.`,
    },
    {
      title: "Phase 2: Build a follow-up engine",
      body:
        `Turn follow-up into a system instead of a memory test. Based on your current depth of "${followUpDepth || "limited follow-up"}", the goal is a repeatable multi-touch sequence across text and email that keeps opportunities warm until they book or opt out.`,
    },
    {
      title: "Phase 3: Create pipeline visibility",
      body:
        successMetric
          ? `Set the system up to track progress against your stated 90-day win: "${successMetric}". Once the workflow is running, reporting should show exactly how many leads were captured, contacted, nurtured, and converted.`
          : `Add simple reporting so you can see lead volume, response speed, booked calls, and conversion trends in one place.`,
    },
  ];

  const recommendedSystems: AuditInsightSection[] = [];

  recommendedSystems.push({
    title: "AI lead response workflow",
    body:
      `This is the highest-leverage fit for ${businessName}. It shortens response time, closes the gap between inquiry and action, and creates a better first impression without adding headcount.`,
  });

  if (dataPercent < 60) {
    recommendedSystems.push({
      title: "Centralized CRM and intake cleanup",
      body:
        `Move lead and customer data out of "${dataLocation || "scattered sources"}" into one clear operating system so automations have a reliable source of truth.`,
    });
  }

  if (toolsPercent < 70) {
    recommendedSystems.push({
      title: "Human-in-the-loop follow-up automation",
      body:
        `Because your current automation maturity is "${automationLevel || "still developing"}", start with workflows that automate speed and consistency while keeping approvals or review steps where needed.`,
    });
  }

  if (startingPreference.includes("complete system")) {
    recommendedSystems.push({
      title: "Phased AI operating system roadmap",
      body:
        `You signaled interest in a broader rollout. The best path is a staged build that starts with lead handling, then expands into reporting, reactivation, and customer communication.`,
    });
  }

  return {
    headline: `${leadData.auditResult.readinessPercentage}% readiness for ${businessName}`,
    summary:
      businessSummary
        ? `${businessName} serves ${businessSummary.toLowerCase()} The strongest opportunity right now is to turn incoming demand into a more predictable system for response, follow-up, and conversion.`
        : `${businessName} has a clear opportunity to improve response speed, follow-up consistency, and visibility across the revenue pipeline.`,
    keyFindings,
    actionPlan,
    recommendedSystems,
  };
};

const enrichResponses = (responses: AuditResponse[]) =>
  responses.map((response) => {
    const question = AUDIT_QUESTIONS.find((item) => item.id === response.questionId);

    return {
      questionId: response.questionId,
      question: question?.question ?? response.questionId,
      pillar: question?.pillar ?? null,
      answer: response.textResponse ?? response.selectedOption?.text ?? null,
      score: response.selectedOption?.score ?? null,
    };
  });

const postToWebhook = async (payload: unknown) => {
  try {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 5000);

    const response = await fetch(getWebhookUrl(), {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    window.clearTimeout(timeoutId);

    return response.ok;
  } catch {
    return false;
  }
};

export const submitAuditLeadInfo = async (leadInfo: AuditLeadInfo) =>
  postToWebhook({
    event: "lead_start",
    timestamp: new Date().toISOString(),
    leadInfo,
  });

export const submitAuditCompletion = async (leadData: AuditLeadData, blueprint: AuditBlueprint) =>
  postToWebhook({
    event: "audit_complete",
    timestamp: new Date().toISOString(),
    name: leadData.name,
    email: leadData.email,
    phone: leadData.phone,
    businessName: leadData.businessName,
    score: leadData.auditResult.readinessPercentage,
    level: leadData.auditResult.level,
    recommendation: leadData.auditResult.recommendation,
    pillarScores: leadData.auditResult.pillarScores,
    pillarPercentages: leadData.auditResult.pillarPercentages,
    blueprint,
    responses: enrichResponses(leadData.responses),
    leadData,
  });
