"use client";

import { useEffect, useState } from "react";
import styles from "../styles/consent.module.css";
import { getConsent, setConsent, } from "./consent";
import type { ConsentStatus, CookieSettingsButtonProps } from "./cookies-types";


export default function CookieSettingsButton({className} : CookieSettingsButtonProps) {
  const [status, setStatus] = useState<ConsentStatus | null>(null);

  useEffect(() => {
    setStatus(getConsent());
  }, []);

  const toggle = () => {
    const next: ConsentStatus = status === "accepted" ? "declined" : "accepted";
    setConsent(next);
    setStatus(next);
  };

  const label = status === "accepted" ? "Decline cookies" : "Accept cookies";

  return (
    <button type="button" className={`${styles.consentBtn} ${className || ""}`.trim()}  onClick={toggle}>
      {label}
    </button>
  );
}
