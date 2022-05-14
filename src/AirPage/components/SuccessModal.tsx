import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { Modal, Button } from "antd";
// import './SuccessModal.less'
// import  {log} from ''
interface Props {}

const SuccessModal: React.FC<Props> = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <Modal>
      <div className="modal-content">
        <h3>all done!</h3>
        <Button onClick={() => setVisible(false)}>ok</Button>
      </div>
    </Modal>
  );
  // return (
  //   <div className="SuccessModal">
  //     <h3>SuccessModal</h3>
  //   </div>
  // );
};

export default SuccessModal;
