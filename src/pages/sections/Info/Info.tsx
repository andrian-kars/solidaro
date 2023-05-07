import { InfoCard } from "@/components";
import { Button, Flex, Typography } from "@/components/common";
import { info } from "@/constants";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import { memo } from "react";
import s from "./Info.module.scss";

type InfoTypes = {
  className: string;
};

export const Info = memo(({ className }: InfoTypes) => {
  const { t } = useTranslation(["initial", "common"]);

  return (
    <Flex as="section" className={cn(s.container, className)}>
      <Flex className={cn(s.content, "layout")}>
        <Flex flexDirection="column">
          <Typography variant="h1" componentProp="h3" className={cn("pb-2")}>
            {t("Cards heading")}
          </Typography>
          <Flex className={s.cards}>
            <InfoCard header={t("Card 1")} value={info.clientsHelped} />
            <InfoCard header={t("Card 2")} value={info.appsDevelepoed} />
            <InfoCard header={t("Card 3")} value="0" />
            <InfoCard header={t("Card 4")} value="1" />
          </Flex>
        </Flex>
        <Flex flexDirection="column" className={s.texts}>
          <Typography variant="h1" componentProp="h3" className={cn("pb-2")}>
            {t("Info heading")}
          </Typography>
          <Typography
            variant="body"
            componentProp="p"
            className={cn(s.subText, "pb-2")}
          >
            {t("Info p 1")}
          </Typography>
          <Typography
            variant="body"
            componentProp="p"
            className={cn(s.subText, "pb-2")}
          >
            {t("Info p 2")}
          </Typography>
          <Typography
            variant="body"
            componentProp="p"
            className={cn(s.subText, "pb-2")}
          >
            {t("Info p 3")}
          </Typography>
          <Typography
            variant="subHeader"
            componentProp="h2"
            className={cn(s.subText, "pb-2")}
          >
            {t("Info meeting")}
          </Typography>
          <Button borderWidth={2} href="#thirdPage">
            <Typography variant="bodyBg" align="center">
              {t("Speak to team", { ns: "common" })}
            </Typography>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
});
