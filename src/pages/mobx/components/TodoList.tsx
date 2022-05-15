import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { observer } from "mobx-react";

// import './TodoList.less'
// import  {log} from ''
interface Props {}

const TodoList: React.FC<Props> = (props) => {
  // const [loading, setLoading] = useState(false)
  const { store } = props;

  const addTask = useCallback(() => {
    store.add("task" + new Date().toLocaleTimeString());
    store.report();
  }, []);

  return (
    <div className="TodoList">
      <h3>TodoList</h3>
      <button onClick={addTask}>add</button>
      <div>
        {store.todoList.map((x) => {
          return (
            <li
              key={x.id}
              onClick={() => store.toggle(x.id)}
              className={x.done ? "done" : ""}
            >
              {`task:${x.task} , ${x.done ? "✅" : "[  ]"}`}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default observer(TodoList);
