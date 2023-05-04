import s from "./Layout.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={s.layout}>{children}</main>
      <Footer />
    </>
  );
}
