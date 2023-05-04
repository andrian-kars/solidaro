import { memo } from "react";
import Image from "next/image";
import logoPic from "@/../public/images/initial/logoPic.png";

export const Landing = memo(() => (
  <section>
    <Image src={logoPic} alt="Logo Tree" />
  </section>
));
