import { Flex } from "@/components/common";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import { memo } from "react";
import s from "./Schedule.module.scss";

type ScheduleTypes = {
  className: string;
};

export const Schedule = memo(({ className }: ScheduleTypes) => {
  const { t } = useTranslation(["initial", "common"]);

  return (
    <Flex as="section" className={cn(s.container, className)}>
      <Flex justifyContent="center" className={cn(s.content, "layout")}>
        Schedule
      </Flex>
    </Flex>
  );
});
