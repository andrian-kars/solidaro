import logoPic from "@/../public/images/initial/logoPic.png";
import { Flex, Typography } from "@/components/common";
import { breakpoints } from "@/constants";
import { useWindowDimensions } from "@/hooks";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { memo } from "react";
import s from "./Landing.module.scss";

type LandingTypes = {
  className: string;
  num: number;
};

export const Landing = memo(({ className, num }: LandingTypes) => {
  const { width } = useWindowDimensions();
  const { t } = useTranslation(["initial", "common"]);

  return (
    <section className={cn(s.container, className, s["container" + num])}>
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
