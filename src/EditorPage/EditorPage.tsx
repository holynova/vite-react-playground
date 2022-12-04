import { Button, Input } from "antd";
import React, { useState, useCallback } from "react";
import MonacoEditor from "react-monaco-editor";
import json5 from "json5";
// import './EditorPage.scss';
// import { Button } from "antd";
// import Editor from "./Editor";
const sample = {
  a: 1,
  arr: [1, 2, 3],
  obj: { c1: 1, c2: "string" },
};
const log = console.log.bind(console);
function EditorPage() {
  const [input, setInput] = useState("{a:1}");
  const [jsonStr, setJsonStr] = useState("");
  const [error, setError] = useState("");

  const format = useCallback(() => {
    let str = input;
    try {
      log("format", str);
      setError("");
      let res = json5.parse(str);
      setInput(json5.stringify(res, null, 2));
    } catch (e) {
      setError(e?.message);
    }
  }, [input]);

  const onInputChange = useCallback((value) => {
    setInput(value);
  }, []);

  // const inputPart = (
  //   <div>
  //     <Button>pretty</Button>
  //     {error ? <div style={styles.error}>{error}</div> : null}
  //   </div>
  // );
  return (
    <>
      <h1>EditorPage</h1>
      <div className="EditorPage" style={styles.wrapper}>
        <div className="left" style={styles.left}>
          {/* <Input.TextArea
            value={input}
            onChange={onInputChange}
          ></Input.TextArea> */}
        </div>
        <div className="right" style={styles.right}>
          {/* <Button>click</Button> */}
          {/* <Editor></Editor> */}
          <Button onClick={format}>format</Button>
          {error ? <div style={styles.error}>{error}</div> : null}
          <MonacoEditor
            width={"600"}
            height={"600"}
            value={input}
            language="json5"
            onChange={onInputChange}
            theme="vs-dark"
          ></MonacoEditor>
        </div>
      </div>
    </>
  );
}

const styles = {
  wrapper: {
    display: "flex",
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
  },
  error: {
    color: "red",
  },
};
export default EditorPage;
