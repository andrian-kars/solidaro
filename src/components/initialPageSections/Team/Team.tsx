import { team } from "@/../public/team";
import { Button, Flex, Typography } from "@/components/common";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import { memo } from "react";
import s from "./Team.module.scss";
import { TeamCard } from "./TeamCard";

type TeamTypes = {
  className: string;
};

export const Team = memo(({ className }: TeamTypes) => {
  const { t } = useTranslation(["initial", "common", "team"]);

  return (
    <Flex as="section" className={cn(s.container, className)}>
      <Flex justifyContent="center" className={cn(s.content, "layout")}>
        <Flex justifyContent="center" className={s.cards}>
          {team.map(({ name, job, photo }) => (
            <TeamCard
              key={name}
              name={t(name, { ns: "team" })}
              job={t(job, { ns: "team" })}
              photo={photo}
            />
          ))}
        </Flex>
        <Flex flexDirection="column" gap="var(--layout)" className={s.text}>
          <Typography variant="h1">{t("Team heading")}</Typography>
          <Typography>{t("Team p 1")}</Typography>
          <Typography className="pb-1">{t("Team p 2")}</Typography>
          <Button borderWidth={2} href="/schedule">
            <Typography variant="bodyBg" align="center">
              {t("Speak to team", { ns: "common" })}
            </Typography>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
});
