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
      { text: "Fully consistent - the team follows a documented process for appropriate leads", score: 5 },
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

  const recommendation = classifyAuditRecommendation(responses).message;

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

// ---------------------------------------------------------------------------
// Recommendation classification (shared by AuditResult.recommendation and the
// blueprint). Uses only existing structured answers. Scores are self-reported
// readiness, not product fit, and are never used here.
// ---------------------------------------------------------------------------

export type AuditRecommendationCategory =
  | "potential_standard_fit"
  | "further_discovery"
  | "no_immediate_engagement";

export const AUDIT_RECOMMENDATION_COPY = {
  potential_standard_fit: {
    label: "Potential Standard Lead Conversion Fit",
    message:
      "Your answers suggest that responding to and following up with new inquiries may deserve closer attention. HBOSB's AI Lead Conversion System could be worth exploring if those gaps and the appropriate scope are confirmed.",
  },
  further_discovery: {
    label: "Further Discovery Needed",
    message:
      "Your responses highlight areas worth reviewing, but they do not establish a clear solution yet. An optional assessment review can help determine whether further action makes sense.",
  },
  no_immediate_engagement: {
    label: "No Immediate Engagement Indicated",
    message:
      "Based on your responses, there is no clear indication that a paid HBOSB service is necessary right now. You can revisit this assessment if your business needs change.",
  },
} as const;

const GAP_ANSWERS: Record<string, string[]> = {
  q7: ["Very often", "Occasionally"],
  q8: ["Next day or later", "Same day"],
  q9: ["We respond manually when available", "We respond, but timing is inconsistent"],
  q10: ["We don't have a structured follow-up process", "1 time"],
};

const ADEQUATE_ANSWERS: Record<string, string> = {
  q7: "Never - all leads are responded to",
  q8: "Immediately (within minutes)",
  q9: "Leads are automatically responded to immediately",
  q10: "4-5 times",
};

const REQUIRED_FOR_CLASSIFICATION = ["q3", "q7", "q8", "q9", "q10", "q14"];
const MEANINGFUL_IMPACT = ["Moderate improvement", "Significant growth", "Game-changing"];
const LOWEST_INQUIRY_RANGE = "0-10 leads";
const EXTREME_CONSTRAINTS = "Extreme regulations (HIPAA/Fin) & strict IT";

