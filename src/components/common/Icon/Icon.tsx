import facebook from "@/../public/icons/facebook.svg";
import instagram from "@/../public/icons/instagram.svg";
import linkedin from "@/../public/icons/linkedin.svg";
import twitter from "@/../public/icons/twitter.svg";
import youtube from "@/../public/icons/youtube.svg";
import Image from "next/image";
import { memo } from "react";

type IconTypes = {
  type:
    | "true"
    | "false"
    | "ukraine"
    | "youtube"
    | "instagram"
    | "linkedin"
    | "facebook"
    | "twitter";
};

export const Icon = memo(({ type }: IconTypes) => {
  switch (type) {
    case "true":
      return <TrueSvg />;
    case "false":
      return <FalseSvg />;
    case "ukraine":
      return <UkraineSvg />;
    case "youtube":
      return <Image src={youtube} alt="youtube" />;
    case "instagram":
      return <Image src={instagram} alt="instagram" />;
    case "linkedin":
      return <Image src={linkedin} alt="linkedin" />;
    case "facebook":
      return <Image src={facebook} alt="facebook" />;
    case "twitter":
      return <Image src={twitter} alt="twitter" />;
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

const UkraineSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="30px">
    <path
      fill="#005BBB"
      d="M32 5H4C1.791 5 0 6.791 0 9v9h36V9c0-2.209-1.791-4-4-4z"
    />
    <path
      fill="#FFD500"
      d="M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4v-9h36v9z"
    />
  </svg>
);
