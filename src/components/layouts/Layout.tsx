import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import s from "./Layout.module.scss";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { asPath } = useRouter();

  const showFooter = asPath.includes("schedule");

  return (
    <>
      <Header />
      <main className={s.layout}>{children}</main>
      {showFooter && <Footer />}
    </>
  );
};
