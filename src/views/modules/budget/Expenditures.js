import React, { useEffect, useRef, useState } from "react";
import { collection, store } from "../../../services/utils/controllers";
import Form from "../../../components/forms/Form";
import FormInput from "../../../components/forms/FormInput";
import FormSelect from "../../../components/forms/FormSelect";
import SubmitButton from "../../../components/forms/SubmitButton";
import CustomSelect from "../../../components/forms/CustomSelect";
import TextInputField from "../../../components/forms/TextInputField";
import Alert from "../../../services/classes/Alert";

const Expenditures = () => {
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

  const [departments, setDepartments] = useState([]);
  const [data, setData] = useState(initialState);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [disabled, setDisbled] = useState(false);
  const [payment_type, setPayment_Type] = useState("");
  const [claimData, setClaimData] = useState({});

  const [state, setState] = useState(initialState);
  const [update, setUpdate] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (values) => {
    console.log(values);

    // store("expenditures", values)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log("Error", err));
  };

  const getSubBudgetHeads = async () => {
    const res = await collection("subBudgetHeads");

    setState({ ...state, subBudgetHeads: res.data.data });
  };

  useEffect(() => {
    getSubBudgetHeads();
  }, []);

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
      collection("subBudgetHeads", value)
        .then((res) => {
          console.log(res);
          // setState({ ...state, sub_budget_head_id: res.data.data.id });
        })
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

  const paymentType = [
    { key: "staff-claim", label: "STAFF CLAIM" },
    { key: "touring-advance", label: "TOURING ADVANCE" },
    { key: "other", label: "OTHER" },
  ];

  const options = [
    { key: "staff-payment", label: "STAFF PAYMENT" },
    { key: "third-payment", label: "THIRD PARTY" },
  ];

  const getDepartments = async () => {
    const response = await collection("departments");
    setDepartments(response.data.data);
  };

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
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-4">
                      <CustomSelect
                        options={options}
                        defaultInputValue="SELECT PAYMENT TYPE"
                        placeholder="STAFF PAYMENT"
                        type="text"
                        value={state.payment_type}
                        onChange={(e) =>
                          setState({ ...state, payment_type: e.target.value })
                        }
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
                        placeholder="CLAIM ID"
                        type="number"
                        value={state.claim_id}
                        onChange={(e) =>
                          setState({ ...state, claim_id: e.target.value })
                        }
                        error={
                          errors &&
                          errors.claim_id &&
                          errors.claim_id.length > 0
                        }
                        errorMessage={
                          errors && errors.claim_id && errors.claim_id[0]
                        }
                      />
                    </div>

                    <div className="col-md-12">
                      <CustomSelect
                        defaultText="SELECT SUB BUDGET HEAD"
                        options={state.subBudgetHeads}
                        value={state.sub_budget_head_id}
                        onChange={(e) => {
                          setState({ ...state, isSuper: e.target.value });
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
                      />
                    </div>

                    <div className="col-md-6">
                      <TextInputField
                        placeholder="Enter Max Slot"
                        type="number"
                        value={state.max_slots}
                        onChange={(e) =>
                          setState({ ...state, max_slots: e.target.value })
                        }
                        error={
                          errors &&
                          errors.max_slots &&
                          errors.max_slots.length > 0
                        }
                        errorMessage={
                          errors && errors.max_slots && errors.max_slots[0]
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <TextInputField
                        placeholder="Enter Max Slot"
                        type="number"
                        value={state.max_slots}
                        onChange={(e) =>
                          setState({ ...state, max_slots: e.target.value })
                        }
                        error={
                          errors &&
                          errors.max_slots &&
                          errors.max_slots.length > 0
                        }
                        errorMessage={
                          errors && errors.max_slots && errors.max_slots[0]
                        }
                      />
                    </div>

                    <div className="col-md-6">
                      <TextInputField
                        placeholder="Enter Max Slot"
                        type="number"
                        value={state.max_slots}
                        onChange={(e) =>
                          setState({ ...state, max_slots: e.target.value })
                        }
                        error={
                          errors &&
                          errors.max_slots &&
                          errors.max_slots.length > 0
                        }
                        errorMessage={
                          errors && errors.max_slots && errors.max_slots[0]
                        }
                      />
                    </div>

                    <div className="col-md-6">
                      <TextInputField
                        placeholder="Start Date"
                        type="date"
                        value={state.start_date}
                        onChange={(e) =>
                          setState({ ...state, start_date: e.target.value })
                        }
                        error={
                          errors &&
                          errors.start_date &&
                          errors.start_date.length > 0
                        }
                        errorMessage={
                          errors && errors.start_date && errors.start_date[0]
                        }
                      />
                    </div>

                    <div className="col-md-6">
                      <TextInputField
                        placeholder="Expiry Date"
                        type="date"
                        value={state.expiry_date}
                        onChange={(e) =>
                          setState({ ...state, expiry_date: e.target.value })
                        }
                      />
                    </div>

                    <div className="col-md-127">
                      <CustomSelect
                        defaultText="Cannot Expire?"
                        options={options}
                        value={state.cannot_expire}
                        onChange={(e) =>
                          setState({
                            ...state,
                            cannot_expire: e.target.value,
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
                        Submit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          setUpdate(false);
                          setState(initialState);
                          setOpen(false);
                          setErrors({});
                        }}
                      >
                        Close
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
