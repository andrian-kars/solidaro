import cn from "classnames";
import { memo } from "react";
import s from "./Header.module.scss";

type NavigationButtonTypes = {
  isActive: boolean;
  onClick: () => void;
};

export const NavigationButton = memo(
  ({ isActive, onClick }: NavigationButtonTypes) => {
    return (
      <button onClick={onClick} className={cn(s.menuBtn, isActive && s.active)}>
        <span className={s.line}></span>
      </button>
    );
  }
);
