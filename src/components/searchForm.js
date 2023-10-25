import React, { useRef } from "react";
// import { BiSearchAlt } from "react-icons/bi";
import "../index.css";
// import { useLocation, useNavigate } from "react-router-dom";

const SearchInput = ({ getI_item_Whene_Search }) => {
  // const searchValue = useRef("");
  // let Location = useLocation();
  // const navigate = useNavigate();

  // const params = new URLSearchParams(Location.search);
  // const HandlerSearch = () => {
  //   const time = setTimeout(() => {
  //     params.set("text", searchValue.current.value);
  //     navigate({ search: params.toString() });
  //   }, 1000);

  //   return () => clearTimeout(time);
  // };
  // const checkEnter = (e) => {
  //   if (e.key === "Enter") {
  //     navigate({ search: params.toString(), pathname: "/" });
  //   }
  // };
  return (
    <>
      <div className="SearchInput ml-auto mb-2 ">
        {/* <BiSearchAlt className="icon-search" /> */}
        <input
          type="text"
          // ref={searchValue}
          // onKeyUp={() => HandlerSearch()}
          // onKeyDown={(e) => checkEnter(e)}
          placeholder="Search ideas"
          title="Click Enter To Search"
        />
      </div>
    </>
  );
};

export default SearchInput;
