import { memo } from "react";
import Image from "next/image";
import logoPic from "@/../public/images/initial/logoPic.png";
import { Flex, Typography } from "@/components/common";
import s from "./Landing.module.scss";
import cn from "classnames";

export const Landing = memo(() => (
  <Flex
    as="div"
    alignItems="center"
    justifyContent="center"
    className={cn(s.landing)}
  >
    <Typography
      variant="h0"
      componentProp="h2"
      align="center"
      className={s.text}
    >
      Launch your own engineering site in Eastern Europe.
    </Typography>
    <Image src={logoPic} alt="Logo Tree" />
  </Flex>
));
