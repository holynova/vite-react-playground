import { useState } from "react";
import AirPage from "./AirPage/AirPage";
import HomePage from "./HomePage/HomePage";
import HookPage from "./HookPage/HookPage";
import MobxPage from "./pages/mobx/MobxPage";
import { todoStore } from "./pages/mobx/store";

function App() {
  return (
    <MobxPage
      store={todoStore}
      title={"title" + new Date().toLocaleTimeString()}
    ></MobxPage>
  );
  // return <HomePage></HomePage>;
  // return <HookPage></HookPage>;
  // return <AirPage></AirPage>;
}

export default App;
