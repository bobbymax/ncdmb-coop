/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
// import { Row, Col, Form, Button, Table } from "react-bootstrap";
// import {
//   FiActivity,
//   FiCreditCard,
//   FiEdit3,
//   FiPackage,
//   FiSearch,
//   FiX,
// } from "react-icons/fi";
import { collection } from "../../../services/utils/controllers";
// import { connect } from 'react-redux'
// import { fetch, store, update } from '../../../redux/actions'
// import * as broadcast from '../../../redux/accessControl/types'
// import { getPaymentType } from '../../../services/helpers/functions'
// import { userHasRole } from '../../../services/helpers/access'

const Approvals = (props) => {
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

  const fetchPaymentBatch = (e) => {
    e.preventDefault();

    if (state.batch_code !== "") {
      collection("batches");
    }

    setState({
      ...state,
      batch_code: "",
      showDetails: true,
    });
  };

  // const handleExpenditureUpdate = (e) => {
  //   e.preventDefault();

  //   const data = {
  //     amount: state.amount,
  //   };

  //   props.update("batch/expenditures", state.expenditure_id, data, {
  //     success: broadcast.UPDATED_BATCHED_EXPENDITURE_RECORD,
  //     failed: broadcast.UPDATED_BATCHED_EXPENDITURE_RECORD_FAILED,
  //   });

  //   setState({
  //     ...state,
  //     expenditure: null,
  //     expenditure_id: 0,
  //     description: "",
  //     beneficiary: "",
  //     amount: 0,
  //     isUpdating: false,
  //     previousTotal: 0,
  //   });
  // };

  // const fetchExpenditureSubBudgetHead = (batch) => {
  //   return batch.expenditures[0].subBudgetHead.budgetCode;
  // };

  // const fetchExpenditureSubBudgetHeadDesc = (batch) => {
  //   return batch.expenditures[0].subBudgetHead.description;
  // };

  // const modifyExpenditure = (exp) => {
  //   setState({
  //     ...state,
  //     expenditure: exp,
  //     expenditure_id: exp.id,
  //     description: exp.description,
  //     beneficiary: exp.beneficiary,
  //     amount: exp.amount,
  //     previousTotal: exp.amount,
  //     isUpdating: true,
  //   });
  // };

  // const handlePaymentAction = (status) => {
  //   const data = {
  //     batchId: state.batch_id,
  //     work_flow: "budget-payment-process",
  //     level: state.batch.level,
  //     description: state.description,
  //     status: status,
  //   };

  //   props.store("clear/payments", data, {
  //     success: broadcast.BATCH_PAYMENT_CLEARED,
  //     failed: broadcast.BATCH_PAYMENT_CLEARED_FAILED,
  //   });

  //   setState({
  //     ...state,
  //     batch_code: "",
  //     batch: null,
  //     batch_id: 0,
  //     modification: 0,
  //     previousTotal: 0,
  //     grandTotal: 0,
  //     status: "",
  //     isUpdating: false,
  //     showDetails: false,
  //   });
  // };

  // useEffect(() => {
  //   if (props.batch !== null && state.showDetails) {
  //     setState({
  //       ...state,
  //       batch: props.batch,
  //       batch_id: props.batch.id,
  //       grandTotal: props.batch.amount,
  //     });
  //   }
  // }, [props.batch, state.showDetails]);

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
    </>
  );
};

export default Approvals;
