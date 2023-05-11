import logoPic from "@/../public/images/initial/logoPic.png";
import { DropdownLang } from "@/components";
import { Button, Flex, Typography } from "@/components/common";
import { breakpoints } from "@/constants";
import { useWindowDimensions } from "@/hooks";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useState } from "react";
import s from "./Header.module.scss";
import { HeaderMobileModal } from "./HeaderMobileModal";
import { Navigation } from "./Navigation";
import { NavigationButton } from "./NavigationButton";

const HEADER_GAP = "10px";

export const Header = memo(() => {
  const { pathname } = useRouter();
  const { width } = useWindowDimensions();
  const { t } = useTranslation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  function handleMobileMenuClick() {
    setIsMobileMenuOpen((prev) => !prev);
  }
  function handleMobileMenuClose() {
    setIsMobileMenuOpen(false);
  }

  const isInitialPage = pathname.length < 4;
  const LinkComp = isInitialPage ? "a" : Link;
  const linkHref = isInitialPage ? "#landing" : "/";

  const Schedule = (
    <Flex gap={HEADER_GAP} alignItems="center">
      {isInitialPage ? (
        <Button
          onClick={handleMobileMenuClose}
          href={"./schedule"}
          text={t("Schedule a call")}
        />
      ) : (
        <Button
          onClick={handleMobileMenuClose}
          href={"./"}
          text={t("Go back")}
        />
      )}
      {width >= breakpoints.biggerTablet && <DropdownLang />}
    </Flex>
  );

  return (
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="center"
      className={s.header}
    >
      <Flex alignItems="center" gap={HEADER_GAP}>
        {width >= breakpoints.biggerMobile && (
          <LinkComp href={linkHref} onClick={handleMobileMenuClose}>
            <Image src={logoPic} alt={t("Logo picture")} width={51} />
          </LinkComp>
        )}
        <Typography variant="h1" componentProp="h1">
          Solidaro
        </Typography>
        <Typography variant="h1" componentProp="p">
          🇺🇦
        </Typography>
      </Flex>
      {width >= breakpoints.biggerTablet && (
        <>
          <Navigation />
          {Schedule}
        </>
      )}
      {width < breakpoints.biggerTablet && (
        <>
          {Schedule}
          <NavigationButton
            isActive={isMobileMenuOpen}
            onClick={handleMobileMenuClick}
          />
        </>
      )}
      {isMobileMenuOpen && (
        <HeaderMobileModal onClose={handleMobileMenuClose} />
      )}
    </Flex>
  );
});
