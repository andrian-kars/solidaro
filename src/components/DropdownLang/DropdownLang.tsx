import { useLocalStorage } from "@/hooks";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";
import { Button } from "../common/Button/Button";
import { Flex } from "../common/Flex/Flex";
import { Typography } from "../common/Typography/Typography";
import s from "./DropdownLang.module.scss";

export const DropdownLang = memo(() => {
  const { locales, locale, push, query, pathname } = useRouter();
  const [localLang, setLocalLang] = useLocalStorage("lang", "");
  const [stopInitialLang, setStopInitialLang] = useLocalStorage("", "");
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  function handleDropdownLangClick() {
    setIsDropdownOpened((prev) => !prev);
  }

  function handleBlur() {
    setTimeout(() => {
      setIsDropdownOpened(false);
    }, 300);
  }

  function handleItemClick(lang: string) {
    setLocalLang(lang);
  }

  useEffect(() => {
    if (localLang) {
      setStopInitialLang("stop");
    }

    if (!stopInitialLang && localLang && localLang !== locale) {
      push(pathname, undefined, { locale: localLang });
    }

    return () => {
      setStopInitialLang("");
    };
  }, [localLang]);

  return (
    <Button
      className={cn(s.button, isDropdownOpened && s.active)}
      variant="secondary"
      active={isDropdownOpened}
      onClick={handleDropdownLangClick}
      onBlur={handleBlur}
    >
      {/* @ts-ignore */}
      <Typography variant="subHeader">{selectFlag(locale)}</Typography>
      <DropdownLangSvg />
      {isDropdownOpened && (
        <Flex
          as="ul"
          flexDirection="column"
          gap="5px"
          className={s.dropdownLang}
        >
          {/* @ts-ignore */}
          {locales
            .filter((el) => el !== locale)
            .map((loc) => (
              <li key={loc} onClick={() => handleItemClick(loc)} tabIndex={0}>
                <Link href={{ pathname, query }} locale={loc}>
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
      return "en";
    case "ja":
      return "日本語";
    case "de":
      return "de";
    case "uk":
      return "укр";
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

const DropdownLangSvg = memo(() => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" fill="none" width="24" height="24" />
    <g>
      <path d="M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586" />
    </g>
  </svg>
));
