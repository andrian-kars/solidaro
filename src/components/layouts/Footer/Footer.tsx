import { Flex, Typography } from "@/components/common";
import cn from "classnames";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import s from "./Footer.module.scss";

export const Footer = memo(() => {
  const { t } = useTranslation(["common"]);

  return (
    <Flex as="footer" className={cn(s.footer, "layout")}>
      <Typography>{t("Footer copyright")}</Typography>
    </Flex>
  );
});
