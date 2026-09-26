import type { ConsentStatus } from "./types";

export const CONSENT_COOKIE = "cookieConsent";
export const CONSENT_MAX_AGE = 60 * 60 * 24 * 30 * 6; // ~6 months


export function getConsent(): ConsentStatus | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${CONSENT_COOKIE}=`));
  if (!match) return null;
  const value = match.split("=")[1];
  return value === "accepted" || value === "declined" ? value : null;
}

export function setConsent(status: ConsentStatus): void {
  document.cookie = `${CONSENT_COOKIE}=${status}; max-age=${CONSENT_MAX_AGE}; path=/; SameSite=Lax`;
}
