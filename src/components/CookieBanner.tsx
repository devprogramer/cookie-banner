"use client";

import { useEffect, useState } from "react";
import styles from "../styles/cookie-banner.module.css";
import { getConsent, setConsent } from "./consent";

export default function CookieBanner({text}: {text: string}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent() === null) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setConsent("accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    setConsent("declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie consent">
      <p className={styles.text}>
        {text}{" "}
        <a href="/cookies/" className={styles.link}>
          Cookies Policy
        </a>
        .
      </p>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.declineBtn}
          onClick={handleDecline}
        >
          Decline
        </button>
        <button
          type="button"
          className={styles.acceptBtn}
          onClick={handleAccept}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
