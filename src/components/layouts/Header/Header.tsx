import { memo } from "react";
import s from "./Header.module.scss";
import { Flex, Typography } from "@/components/common";
import Image from "next/image";
import logoPic from "@/../public/images/initial/logoPic.png";

const HEADER_GAP = "5px";

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
    <Flex>
      <Typography variant="subHeader">EN</Typography>
    </Flex>
  </Flex>
));
