import vars from "@/styles/variables.module.scss";

export const breakpoints = {
  biggerMobile: Number(vars.biggerMobile.slice(0, -2)),
  tablet: Number(vars.tablet.slice(0, -2)),
  biggerTablet: Number(vars.biggerTablet.slice(0, -2)),
  desktop: Number(vars.desktop.slice(0, -2)),
  biggerDesktop: Number(vars.biggerDesktop.slice(0, -2)),
};