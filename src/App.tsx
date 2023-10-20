import React from "react";
import { useState } from "react";

import Editor from "@react-page/editor";
import slate from "@react-page/plugins-slate";
import image from "@react-page/plugins-image";

import type { Value } from "@react-page/editor";

import "@react-page/editor/lib/index.css";

const cellPlugins = [slate(), image];

const App = () => {
  const [value, setValue] = useState<Value | null>(null);

  return (
    <>
      <Editor cellPlugins={cellPlugins} value={value} />
    </>
  );
};

export default App;
