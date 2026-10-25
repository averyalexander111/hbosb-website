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
  | "potential_lead_handling_opportunity"
  | "further_review_needed"
  | "no_clear_immediate_need"
  | "insufficient_evidence";

export const AUDIT_RECOMMENDATION_COPY = {
  potential_lead_handling_opportunity: {
    label: "Potential Lead-Handling Opportunity",
    message:
      "Your answers suggest that part of your lead-response or follow-up process may benefit from improvement. HBOSB's AI Lead Conversion System could be worth exploring, but the appropriate solution depends on confirming your business needs, operating capacity, and technical requirements.",
  },
  further_review_needed: {
    label: "Further Review Needed",
    message:
      "Your answers highlight areas worth discussing, but more information is needed before recommending a particular solution. An optional assessment review can help clarify the most useful next step.",
  },
  no_clear_immediate_need: {
    label: "No Clear Immediate Need",
    message:
      "Based on your responses, we haven't identified a clear need for a new lead-conversion system at this time. You can continue using your existing process and revisit these findings if your needs change.",
  },
  insufficient_evidence: {
    label: "Insufficient Evidence",
    message:
      "Your assessment provides a starting point, but the available answers aren't enough to recommend a specific system. You can review the findings and decide whether a further conversation would be useful.",
  },
} as const;

// Self-reported answers that directly describe a material handling concern.
// q8 "Same day" and q10 "1 time" are intentionally excluded (ambiguous alone).
const MATERIAL_SIGNALS: Record<string, string[]> = {
  q6: [
    "No consistent process - everyone handles it differently",
    "We have rough steps but the team doesn't always follow them",
  ],
  q7: ["Very often", "Occasionally"],
  q8: ["Next day or later"],
  q9: ["We respond manually when available", "We respond, but timing is inconsistent"],
  q10: ["We don't have a structured follow-up process"],
};

const HEALTHY_ANSWERS: Record<string, string[]> = {
  q6: [
    "Mostly consistent - team generally follows the same process",
    "Fully consistent - the team follows a documented process for appropriate leads",
  ],
  q7: ["Never - all leads are responded to"],
  q8: ["Immediately (within minutes)"],
  q9: ["Leads are automatically responded to immediately"],
  q10: ["4-5 times"],
};

const HANDLING_QUESTIONS = ["q6", "q7", "q8", "q9", "q10"];
const LOWEST_INQUIRY_RANGE = "0-10 leads";
const RESTRICTIVE_CONSTRAINTS = [
  "Extreme regulations (HIPAA/Fin) & strict IT",
  "Some privacy rules but no clear guidance",
];

