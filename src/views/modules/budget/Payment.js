/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DataTableComponent from "../../../components/commons/tables/DataTableComponent";
import useApi from "../../../services/hooks/useApi";
import { collection } from "../../../services/utils/controllers";
// import { Button, Col, Row, Table } from "react-bootstrap";
// import { connect, useSelector } from "react-redux";
// import { index } from "../../../redux/actions";
// import * as broadcast from "../../../redux/accessControl/types";
// import { FiPrinter } from "react-icons/fi";
// import BatchPrintOut from "./BatchPrintOut";

const Payments = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const { request, data: payments, loading } = useApi(collection);

  const initialState = {
    batch: null,
    isPrinting: false,
  };

  const stats = [
    {
      value: "pending",
      label: "warning",
    },
    {
      value: "registered",
      label: "info",
    },
    {
      value: "queried",
      label: "danger",
    },
    {
      value: "paid",
      label: "success",
    },
    {
      value: "archived",
      label: "secondary",
    },
  ];

  const [state, setState] = useState(initialState);

  // const auth = useSelector((state) => state.access.staff.authenticatedUser);

  const currentStat = (stat) => {
    const curr = stats.filter((s) => stat === s.value);
    return curr[0].label;
  };

  // const handleBatchPrint = (batch) => {
  //   setState({
  //     ...state,
  //     batch,
  //     isPrinting: !state.isPrinting,
  //   });
  // };

  // const printingDone = () => {
  //   setState({
  //     ...state,
  //     batch: null,
  //     isPrinting: !state.isPrinting,
  //   });
  // };

  useEffect(() => {
    request("batches")
      .then((res) => console.log("Response", res))
      .catch((err) => console.log("Error", err));
  }, []);

  const columns = [
    { key: "batch_no", label: "Budget Code" },
    { key: "amount", label: "Amount" },
    { key: "status", label: "Status" },
  ];

  const handleSearch = (str) => {
    setSearchTerm(str);

    if (str !== "") {
      const filtered = payments.filter((row) => {
        return Object.values(row)
          .join(" ")
          .toLowerCase()
          .includes(str.toLowerCase());
      });

      setResults(filtered);
    } else {
      setResults(payments);
    }
  };

  return (
    <>
      {
        !state.isPrinting ? (
          <>
            <div className="row">
              <div className="col-md-12">
                <div className="page-titles">
                  <h2>Payments</h2>
                </div>
              </div>

              <div className="col-md-12">
                <DataTableComponent
                  pageName="Payments"
                  columns={columns}
                  rows={searchTerm.length < 1 ? payments : results}
                  // handleEdit={handleEdit}
                  // handleDelete={handleDestroy}
                  term={searchTerm}
                  searchKeyWord={handleSearch}
                  isFetching={loading}
                />
              </div>
            </div>
          </>
        ) : null
        // <BatchPrintOut batch={state.batch} onClose={printingDone} auth={auth} />
      }
    </>
  );
};

// const mapStateToProps = (state) => ({
//   batches: state.budgetting.batches.collection,
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     index: (entity, broadcast) => dispatch(index(entity, broadcast)),
//   };
// };

export default Payments;
