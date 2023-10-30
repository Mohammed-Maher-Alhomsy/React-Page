import React, { useEffect } from "react";
import { useState } from "react";

import Editor, { ColorPickerField } from "@react-page/editor";
import slate, { pluginFactories } from "@react-page/plugins-slate";
import image from "@react-page/plugins-image";

import type { Value } from "@react-page/editor";

import "@react-page/editor/lib/index.css";

import type { CellPlugin } from "@react-page/editor";

import FormPlugin from "./components/Form.tsx";
import RightPlugin from "./components/Right.tsx";
import LeftPlugin from "./components/Left.tsx";
import NavbarPlugin from "./components/Navbar.tsx";

type Data = {
  title: string;
  advancedProperty: string;
  padding: number;
  backgroundColor: string;
  input: string;
  image: string;
};

const CustomConentPluginTwitter: CellPlugin<Data> = {
  Renderer: ({ data }) => (
    <div
      style={{
        padding: data.padding,
        backgroundColor: data.backgroundColor,
        backgroundImage: `url(${data.image})`,
        height: 320,
      }}
    >
      <h4>{data.title}</h4>
      <p>{data.advancedProperty}</p>

      <input type="text" value={data.input} />
    </div>
  ),
  id: "myFirstCellPlugin",
  title: "My first cell plugin",
  description: "My first cell plugin just displays a title",
  version: 1,
  controls: [
    {
      title: "Base config",
      controls: {
        type: "autoform",
        schema: {
          properties: {
            title: {
              type: "string",
            },
            input: {
              type: "string",
              default: "",
            },
            image: {
              type: "string",
            },
          },
          required: [],
        },
      },
    },
    {
      title: "Basic Stylies",
      controls: {
        type: "autoform",
        schema: {
          type: "object",
          properties: {
            advancedProperty: {
              type: "string",
            },
            padding: {
              type: "number",
            },
            backgroundColor: {
              type: "string",
            },
          },
        },
      },
    },
  ],
};

const cellPlugins = [
  CustomConentPluginTwitter,
  FormPlugin,
  RightPlugin,
  LeftPlugin,
  NavbarPlugin,
];

const App = () => {
  // const getValue = JSON.parse(localStorage.getItem("value") || "");
  const [value, setValue] = useState<Value | null>(null);

  const handleChange = (value: Value) => {
    setValue(() => value);
    // localStorage.setItem("value", JSON.stringify(value));
  };

  // useEffect(() => {
  //   fetch(
  //     "https://jira-test.innovura.io/rest/community/1.0/portal/ISD/statuses"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <main
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        flexGrow: 1,
        flexWrap: "wrap",
      }}
    >
      <Editor
        cellPlugins={cellPlugins}
        value={value}
        onChange={handleChange}
        // sidebarPosition=""
      />
    </main>
  );
};

export default App;

/*


const RedH1 = ({ style, ...props }) => (
  <h1 style={{ ...style, color: "red" }} {...props} />
);

const pluginFactoriesComp = pluginFactories.createComponentPlugin<{
  color: string;
}>({
  addHoverButton: true,
  addToolbarButton: true,
  type: "SetColor",
  object: "mark",
  icon: <span>Color</span>,
  label: "Set Color",
  Component: "span",
  getStyle: ({ color }) => ({ color }),
  controls: {
    type: "autoform",
    schema: {
      type: "object",
      required: ["color"],
      properties: {
        color: {
          uniforms: {
            component: ColorPickerField,
          },
          default: "rgba(0,0,255,1)",
          type: "string",
        },
      },
    },
  },
});

const myCustomSlatePlugin = slate((def) => ({
  ...def,
  id: "my-custom-slate-plugin",
  title: "Input Text",
  description: "Description",
}));

*/
