import { ElementType, CSSProperties, HTMLAttributes } from "react";

type FlexProps = HTMLAttributes<HTMLElement> & {
  alignContent?: CSSProperties["alignContent"];
  alignItems?: CSSProperties["alignItems"];
  alignSelf?: CSSProperties["alignSelf"];

  /** A custom element for this component, defaults to 'div'. */
  as?: ElementType;
  flex?: CSSProperties["flex"];
  flexBasis?: CSSProperties["flexBasis"];
  flexDirection?: CSSProperties["flexDirection"];
  flexGrow?: CSSProperties["flexGrow"];
  flexShrink?: CSSProperties["flexShrink"];
  flexWrap?: CSSProperties["flexWrap"];
  justifyContent?: CSSProperties["justifyContent"];
  justifyItems?: CSSProperties["justifyItems"];
  justifySelf?: CSSProperties["justifySelf"];
  order?: CSSProperties["order"];
  height?: CSSProperties["height"];
  width?: CSSProperties["width"];

  /** The children to be rendered. */
  children?: React.ReactNode;
};

export const Flex = ({
  alignContent,
  alignItems,
  alignSelf,
  as: Component = "div",
  flex,
  flexBasis,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  justifyContent,
  justifyItems,
  justifySelf,
  order,
  height,
  width,
  ...other
}: FlexProps) => (
  <Component
    {...other}
    style={{
      display: "flex",
      alignContent,
      alignItems,
      alignSelf,
      flex,
      flexBasis,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      height,
      width,
      justifyContent,
      justifyItems,
      justifySelf,
      order,
    }}
  />
);
