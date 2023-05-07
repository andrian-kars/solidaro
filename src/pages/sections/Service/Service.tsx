import { Button, Flex, Typography } from "@/components/common";
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
          <Flex gap="15px" alignItems="center">
            <TrueSvg />
            <Typography variant="h2" componentProp="h2">
              {t("Service true 1")}
            </Typography>
          </Flex>
          <Flex gap="15px" alignItems="center">
            <TrueSvg />
            <Typography variant="h2" componentProp="h2">
              {t("Service true 2")}
            </Typography>
          </Flex>
          <Flex gap="15px" alignItems="center" className="pb-1">
            <TrueSvg />
            <Typography variant="h2" componentProp="h2">
              {t("Service true 3")}
            </Typography>
          </Flex>
          <Button borderWidth={2} href="#schedule">
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
          <Flex gap="15px" alignItems="center">
            <FalseSvg />
            <Typography variant="h2">{t("Service false 1")}</Typography>
          </Flex>
          <Flex gap="15px" alignItems="center">
            <FalseSvg />
            <Typography variant="h2">{t("Service false 2")}</Typography>
          </Flex>
          <Flex gap="15px" alignItems="center">
            <FalseSvg />
            <Typography variant="h2">{t("Service false 3")}</Typography>
          </Flex>
          <Flex gap="15px" alignItems="center">
            <FalseSvg />
            <Typography variant="h2">{t("Service false 4")}</Typography>
          </Flex>
          <Flex gap="15px" alignItems="center">
            <FalseSvg />
            <Typography variant="h2">{t("Service false 5")}</Typography>
          </Flex>
          <Flex gap="15px" alignItems="center">
            <FalseSvg />
            <Typography variant="h2">{t("Service false 6")}</Typography>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
});

const FalseSvg = memo(() => (
  <svg
    className="feather feather-x-circle"
    fill="none"
    height="24"
    stroke="red"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="3"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="15" x2="9" y1="9" y2="15" />
    <line x1="9" x2="15" y1="9" y2="15" />
  </svg>
));

const TrueSvg = memo(() => (
  <svg
    className="feather feather-check-circle"
    fill="none"
    height="24"
    stroke="green"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="3"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
));
