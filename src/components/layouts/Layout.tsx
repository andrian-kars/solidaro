import { ReactNode } from "react";
import Footer from "./Footer/Footer";
import { Header } from "./Header/Header";
import s from "./Layout.module.scss";

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
