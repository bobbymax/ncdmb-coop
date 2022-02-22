/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { collection, store } from "../../../services/utils/controllers";
import { uniqueNumberGenerator } from "../../../services/utils/helpers";
import useApi from "../../../services/hooks/useApi";
import BatchWidget from "../../../components/commons/widgets/BatchWidget";
import BatchCard from "../../../components/commons/widgets/BatchCard";
import "./drag.css";
import Loading from "../../../components/commons/Loading";

const Batch = (props) => {
  const {
    data: expenditures,
    setData: setExpenditures,
    request,
    loading,
  } = useApi(collection);

  const initialState = {
    board: [],
    boardType: "",
    maxSlot: 0,
    code: "",
    total: 0,
    len: 0,
    canvas: false,
    buttonDisabled: false,
    sub_budget_head_id: 0,
  };
  const [state, setState] = useState(initialState);
  const grandTotal =
    state.board.length > 0
      ? state.board.reduce(
          (sum, expenditure) => sum + parseFloat(expenditure.amount),
          0
        )
      : 0;

  const defaultData = [
    {
      id: 1,
      title: "STAFF PAYMENT",
      items: expenditures.filter((ex) => {
        return ex.payment_type && ex.payment_type === "staff-payment";
      }),
    },
    {
      id: 2,
      title: "THIRD PARTY",
      items: expenditures.filter((ex) => {
        return ex.payment_type && ex.payment_type === "third-party";
      }),
    },
  ];

  const boardLength = state.board.length;

  const batchClaim = (expenditure) => {
    const batch = expenditures.filter((batch) => expenditure.id === batch.id);

    const maxSlots = {
      staffPayment: 6,
      thirdParty: 1,
    };

    if (
      expenditure.payment_type === "third-party" &&
      state.board.length < maxSlots.thirdParty
    ) {
      const newExpenditure = expenditures.filter(
        (batch) => expenditure.id !== batch.id
      );

      setExpenditures(newExpenditure);

      setState({
        ...state,
        board: [...state.board, batch[0]],
        buttonDisabled: !state.buttonDisabled,
        boardType: expenditure.payment_type,
        maxSlot: maxSlots.thirdParty,
      });
    } else if (
      expenditure.payment_type === "staff-payment" &&
      state.board.length <= maxSlots.staffPayment
    ) {
      if (
        boardLength >= 1 &&
        expenditure.subBudgetHead.id === state.sub_budget_head_id
      ) {
        const newExpenditure = expenditures.filter(
          (batch) => expenditure.id !== batch.id
        );

        setExpenditures(newExpenditure);

        setState({
          ...state,
          board: [...state.board, batch[0]],
          buttonDisabled: true,
          boardType: expenditure.payment_type,
          maxSlot: maxSlots.staffPayment,
        });
      } else {
        const newExpenditure = expenditures.filter(
          (batch) => expenditure.id !== batch.id
        );

        setExpenditures(newExpenditure);

        setState({
          ...state,
          board: [...state.board, batch[0]],
          buttonDisabled: true,
          boardType: expenditure.payment_type,
          maxSlot: maxSlots.staffPayment,
        });
      }
    } else {
      setState({
        ...state,
        buttonDisabled: !state.buttonDisabled,
      });
    }
  };

  const grandPrettyTotal = (num) => {
    return `NGN ${new Intl.NumberFormat().format(num)}`;
  };

  const handleBatcher = () => {
    const data = {
      batch_no: state.code,
      expenditures: state.board,
      noOfClaim: state.board.length,
      subBudgetHeadCode: state.board[0].subBudgetHead.budgetCode,
      amount: state.total,
      steps: 1,
    };

    store("batches", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };

  const handleDelete = (expenditure) => {
    if (state.board.length !== 0) {
      const claimChoosen = state.board.filter((b) => expenditure.id === b.id);

      const boardState = state.board.filter((b) => expenditure.id !== b.id);

      if (boardState.length > 0) {
        const newExpenditure = [...expenditures, claimChoosen[0]];

        setExpenditures(newExpenditure);

        setState({
          ...state,
          board: boardState,
          buttonDisabled: state.boardType !== "" ? true : false,
        });
      } else {
        const newExpenditure = [...expenditures, claimChoosen[0]];

        setExpenditures(newExpenditure);

        setState({
          ...state,
          board: boardState,
          boardType: "",
          buttonDisabled: false,
        });
      }
    }
  };

  useEffect(() => {
    request("expenditures");
  }, []);

  useEffect(() => {
    if (boardLength === 1) {
      setState({
        ...state,
        sub_budget_head_id: state.board[0].subBudgetHead.id,
      });
    }
  }, [boardLength]);

  useEffect(() => {
    setState({
      ...state,
      total: grandTotal,
    });
  }, [grandTotal]);

  return (
    <>
      {loading ? <Loading /> : null}

      <h4 className="content-title content-title-xs mb-3">Expenditures</h4>

      <button
        className="btn btn-success btn-md btn-rounded"
        type="button"
        onClick={() =>
          setState({ ...state, code: uniqueNumberGenerator(state.boardType) })
        }
        disabled={boardLength === 0 || state.code !== ""}
      >
        Generate Batch Number
      </button>

      <div className="row mt-5">
        <div className="col-md-8">
          <BatchWidget
            data={defaultData}
            addToBatch={batchClaim}
            isButtonOff={state.buttonDisabled}
            paymentType={state.boardType}
            maxed={
              state.board.length > 0 && state.board.length === state.maxSlot
            }
          />
        </div>

        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <h4 className="content-title content-title-xs mb-3 text-muted">
                - BATCH - {state.code.toUpperCase()}
              </h4>
            </div>

            {state.board.length > 0 &&
              state.board.map((batch) => (
                <BatchCard
                  key={batch.id}
                  batch={batch}
                  onRemove={handleDelete}
                />
              ))}
            <div className="col-md-12">
              <div className="card bg-warning">
                <div className="card-body">
                  <div className="total mb-3">
                    <h3 className="card-value text-white">
                      {grandPrettyTotal(state.total)}
                    </h3>
                  </div>

                  <h5 className="text-default mb-4">{"GRAND TOTAL"}</h5>
                  <button
                    className="btn btn-success btn-rounded"
                    disabled={state.code === ""}
                    onClick={handleBatcher}
                  >
                    Batch Payments
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Batch;
