import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";
import {} from "antd";
import "./AirPage.less";
import InviteModal from "./components/InviteModal";
// import  {log} from ''
interface Props {}

const AirPage: React.FC<Props> = (props) => {
  // const [loading, setLoading] = useState(false)
  return (
    <div className="AirPage">
      <header>header</header>
      <main>
        <h3>AirPage</h3>
        <InviteModal></InviteModal>
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default AirPage;
