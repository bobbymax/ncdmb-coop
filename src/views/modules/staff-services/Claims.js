import React, { useEffect, useState } from "react";
import BasicTable from "../../../components/commons/tables/BasicTable";
import DataTableComponent from "../../../components/commons/tables/DataTableComponent";
import useApi from "../../../services/hooks/useApi";
import { collection } from "../../../services/utils/controllers";

const Claims = () => {
  const { loading: isLoading, request, data: claims } = useApi(collection);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  // const [open, setOpen] = useState(false)

  const columns = [
    { label: "Title", key: "title" },
    { label: "Amount", key: "amount" },
  ];

  // const handleUpdate = data => {
  //     //
  // }

  // const handleDestroy = data => {

  // }

  const handleSearch = (str) => {
    setSearchTerm(str);

    if (str !== "") {
      const filtered = claims.filter((row) => {
        return Object.values(row)
          .join(" ")
          .toLowerCase()
          .includes(str.toLowerCase());
      });

      setResults(filtered);
    } else {
      setResults(claims);
    }
  };

  useEffect(() => {
    request("claims");
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="page-titles">
          <button className="btn btn-success">
            <i className="fa fa-plus-square"></i> Add Sub budget Head
          </button>
        </div>
      </div>

      <div className="col-lg-12">
        <DataTableComponent
          pageName="Claims"
          columns={columns}
          rows={searchTerm.length < 1 ? claims : results}
          term={searchTerm}
          searchKeyWord={handleSearch}
          isFetching={isLoading}
        />
      </div>
    </div>
  );
};

export default Claims;
