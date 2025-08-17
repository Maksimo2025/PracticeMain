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

// 1 Сделать контейнер для двух компонент
// создаем первый хук - будет держать все комментарии (useState - comments)
// 1 - компонент  в этой компонентне будем мапить коментарии  ( принимает props comments и ббудем его мапить)
// создаем функцию onSubmit принимает в себе новые комментарии и вызывать setComments
// 2 компонент - addComments принимает функцию onSubmit
// в этой компоненте иметь textarea (большой текст) плюс buttonSubmit
// создать совй стейт для комментов который подвяжем к текстериа и на onChange менять комментарий
// на onClick вызвать функцию onSubmit и в нее прокинуть наш комментарий с текстериа
