import logoPic from "@/../public/images/logo.png";
import { DropdownLang } from "@/components";
import { Button, Flex, Icon, Typography } from "@/components/common";
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
          ariaLabel={t("Schedule a call")}
          onClick={handleMobileMenuClose}
          href={"./schedule"}
          text={t("Schedule a call")}
        />
      ) : (
        <Button
          ariaLabel={t("Go back")}
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
      <LinkComp
        href={linkHref}
        onClick={handleMobileMenuClose}
        className={s.logoLink}
      >
        {width >= breakpoints.biggerMobile && (
          <Image src={logoPic} alt={t("Logo picture")} width={51} />
        )}
        <Typography variant="h1">Solidaro</Typography>
        {width >= breakpoints.biggerMobile && <Icon type="ukraine" />}
      </LinkComp>
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
