import photo from "@/../public/images/schedule/person.png";
import { CustomHead } from "@/components";
import { Flex, Icon, Typography } from "@/components/common";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { memo } from "react";
import { InlineWidget } from "react-calendly";
import s from "./Schedule.module.scss";

const Schedule = () => {
  const { t } = useTranslation(["schedule", "team"]);

  return (
    <>
      <CustomHead title={t("title")} />
      <Flex className={cn(s.container)}>
        <Flex
          flexDirection="column"
          gap="10px"
          className={s.info}
          alignItems="center"
        >
          <Image
            priority={false}
            placeholder="blur"
            quality={66}
            src={photo}
            alt={t("Andrian Karsanashvili", { ns: "team" })}
            className={s.image}
          />
          <Typography variant="subHeader">
            {t("Schedule sub heading")}
          </Typography>
          <Typography className="pb-2" variant="h1">
            {t("Schedule heading")}
          </Typography>
          <Flex flexDirection="column" gap="15px">
            <Typography variant="h2" className="pb-1">
              {t("Schedule points heading")}
            </Typography>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Flex key={num} alignItems="center" gap="var(--layout)">
                <Icon type="true" />
                <Typography>{t(`Schedule point ${num}`)}</Typography>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <InlineWidget
          url="https://calendly.com/solidaro/discovery"
          styles={{
            width: "700px",
            height: "700px",
          }}
          pageSettings={{
            backgroundColor: "#000",
            hideEventTypeDetails: true,
            hideLandingPageDetails: true,
            textColor: "#fff",
            hideGdprBanner: true,
          }}
        />
      </Flex>
    </>
  );
};

export default memo(Schedule);

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "team", "schedule"])),
      // Will be passed to the page component as props
    },
  };
}
