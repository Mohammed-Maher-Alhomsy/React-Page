import { CellPlugin } from "@react-page/editor";
import React from "react";
import SearchInput from "../components/searchForm.js";
import "../index.css";

type Data = {
  title: string;
  description: string;
};

const FormPlugin: CellPlugin<Data> = {
  Renderer: ({ data }) => (
    <div style={{ margin: "60px" }}>
      <SearchInput />
      <div className="Related-ideas">
        <h4>Related ideas</h4>
        <ul>
          <li>
            <a href="#">
              Have the option to choose to include and not to include sub-tasks
              in custom reports
            </a>
          </li>

          <li>
            <a href="#">
              Have the option to choose to include and not to include sub-tasks
              in custom reports
            </a>
          </li>

          <li>
            <a href="#">
              Have the option to choose to include and not to include sub-tasks
              in custom reports
            </a>
          </li>

          <li>
            <a href="#">
              Have the option to choose to include and not to include sub-tasks
              in custom reports
            </a>
          </li>

          <li>
            <a href="#">
              Have the option to choose to include and not to include sub-tasks
              in custom reports
            </a>
          </li>

          <li>
            <a href="#">
              Have the option to choose to include and not to include sub-tasks
              in custom reports
            </a>
          </li>

          <li>
            <a href="#">
              Have the option to choose to include and not to include sub-tasks
              in custom reports
            </a>
          </li>

          <li>
            <a href="#">
              Have the option to choose to include and not to include sub-tasks
              in custom reports
            </a>
          </li>
        </ul>
      </div>
    </div>
  ),
  id: "Right Related ideas",
  title: "Right plugin",
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
