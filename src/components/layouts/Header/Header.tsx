import logoPic from "@/../public/images/initial/logoPic.png";
import { Button, Dropdown, Flex, Typography } from "@/components/common";
import { useWindowDimensions } from "@/hooks";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { memo, useState } from "react";
import s from "./Header.module.scss";

const HEADER_GAP = "10px";

export const Header = memo(() => {
  const { width } = useWindowDimensions();
  const { t } = useTranslation();

  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  return (
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="center"
      className={s.header}
    >
      <Flex alignItems="center" gap={HEADER_GAP}>
        {width >= 576 && <Image src={logoPic} alt="Logo Tree" width={51} />}
        <Typography variant="h1" componentProp="h1">
          Solidaro
        </Typography>
        <Typography variant="h1" componentProp="p">
          🇺🇦
        </Typography>
      </Flex>
      <Flex gap={HEADER_GAP} alignItems="center">
        {width >= 400 && (
          <Button href="#thirdPage" text={t("Schedule a call")} />
        )}
        <Dropdown isActive={isDropdownOpened} onClick={setIsDropdownOpened} />
      </Flex>
    </Flex>
  );
});
