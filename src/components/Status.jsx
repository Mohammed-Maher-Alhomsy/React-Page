import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom/dist";

const Status = () => {
  const [active, setActive] = useState(null);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    const fetchStatus = async () => {
      const res = await fetch(
        "https://jira-test.innovura.io/rest/community/1.0/portal/ISD/statuses"
      );

      const { statusSummary } = await res.json();

      console.log(statusSummary);
      setStatus(statusSummary);
    };

    fetchStatus();
  }, []);

  return (
    <>
      {status.map((item) => (
        <li
          className={`mb-2 p-1 list-group-item ${
            active === item?.statusModel.id ? "bg-light rounded p-2" : ""
          }`}
          // onClick={clickHandler}
          key={item}
        >
          <a
            href="/#"
            className={` text-decoration-none ${
              active === item?.statusModel.id ? "text-dark" : "text-primary"
            } mr-4`}
          >
            {item?.statusModel.name}
          </a>

          <a
            href="/#"
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
