import { memo } from "react";
import s from "./Header.module.scss";
import { Typography } from "@/components/common";

function Header() {
  return (
    <header className={s.header}>
      <Typography variant="h1">solidaro</Typography>
      <Typography variant="h2">solidaro</Typography>
      <Typography variant="h3">solidaro</Typography>
      <Typography variant="h4">solidaro</Typography>
      <Typography variant="subHeader">solidaro</Typography>
      <Typography variant="body">solidaro</Typography>
      <Typography variant="bodySm">solidaro</Typography>
      <Typography variant="bodyTiny">solidaro</Typography>
    </header>
  );
}

export default memo(Header);
