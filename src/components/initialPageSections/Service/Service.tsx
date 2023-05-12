import { Button, Flex, Icon, Typography } from "@/components/common";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import { memo } from "react";
import s from "./Service.module.scss";

type ServiceTypes = {
  className: string;
};

export const Service = memo(({ className }: ServiceTypes) => {
  const { t } = useTranslation(["initial", "common"]);

  return (
    <Flex as="section" className={cn(s.container, className)}>
      <Flex justifyContent="center" className={cn(s.content, "layout")}>
        <Flex
          flexDirection="column"
          gap="10px"
          alignItems="flex-start"
          className={s.left}
        >
          <Typography variant="h1">{t("Service offer")}</Typography>
          <Typography variant="h0">{t("Service web")}</Typography>
          <Typography>{t("Service just web")}</Typography>
          <Typography>{t("Service info")}</Typography>
          {[1, 2, 3].map((num) => (
            <Flex key={num} gap="15px" alignItems="center">
              <Icon type="true" />
              <Typography variant="h2" componentProp="h2">
                {t(`Service true ${num}`)}
              </Typography>
            </Flex>
          ))}
          <Button borderWidth={2} href="/schedule">
            <Typography variant="bodyBg" align="center">
              {t("Speak to team", { ns: "common" })}
            </Typography>
          </Button>
        </Flex>
        <Flex
          flexDirection="column"
          gap="10px"
          className={s.right}
          alignItems="flex-start"
        >
          <Typography variant="subHeader">{t("Service focus")}</Typography>
          <Typography variant="h1">{t("Service not offer")}</Typography>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Flex key={num} gap="15px" alignItems="center">
              <Icon type="false" />
              <Typography variant="h2">{t(`Service false ${num}`)}</Typography>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
});
