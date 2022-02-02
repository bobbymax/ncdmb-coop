/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import DataTableComponent from "../../../components/commons/tables/DataTableComponent";
import useApi from "../../../services/hooks/useApi";
import { fetchCollection } from "../../../services/utils/testControllers";

const Fund = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const {
    data: funds,
    request: fetch,
    loading: isLoading,
  } = useApi(fetchCollection);

  useEffect(() => {
    fetch("creditBudgetHeads");
  }, []);

  const columns = [
    {
      label: "Sub Budget Head",
      key: "sub_budget_head_id",
    },
    {
      label: "Amount",
      key: "approved_amount",
    },
  ];
  const handleEdit = (data) => {};

  const handleDestroy = (data) => {};

  const handleSearch = (str) => {
    setSearchTerm(str);

    if (str !== "") {
      const filtered = funds.filter((row) => {
        return Object.values(row)
          .join(" ")
          .toLowerCase()
          .includes(str.toLowerCase());
      });

      setResults(filtered);
    } else {
      setResults(funds);
    }
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <DataTableComponent
          pageName="Credit Sub Budget Head"
          columns={columns}
          rows={searchTerm.length < 1 ? funds : results}
          handleEdit={handleEdit}
          handleDelete={handleDestroy}
          term={searchTerm}
          searchKeyWord={handleSearch}
          isFetching={isLoading}
        />
      </div>
    </div>
  );
};

export default Fund;
