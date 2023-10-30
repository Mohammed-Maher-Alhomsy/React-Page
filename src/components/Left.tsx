import { CellPlugin } from "@react-page/editor";
import React, { useEffect, useState } from "react";
import "../index.css";
import Status from "./Status";

type Data = {
  title: string;
  description: string;
};

const FormPlugin: CellPlugin<Data> = {
  Renderer: ({ data }) => (
    <div style={{ margin: "0px" }}>
      <div className="filterByStatus ">
        <h4 className="text-uppercase text-secondary">filter by status</h4>
        <ul className="list-group list-group-flush ">
          <Status />
        </ul>
      </div>
    </div>
  ),
  id: "Left Related ideas",
  title: "Left plugin",
  description: "Related ideas Plugin to display just one field",
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
