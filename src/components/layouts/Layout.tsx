import { ReactNode } from "react";
import { Header } from "./Header/Header";
import s from "./Layout.module.scss";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main className={s.layout}>{children}</main>
  </>
);
