import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { Button } from "antd";
// import './HookPage.less'
// import  {log} from ''
interface Props {}

const HookPage: React.FC<Props> = (props) => {
  // const [loading, setLoading] = useState(false)
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const c = a + b;

  useEffect(() => {
    console.log(a, b, c);
  }, [a]);

  useEffect(() => {
    console.log(a, b, c);
  }, [b]);

  useEffect(() => {
    console.log(a, b, c);
  }, [c]);

  return (
    <div className="HookPage">
      <h3>HookPage</h3>
      <Button onClick={() => setA((prev) => prev + 1)}> a++</Button>
      <Button onClick={() => setB((prev) => prev + 1)}> b++</Button>
      {/* <pre>{JSON.stringify({ a, b, c }, null, 2)}</pre> */}
    </div>
  );
};

export default HookPage;
