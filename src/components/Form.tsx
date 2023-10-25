import { CellPlugin } from "@react-page/editor";
import React from "react";
import { Field, Label } from "@atlaskit/form";
import Textfield from "@atlaskit/textfield";
import EditorCore from "./Editor.tsx";

import Button from "@atlaskit/button/standard-button";

type Data = {
  title: string;
  description: string;
};

const FormPlugin: CellPlugin<Data> = {
  Renderer: ({ data }) => (
    <div style={{ margin: "60px" }}>
      <div className="cardinfo mx-5 ">
        <h3>Create an idea</h3>

        <Label htmlFor="title">Title:</Label>

        <Field name="title">
          {({ fieldProps }) => (
            <Textfield placeholder="Title" {...fieldProps} />
          )}
        </Field>

        <Label htmlFor="description">Description:</Label>
        <EditorCore />

        <Button name="btn">Create</Button>
        {/* <Link
          to={"/"}
          className="btn px-5 my-3 custom-button align-items-center justify-content-between"
        >
          Create
        </Link> */}
      </div>
    </div>
  ),
  id: "FormPlugin",
  title: "form plugin",
  description: "Form Plugin to display just one field",
  version: 1,
  // controls: [
  //   {
  //     title: "Base config",
  //     controls: {
  //       type: "autoform",
  //       schema: {
  //         properties: {
  //           title: {
  //             type: "string",
  //             default: "Title",
  //           },
  //         },
  //         required: ["title"],
  //       },
  //     },
  //   },
  //   {
  //     title: "Basic Stylies",
  //     controls: {
  //       type: "autoform",
  //       schema: {
  //         type: "object",
  //         properties: {},
  //       },
  //     },
  //   },
  // ],
};

export default FormPlugin;
