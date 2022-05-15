import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { observer } from "mobx-react";

import { todoStore } from "./store";
//  import {} from 'antd'
import "./MobxPage.less";
import TodoList from "./components/TodoList";
import TodoReport from "./components/TodoReport";
// import  {log} from ''

interface Props {}

const MobxPage = (props) => {
  // const [loading, setLoading] = useState(false)
  const { store } = props;

  return (
    <div className="MobxPage">
      <h3>MobxPage</h3>
      <TodoList store={todoStore}></TodoList>
      <TodoReport store={todoStore}></TodoReport>
    </div>
  );
};

export default observer(MobxPage);
