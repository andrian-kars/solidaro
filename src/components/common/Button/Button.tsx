import cn from "classnames";
import Link from "next/link";
import { ElementType, HTMLAttributes, memo } from "react";
import { Typography } from "../Typography/Typography";
import s from "./Button.module.scss";

type ButtonSize = "mini" | "small" | "medium";

type ButtonVariant = "primary" | "secondary";

type ButtonTypes = HTMLAttributes<HTMLElement> & {
  className?: string;
  borderWidth?: number;
  active?: boolean;
  disabled?: boolean;
  tabIndex?: number;
  variant?: ButtonVariant;
  type?: "submit" | "button" | "reset";
  textAlign?: "left" | "center" | "right";
  size?: ButtonSize;
  component?: ElementType;
  href?: string;
  text?: string;
  ariaLabel: string;
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
    textAlign = "left",
    borderWidth,
    ariaLabel,
    children,
    component: Component = href ? Link : "button",
    ...other
  }: ButtonTypes) => (
    <Component
      {...other}
      style={{ borderWidth }}
      href={href}
      tabIndex={tabIndex || 0}
      title={ariaLabel}
      aria-label={ariaLabel}
      className={cn(
        s.button,
        active && s.active,
        disabled && s.disabled,
        className,
        s[variant],
        s[size]
      )}
    >
      {text ? (
        <Typography variant="bodySm" align={textAlign}>
          {text}
        </Typography>
      ) : (
        children
      )}
    </Component>
  )
);
