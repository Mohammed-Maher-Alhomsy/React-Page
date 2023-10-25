import React from "react";
import type { CellPlugin } from "@react-page/editor";

type Data = {
  screenName: string;
  height: number;
  title: string;
};

const CustomConentPluginTwitter: CellPlugin<Data> = {
  Renderer: ({ data }) => (
    <div>
      <h4>{data.title}</h4>
    </div>
  ),
  id: "twitter-timeline",
  version: 1,
};

export default CustomConentPluginTwitter;
