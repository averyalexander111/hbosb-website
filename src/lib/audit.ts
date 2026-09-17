export const AUDIT_BOOKING_URL = "https://cal.com/hbosb/assessment";

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
      { text: "Fully consistent - a more consistent process for appropriate leads across the approved workflow", score: 5 },
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
      { text: "Almost never - our process is consistently followed", score: 5 },
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
      { text: "Eligible inquiries receive a prompt response through our established process", score: 5 },
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
    placeholder: "Example goal: reduce response delays and improve follow-up consistency across approved lead sources...",
  },
  {
    id: "q14",
    pillar: AUDIT_PILLARS.STRATEGY,
    type: "scored",
    question: "Improving response speed and follow-up consistency may help reduce preventable lead loss. How much impact would that have on your business?",
    options: [
      { text: "Small improvement", score: 2 },
      { text: "Moderate improvement", score: 3 },
      { text: "Meaningful improvement", score: 4 },
      { text: "Major operational improvement", score: 5 },
    ],
  },
  {
    id: "q15",
    pillar: AUDIT_PILLARS.STRATEGY,
    type: "scored",
    question: "How would you prefer to get started?",
    options: [
      { text: "Start with one focused system addressing the clearest gap", score: 4 },
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

  let recommendation = "Your assessment points to an opportunity to review response speed and follow-up consistency.";

  if (missedLeadScore <= 2 || responseSpeedScore <= 3) {
    recommendation =
      "Your biggest opportunity is a structured lead-response system designed to help capture, route, and track approved inquiries more consistently.";
  } else if (followUpScore <= 2) {
    recommendation =
      "A practical next step is reviewing whether a structured follow-up workflow fits the gaps shown in your answers.";
  } else if (level === "High") {
    recommendation =
      "Your answers suggest a workable foundation. An optional review can determine whether targeted automation or reporting improvements are appropriate.";
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
      ? `Lead handling appears to be the clearest process gap. New inquiries are being worked at "${responseSpeed || "an inconsistent pace"}" and follow-up is currently "${followUpDepth || "not clearly defined"}".`
      : `Your answers suggest a workable operational foundation, with possible room to improve response consistency, follow-up, and visibility for ${businessName}.`;

  const dataConstraint =
    dataPercent < 60
      ? `Customer information currently lives in "${dataLocation || "multiple disconnected places"}", which makes automation harder and limits visibility across the pipeline.`
      : `Your data foundation appears workable. An optional review can determine whether better orchestration or targeted automation is appropriate.`;

  const rolloutGuidance =
    toolsPercent < 60
      ? `Because your current automation stack is "${automationLevel || "still fairly manual"}" and team AI comfort is "${aiComfort || "still developing"}", the safest rollout is a human-in-the-loop system that improves speed without overwhelming the team.`
      : `Because your team already has some comfort with automation, a review may identify appropriate multi-step workflows or reporting improvements.`;

  const keyFindings = [
    primaryLeak,
    dataConstraint,
    processConsistency
      ? `Operational consistency today is "${processConsistency}". That tells us the implementation should reinforce one repeatable workflow rather than add more manual choices.`
      : "Consistency across the team will matter just as much as the tooling itself.",
  ];

  const actionPlan: AuditInsightSection[] = [
    {
      title: "Step 1: Review intake and response",
      body:
        leadHandlingPercent < 65
          ? `Review an intake workflow that can acknowledge eligible inquiries, route them appropriately, and support approved follow-up. This addresses the missed-response pattern you reported as "${missedLeads || "inconsistent"}" without assuming a guaranteed response time.`
          : `Review the first-touch experience so eligible leads can receive an approved confirmation and appropriate next step based on the connected systems.`,
    },
    {
      title: "Step 2: Review follow-up consistency",
      body:
        `Based on your current depth of "${followUpDepth || "limited follow-up"}", review whether an approved, repeatable sequence across supported channels could make follow-up more consistent.`,
    },
    {
      title: "Step 3: Review pipeline visibility",
      body:
        successMetric
          ? `Use your stated goal, "${successMetric}", as context for deciding which available lead-status and workflow information would be useful to review.`
          : `Identify which available lead volume, response, follow-up, booking, and outcome information would improve visibility.`,
    },
  ];

  const recommendedSystems: AuditInsightSection[] = [];

  recommendedSystems.push({
    title: "AI lead response workflow",
    body:
      `This may be an appropriate fit for ${businessName}. A scope review would confirm whether approved intake, routing, follow-up, and visibility workflows address the demonstrated gaps.`,
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
      title: "Broader systems review",
      body:
        `You signaled interest in broader operational work. That need should be reviewed separately from the focused AI Lead Conversion System before any implementation is recommended.`,
    });
  }

  return {
    headline: `Initial findings for ${businessName}`,
    summary:
      businessSummary
        ? `${businessName} serves ${businessSummary.toLowerCase()} Your answers indicate areas to review across response, follow-up, handoff, and lead visibility.`
        : `${businessName} may have opportunities to improve response speed, follow-up consistency, and visibility across the lead pipeline.`,
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
