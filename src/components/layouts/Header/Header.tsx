import { memo } from "react";
import s from "./Header.module.scss";
import { Button, Flex, Typography } from "@/components/common";
import Image from "next/image";
import logoPic from "@/../public/images/initial/logoPic.png";

const HEADER_GAP = "10px";

export const Header = memo(() => (
  <Flex
    as="header"
    justifyContent="space-between"
    alignItems="center"
    className={s.header}
  >
    <Flex alignItems="center" gap={HEADER_GAP}>
      <Image src={logoPic} alt="Logo Tree" width={51} />
      <Typography variant="h1" componentProp="h1">
        Solidaro
      </Typography>
      <Typography variant="h1" componentProp="p">
        🇺🇦
      </Typography>
    </Flex>
    <Flex gap={HEADER_GAP} alignItems="center">
      <Button href="#thirdPage" text="Schedule a call" />
      <Typography variant="subHeader">EN</Typography>
    </Flex>
  </Flex>
));
