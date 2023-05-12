import { CustomLink, Flex, Typography } from "@/components/common";
import { breakpoints } from "@/constants";
import { useWindowDimensions } from "@/hooks";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { memo } from "react";
import s from "./Header.module.scss";

const NAVIGATION = ["info", "service", "team", "testimonials", "questions"];

type NavigationTypes = {
  onClick?: () => void;
};

export const Navigation = memo(({ onClick }: NavigationTypes) => {
  const { width } = useWindowDimensions();
  const { pathname } = useRouter();
  const { t } = useTranslation();

  const isMobile = width < breakpoints.biggerTablet;
  const isInitialPage = pathname.length < 4;

  return (
    <Flex as="nav" className={s.nav}>
      {NAVIGATION.map((nav) => (
        <CustomLink
          color="white"
          def={isInitialPage}
          href={isInitialPage ? `#${nav}` : `/#${nav}`}
          key={nav}
          className={s.navItem}
          onClick={onClick}
        >
          <Typography uppercase variant={isMobile ? "h3" : "h4"}>
            {t(nav)}
          </Typography>
        </CustomLink>
      ))}
    </Flex>
  );
});
