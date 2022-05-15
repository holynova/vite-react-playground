import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { observer } from "mobx-react";
// import './TodoReport.less'
// import  {log} from ''
interface Props {}

const TodoReport: React.FC<Props> = (props) => {
  // const [loading, setLoading] = useState(false)
  return (
    <div className="TodoReport">
      <h3>TodoReport</h3>
      <div>{props?.store?.report()}</div>
    </div>
  );
};

export default observer(TodoReport);
