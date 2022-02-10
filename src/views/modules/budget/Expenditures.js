/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { collection, store } from "../../../services/utils/controllers";
import CustomSelect from "../../../components/forms/CustomSelect";
import TextInputField from "../../../components/forms/TextInputField";
// import Alert from "../../../services/classes/Alert";
import useApi from "../../../services/hooks/useApi";

const Expenditures = () => {
  const {
    data: subBudgetHeads,
    setData: setSubBudgetHeads,
    request,
  } = useApi(collection);
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
  const [disabled, setDisbled] = useState(false);
  const [payment_type, setPayment_Type] = useState("");
  const [claimData, setClaimData] = useState({});

  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    request("subBudgetHeads");
  }, []);

  useEffect(() => {}, [state.sub_budget_head_id]);

  console.log(subBudgetHeads);

  // const handleSubmit = (values) => {
  //   store("subBudgetHeads", values)
  //     .then((res) => console.log("Succcess", res))
  //     .catch((err) => console.log(err));

  //   // console.log(values);

  //   // const formErrors = validate(rules, data);
  //   // setErrors(formErrors);
  //   // const status =
  //   //   Object.keys(formErrors).length === 0 && formErrors.constructor === Object;

  //   // if (status) {
  //   //   if (update) {
  //   //     try {
  //   //       alter("roles", state.id, data)
  //   //         .then((res) => {
  //   //           const result = res.data.data;

  //   //           setRoles(
  //   //             roles.map((el) => {
  //   //               if (result.id === el.id) {
  //   //                 return result;
  //   //               }

  //   //               return el;
  //   //             })
  //   //           );
  //   //           Alert.success("Updated", res.data.message);
  //   //         })
  //   //         .catch((err) => console.log(err.message));
  //   //     } catch (error) {
  //   //       console.log(error);
  //   //     }
  //   //   } else {
  //   //     try {
  //   //       store("roles", data)
  //   //         .then((res) => {
  //   //           const result = res.data.data;
  //   //           setRoles([result, ...roles]);
  //   //           Alert.success("Created!!", res.data.message);
  //   //         })
  //   //         .catch((err) => console.log(err.message));
  //   //     } catch (error) {
  //   //       console.log(error);
  //   //     }
  //   //   }

  //   //   setErrors({});

  //   //   setUpdate(false);
  //   //   setState(initialState);
  //   //   setOpen(false);
  //   // }
  // };

  const handleChange = (value) => {
    if (value.length === 8) {
      collection(`subBudgetHeads/${value}`);
      //  .then((res) =>
      //   //  setState({ ...state, sub_budget_head_id: )
      //  )
      //  .catch((err) => console.log("Error reading data", err));
    }
  };

  const fetchSubBudgetHead = (value) => {
    if (value > 0) {
      collection("subBudgetHeads/" + value)
        // .then((res) => {
        //   setState({
        //     ...state,
        //     available_balance: res.data.data.actual_balance,
        //     budget_code: res.data.data.budgetCode,
        //   });
        // })
        .catch((err) => console.log(err));
    }
  };

  const updateAmount = () => {
    if (state.available_balance > 0 && state.amount > 0) {
      const value =
        parseFloat(state.available_balance) - parseFloat(state.amount);

      setState({
        ...state,
        new_balance: value,
      });
    }
  };

  const onClaimIDChange = (value) => {
    if (value.length === 8) {
      collection(`fetch/claims/${value}`)
        .then((res) => {
          const claim = res.data.data;
          // console.log(claim);

          setState({
            ...state,
            claim: claim.claim,
            title: claim.title,
            beneficiary: claim.owner.name.toUpperCase(),
            amount: claim.total_amount,
            claim_id: claim.id,
          });
        })
        .catch((err) => console.log(err));
    }
  };

  const subBudgetHeadsOptions = (optionsArr) => {
    const arr = [];
    optionsArr.length > 0 &&
      optionsArr.forEach((el) => {
        arr.push({ key: el.id, label: el.name });
      });
    return arr;
  };

  const paymentType = [
    { key: "staff-claim", label: "STAFF CLAIM" },
    { key: "touring-advance", label: "TOURING ADVANCE" },
    { key: "other", label: "OTHER" },
  ];

  const options = [
    { key: "staff-payment", label: "STAFF PAYMENT" },
    { key: "third-party", label: "THIRD PARTY" },
  ];

  // useEffect(() => {
  //   collection("subBudgetHeads")
  //     .then((res) => {
  //       setSubBudgetHeads(res.data.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   props.index("subBudgetHeads", {
  //     success: broadcast.FETCH_SUB_BUDGET_HEADS,
  //     failed: broadcast.FETCH_SUB_BUDGET_HEADS_FAILED,
  //   });
  // }, []);

  useEffect(() => {
    if (state.claim) {
      setState({
        ...state,
        claim: state.claim,
        title: state.claim.title,
        beneficiary: state.claim.owner.name.toUpperCase(),
        amount: state.claim.total_amount,
        claim_id: state.claim.id,
      });
    }
  }, [state.claim]);

  // useEffect(() => {
  // //   if (props.subBudgetHeads) {
  // //     setState({
  // //       ...state,
  // //       subBudgetHeads: props.subBudgetHeads.collection,
  // //     });
  // //   }
  // // }, [props.subBudgetHeads]);

  useEffect(() => {
    if (
      subBudgetHeads.subBudgetHead &&
      subBudgetHeads.subBudgetHead !== null &&
      state.sub_budget_head_id > 0
    ) {
      const subBudgetHead = subBudgetHeads.subBudgetHead;

      setState({
        ...state,
        budget_code: subBudgetHeads.budgetCode,
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
  }, [subBudgetHeads, state.sub_budget_head_id]);

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

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="page-titles">
          <h2>New Expenditure</h2>
        </div>
      </div>

      <>
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="form-body">
                <form>
                  <div className="row">
                    <div className="col-md-4">
                      <CustomSelect
                        options={options}
                        defaultInputValue="SELECT PAYMENT TYPE"
                        placeholder="STAFF PAYMENT"
                        type="text"
                        value={state.payment_type}
                        onChange={(e) => {
                          console.log(e.target.value);
                          setState({
                            ...state,
                            payment_type: e.target.value,
                          });
                        }}
                        error={
                          errors &&
                          errors.payment_type &&
                          errors.payment_type.length > 0
                        }
                        errorMessage={
                          errors &&
                          errors.payment_type &&
                          errors.payment_type[0]
                        }
                      />
                    </div>

                    <div className="col-md-4">
                      <CustomSelect
                        options={paymentType}
                        placeholder="STAFF PAYMENT TYPE"
                        value={state.type}
                        onChange={(e) =>
                          setState({ ...state, type: e.target.value })
                        }
                        error={errors && errors.type && errors.type.length > 0}
                        errorMessage={errors && errors.type && errors.type[0]}
                        disabled={state.payment_type === "third-party"}
                      />
                    </div>

                    <div className="col-md-4">
                      <TextInputField
                        placeholder="ENTER CLAIM ID"
                        type="text"
                        value={state.code}
                        onChange={(e) =>
                          setState({ ...state, code: e.target.value })
                        }
                        error={errors && errors.code && errors.code.length > 0}
                        errorMessage={errors && errors.code && errors.code[0]}
                        readOnly={state.payment_type === "third-party"}
                      />
                    </div>

                    <div className="col-md-12">
                      <CustomSelect
                        // defaultInputValue={"SELECT SUB BUDGET HEAD"}
                        defaultText="SELECT SUB BUDGET HEAD"
                        options={subBudgetHeadsOptions(subBudgetHeads)}
                        value={state.sub_budget_head_id}
                        onChange={(e) => {
                          setState({
                            ...state,
                            sub_budget_head_id: e.target.value,
                          });
                          fetchSubBudgetHead(e.target.value);
                        }}
                        error={
                          errors && errors.isSuper && errors.isSuper.length > 0
                        }
                        errorMessage={
                          errors && errors.isSuper && errors.isSuper[0]
                        }
                      />
                    </div>

                    <div className="col-md-6">
                      <TextInputField
                        placeholder="BUDGET CODE"
                        type="text"
                        value={state.budget_code}
                        onChange={(e) =>
                          setState({ ...state, budget_code: e.target.value })
                        }
                        error={
                          errors &&
                          errors.budget_code &&
                          errors.budget_code.length > 0
                        }
                        errorMessage={
                          errors && errors.budget_code && errors.budget_code[0]
                        }
                        readOnly
                      />
                    </div>

                    <div className="col-md-6">
                      <TextInputField
                        placeholder="AVAILABLE BALANCE"
                        type="number"
                        value={state.available_balance}
                        onChange={(e) =>
                          setState({
                            ...state,
                            available_balance: e.target.value,
                          })
                        }
                        error={
                          errors &&
                          errors.available_balance &&
                          errors.available_balance.length > 0
                        }
                        errorMessage={
                          errors &&
                          errors.available_balance &&
                          errors.available_balance[0]
                        }
                        readOnly
                      />
                    </div>

                    <div className="col-md-6">
                      <TextInputField
                        placeholder="AMOUNT"
                        type="number"
                        value={state.amount}
                        onChange={(e) =>
                          setState({ ...state, amount: e.target.value })
                        }
                        error={
                          errors &&
                          errors.new_balance &&
                          errors.new_balance.length > 0
                        }
                        errorMessage={
                          errors && errors.new_balance && errors.new_balance[0]
                        }
                        readOnly={state.payment_type === "staff-payment"}
                      />
                    </div>

                    <div className="col-md-6">
                      <TextInputField
                        placeholder="NEW BALANCE"
                        type="number"
                        value={state.new_balance}
                        onChange={(e) =>
                          setState({ ...state, new_balance: e.target.value })
                        }
                        error={
                          errors &&
                          errors.new_balance &&
                          errors.new_balance.length > 0
                        }
                        errorMessage={
                          errors && errors.new_balance && errors.new_balance[0]
                        }
                        readOnly
                      />
                    </div>

                    <div className="col-md-12">
                      <TextInputField
                        placeholder="BENEFICIARY"
                        type="text"
                        value={state.beneficiary}
                        onChange={(e) =>
                          setState({ ...state, beneficiary: e.target.value })
                        }
                        error={
                          errors &&
                          errors.beneficiary &&
                          errors.beneficiary.length > 0
                        }
                        errorMessage={
                          errors && errors.beneficiary && errors.beneficiary[0]
                        }
                        readOnly={state.payment_type === "staff-payment"}
                      />
                    </div>

                    <div className="col-md-12">
                      <TextInputField
                        placeholder="DESCRIPTION"
                        multiline={2}
                        type="text"
                        value={state.title}
                        onChange={(e) =>
                          setState({ ...state, title: e.target.value })
                        }
                        readOnly={state.payment_type === "staff-payment"}
                      />
                    </div>

                    <div className="col-md-12">
                      <TextInputField
                        placeholder="ADDITIONAL INFO"
                        value={state.additional_info}
                        onChange={(e) =>
                          setState({
                            ...state,
                            additional_info: e.target.value,
                          })
                        }
                        error={
                          errors &&
                          errors.cannot_expire &&
                          errors.cannot_expire.length > 0
                        }
                        errorMessage={
                          errors &&
                          errors.cannot_expire &&
                          errors.cannot_expire[0]
                        }
                      />
                    </div>

                    <div className="col-md-12 mt-3">
                      <button type="submit" className="btn btn-primary">
                        <i className="fa fa-send"></i> Submit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          setState(initialState);
                          setErrors({});
                        }}
                      >
                        <i className="fa fa-close"></i> Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Expenditures;
