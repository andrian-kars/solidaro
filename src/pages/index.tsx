import ReactFullpage from "@fullpage/react-fullpage";
import { Landing } from "./sections";

const SEL = "page-section";

// This default export is required
export default function Home() {
  return (
    <ReactFullpage
      licenseKey="L4BPH-Q0M78-2HMK7-84MBJ-ZXRZN"
      credits={{ enabled: false }}
      navigation
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
          {[0, 1, 2, 3, 4, 5, 6].map((key) => (
            <Landing key={key} className={SEL} num={key} />
          ))}
        </ReactFullpage.Wrapper>
      )}
    ></ReactFullpage>
  );
}
