/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { collection, fetch } from "../../../services/utils/controllers";

const Logistics = (props) => {
  const initialState = {
    code: "",
    batch: null,
    expenditure_id: 0,
    budgetCode: "",
    beneficiary: "",
    sub_budget: "",
    description: "",
    department_id: 0,
    amount: 0,
    activeExp: false,
  };

  const [state, setState] = useState(initialState);

  const fetchBatch = (e) => {
    e.preventDefault();

    if (state.code !== "") {
      fetch("batches", state.code)
        .then((res) => {
          const data = res.data.data;

          setState({
            ...state,
            batch: res.data,
            amount: data.amount,
            budgetCode: data.sub,
            beneficiary: data.beneficiary,
          });

          setState({
            ...state,
            code: "",
            activeExp: true,
          });
        })
        .catch((err) => console.log(err));
    }
  };

  // const requestRefund = (e) => {
  //   e.preventDefault();

  //   const data = {
  //     expenditure_id: state.expenditure_id,
  //     department_id: state.department_id,
  //   };

  //   props.store("refunds", data, {
  //     success: broadcast.CREATED_REFUND_RECORD,
  //     failed: broadcast.CREATED_REFUND_RECORD_FAILED,
  //   });

  //   setState({
  //     ...state,
  //     expenditure_id: 0,
  //     budgetCode: "",
  //     beneficiary: "",
  //     sub_budget: "",
  //     description: "",
  //     amount: 0,
  //     activeExp: false,
  //   });
  // };

  // const fillExpenditure = (exp) => {
  //   setState({
  //     ...state,
  //     expenditure_id: exp.id,
  //     budgetCode: exp.subBudgetHead.budgetCode,
  //     beneficiary: exp.beneficiary,
  //     sub_budget: exp.subBudgetHead.name,
  //     description: exp.description,
  //     amount: exp.amount,
  //     activeExp: true,
  //   });
  // };

  const getDepartments = () =>
    collection("departments")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

  useEffect(() => {
    // if (state.batch !== null) {
    //   setState({
    //     ...state,
    //     batch: state.batch,
    //     // batch: props.batch,
    //   });
    // }

    getDepartments();
  }, []);

  // useEffect(() => {
  //   props.index("departments", {
  //     success: broadcast.FETCH_DEPARTMENTS,
  //     failed: broadcast.FETCH_DEPARTMENTS_FAILED,
  //   });
  // }, []);

  return (
    <>
      <h4 className="mb-4">Logistics</h4>

      <div className="mb-4">
        <form onSubmit={fetchBatch}>
          <div className="row">
            <div className="col-md-12">
              <input
                className="form-control"
                type="text"
                placeholder="ENTER BATCH NUMBER"
                value={state.code}
                onChange={(e) => setState({ ...state, code: e.target.value })}
              />
            </div>
          </div>
        </form>
      </div>

      {state.activeExp ? (
        <div className="row mb-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <table className="table table-bordered table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Budget Code</th>
                      <th>Beneficiary</th>
                      <th>Description</th>
                      <th>Amount</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {state.batch && state.batch.expenditures.length !== 0 ? (
                      state.batch.expenditures.map((exp) => (
                        <tr key={exp.id}>
                          <td>{exp.subBudgetHead.budgetCode}</td>
                          <td>{exp.beneficiary}</td>
                          <td>{exp.amount}</td>
                          <td>{exp.description}</td>

                          <td>
                            <button
                              className="btn btn-success btn-sm"
                              // variant="success"
                              // size="sm"
                              // onClick={() => fillExpenditure(exp)}
                              disabled={exp.refunded !== null}
                            >
                              REQUEST REFUND
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-danger">
                          No Data Found!!
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* {state.activeExp ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="col-md-3">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="BUDGET CODE"
                  value={state.budgetCode}
                  onChange={(e) =>
                    setState({ ...state, budgetCode: e.target.value })
                  }
                  readOnly
                />
              </div>
            </div>

            <div className="col-md-9">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="BENEFICIARY"
                  value={state.beneficiary}
                  onChange={(e) =>
                    setState({ ...state, beneficiary: e.target.value })
                  }
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="SUB BUDGET HEAD"
                  value={state.sub_budget}
                  onChange={(e) =>
                    setState({ ...state, sub_budget: e.target.value })
                  }
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="EXPENDITURE DESCRIPTION"
                  value={state.description}
                  onChange={(e) =>
                    setState({ ...state, description: e.target.value })
                  }
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <input
                  as="select"
                  className="custom-select"
                  value={state.department_id}
                  onChange={(e) =>
                    setState({ ...state, department_id: e.target.value })
                  }
                >
                  <option>SELECT DEPARTMENT</option>

                  {props.departments && props.departments.length !== 0
                    ? props.departments.map((dept) => (
                        <option key={dept.id} value={dept.id}>
                          {dept.name.toUpperCase()}
                        </option>
                      ))
                    : null}
                </input>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="AMOUNT"
                  value={state.amount}
                  onChange={(e) =>
                    setState({ ...state, amount: e.target.value })
                  }
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="btn-group">
                <button
                  className="btn btn-success"
                  disabled={state.department_id === 0}
                >
                  <i className="fa fa-spinner"></i>
                  REQUEST REFUND
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => setState({ ...state, activeExp: false })}
                >
                  <i className="fa fa-close"></i>
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : null} */}
    </>
  );
};

export default Logistics;
