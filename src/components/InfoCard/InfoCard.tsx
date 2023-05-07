import { memo } from "react";
import { Flex, Typography } from "../common";
import s from "./InfoCard.module.scss";

type InfoCardProps = {
  header: string;
  value: string;
};

export const InfoCard = memo(({ header, value }: InfoCardProps) => (
  <Flex className={s.content} flexDirection="column" gap="5px">
    <Typography variant="h2" color="alabaster">
      {header}
    </Typography>
    <Typography variant="h0" color="chalice">
      {value}
    </Typography>
  </Flex>
));
