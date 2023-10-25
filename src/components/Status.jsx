import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom/dist";

const Status = () => {
  // const navigate = useNavigate();
  // const location = useLocation();
  const [active, setActive] = useState(null);

  // const params = new URLSearchParams(location.search);
  // const currentStatusID = params.get("status");

  // const clickHandler = () => {
  //   params.set("status", id);
  //   navigate({ search: params.toString() });
  // };

  // useEffect(() => {
  //   setActive(currentStatusID);
  // }, [currentStatusID]);
  const [status, setStatus] = useState([]);
  useEffect(() => {
    const getStatus = async () => {
      try {
        const response = await fetch(
          "https://jira-test.innovura.io/rest/community/1.0/portal/ISD/statuses"
        );
        console.log(response);
        const status = response?.data.statusSummary;
        setStatus(status);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getStatus();
  }, []);

  return (
    <>
      {status.map((item) => (
        <li
          className={`mb-2 p-1 list-group-item ${
            active === item?.statusModel.id ? "bg-light rounded p-2" : ""
          }`}
          // onClick={clickHandler}
        >
          <a
            href="#"
            className={` text-decoration-none ${
              active === item?.statusModel.id ? "text-dark" : "text-primary"
            } mr-4`}
          >
            {item?.statusModel.name}
          </a>

          <a
            href="#"
            className={` text-decoration-none ${
              active === item?.statusModel.id ? "text-dark" : "text-secondary"
            }`}
          >
            {item?.count}
          </a>
        </li>
      ))}
    </>
  );
};

export default Status;
