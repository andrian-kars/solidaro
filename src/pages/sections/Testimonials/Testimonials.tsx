import { Flex } from "@/components/common";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import { memo } from "react";
import s from "./Testimonials.module.scss";

type TestimonialsTypes = {
  className: string;
};

export const Testimonials = memo(({ className }: TestimonialsTypes) => {
  const { t } = useTranslation(["initial", "common"]);

  return (
    <Flex as="section" className={cn(s.container, className)}>
      <Flex justifyContent="center" className={cn(s.content, "layout")}>
        Testimonials
      </Flex>
    </Flex>
  );
});
