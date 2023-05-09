import { testimonials } from "@/../public/testimonials";
import { Button, Flex, Typography } from "@/components/common";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import { memo, useState } from "react";
import s from "./Testimonials.module.scss";
import { TestimonialsCard } from "./TestimonialsCard";

type TestimonialsTypes = {
  className: string;
};

export const Testimonials = memo(({ className }: TestimonialsTypes) => {
  const { t } = useTranslation(["initial", "common"]);

  const [testimonialsToRender, setTestimonialsToRender] = useState(
    testimonials.slice(0, 6)
  );

  function handleLoadMore() {
    setTestimonialsToRender((prev) => [
      ...prev,
      ...testimonials.slice(prev.length, prev.length + 3),
    ]);
  }

  return (
    <Flex as="section" className={cn(s.container, className)}>
      <Flex
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        className={cn(s.content, "layout")}
      >
        <Typography variant="h1" componentProp="h4" className="pb-1">
          {t("Testimonials heading")}
        </Typography>
        <Typography
          variant="body"
          componentProp="h5"
          className={cn("pb-4", s.subText)}
          align="center"
        >
          {t("Testimonials subHeading")}
        </Typography>
        <Flex
          flexWrap="wrap"
          gap="30px"
          justifyContent="center"
          alignItems="center"
          className="pb-3"
        >
          {testimonialsToRender.map((testimonial, index) => (
            <TestimonialsCard key={index} testimonial={testimonial} />
          ))}
        </Flex>
        {testimonialsToRender.length < testimonials.length && (
          <Button
            onClick={handleLoadMore}
            text={t("Load more", { ns: "common" })}
          />
        )}
      </Flex>
    </Flex>
  );
});
