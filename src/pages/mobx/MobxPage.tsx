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
// import './MobxPage.less'
// import  {log} from ''

interface Props {}

const MobxPage = (props) => {
  // const [loading, setLoading] = useState(false)
  const { store } = props;

  const addTask = useCallback(() => {
    store.add(new Date().toLocaleTimeString());
    store.report();
  }, []);

  return (
    <div className="MobxPage">
      <h3>MobxPage</h3>
      <h3>{props.title}</h3>
      <div>
        {store.todoList.map((x) => {
          return (
            <li key={x.id} onClick={() => store.toggle(x.id)}>
              {`task:${x.task} , ${x.done ? "✅" : "[  ]"}`}
            </li>
          );
        })}
      </div>
      <div>
        <h3>report</h3>
        <p>{store.report()}</p>
      </div>
      <button onClick={addTask}>add</button>
    </div>
  );
};

export default observer(MobxPage);
