import { CustomHead } from "@/components";
import {
  Info,
  Landing,
  Questions,
  Service,
  Team,
  Testimonials,
} from "@/components/initialPageSections";
import { breakpoints } from "@/constants";
import { useWindowDimensions } from "@/hooks";
import ReactFullpage from "@fullpage/react-fullpage";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const SEL = "page-section";

// This default export is required
export default function Home() {
  const { width } = useWindowDimensions();
  const { t } = useTranslation();

  return (
    <>
      <CustomHead
        title={t("title")}
        description={t("description")}
        keywords={t("keywords")}
      />
      <ReactFullpage
        licenseKey="L4BPH-Q0M78-2HMK7-84MBJ-ZXRZN"
        credits={{ enabled: false }}
        navigation={width >= breakpoints.tablet}
        scrollingSpeed={1000}
        anchors={[
          "landing",
          "info",
          "service",
          "team",
          "testimonials",
          "questions",
        ]}
        sectionSelector={`.${SEL}`}
        render={() => (
          <ReactFullpage.Wrapper>
            <Landing className={SEL} />
            <Info className={SEL} />
            <Service className={SEL} />
            <Team className={SEL} />
            <Testimonials className={SEL} />
            <Questions className={SEL} />
          </ReactFullpage.Wrapper>
        )}
      />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "initial",
        "testimonials",
        "team",
      ])),
      // Will be passed to the page component as props
    },
  };
}
