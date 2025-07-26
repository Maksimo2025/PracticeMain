import React from "react";
import { TAB_NAMES } from "../TabBar/const";
import PageMain from "./components/PageMain";
import PageComments from "./components/PageComments";
import PageFeedback from "./components/PageFeedback";

// default:return null - если не один case  не сработает.

// const Pages = {
//   [TAB_NAMES.TAB_ONE]: PageMain,
//   [TAB_NAMES.TAB_TWO]: PageComments,
//   [TAB_NAMES.TAB_THREE]: PageFeedback,
// };

const PageContent = ({ tab }) => {
  switch (tab) {
    case TAB_NAMES.TAB_ONE:
      return <PageMain />;
    case TAB_NAMES.TAB_TWO:
      return <PageComments />;
    case TAB_NAMES.TAB_THREE:
      return <PageFeedback />;
    default:
      return null;
  }
  // const Page = Pages[tab];
  // return <Page />;
};
export default PageContent;
