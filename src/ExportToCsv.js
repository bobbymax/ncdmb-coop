import React from "react";
import { CSVLink } from "react-csv";

const ExportToCsv = () => {
  const headers = [
    { label: "First Name", key: "firstname" },
    { label: "Last Name", key: "lastname" },
    { label: "Email", key: "email" },
  ];

  const data = [
    { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
    { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
    { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" },
  ];

  return (
    <CSVLink className="btn btn-primary" data={data} headers={headers}>
      Download CSV
    </CSVLink>
  );
};

export default ExportToCsv;
