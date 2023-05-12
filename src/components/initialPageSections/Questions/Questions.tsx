import { Flex, Typography } from "@/components/common";
import { breakpoints } from "@/constants";
import { useWindowDimensions } from "@/hooks";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";
import s from "./Questions.module.scss";
import { QuestionsMobile } from "./QuestionsMobile";

const { biggerTablet } = breakpoints;

type QuestionsTypes = {
  className: string;
};

export const Questions = memo(({ className }: QuestionsTypes) => {
  const { t } = useTranslation(["initial"]);
  const { width } = useWindowDimensions();
  const { locale } = useRouter();

  const questionsData = [
    { heading: t("Questions heading 1"), text: t("Questions text 1") },
    { heading: t("Questions heading 2"), text: t("Questions text 2") },
    { heading: t("Questions heading 3"), text: t("Questions text 3") },
    { heading: t("Questions heading 4"), text: t("Questions text 4") },
    { heading: t("Questions heading 5"), text: t("Questions text 5") },
    { heading: t("Questions heading 6"), text: t("Questions text 6") },
    { heading: t("Questions heading 7"), text: t("Questions text 7") },
    { heading: t("Questions heading 8"), text: t("Questions text 8") },
    { heading: t("Questions heading 9"), text: t("Questions text 9") },
    { heading: t("Questions heading 10"), text: t("Questions text 10") },
  ];

  return (
    <Flex as="section" className={cn(s.container, className)}>
      <Flex
        justifyContent="center"
        flexDirection="column"
        className={cn(s.content, "layout")}
      >
        <Typography variant="h1" className="pb-1">
          {t("Questions main heading")}
        </Typography>
        <Typography className="pb-3">
          {t("Questions main text")}
          <Link href="mailto: info@solidaro.com"> info@solidaro.com</Link>
        </Typography>
        <Flex
          as="ul"
          gap="var(--layout)"
          flexDirection={width >= biggerTablet ? "row" : "column"}
          flexWrap={width >= biggerTablet ? "wrap" : "nowrap"}
        >
          {width >= biggerTablet ? (
            questionsData.map(({ heading, text }) => (
              <Flex
                key={heading}
                flexDirection="column"
                as="li"
                className={s.desktopItem}
                gap="5px"
              >
                <Typography variant="h2">{heading}</Typography>
                <Typography>{text}</Typography>
              </Flex>
            ))
          ) : (
            <QuestionsMobile questions={questionsData} width={width} />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
});
