type P = { className?: string };

export function ArrowRight({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function WhatsApp({ className = "size-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.56.93.95-3.47-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.43-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.23 9.43-9.44 9.43m8.02-17.45A11.27 11.27 0 0 0 12.05.72C5.8.72.7 5.8.7 12.07c0 2 .52 3.95 1.52 5.67L.6 23.6l6-1.57a11.3 11.3 0 0 0 5.43 1.38h.01c6.25 0 11.34-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02" />
    </svg>
  );
}

export function Instagram({ className = "size-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Plane({ className = "size-4" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M21.5 15.5v-1.8L13.5 9V3.6c0-.9-.7-1.6-1.5-1.6s-1.5.7-1.5 1.6V9L2.5 13.7v1.8l8-2.4V18l-2.2 1.6V21l3.7-1 3.7 1v-1.4L13.5 18v-4.9l8 2.4Z" />
    </svg>
  );
}

/* Ícones minimalistas de benefícios (traço 1.4) */
const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function IconBus({ className = "size-7" }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...S}>
      <rect x="5" y="4" width="22" height="20" rx="3" />
      <path d="M5 15h22M9 8h14" />
      <circle cx="10" cy="19.5" r="1.2" />
      <circle cx="22" cy="19.5" r="1.2" />
      <path d="M9 24v3M23 24v3" />
    </svg>
  );
}
export function IconBed({ className = "size-7" }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...S}>
      <path d="M4 25V8M4 19h24v6M28 19v-3a4 4 0 0 0-4-4H14v7" />
      <circle cx="9" cy="14.5" r="2.5" />
    </svg>
  );
}
export function IconCompass({ className = "size-7" }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...S}>
      <circle cx="16" cy="16" r="12" />
      <path d="m20.5 11.5-2.8 6.2-6.2 2.8 2.8-6.2 6.2-2.8Z" />
    </svg>
  );
}
export function IconGift({ className = "size-7" }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...S}>
      <rect x="5" y="12" width="22" height="15" rx="1.5" />
      <path d="M3.5 12h25v-3.5h-25zM16 8.5V27M16 8.5c-2-4-7-4.5-7-1.5 0 1.5 3 1.5 7 1.5ZM16 8.5c2-4 7-4.5 7-1.5 0 1.5-3 1.5-7 1.5Z" />
    </svg>
  );
}
export function IconPin({ className = "size-7" }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...S}>
      <path d="M16 28s9-8.2 9-15a9 9 0 0 0-18 0c0 6.8 9 15 9 15Z" />
      <circle cx="16" cy="13" r="3" />
    </svg>
  );
}
export function IconPeople({ className = "size-7" }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...S}>
      <circle cx="12" cy="11" r="4" />
      <path d="M4 26c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      <circle cx="22.5" cy="12" r="3" />
      <path d="M21 18.2c4 .1 7 3.3 7 7.3" />
    </svg>
  );
}
export function IconShield({ className = "size-7" }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...S}>
      <path d="M16 4 6 8v7c0 6.5 4.3 11 10 13 5.7-2 10-6.5 10-13V8L16 4Z" />
      <path d="m11.5 16 3 3 6-6" />
    </svg>
  );
}
export function IconGlobe({ className = "size-7" }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...S}>
      <circle cx="16" cy="16" r="12" />
      <path d="M4 16h24M16 4c3.5 3.5 5 7.5 5 12s-1.5 8.5-5 12c-3.5-3.5-5-7.5-5-12s1.5-8.5 5-12Z" />
    </svg>
  );
}
