import { colors, colorsType } from "@/constants";
import cn from "classnames";
import Link from "next/link";
import { HTMLAttributes, memo } from "react";
import s from "./CustomLink.module.scss";

type CustomLinkTypes = HTMLAttributes<HTMLElement> & {
  className?: string;
  active?: boolean;
  disabled?: boolean;
  def?: boolean;
  tabIndex?: number;
  target?: "_blank" | "_self";
  color?: colorsType;
  href: string;
};

export const CustomLink = memo(
  ({
    href,
    tabIndex,
    target,
    className,
    def,
    color,
    ...other
  }: CustomLinkTypes) => {
    const Component = def ? "a" : Link;

    return (
      <Component
        {...other}
        href={href}
        target={target}
        tabIndex={tabIndex || 0}
        className={cn(className, s.text)}
        style={{ color: color && colors[color] }}
      />
    );
  }
);
