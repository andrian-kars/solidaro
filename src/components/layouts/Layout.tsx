import { ReactNode } from "react";
import s from "./Layout.module.scss";
import { Header } from "./Header/Header";
import Footer from "./Footer/Footer";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main className={s.layout}>{children}</main>
    <Footer />
  </>
);
