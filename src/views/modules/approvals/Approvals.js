/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { collection, store } from "../../../services/utils/controllers";
// import { connect } from 'react-redux'
// import { fetch, store, update } from '../../../redux/actions'
// import * as broadcast from '../../../redux/accessControl/types'
import { getPaymentType, userHasRole } from "../../../services/utils/helpers";
// import { getPaymentType } from '../../../services/helpers/functions'

const Approvals = (props) => {
  const auth = useSelector((state) => state.auth.value.user);

  const initialState = {
    batch_code: "",
    batch: null,
    expenditure: null,
    batch_id: 0,
    expenditure_id: 0,
    description: "",
    beneficiary: "",
    amount: 0,
    modification: 0,
    previousTotal: 0,
    grandTotal: 0,
    status: "",
    isUpdating: false,
    showDetails: false,
  };

  const [state, setState] = useState(initialState);
  // const

  const fetchPaymentBatch = (e) => {
    e.preventDefault();

    if (state.batch_code !== "") {
      collection("batches/" + state.batch_code)
        .then((res) => setState({ ...state, batch: res.data.data }))
        .catch((err) => console.log(err));
    }

    setState({
      ...state,
      batch_code: "",
      showDetails: true,
    });
  };

  const handleExpenditureUpdate = (e) => {
    e.preventDefault();

    const data = {
      amount: state.amount,
    };

    // props.update("batch/expenditures", state.expenditure_id, data, {
    //   success: broadcast.UPDATED_BATCHED_EXPENDITURE_RECORD,
    //   failed: broadcast.UPDATED_BATCHED_EXPENDITURE_RECORD_FAILED,
    // });

    // setState({
    //   ...state,
    //   expenditure: null,
    //   expenditure_id: 0,
    //   description: "",
    //   beneficiary: "",
    //   amount: 0,
    //   isUpdating: false,
    //   previousTotal: 0,
    // });
  };

  const fetchExpenditureSubBudgetHead = (batch) => {
    return batch.expenditures[0].subBudgetHead.budgetCode;
  };

  const fetchExpenditureSubBudgetHeadDesc = (batch) => {
    return batch.expenditures[0].subBudgetHead.description;
  };

  const modifyExpenditure = (exp) => {
    setState({
      ...state,
      expenditure: exp,
      expenditure_id: exp.id,
      description: exp.description,
      beneficiary: exp.beneficiary,
      amount: exp.amount,
      previousTotal: exp.amount,
      isUpdating: true,
    });
  };

  const handlePaymentAction = (status) => {
    const data = {
      batchId: state.batch_id,
      work_flow: "budget-payment-process",
      level: state.batch.level,
      description: state.description,
      status: status,
    };

    store("clear/payments", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setState({
      ...state,
      batch_code: "",
      batch: null,
      batch_id: 0,
      modification: 0,
      previousTotal: 0,
      grandTotal: 0,
      status: "",
      isUpdating: false,
      showDetails: false,
    });
  };

  useEffect(() => {
    if (state.batch && state.batch !== null && !state.showDetails) {
      setState({
        ...state,
        batch: state.batch,
        batch_id: state.batch.id,
        grandTotal: state.batch.amount,
      });
    }
  }, [state.batch, state.showDetails]);

  return (
    <>
      <h4 className="mb-4">Approve Payments</h4>

      <form onSubmit={fetchPaymentBatch}>
        <div className="row">
          <input
            className="form-control"
            type="text"
            placeholder="ENTER BATCH NUMBER"
            value={state.batch_code}
            onChange={(e) => setState({ ...state, batch_code: e.target.value })}
          />
        </div>
      </form>

      <div className={"payments-container mt-4"}>
        {state.expenditure !== null && state.isUpdating ? (
          <form onSubmit={handleExpenditureUpdate}>
            <div className="card card-invoice mb-3">
              <div className="card-header">
                <div>
                  <h5 className="mg-b-3">Expenditure</h5>
                </div>

                <div className="btn-group-invoice">
                  <button
                    className="btn btn-white btn-uppercase btn-sm"
                    type="button"
                    // onClick={() => {
                    //   setState({
                    //     ...state,
                    //     expenditure: null,
                    //     expenditure_id: 0,
                    //     description: "",
                    //     beneficiary: "",
                    //     amount: 0,
                    //     isUpdating: false,
                    //   });
                    // }}
                  >
                    {/* <FiX className="mr-2" /> */}
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn btn-success btn-sm btn-uppercase"
                  >
                    {/* <FiCreditCard className="mr-2" /> */}
                    Update Expenditure
                  </button>
                </div>
              </div>

              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-md-8">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Expenditure Title"
                      // value={state.beneficiary}
                      // onChange={(e) =>
                      //   setState({ ...state, beneficiary: e.target.value })
                      // }
                      readOnly
                    />
                  </div>

                  <div className="col-md-4">
                    <input
                      className="form-control"
                      type="text"
                      // placeholder="Enter Amount"
                      // value={state.amount}
                      // onChange={(e) =>
                      //   setState({ ...state, amount: e.target.value })
                      // }
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <input
                      className="form-control"
                      as="textarea"
                      rows={2}
                      // value={state.description}
                      // onChange={(e) =>
                      //   setState({ ...state, description: e.target.value })
                      // }
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        ) : null}

        {state.batch && state.showDetails ? (
          <div className="card card-invoice">
            <div className="card-header">
              <div>
                <h5 className="mg-b-3">
                  {state.batch !== ""
                    ? getPaymentType(state.batch.batch_no)
                    : ""}
                </h5>

                <span className="tx-sm text-muted">
                  {state.batch && state.batch.controller
                    ? `Expenditure raised by ${state.batch.controller.name} on date`
                    : ""}
                </span>
              </div>

              <div className="btn-group-invoice">
                {state.batch &&
                state.batch.steps === 3 &&
                state.batch.editable === 1 &&
                userHasRole(auth, "audit-officer") ? (
                  <button
                    type="button"
                    className="btn btn-danger btn-uppercase btn-sm"
                    disabled={
                      state.status === "approved" ||
                      state.expenditure !== null ||
                      state.description === ""
                    }
                    onClick={() => {
                      setState({ ...state, status: "queried" });
                      handlePaymentAction("queried");
                    }}
                  >
                    {/* <FiActivity className="mr-2" /> */}
                    Query
                  </button>
                ) : null}

                <button
                  type="button"
                  className="btn btn-success btn-sm btn-uppercase"
                  disabled={
                    state.status === "queried" ||
                    state.expenditure !== null ||
                    state.batch.status === "paid"
                  }
                  onClick={() => {
                    setState({ ...state, status: "approved" });
                    // handlePaymentAction("approved");
                  }}
                >
                  {/* <FiPackage className="mr-2" /> */}
                  {state.batch && state.batch.steps === 4
                    ? "Post"
                    : "Clear"}{" "}
                  Payment
                </button>
              </div>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-sm-6">
                  <label className="content-label text-success">
                    Billed From
                  </label>

                  <h6 className="tx-15 mg-b-10">
                    {state.batch && state.batch.expenditures
                      ? fetchExpenditureSubBudgetHead(state.batch)
                      : ""}
                  </h6>

                  <p className="mg-b-0">
                    {state.batch && state.batch.expenditures
                      ? fetchExpenditureSubBudgetHeadDesc(state.batch)
                      : ""}
                  </p>
                </div>

                <div className="col-sm-6 tx-right d-none d-md-block">
                  <label className="content-label text-secondary">
                    Batch Number
                  </label>

                  <h2 className="tx-normal tx-gray-400 mg-b-10 tx-spacing--2 text-success">
                    {state.batch ? state.batch.batch_no : ""}
                  </h2>
                </div>
              </div>

              <table className="table-striped table-bordered table-responsive mg-t-25">
                <thead>
                  <tr>
                    {state.batch &&
                    state.batch.editable === 1 &&
                    state.batch.steps >= 2 &&
                    userHasRole(auth, "treasury-officer") ? (
                      <th>Modify</th>
                    ) : null}
                    <th className="wd-40p d-none d-sm-table-cell">
                      Description
                    </th>

                    <th className="tx-center">Beneficiary</th>
                    <th className="tx-right">Amount</th>
                  </tr>
                </thead>

                <tbody>
                  {state.batch && state.batch.expenditures
                    ? state.batch.expenditures.map((exp) => {
                        return (
                          <tr key={exp.id}>
                            {state.batch &&
                            state.batch.editable === 1 &&
                            state.batch.steps >= 2 &&
                            userHasRole(auth, "treasury-officer") ? (
                              <td>
                                <button
                                  className="btn btn-secondary btn-sm"
                                  type="button"
                                  onClick={() => modifyExpenditure(exp)}
                                >
                                  Edit
                                  {/* <FiEdit3 /> */}
                                </button>
                              </td>
                            ) : null}

                            <td>{exp.description}</td>
                            <td className="tx-center">{exp.beneficiary}</td>
                            <td className="tx-right">{exp.amount}</td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>

              <div className="row justify-content-between mg-t-25">
                <div className="col-sm-6 order-2 order-sm-0 mg-t-40 mg-sm-t-0">
                  {state.batch &&
                  state.batch.steps === 3 &&
                  state.batch.editable === 1 &&
                  userHasRole(auth, "audit-officer") ? (
                    <>
                      <label className="content-label mg-b-10">Action</label>
                      <div className="row">
                        <div className="col">
                          <input
                            className="form-control"
                            as="textarea"
                            placeholder="Enter Description"
                            value={state.description}
                            onChange={(e) =>
                              setState({
                                ...state,
                                description: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>

                <div className="col-sm-6 order-1 order-sm-0">
                  <ul className="list-unstyled lh-7 pd-r-10">
                    {state.expenditure !== null ? (
                      <>
                        <li className="d-flex justify-content-between">
                          <span>Expenditure Amount</span>
                          <span>NGN {state.previousTotal}</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          <span>Alteration</span>
                          <span>NGN {state.amount - state.previousTotal}</span>
                        </li>
                      </>
                    ) : null}
                    <li className="d-flex justify-content-between">
                      <strong>TOTAL DUE</strong>
                      <strong>NGN {state.grandTotal}</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Approvals;