// Explicit statements only. These never select a product; they only route to
// further discovery because the structured questions cannot confirm them.
const CAPACITY_CONCERN = /\b(can'?t|cannot|unable to|not able to)\s+(take|accept|handle)\s+(on\s+)?(more|new|any)\b|\b(at|no|over)\s+capacity\b|\bfully booked\b|\bbooked out\b|\bwait\s?list\b|\bnot taking (new|more)\b/i;
const MULTI_LOCATION_MENTION = /\b(multiple|several|many|\d+)\s+(locations|listings|offices|branches|stores|sites)\b|\bmulti-?(location|listing)\b|\bfranchise/i;
const WEBSITE_MENTION = /\bwebsite\b|\bonline presence\b|\bcontact form\b|\bweb ?site\b/i;

export interface AuditRecommendationClassification {
  category: AuditRecommendationCategory;
  label: string;
  message: string;
  gapQuestions: string[];
  adequateQuestions: string[];
  reasons: string[];
}

export const classifyAuditRecommendation = (
  responses: AuditResponse[],
): AuditRecommendationClassification => {
  const option = (id: string) => getResponse(responses, id)?.selectedOption?.text ?? "";
  const freeText = [getAnswerText(responses, "q1"), getAnswerText(responses, "q13")].join(" ");

  const gapQuestions = Object.keys(GAP_ANSWERS).filter((id) => GAP_ANSWERS[id].includes(option(id)));
  const adequateQuestions = Object.keys(ADEQUATE_ANSWERS).filter((id) => ADEQUATE_ANSWERS[id] === option(id));

  const reasons: string[] = [];
  const missing = REQUIRED_FOR_CLASSIFICATION.filter((id) => !option(id));
  if (missing.length) reasons.push(`missing:${missing.join(",")}`);
  // Instant automatic response reported alongside a slow typical response time.
  if (option("q9") === ADEQUATE_ANSWERS.q9 && GAP_ANSWERS.q8.includes(option("q8"))) reasons.push("contradictory:q8-q9");
  if (option("q12") === EXTREME_CONSTRAINTS) reasons.push("constraints:q12");
  if (CAPACITY_CONCERN.test(freeText)) reasons.push("capacity:free-text");
  if (MULTI_LOCATION_MENTION.test(freeText)) reasons.push("multi-location:free-text");
  if (WEBSITE_MENTION.test(freeText)) reasons.push("website:free-text");

  const build = (category: AuditRecommendationCategory): AuditRecommendationClassification => ({
    category,
    ...AUDIT_RECOMMENDATION_COPY[category],
    gapQuestions,
    adequateQuestions,
    reasons,
  });

  const blocking = reasons.some((reason) => reason.startsWith("missing") || reason.startsWith("contradictory"));

  const clearlyAdequate =
    !blocking &&
    adequateQuestions.length === 4 &&
    gapQuestions.length === 0 &&
    option("q14") === "Small improvement";
  if (clearlyAdequate) return build("no_immediate_engagement");

  const potentialStandard =
    reasons.length === 0 &&
    gapQuestions.length >= 3 &&
    option("q3") !== LOWEST_INQUIRY_RANGE &&
    MEANINGFUL_IMPACT.includes(option("q14"));
  if (potentialStandard) return build("potential_standard_fit");

  return build("further_discovery");
};

const GAP_FINDING_TEXT: Record<string, (answer: string) => string> = {
  q7: (a) => `You reported that new inquiries go without a response or proper follow-up "${a.toLowerCase()}".`,
  q8: (a) => `You reported that your typical response time to new leads is "${a.toLowerCase()}".`,
  q9: (a) => `You described what happens after someone contacts you as: "${a}".`,
  q10: (a) => `You reported your typical follow-up as: "${a}".`,
};

export const buildAuditBlueprint = (leadData: AuditLeadData): AuditBlueprint => {
  const businessName = leadData.businessName || "your business";
  const responses = leadData.responses;
  const classification = classifyAuditRecommendation(responses);
  const answer = (id: string) => getAnswerText(responses, id);

  const keyFindings: string[] = [];
  classification.gapQuestions.forEach((id) => keyFindings.push(GAP_FINDING_TEXT[id](answer(id))));
  if (classification.adequateQuestions.length) {
    keyFindings.push(
      `${classification.adequateQuestions.length} of 4 lead-handling answers describe consistent handling (for example, response time "${answer(classification.adequateQuestions[0] === "q8" ? "q8" : classification.adequateQuestions[0])}").`,
    );
  }
  const inquiries = answer("q3");
  if (inquiries === LOWEST_INQUIRY_RANGE) {
    keyFindings.push(`You reported "${inquiries}" per month. At that range, whether improved lead handling would make a meaningful difference is unclear without more detail.`);
  } else if (inquiries) {
    keyFindings.push(`You reported roughly "${inquiries}" per month. This is a self-reported range, not an estimate of value.`);
  }
  const r = classification.reasons;
  if (r.some((x) => x.startsWith("missing"))) keyFindings.push("Some answers needed for an initial recommendation were not provided.");
  if (r.includes("contradictory:q8-q9")) keyFindings.push("Your answers about response timing point in different directions, so they would need clarifying.");
  if (r.includes("constraints:q12")) keyFindings.push("You indicated strict industry rules or IT restrictions. Any approach would first need to be reviewed against those requirements.");
  if (r.includes("capacity:free-text")) keyFindings.push("Your notes mention limits on taking new work. That would need to be understood before considering more inquiry volume or follow-up.");
  if (r.includes("multi-location:free-text")) keyFindings.push("Your notes mention multiple locations or listings. This assessment cannot evaluate that setup, so it would need a conversation.");
  if (r.includes("website:free-text")) keyFindings.push("Your notes mention your website or online presence. This assessment does not evaluate websites, so that would need a separate look.");
  if (!keyFindings.length) keyFindings.push("Your answers did not point to a specific area that stands out.");

  const goal = answer("q13");
  const actionPlans: Record<AuditRecommendationCategory, AuditInsightSection[]> = {
    potential_standard_fit: [
      {
        title: "Review: confirm the reported gaps",
        body: "An optional review would check whether the response and follow-up gaps you reported happen consistently and on which lead sources.",
      },
      {
        title: "Review: scope and fit",
        body: goal
          ? `If the gaps are confirmed, discuss whether an appropriate scope could support your stated goal: "${goal}". Nothing is committed at this stage.`
          : "If the gaps are confirmed, discuss what an appropriate scope could include and what your team would keep handling. Nothing is committed at this stage.",
      },
    ],
    further_discovery: [
      {
        title: "Clarify the details",
        body: "Some of what matters for a recommendation is not captured by these questions. A short conversation can fill in those details.",
      },
      {
        title: "Optional assessment review",
        body: "If you'd like, book a review to discuss your answers. It may conclude that no further action is needed.",
      },
    ],
    no_immediate_engagement: [
      {
        title: "Keep what is working",
        body: "Your answers describe consistent response and follow-up. Keeping that process documented helps it hold up as your team changes.",
      },
      {
        title: "Revisit if things change",
        body: "If inquiry volume, staffing, or response times change, you can retake this assessment.",
      },
    ],
  };

  return {
    headline: `${leadData.auditResult.readinessPercentage}% readiness for ${businessName}`,
    summary: `Initial result: ${classification.label}. This is based only on your self-reported answers. The readiness score reflects your current processes and tools and is not a measure of fit for any service.`,
    keyFindings,
    actionPlan: actionPlans[classification.category],
    recommendedSystems: [{ title: classification.label, body: classification.message }],
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
