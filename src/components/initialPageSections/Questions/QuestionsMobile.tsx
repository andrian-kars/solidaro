import { Button, Flex, Typography } from "@/components/common";
import { breakpoints } from "@/constants";
import { useTranslation } from "next-i18next";
import { memo, useEffect, useState } from "react";
import s from "./Questions.module.scss";

const { biggerMobile, tablet } = breakpoints;

function sliceAddQuestions(width: number) {
  let sliceQuestions = 0;
  let addQuestions = 0;

  if (width >= tablet) {
    sliceQuestions = 6;
    addQuestions = 3;
  } else if (width >= biggerMobile) {
    sliceQuestions = 4;
    addQuestions = 2;
  } else if (width < biggerMobile && width > 0) {
    sliceQuestions = 3;
    addQuestions = 2;
  }

  return {
    sliceQuestions,
    addQuestions,
  };
}

type QuestionsMobileTypes = {
  questions: Array<{
    heading: string;
    text: string;
  }>;
  width: number;
};

export const QuestionsMobile = memo(
  ({ questions, width }: QuestionsMobileTypes) => {
    const { t } = useTranslation(["common"]);
    const { sliceQuestions, addQuestions } = sliceAddQuestions(width);

    const [questionsToShow, setQuestionsToShow] = useState(
      questions.slice(0, sliceQuestions)
    );

    useEffect(() => {
      if (!questionsToShow.length) {
        setQuestionsToShow(questions.slice(0, sliceQuestions));
      }
    }, [width]);

    function handleLoadMore() {
      setQuestionsToShow((prev) => [
        ...prev,
        ...questions.slice(prev.length, prev.length + addQuestions),
      ]);
    }

    return (
      <>
        <Flex as="ul" flexDirection="column" gap="var(--layout)">
          {questionsToShow.map(({ heading, text }) => (
            <Flex key={heading} as="li" flexDirection="column" gap="5px">
              <Typography variant="h2">{heading}</Typography>
              <Typography>{text}</Typography>
            </Flex>
          ))}
        </Flex>
        {questionsToShow.length < questions.length && (
          <Button
            ariaLabel={t("Load more", { ns: "common" })}
            onClick={handleLoadMore}
            text={t("Load more", { ns: "common" })}
            className={s.loadMore}
          />
        )}
      </>
    );
  }
);
