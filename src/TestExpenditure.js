import { useState } from "react";

const initialState = {
  claim: null,
  code: "",
  title: "",
  beneficiary: "",
  amount: 0,
  sub_budget_head_id: 0,
  available_balance: 0,
  new_balance: 0,
  budget_code: "",
  claim_id: 0,
  type: "",
  payment_type: "",
  status: "cleared",
  additional_info: "",
  subBudgetHeads: [],
};

const [state, setState] = useState(initialState);
const auth = useSelector((state) => state.access.staff.authenticatedUser);
const [subBudgets, setSubBudgets] = useState([]);

const handleChange = (value) => {
  if (value.length === 8) {
    props.fetch("fetch/claims", value, {
      success: broadcast.FETCHED_CLAIM_RECORD,
      failed: broadcast.FETCHED_CLAIM_RECORD_FAILED,
    });
  }
};

const fetchSubBudgetHead = (value) => {
  if (value > 0) {
    props.fetch("subBudgetHeads", value, {
      success: broadcast.FETCH_SUB_BUDGET_HEAD_RECORD,
      failed: broadcast.FETCH_SUB_BUDGET_HEAD_RECORD_FAILED,
    });
  }
};

const handleSubmit = (e) => {
  e.preventDefault();

  const data = {
    payment_type: state.payment_type,
    type: state.payment_type === "staff-payment" ? state.type : "other",
    claim_id: state.claim_id,
    sub_budget_head_id: state.sub_budget_head_id,
    amount: state.amount,
    new_balance: state.new_balance,
    beneficiary: state.beneficiary,
    description: state.title,
    status: state.status,
    additional_info: state.additional_info,
  };

  props.store("expenditures", data, {
    success: broadcast.CREATED_EXPENDITURE_RECORD,
    failed: broadcast.CREATED_EXPENDITURE_RECORD_FAILED,
  });

  setState({
    ...state,
    claim: null,
    code: "",
    title: "",
    beneficiary: "",
    amount: 0,
    new_balance: 0,
    available_balance: 0,
    sub_budget_head_id: 0,
    claim_id: 0,
    payment_type: "",
    type: "",
    status: "cleared",
    additional_info: "",
  });
};

useEffect(() => {
  Requests.index("subBudgetHeads")
    .then((res) => {
      setSubBudgets(res.data.data);
    })
    .catch((err) => console.log(err));
}, []);

useEffect(() => {
  props.index("subBudgetHeads", {
    success: broadcast.FETCH_SUB_BUDGET_HEADS,
    failed: broadcast.FETCH_SUB_BUDGET_HEADS_FAILED,
  });
}, []);

useEffect(() => {
  if (props.claim) {
    setState({
      ...state,
      claim: props.claim,
      title: props.claim.title,
      beneficiary: props.claim.owner.name.toUpperCase(),
      amount: props.claim.total_amount,
      claim_id: props.claim.id,
    });
  }
}, [props.claim]);

useEffect(() => {
  if (props.subBudgetHeads) {
    setState({
      ...state,
      subBudgetHeads: props.subBudgetHeads.collection,
    });
  }
}, [props.subBudgetHeads]);

useEffect(() => {
  if (
    props.subBudgetHeads.subBudgetHead !== null &&
    state.sub_budget_head_id > 0
  ) {
    const subBudgetHead = props.subBudgetHeads.subBudgetHead;
    setState({
      ...state,
      budget_code: subBudgetHead.budgetCode,
      available_balance: subBudgetHead.fund
        ? subBudgetHead.fund.actual_balance
        : 0,
    });
  } else {
    setState({
      ...state,
      budget_code: "",
      available_balance: 0,
    });
  }
}, [props.subBudgetHeads.subBudgetHead, state.sub_budget_head_id]);

useEffect(() => {
  if (state.available_balance > 0 && state.amount > 0) {
    const value =
      parseFloat(state.available_balance) - parseFloat(state.amount);

    setState({
      ...state,
      new_balance: value,
    });
  }
}, [state.available_balance, state.amount]);
