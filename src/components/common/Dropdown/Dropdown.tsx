import { useLocalStorage } from "@/hooks";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";
import { Button } from "../Button/Button";
import { Flex } from "../Flex/Flex";
import { Typography } from "../Typography/Typography";
import s from "./Dropdown.module.scss";

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
      {/* @ts-ignore */}
      <Typography variant="h1">{selectFlag(locale)}</Typography>
      <DropDownSvg />
      {isActive && (
        <Flex as="ul" flexDirection="column" gap="5px" className={s.dropDown}>
          {/* @ts-ignore */}
          {locales
            .filter((el) => el !== locale)
            .map((loc) => (
              <li key={loc} onClick={() => handleItemClick(loc)} tabIndex={0}>
                <Link href="/" locale={loc}>
                  <Typography align="right" variant="subHeader">
                    {selectCountrlyLang(loc)}
                  </Typography>
                </Link>
              </li>
            ))}
        </Flex>
      )}
    </Button>
  );
});

const selectFlag = (locale: string) => {
  switch (locale) {
    case "en":
      return "🇬🇧";
    case "ja":
      return "🇯🇵";
    case "de":
      return "🇩🇪";
    case "uk":
      return "🇺🇦";
  }
};

const selectCountrlyLang = (locale: string) => {
  switch (locale) {
    case "en":
      return "English";
    case "ja":
      return "日本語";
    case "de":
      return "Deutsch";
    case "uk":
      return "Українська";
  }
};

const DropDownSvg = memo(() => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" fill="none" width="24" height="24" />
    <g>
      <path d="M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586" />
    </g>
  </svg>
));
