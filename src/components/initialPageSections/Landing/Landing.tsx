import logoPic from "@/../public/images/logo.png";
import { CustomLink, Flex, Icon, Typography } from "@/components/common";
import { breakpoints } from "@/constants";
import { useWindowDimensions } from "@/hooks";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { memo } from "react";
import s from "./Landing.module.scss";

const SOCIALS = [
  {
    social: "youtube",
    url: "https://www.youtube.com/@solidaro/",
  },
  {
    social: "instagram",
    url: "https://www.instagram.com/solidarohq/",
  },
  {
    social: "linkedin",
    url: "https://www.linkedin.com/company/solidaro/",
  },
  {
    social: "facebook",
    url: "https://www.facebook.com/profile.php?id=100093405655181/",
  },
  {
    social: "twitter",
    url: "https://twitter.com/SolidaroHQ/",
  },
];

type LandingTypes = {
  className: string;
};

export const Landing = memo(({ className }: LandingTypes) => {
  const { width } = useWindowDimensions();
  const { t } = useTranslation(["initial", "common"]);

  return (
    <section className={cn(s.container, className)}>
      <Flex as="div" alignItems="center" className={cn(s.content, "layout")}>
        <div>
          <Typography variant="h1" componentProp="h2" className={cn("pb")}>
            {t("Top quote")}
          </Typography>
          <Typography
            variant="h0"
            componentProp="h3"
            className={cn(s.subText, "pb-2")}
          >
            {t("Middle quote")}
          </Typography>
          <Typography
            variant="subHeader"
            componentProp="h2"
            className={cn(s.subText, "pb-2")}
          >
            {t("Bottom quote")}
          </Typography>
          <Flex gap={30} className={s.socials}>
            {SOCIALS.map(({ social, url }) => (
              <CustomLink href={url} target="_blank" key={social}>
                <Icon type={social} />
              </CustomLink>
            ))}
          </Flex>
        </div>
        {width >= breakpoints.biggerTablet && (
          <Image
            src={logoPic}
            alt={t("Logo picture", { ns: "initial" })}
            width={250}
          />
        )}
      </Flex>
    </section>
  );
});
