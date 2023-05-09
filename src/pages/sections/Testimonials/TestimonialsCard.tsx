import { Flex, Typography } from "@/components/common";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { memo } from "react";
import s from "./Testimonials.module.scss";

type TestimonialsCardTypes = {
  testimonial: {
    text: string;
    name: string;
    job: string;
    photo: StaticImageData;
    website?: string;
  };
};

export const TestimonialsCard = memo(
  ({ testimonial }: TestimonialsCardTypes) => {
    const { t } = useTranslation(["testimonials"]);
    const { text, name, job, photo, website } = testimonial;

    const Component = (
      <Flex flexDirection="column" className={cn(s.card)} gap="var(--layout)">
        <QuoteSvg />
        <Typography className={s.cardText}>{t(text)}</Typography>
        <Flex className={s.line} />
        <Flex justifyContent="space-between">
          <Flex flexDirection="column" gap="5px">
            <Typography variant="h3">{name}</Typography>
            <Typography variant="bodySm" color="blue">
              {job}
            </Typography>
          </Flex>
          <Image src={photo} alt={name} width={56} height={56} />
        </Flex>
      </Flex>
    );

    return website ? (
      <Link href={website} target="_blank" className={s.cardLink}>
        {Component}
      </Link>
    ) : (
      Component
    );
  }
);

export const QuoteSvg = memo(() => (
  <svg
    enableBackground="new 0 0 33 25"
    height="25px"
    id="Layer_1"
    version="1.1"
    viewBox="0 0 33 25"
    width="33px"
  >
    <g>
      <path
        d="M18.006,6.538c0-1.973,0.662-3.554,1.988-4.743c1.326-1.19,2.977-1.785,4.947-1.785   c2.517,0,4.488,0.799,5.916,2.397C32.285,4.004,33,6.13,33,8.782c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.061,4.743c-1.188,1.258-2.43,2.244-3.723,2.958c-1.291,0.714-2.413,1.239-3.365,1.581l-3.265-5.508   c1.36-0.545,2.517-1.412,3.468-2.602c0.953-1.19,1.496-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.724-1.786   C18.566,10.09,18.006,8.509,18.006,6.538z M0.359,6.538c0-1.973,0.663-3.554,1.989-4.743C3.674,0.604,5.324,0.01,7.295,0.01   c2.518,0,4.488,0.799,5.916,2.397c1.429,1.597,2.143,3.723,2.143,6.375c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.06,4.743c-1.188,1.258-2.431,2.244-3.724,2.958C6.004,24.133,4.883,24.658,3.93,25l-3.264-5.508   c1.36-0.545,2.516-1.412,3.467-2.602c0.953-1.19,1.497-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.723-1.786   C0.92,10.09,0.359,8.509,0.359,6.538z"
        fill="white"
      />
    </g>
  </svg>
));
