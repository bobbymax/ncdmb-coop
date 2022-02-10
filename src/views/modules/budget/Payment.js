/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BatchPrintOut from "../../../components/commons/BatchPrintOut";
import DataTableComponent from "../../../components/commons/tables/DataTableComponent";
import useApi from "../../../services/hooks/useApi";
import { collection } from "../../../services/utils/controllers";

const Payments = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const { request, data: batches, loading } = useApi(collection);

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

  const handleBatchPrint = (batch) => {
    setState({
      ...state,
      batch,
      isPrinting: !state.isPrinting,
    });
  };

  const printingDone = () => {
    setState({
      ...state,
      batch: null,
      isPrinting: !state.isPrinting,
    });
  };

  useEffect(() => {
    request("batches");
  }, []);

  const columns = [
    { key: "batch_no", label: "Budget Code" },
    { key: "amount", label: "Amount" },
    { key: "status", label: "Status" },
  ];

  return (
    <>
      {!state.isPrinting ? (
        <>
          <>
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Payments</h4>
                </div>

                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped vertical middle table reponsive-sm">
                      <thead>
                        <th>BUDGET CODE</th>
                        <th>AMOUNT</th>
                        <th>STATUS</th>
                      </thead>

                      <tbody>
                        {batches.map((batch) => (
                          <tr key={batch.id}>
                            {/* <td></td> */}

                            <td>
                              <button
                                className="btn btn-success mr-3"
                                onClick={() => handleBatchPrint(batch)}
                              >
                                <i className="fa fa-print"></i>
                                {/* <FiPrinter /> */}
                              </button>
                              {batch.batch_no}
                            </td>
                            <td>{`NGN ${new Intl.NumberFormat().format(
                              batch.amount
                            )}`}</td>
                            <td>{batch.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* <DataTableComponent
                pageName="Payments"
                columns={columns}
                rows={searchTerm.length < 1 ? batches : results}
                // handleEdit={handleEdit}
                // handleDelete={handleDestroy}
                term={searchTerm}
                searchKeyWord={handleSearch}
                isFetching={loading}
              /> */}
            </div>
          </>
        </>
      ) : (
        <BatchPrintOut batch={state.batch} onClose={printingDone} />
      )}
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
