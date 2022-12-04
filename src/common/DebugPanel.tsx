import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";
// import  {log} from ''
interface Props {}
const DebugPanel = (props: any) => {
  return (
    <pre style={{ fontSize: 12, backgroundColor: "#ffe" }}>
      {typeof props?.children === "string"
        ? props?.children
        : JSON.stringify(props.children, null, 2)}
    </pre>
  );
};
export default DebugPanel;
