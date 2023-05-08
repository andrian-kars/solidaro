import { Flex } from "@/components/common";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import { memo } from "react";
import s from "./Questions.module.scss";

type QuestionsTypes = {
  className: string;
};

export const Questions = memo(({ className }: QuestionsTypes) => {
  const { t } = useTranslation(["initial", "common"]);

  return (
    <Flex as="section" className={cn(s.container, className)}>
      <Flex justifyContent="center" className={cn(s.content, "layout")}>
        Questions
      </Flex>
    </Flex>
  );
});
