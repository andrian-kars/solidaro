import { memo } from "react";
import Image from "next/image";
import logoPic from "@/../public/images/initial/logoPic.png";
import { Flex, Typography } from "@/components/common";
import s from "./Landing.module.scss";
import cn from "classnames";

type LandingTypes = {
  className: string;
  num: number;
};

export const Landing = memo(({ className, num }: LandingTypes) => (
  <section className={cn(s.container, className, s["container" + num])}>
    <Flex as="div" className={cn(s.content, "layout")}>
      <Typography variant="h1" componentProp="h2" className={cn(s.text, "pb")}>
        Your website, our expertise
      </Typography>
      <Typography
        variant="h0"
        componentProp="h3"
        className={cn(s.subText, "pb-2")}
      >
        We take care of the website building process, so you can focus on your
        business
      </Typography>
      <Typography
        variant="subHeader"
        componentProp="h2"
        className={cn(s.subText, "pb-2")}
      >
        Create a website that truly represents your brand with Solidaro&apos;s
        experienced web development team
      </Typography>
    </Flex>
  </section>
));