// Protective free-text flags only. They can route to Further Review Needed but
// never select a service. A bare mention (e.g. "multiple locations") is not enough.
const CAPACITY_CONCERN = /\b(can'?t|cannot|unable to|not able to)\s+(take|accept|handle)\s+(on\s+)?(more|new|any)\b|\b(at|over)\s+capacity\b|\bno capacity\b|\bfully booked\b|\bbooked out\b|\bnot taking (new|more)\b/i;
const WEBSITE_MENTION = /\bweb ?site\b|\bonline presence\b|\bcontact form\b|\bcontact page\b/i;
const MULTI_LISTING_MENTION = /\b(multiple|several|many|\d+)\s+(locations|listings|offices|branches|stores|integrations)\b|\bmulti-?(location|listing)\b|\bfranchise/i;
const PROBLEM_WORDS = /\b(problem|problems|issue|issues|broken|outdated|confusing|confused|hard|difficult|struggl\w*|messy|mess|slow|lost|losing|lose|miss|missed|missing|doesn'?t work|not working|can'?t find|chaos|chaotic|inconsistent)\b/i;

export interface AuditRecommendationClassification {
  category: AuditRecommendationCategory;
  label: string;
  message: string;
  materialSignals: string[];
  healthyQuestions: string[];
  flags: string[];
}

export const classifyAuditRecommendation = (
  responses: AuditResponse[],
): AuditRecommendationClassification => {
  const option = (id: string) => getResponse(responses, id)?.selectedOption?.text ?? "";
  const freeText = [getAnswerText(responses, "q1"), getAnswerText(responses, "q13")].join(" ");

  const materialSignals = HANDLING_QUESTIONS.filter((id) => MATERIAL_SIGNALS[id].includes(option(id)));
  const healthyQuestions = HANDLING_QUESTIONS.filter((id) => HEALTHY_ANSWERS[id].includes(option(id)));

  const flags: string[] = [];
  const missingHandling = HANDLING_QUESTIONS.filter((id) => !option(id));
  if (missingHandling.length) flags.push(`missing:${missingHandling.join(",")}`);
  if (!option("q3")) flags.push("missing:q3");
  else if (option("q3") === LOWEST_INQUIRY_RANGE) flags.push("demand-unclear:q3");
  if (!option("q12")) flags.push("missing:q12");
  else if (RESTRICTIVE_CONSTRAINTS.includes(option("q12"))) flags.push("restrictions:q12");
  const q8 = option("q8");
  const q9 = option("q9");
  if (
    (q8 === "Immediately (within minutes)" && MATERIAL_SIGNALS.q9.includes(q9)) ||
    (q9 === "Leads are automatically responded to immediately" && q8 === "Next day or later")
  ) {
    flags.push("contradictory:q8-q9");
  }
  if (CAPACITY_CONCERN.test(freeText)) flags.push("capacity:free-text");
  if (WEBSITE_MENTION.test(freeText) && PROBLEM_WORDS.test(freeText)) flags.push("website-issue:free-text");
  if (MULTI_LISTING_MENTION.test(freeText) && PROBLEM_WORDS.test(freeText)) flags.push("multi-listing-issue:free-text");

  const build = (category: AuditRecommendationCategory): AuditRecommendationClassification => ({
    category,
    ...AUDIT_RECOMMENDATION_COPY[category],
    materialSignals,
    healthyQuestions,
    flags,
  });

  const protective = flags.some((f) =>
    ["restrictions", "contradictory", "capacity", "website-issue", "multi-listing-issue"].some((p) => f.startsWith(p)),
  );

  if (materialSignals.length > 0) {
    // A documented concern exists; route to A only when nothing needs clarifying first.
    if (protective || flags.length > 0) return build("further_review_needed");
    return build("potential_lead_handling_opportunity");
  }

  if (protective) return build("further_review_needed");

  const allHealthy = HANDLING_QUESTIONS.every((id) => healthyQuestions.includes(id));
  const clarityFlags = flags.filter((f) => f !== "demand-unclear:q3");
  if (allHealthy && clarityFlags.length === 0) return build("no_clear_immediate_need");

  return build("insufficient_evidence");
};

const MATERIAL_FINDING_TEXT: Record<string, (answer: string) => string> = {
  q6: (a) => `You described your team's lead-handling process as: "${a}".`,
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
  const flags = classification.flags;

  const keyFindings: string[] = [];
  classification.materialSignals.forEach((id) => keyFindings.push(MATERIAL_FINDING_TEXT[id](answer(id))));
  if (classification.healthyQuestions.length) {
    keyFindings.push(
      `${classification.healthyQuestions.length} of 5 lead-handling answers describe consistent handling, for example: "${answer(classification.healthyQuestions[0])}".`,
    );
  }
  const inquiries = answer("q3");
  if (inquiries === LOWEST_INQUIRY_RANGE) {
    keyFindings.push(`You reported "${inquiries}" per month. That range includes zero, so current inquiry volume would need clarifying.`);
  } else if (inquiries) {
    keyFindings.push(`You reported roughly "${inquiries}" per month. This is a self-reported range, not an estimate of value.`);
  }
  if (flags.some((f) => f.startsWith("missing"))) keyFindings.push("Some answers relevant to an initial recommendation were not provided.");
  if (flags.includes("contradictory:q8-q9")) keyFindings.push("Your answers about response timing point in different directions, so they would need clarifying.");
  if (flags.includes("restrictions:q12")) keyFindings.push(`You described your rules or restrictions as: "${answer("q12")}". Any approach would first need to be reviewed against those requirements.`);
  if (flags.includes("capacity:free-text")) keyFindings.push("Your notes mention limits on taking on more work. That would need to be understood before considering changes to inquiry handling.");
  if (flags.includes("website-issue:free-text")) keyFindings.push("Your notes mention a concern with your website or contact experience. This assessment does not evaluate websites, so that would need a separate look.");
  if (flags.includes("multi-listing-issue:free-text")) keyFindings.push("Your notes mention a concern involving multiple locations, listings, or integrations. This assessment cannot evaluate that setup.");
  if (!keyFindings.length) keyFindings.push("Your answers did not point to a specific area that stands out.");

  const goal = answer("q13");
  const actionPlans: Record<AuditRecommendationCategory, AuditInsightSection[]> = {
    potential_lead_handling_opportunity: [
      {
        title: "Review the reported answers",
        body: "An optional review would look at the lead-handling answers you flagged and whether they happen consistently, and on which lead sources.",
      },
      {
        title: "Confirm needs and requirements",
        body: "Any solution would depend on confirming your business needs, operating capacity, and technical requirements.",
      },
      {
        title: "Decide on a next step",
        body: goal
          ? `If it seems useful, discuss whether an appropriate scope could support your stated goal: "${goal}". Nothing is committed at this stage.`
          : "If it seems useful, discuss what an appropriate scope could include. Nothing is committed at this stage.",
      },
    ],
    further_review_needed: [
      {
        title: "Review",
        body: "Look over the findings above, including any points marked as needing clarification.",
      },
      {
        title: "Clarify",
        body: "Some details that matter for a recommendation are not captured by these questions. An optional assessment review can help fill them in.",
      },
      {
        title: "Decide",
        body: "Decide whether a further conversation would be useful. It may conclude that no further action is needed.",
      },
    ],
    no_clear_immediate_need: [
      {
        title: "Keep what is working",
        body: "Your answers describe consistent response and follow-up. Keeping that process documented helps it hold up as your team changes.",
      },
      {
        title: "Revisit if things change",
        body: "This assessment focuses on lead handling. If inquiry volume, staffing, or response times change, you can revisit these findings.",
      },
    ],
    insufficient_evidence: [
      {
        title: "Review",
        body: "Look over the findings above. They are based only on the answers provided.",
      },
      {
        title: "Clarify",
        body: "Some answers were missing, unclear, or did not point to a specific concern, so no particular system is suggested.",
      },
      {
        title: "Decide",
        body: "Decide whether a further conversation would be useful. It is optional.",
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
