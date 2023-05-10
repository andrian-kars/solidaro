import { memo } from "react";

type IconTypes = {
  type: "true" | "false";
};

export const Icon = memo(({ type }: IconTypes) => {
  switch (type) {
    case "true":
      return <TrueSvg />;
    case "false":
      return <FalseSvg />;
    default:
      return <div>No such type supported</div>;
  }
});

const TrueSvg = () => (
  <svg
    className="feather feather-check-circle"
    fill="none"
    height="24"
    stroke="green"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="3"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const FalseSvg = () => (
  <svg
    className="feather feather-x-circle"
    fill="none"
    height="24"
    stroke="red"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="3"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="15" x2="9" y1="9" y2="15" />
    <line x1="9" x2="15" y1="9" y2="15" />
  </svg>
);
