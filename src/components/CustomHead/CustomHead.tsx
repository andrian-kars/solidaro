import appleTouch from "@/../public/favicons/apple-touch-icon.png";
import icon16 from "@/../public/favicons/favicon-16x16.png";
import icon32 from "@/../public/favicons/favicon-32x32.png";
import safariPinnedTab from "@/../public/favicons/safari-pinned-tab.svg";
import Head from "next/head";

export const CustomHead = () => (
  <Head>
    <link rel="apple-touch-icon" sizes="180x180" href={appleTouch.src} />
    <link rel="icon" type="image/png" sizes="32x32" href={icon32.src} />
    <link rel="icon" type="image/png" sizes="16x16" href={icon16.src} />
    <link rel="mask-icon" href={safariPinnedTab.src} color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
  </Head>
);
