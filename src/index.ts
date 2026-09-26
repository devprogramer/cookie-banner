// src/index.ts
export { default as CookieBanner } from './components/CookieBanner';
export { default as CookieSettingsButton } from './components/CookieSettingsButton';

// Явно експортуємо всі типи, які потрібні з цього файлу
export type { CookieSettingsButtonProps, ConsentStatus } from './components/cookies-types';
