import logoPic from "@/../public/images/initial/logoPic.png";
import { DropdownLang } from "@/components";
import { Button, Flex, Typography } from "@/components/common";
import { breakpoints } from "@/constants";
import { useWindowDimensions } from "@/hooks";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";
import s from "./Header.module.scss";

const HEADER_GAP = "10px";

export const Header = memo(() => {
  const { pathname } = useRouter();
  const { width } = useWindowDimensions();
  const { t } = useTranslation();

  return (
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="center"
      className={s.header}
    >
      <Flex alignItems="center" gap={HEADER_GAP}>
        {width >= breakpoints.biggerMobile && (
          <Link href="/">
            <Image src={logoPic} alt={t("Logo picture")} width={51} />
          </Link>
        )}
        <Typography variant="h1" componentProp="h1">
          Solidaro
        </Typography>
        <Typography variant="h1" componentProp="p">
          🇺🇦
        </Typography>
      </Flex>
      <Flex gap={HEADER_GAP} alignItems="center">
        {width >= 400 &&
          (pathname.length < 4 ? (
            <Button href={"./schedule"} text={t("Schedule a call")} />
          ) : (
            <Button href={"./"} text={t("Go back")} />
          ))}
        <DropdownLang />
      </Flex>
    </Flex>
  );
});
