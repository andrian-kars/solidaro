// i18next.d.ts
import "i18next";
import { NextRouter } from "next/router";

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}
