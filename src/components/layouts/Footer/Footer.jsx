import { memo } from "react";
import s from "./Footer.module.scss";

function Footer() {
  return <footer className={s.footer}>Footer</footer>;
}

export default memo(Footer);
