import React from "react";
import { CellPlugin } from "@react-page/editor";
import { Url } from "url";

type Data = {
  padding: number;
  name: string;
  image: string;
  imageSize: number;
  imageRadius: number;
};

const NavbarPlugin: CellPlugin<Data> = {
  Renderer: ({ data }) => (
    <div style={{ margin: "0px", width: "100%" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: data.padding,
        }}
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="d-flex align-items-center">
          <img
            src={`${data.image}`}
            alt="logo"
            style={{
              width: data.imageSize,
              height: data.imageSize,
              borderRadius: data.imageRadius,
            }}
          />
        </div>

        <div className="d-flex align-items-center flex-column">
          <h4 className="company-name">Company Name</h4>
        </div>

        <div className="d-flex align-items-center ">Icon</div>
      </nav>
    </div>
  ),
  id: "Navbar",
  title: "Navbar plugin",
  description: "Header",
  version: 1,
  controls: [
    {
      title: "Base config",
      controls: {
        type: "autoform",
        schema: {
          properties: {
            name: {
              type: "string",
              default: "Company name",
            },
            image: {
              type: "string",
              default:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/220px-RedCat_8727.jpg",
            },
          },
          required: ["name"],
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
            padding: {
              type: "integer",
              default: 10,
            },
            imageSize: {
              type: "integer",
              default: 30,
            },
            imageRadius: {
              type: "integer",
              enum: [10, 20, 30],
            },
          },
        },
      },
    },
  ],
};

export default NavbarPlugin;
