import { memo, ElementType, HTMLAttributes } from "react";
import cn from "classnames";
import s from "./Button.module.scss";
import colors from "@/styles/colors.module.scss";
import { Typography } from "../Typography/Typography";

type ButtonSize = "mini" | "small" | "medium";

type ButtonVariant = "primary" | "secondary";

type ButtonTypes = HTMLAttributes<HTMLElement> & {
  className?: string;
  active?: boolean;
  disabled?: boolean;
  tabIndex?: number;
  variant?: ButtonVariant;
  type?: "submit" | "button" | "reset";
  size?: ButtonSize;
  component?: ElementType;
  href?: string;
  text?: string;
};

export const Button = memo(
  ({
    active = false,
    disabled = false,
    tabIndex = 0,
    type = "button",
    variant = "primary",
    size = "medium",
    className,
    href,
    text,
    children,
    component: Component = href ? "a" : "button",
    ...other
  }: ButtonTypes) => (
    <Component
      {...other}
      href={href}
      tabIndex={tabIndex}
      className={cn(
        s.button,
        active && s.active,
        disabled && s.disabled,
        className,
        s[variant],
        s[size]
      )}
    >
      {text ? <Typography variant="bodySm">{text}</Typography> : children}
    </Component>
  )
);
