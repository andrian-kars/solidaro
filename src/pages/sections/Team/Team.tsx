import { Flex } from "@/components/common";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import { memo } from "react";
import s from "./Team.module.scss";

type TeamTypes = {
  className: string;
};

export const Team = memo(({ className }: TeamTypes) => {
  const { t } = useTranslation(["initial", "common"]);

  return (
    <Flex as="section" className={cn(s.container, className)}>
      <Flex justifyContent="center" className={cn(s.content, "layout")}>
        Team
      </Flex>
    </Flex>
  );
});
