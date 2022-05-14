import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { Button } from "antd";
// import {} from "antd";
// import './HomePage.less'
// import  {log} from ''
interface Props {}
let start = new Date().getTime();
const HomePage: React.FC<Props> = (props) => {
  // const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setCount((prev) => prev + 1);
      setTime(Date.now() - start);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    start = new Date().getTime();
  }, []);

  return (
    <div className="HomePage">
      <h3>HomePage</h3>
      <h4>count = {count}</h4>
      <h5>realTime = {time / 1000}</h5>
      <Button type="primary">antd</Button>
    </div>
  );
};

export default HomePage;
