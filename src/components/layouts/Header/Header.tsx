import { memo } from "react";
import s from "./Header.module.scss";
import { Typography } from "@/components/common";

export const Header = memo(() => (
  <header className={s.header}>
    <Typography variant="h1" componentProp="h1" gradient>
      Solidaro
    </Typography>
  </header>
));
