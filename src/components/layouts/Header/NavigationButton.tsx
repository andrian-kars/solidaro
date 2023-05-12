import cn from "classnames";
import { useTranslation } from "next-i18next";
import { memo } from "react";
import s from "./Header.module.scss";

type NavigationButtonTypes = {
  isActive: boolean;
  onClick: () => void;
};

export const NavigationButton = memo(
  ({ isActive, onClick }: NavigationButtonTypes) => {
    const { t } = useTranslation();

    return (
      <button
        aria-label={t("Open mobile menu")}
        onClick={onClick}
        className={cn(s.menuBtn, isActive && s.active)}
      >
        <span className={s.line}></span>
      </button>
    );
  }
);
