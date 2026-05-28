import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY || "";

export const isResendConfigured = !!resendApiKey;

export const resend = isResendConfigured ? new Resend(resendApiKey) : null;
