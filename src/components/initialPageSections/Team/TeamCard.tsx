import { Flex, Typography } from "@/components/common";
import Image, { StaticImageData } from "next/image";
import { memo } from "react";
import s from "./Team.module.scss";

type TeamCardTypes = {
  name: string;
  job: string;
  photo: StaticImageData;
};

export const TeamCard = memo(({ name, job, photo }: TeamCardTypes) => (
  <Flex flexDirection="column" alignItems="center" className={s.card}>
    <Image src={photo} alt={name} />
    <Typography align="center" variant="h2" componentProp="h3">
      {name}
    </Typography>
    <Typography align="center" variant="subHeader" color="alabaster">
      {job}
    </Typography>
  </Flex>
));
