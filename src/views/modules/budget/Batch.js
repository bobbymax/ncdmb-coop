/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Row, Col, Button, CarouselItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import { collection } from "../../../services/utils/controllers";
import { uniqueNumberGenerator } from "../../../services/utils/helpers";
import useApi from "../../../services/hooks/useApi";
// import ExpenditureCard from "../../../components/commons/widgets/ExpenditureCard";
import DragNDrop from "../../../components/commons/DragNDrop";
// import "../../../assets/js/canvas";
// import BatchCard from "../../widgets/BatchCard";

const Batch = (props) => {
  const {
    data: expenditures,
    setData: setExpenditures,
    request,
  } = useApi(collection);
  // const auth = useSelector((state) => state.auth.value.user);

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

  const boardLength = state.board.length;

  const batchClaim = (expenditure) => {
    const batch = state.expenditures.filter(
      (batch) => expenditure.id === batch.id
    );

    const maxSlots = {
      staffPayment: 6,
      thirdParty: 1,
    };

    if (
      expenditure.payment_type === "third-party" &&
      state.board.length < maxSlots.thirdParty
    ) {
      setState({
        ...state,
        expenditures: state.expenditures.filter(
          (batch) => expenditure.id !== batch.id
        ),
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
        setState({
          ...state,
          expenditures: state.expenditures.filter(
            (batch) => expenditure.id !== batch.id
          ),
          board: [...state.board, batch[0]],
          buttonDisabled: true,
          boardType: expenditure.payment_type,
          maxSlot: maxSlots.staffPayment,
        });
      } else {
        setState({
          ...state,
          expenditures: state.expenditures.filter(
            (batch) => expenditure.id !== batch.id
          ),
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
        setState({
          ...state,
          board: boardState,
          expenditures: [...state.expenditures, claimChoosen[0]],
          buttonDisabled: state.boardType !== "" ? true : false,
        });
      } else {
        setState({
          ...state,
          board: boardState,
          boardType: "",
          expenditures: [...state.expenditures, claimChoosen[0]],
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

  const defaultData = [
    {
      title: "STAFF CLAIM",
      items: expenditures.filter((ex) => {
        return ex.payment_type && ex.payment_type === "staff-payment";
      }),
    },
    {
      title: "THIRD PARTY",
      items: expenditures.filter((ex) => {
        return ex.payment_type && ex.payment_type === "third-party";
      }),
    },
    {
      title: "BATCH",
      items: [],
    },
  ];

  const getValue = (item) => {
    const indexedArray = defaultData[2].items.push(item);
    console.log(defaultData[2].items);
  };

  return (
    <>
      <h4 className="content-title content-title-xs mb-3">Expenditures</h4>

      <Button
        type="button"
        variant="success"
        onClick={() =>
          setState({ ...state, code: uniqueNumberGenerator(state.boardType) })
        }
        disabled={boardLength === 0 || state.code !== ""}
      >
        Generate Batch Number
      </Button>

      <div className="row mt-3">
        <div className="col">
          <DragNDrop
            data={defaultData}
            setData={setExpenditures}
            returnValue={getValue}
          />
        </div>

        {defaultData[2].items.length > 0 ? (
          <div className="col-md-2">
            <h4 className="content-title content-title-xs mb-3">
              Batch - {state.code.toUpperCase()}
            </h4>

            <button
              className="btn btn-success btn-sm"
              disabled={state.code === ""}
              onClick={handleBatcher}
            >
              Batch Payments
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Batch;
