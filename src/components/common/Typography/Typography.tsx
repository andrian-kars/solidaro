import { memo, ElementType, CSSProperties } from "react";
import cn from "classnames";
import s from "./Typography.module.scss";
import { Merienda, Open_Sans } from "next/font/google";

const headerFont = Merienda({
  weight: ["700"],
  subsets: ["latin"],
});

const defaultFont = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  /** Set the text-align on the component. */
  align?: "inherit" | "left" | "center" | "right" | "justify";

  /** The color of the component. It supports those theme colors that make sense for this component. */
  color?:
    | "blue"
    | "blueWaters"
    | "disabled"
    | "error"
    | "gray"
    | "grayDark"
    | "grayLight"
    | "grayMedium"
    | "grayMediumDark"
    | "orange"
    | "orangeSunrise"
    | "berryBad"
    | "success"
    | "white";

  /** The component used for the root node. Either a string to use a HTML element or a component. Overrides the behavior of the `variantMapping` prop. */
  componentProp?: ElementType;

  /** Controls if the text is italicized or normal */
  fontStyle?: "normal" | "italic";

  /** Controls if the font weight is bold or normal */
  fontWeight?: "normal" | "bold" | "semibold";

  /** Controls the display type */
  inline?: boolean;

  /** Controls the flex display attributes */
  flex?: boolean;

  /** If true, the text will not wrap, but instead will truncate with a text overflow ellipsis. Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow). */
  noWrap?: boolean;

  /** Applies the theme typography styles. */
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "subHeader"
    | "body"
    | "bodySm"
    | "bodyTiny";
};

export const Typography = memo(
  ({ componentProp, variant = "body", align = "left" }: TypographyProps) => {
    const Component = componentProp || "p";

    return (
      <Component
        style={{ textAlign: align }}
        className={cn(
          variant.includes("h") ? headerFont.className : defaultFont.className,
          s[variant]
        )}
      >
        solidaro
      </Component>
    );
  }
);
