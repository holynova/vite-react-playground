import { Button } from "antd";
import * as monaco from "monaco-editor";

import React, { useEffect, useRef, useState, useCallback } from "react";
// import './Editor.scss';
function Editor() {
  const ref = useRef(null);
  const [editor, setEditor] =
    useState<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [data, setData] = useState({
    a: 1,
    arr: [1, 2, 3],
    obj: { c1: 1, c2: "string" },
  });

  useEffect(() => {
    function init() {
      if (ref.current && !editor) {
        const res = monaco.editor.create(ref.current, {
          value: JSON.stringify(data),
          language: "JSON",
        });
        setEditor(res);
      }
    }
    init();
    return () => {
      editor?.dispose();
    };
  }, []);

  const format = useCallback(() => {
    editor?.getAction("editor.action.formatDocument").run();
  }, []);

  return (
    <>
      <Button onClick={format}>format</Button>
      <div
        className="Editor"
        ref={ref}
        style={{ width: "100vw", height: "100vh" }}
      >
        {/* <h1>Editor</h1> */}
      </div>
    </>
  );
}
export default Editor;
