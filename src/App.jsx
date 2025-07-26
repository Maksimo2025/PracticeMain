import React, { useState } from "react";
import PageWrapper from "./components/PageWrapper";
import { TAB_NAMES } from "./components/TabBar/const";
import PageContent from "./components/PageContent";
import TabBar from "./components/TabBar/Index";

const App = () => {
  const [tab, setTab] = useState(TAB_NAMES.TAB_ONE);

  return (
    <PageWrapper>
      <TabBar tab={tab} setTab={setTab} />
      <PageContent tab={tab} />
    </PageWrapper>
  );
};
export default App;
