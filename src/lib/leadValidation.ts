const EMAIL_ADDRESS_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const WORD_REGEX = /[A-Za-z0-9]+(?:['-][A-Za-z0-9]+)*/g;

export const PHONE_INPUT_PATTERN =
  String.raw`^(?:\+[1-9]\d{7,14}|(?:1[-.\s]?)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4})$`;

export const EMAIL_VALIDATION_MESSAGE = "Please enter a valid email address.";
export const PHONE_VALIDATION_MESSAGE =
  "Please enter a valid US phone number, or use +country code for international numbers.";
export const MINIMUM_WORD_VALIDATION_MESSAGE = "Please enter at least one word.";

export const sanitizeEmailInput = (value: string) => value.replace(/\s+/g, "").toLowerCase();

export const normalizeEmailAddress = (value: string) => sanitizeEmailInput(value.trim());

export const isValidEmailAddress = (value: string) => EMAIL_ADDRESS_REGEX.test(normalizeEmailAddress(value));

export const sanitizePhoneInput = (value: string) => {
  const trimmedStart = value.trimStart();
  const hasLeadingPlus = trimmedStart.startsWith("+");
  const sanitizedBody = trimmedStart
    .replace(/\+/g, "")
    .replace(/[^\d().\-\s]/g, "")
    .replace(/\s{2,}/g, " ");

  return `${hasLeadingPlus ? "+" : ""}${sanitizedBody}`.slice(0, 24);
};

export const normalizePhoneNumber = (value: string) => {
  const sanitizedValue = sanitizePhoneInput(value).trim();
  if (!sanitizedValue) {
    return null;
  }

  const digits = sanitizedValue.replace(/\D/g, "");
  if (sanitizedValue.startsWith("+")) {
    if (!/^[1-9]\d{7,14}$/.test(digits)) {
      return null;
    }

    return `+${digits}`;
  }

  if (digits.length === 10) {
    return `+1${digits}`;
  }

  if (digits.length === 11 && digits.startsWith("1")) {
    return `+${digits}`;
  }

  return null;
};

export const validateLeadContactInfo = (contact: { email: string; phone: string }) => {
  const email = normalizeEmailAddress(contact.email);
  if (!isValidEmailAddress(email)) {
    return {
      isValid: false as const,
      error: EMAIL_VALIDATION_MESSAGE,
    };
  }

  const phone = normalizePhoneNumber(contact.phone);
  if (!phone) {
    return {
      isValid: false as const,
      error: PHONE_VALIDATION_MESSAGE,
    };
  }

  return {
    isValid: true as const,
    email,
    phone,
  };
};

export const getMeaningfulWordCount = (value: string) =>
  (value.match(WORD_REGEX) || []).filter((word) => word.replace(/['-]/g, "").length >= 2).length;

export const hasMinimumWords = (value: string, minimumWords = 1) => getMeaningfulWordCount(value) >= minimumWords;
