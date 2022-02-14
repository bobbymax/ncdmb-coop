/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { collection, store } from "../../../services/utils/controllers";
import { uniqueNumberGenerator } from "../../../services/utils/helpers";
import useApi from "../../../services/hooks/useApi";
import BatchWidget from "../../../components/commons/widgets/BatchWidget";
import BatchCard from "../../../components/commons/widgets/BatchCard";
import "./drag.css";

const Batch = (props) => {
  const {
    data: expenditures,
    setData: setExpenditures,
    request,
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
    state.board.length !== 0
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

    // setState({
    //   ...state,
    //   board: [],
    //   boardType: "",
    //   maxSlot: 0,
    //   code: "",
    //   total: 0,
    //   buttonDisabled: false,
    // });

    // props.history.push("/payments");
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
      <h4 className="content-title content-title-xs mb-3">Expenditures</h4>

      <button
        className="btn btn-success btn-md"
        type="button"
        onClick={() =>
          setState({ ...state, code: uniqueNumberGenerator(state.boardType) })
        }
        disabled={boardLength === 0 || state.code !== ""}
      >
        Generate Batch Number
      </button>

      <div className="row mt-3">
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
            <div className="col">
              <h4 className="content-title content-title-xs mb-3">
                Batch - {state.code.toUpperCase()}
              </h4>
            </div>
          </div>

          {state.board.length !== 0
            ? state.board.map((batch) => (
                <BatchCard
                  key={batch.id}
                  batch={batch}
                  onRemove={handleDelete}
                />
              ))
            : null}

          <div
            style={{
              backgroundColor: "white",
              padding: 10,
              margin: "10px 0px",
            }}
          >
            <div className="align-items-center justify-content-between mg-b-10">
              <h3 className="card-value">{grandPrettyTotal(state.total)}</h3>
            </div>

            <span className="">{"Grand Total"}</span>
          </div>

          <button
            className="btn btn-success btn-sm"
            disabled={state.code === ""}
            onClick={handleBatcher}
          >
            Batch Payments
          </button>
        </div>
      </div>
    </>
  );
};

export default Batch;
