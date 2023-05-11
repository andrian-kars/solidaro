import { Flex, Typography } from "@/components/common";
import { useTranslation } from "next-i18next";
import { memo } from "react";
import s from "./Footer.module.scss";

export const Footer = memo(() => {
  const { t } = useTranslation();

  return (
    <Flex as="footer" className={s.footer}>
      <Typography>{t("Footer copyright")}</Typography>
    </Flex>
  );
});
