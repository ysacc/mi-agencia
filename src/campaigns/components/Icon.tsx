import React from "react";

export type IconName =
  | "globe"
  | "mobile"
  | "chat"
  | "form"
  | "clock"
  | "search"
  | "rocket"
  | "growth"
  | "store"
  | "cart"
  | "box"
  | "tag"
  | "card"
  | "bell"
  | "panel"
  | "dashboard"
  | "users"
  | "plug"
  | "bot"
  | "layers"
  | "shield"
  | "check"
  | "alert"
  | "table"
  | "map"
  | "support";

/** Trazos SVG de línea, sobrios y consistentes (sin estética "futurista"). */
const PATHS: Record<IconName, React.ReactNode> = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9S14.5 18.3 12 21c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  chat: (
    <>
      <path d="M20 12.5a7.5 7.5 0 0 1-11 6.6L4 21l1.9-4.6A7.5 7.5 0 1 1 20 12.5Z" />
      <path d="M9 11.5h6M9 14.5h4" />
    </>
  ),
  form: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  rocket: (
    <>
      <path d="M13.5 4.5c3.5-1.5 6-1 6-1s.5 2.5-1 6c-1.2 2.8-3.6 5-6.5 6.3L9 13.5C10.3 10.6 12.5 8.2 13.5 4.5Z" />
      <path d="m9 13.5-3 3M6.5 17.5 5 21l3.5-1.5" />
    </>
  ),
  growth: (
    <>
      <path d="M4 19h16" />
      <path d="m5 15 4-4 3 3 6-6" />
      <path d="M14 8h4v4" />
    </>
  ),
  store: (
    <>
      <path d="M4 9.5 5.5 5h13L20 9.5" />
      <path d="M4 9.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0" />
      <path d="M5.5 11.5V19h13v-7.5" />
      <path d="M10 19v-4h4v4" />
    </>
  ),
  cart: (
    <>
      <path d="M4 5h2l2 9h9l2-6H7" />
      <circle cx="10" cy="18.5" r="1.4" />
      <circle cx="17" cy="18.5" r="1.4" />
    </>
  ),
  box: (
    <>
      <path d="m12 3 8 4.2v9.6L12 21l-8-4.2V7.2Z" />
      <path d="m4 7.2 8 4.3 8-4.3M12 21v-9.5" />
    </>
  ),
  tag: (
    <>
      <path d="M4 11.5V4h7.5l8 8-7.5 7.5Z" />
      <circle cx="8.2" cy="8.2" r="1.3" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3 10h18M6.5 14.5h3" />
    </>
  ),
  bell: (
    <>
      <path d="M6.5 17V11a5.5 5.5 0 0 1 11 0v6" />
      <path d="M4.5 17h15M10 20h4" />
    </>
  ),
  panel: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M9 4v16M3 9h6" />
    </>
  ),
  dashboard: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 15v-3M11.5 15V9M16 15v-5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19c.6-3 2.9-4.5 5.5-4.5S14 16 14.5 19" />
      <path d="M16 6.2a3 3 0 0 1 0 5.6M17.5 14.8c1.7.6 2.8 1.9 3 4.2" />
    </>
  ),
  plug: (
    <>
      <path d="M9 3v5M15 3v5" />
      <path d="M6.5 8h11v3a5.5 5.5 0 0 1-11 0Z" />
      <path d="M12 16.5V21" />
    </>
  ),
  bot: (
    <>
      <rect x="4" y="7.5" width="16" height="11" rx="3" />
      <path d="M12 3.5v4M8.5 12.5h.01M15.5 12.5h.01M9.5 15.5h5" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3.5 8.5 4.3L12 12 3.5 7.8Z" />
      <path d="m4 12 8 4 8-4M4 16l8 4 8-4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.2 19 6v5.5c0 4.2-2.8 7.4-7 9.3-4.2-1.9-7-5.1-7-9.3V6Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  alert: (
    <>
      <path d="M12 4.5 21 20H3Z" />
      <path d="M12 10v4M12 17h.01" />
    </>
  ),
  table: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M3 9.5h18M3 14.5h18M9 9.5v10M15 9.5v10" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s6.5-5.8 6.5-10.2A6.5 6.5 0 0 0 5.5 10.8C5.5 15.2 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.3" />
    </>
  ),
  support: (
    <>
      <path d="M5 13v-1a7 7 0 0 1 14 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.6" />
      <rect x="17" y="13" width="4" height="6" rx="1.6" />
      <path d="M19 19v.5a2.5 2.5 0 0 1-2.5 2.5H13" />
    </>
  ),
};

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, className = "", size = 24 }) => (
  <svg
    className={`cmp-icon ${className}`.trim()}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {PATHS[name]}
  </svg>
);

export default Icon;
