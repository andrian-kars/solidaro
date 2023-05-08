import cn from "classnames";
import Link from "next/link";
import { HTMLAttributes, memo } from "react";
import s from "./CustomLink.module.scss";

type CustomLinkTypes = HTMLAttributes<HTMLElement> & {
  className?: string;
  active?: boolean;
  disabled?: boolean;
  tabIndex?: number;
  target?: "_blank" | "_self";
  href: string;
};

export const CustomLink = memo(
  ({ href, tabIndex, target, className, ...other }: CustomLinkTypes) => (
    <Link
      {...other}
      href={href}
      target={target}
      tabIndex={tabIndex || 0}
      className={cn(className, s.text)}
    />
  )
);
