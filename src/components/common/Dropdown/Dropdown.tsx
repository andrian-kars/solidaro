import { MouseEvent, memo, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import cn from "classnames";
import { Typography } from "../Typography/Typography";
import s from "./Dropdown.module.scss";
import { useLocalStorage } from "@/hooks";

const LANGS = ["en", "ua", "de", "jp"];
const DEFAULT_LANG = LANGS[0];

type DropdownProps = {
  isActive: boolean;
  onClick: (value: boolean) => void;
};

export const Dropdown = memo(({ isActive, onClick }: DropdownProps) => {
  const [localLang, setLocalLang] = useLocalStorage("lang", DEFAULT_LANG);

  function handleDropdownClick() {
    onClick(!isActive);
  }

  function handleBlur() {
    setTimeout(() => {
      onClick(false);
    }, 100);
  }

  function handleItemClick(lang: string) {
    setLocalLang(lang);
  }

  return (
    <Button
      className={cn(s.button, isActive && s.active)}
      variant="secondary"
      active={isActive}
      onClick={handleDropdownClick}
      onBlur={handleBlur}
    >
      <Typography variant="subHeader">{localLang}</Typography>
      <DropDownSvg />
      {isActive && (
        <ul className={s.dropDown}>
          {LANGS.filter((el) => el !== localLang).map((el) => (
            <li key={el} onClick={() => handleItemClick(el)} tabIndex={0}>
              <Typography variant="subHeader">{el}</Typography>
            </li>
          ))}
        </ul>
      )}
    </Button>
  );
});

const DropDownSvg = memo(() => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" fill="none" width="24" height="24" />
    <g>
      <path d="M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586" />
    </g>
  </svg>
));
