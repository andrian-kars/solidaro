import { breakpoints } from "@/constants";
import { useWindowDimensions } from "@/hooks";
import ReactFullpage from "@fullpage/react-fullpage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Landing } from "./sections";

const SEL = "page-section";

// This default export is required
export default function Home() {
  const { width } = useWindowDimensions();

  return (
    <ReactFullpage
      licenseKey="L4BPH-Q0M78-2HMK7-84MBJ-ZXRZN"
      credits={{ enabled: false }}
      navigation={width >= breakpoints.tablet}
      scrollingSpeed={1000}
      anchors={[
        "firstPage",
        "secondPage",
        "thirdPage",
        "fourthPage",
        "fifthPage",
        "sixthPage",
      ]}
      sectionSelector={`.${SEL}`}
      render={() => (
        <ReactFullpage.Wrapper>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((key) => (
            <Landing key={key} className={SEL} num={key} />
          ))}
        </ReactFullpage.Wrapper>
      )}
    ></ReactFullpage>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "initial"])),
      // Will be passed to the page component as props
    },
  };
}
