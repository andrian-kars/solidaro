import col from "@/styles/colors.module.scss";
import vars from "@/styles/variables.module.scss";

export const breakpoints = {
  biggerMobile: Number(vars.biggerMobile.slice(0, -2)),
  tablet: Number(vars.tablet.slice(0, -2)),
  biggerTablet: Number(vars.biggerTablet.slice(0, -2)),
  desktop: Number(vars.desktop.slice(0, -2)),
  biggerDesktop: Number(vars.biggerDesktop.slice(0, -2)),
};

export const colors = col;

export type colorsType =
  | "black"
  | "white"
  | "blue"
  | "chalice"
  | "purple"
  | "alabaster"
  | "orage"
  | "brown";
