import { MouseEvent, memo, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import cn from "classnames";
import { Typography } from "../Typography/Typography";
import s from "./Dropdown.module.scss";
import { useEffectOnce, useLocalStorage } from "@/hooks";
import { useRouter } from "next/router";
import Link from "next/link";

type DropdownProps = {
  isActive: boolean;
  onClick: (value: boolean) => void;
};

export const Dropdown = memo(({ isActive, onClick }: DropdownProps) => {
  const { locales, locale, push } = useRouter();
  const [localLang, setLocalLang] = useLocalStorage("lang", "");

  function handleDropdownClick() {
    onClick(!isActive);
  }

  function handleBlur() {
    setTimeout(() => {
      onClick(false);
    }, 300);
  }

  function handleItemClick(lang: string) {
    setLocalLang(lang);
  }

  useEffect(() => {
    localLang &&
      localLang !== locale &&
      push("/", undefined, { locale: localLang });
  }, [locale, localLang, push]);

  return (
    <Button
      className={cn(s.button, isActive && s.active)}
      variant="secondary"
      active={isActive}
      onClick={handleDropdownClick}
      onBlur={handleBlur}
    >
      <Typography variant="subHeader">{locale}</Typography>
      <DropDownSvg />
      {isActive && (
        <ul className={s.dropDown}>
          {/* @ts-ignore */}
          {locales
            .filter((el) => el !== locale)
            .map((loc) => (
              <li key={loc} onClick={() => handleItemClick(loc)} tabIndex={0}>
                <Link href="/" locale={loc}>
                  <Typography variant="subHeader">{loc}</Typography>
                </Link>
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
