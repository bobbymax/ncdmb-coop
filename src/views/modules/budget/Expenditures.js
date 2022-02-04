import React, { useEffect, useRef, useState } from "react";
import { collection, store } from "../../../services/utils/controllers";
import Form from "../../../components/forms/Form";
import FormInput from "../../../components/forms/FormInput";
import FormSelect from "../../../components/forms/FormSelect";
import SubmitButton from "../../../components/forms/SubmitButton";

const Expenditures = () => {
  const initialState = {
    available_balance: 0,
    budget_code: "",
    beneficiary: "",
    new_balance: 0,
    claim: null,
    sub_budget_head_id: 0,
    claim_id: 0,
    beneficiary: "",
    amount: "",
    description: "",
    additional_info: "",
    status: "cleared",
    type: "",
    payment_type: "",
  };

  const [subBudgetHeads, setSubBudgetHeads] = useState([]);
  const [departmentIDs, setDepartmentIDs] = useState([]);
  const [data, setData] = useState(initialState);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [disabled, setDisbled] = useState(false);
  const [payment_type, setPayment_Type] = useState("");
  const [claimData, setClaimData] = useState({});

  const [state, setState] = useState(initialState);
  // const [update, setUpdate] = useState(false);
  // const [errors, setErrors] = useState({});

  const columns = [
    {
      label: "Name",
      key: "name",
    },
  ];

  const handleSubmit = (values) => {
    console.log(values);

    // store("expenditures", values)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log("Error", err));
  };

  const handleEdit = (data) => {};

  const handleDestroy = (data) => {};

  const handleSearch = (str) => {
    setSearchTerm(str);

    if (str !== "") {
      const filtered = subBudgetHeads.filter((row) => {
        return Object.values(row)
          .join(" ")
          .toLowerCase()
          .includes(str.toLowerCase());
      });

      setResults(filtered);
    } else {
      setResults(subBudgetHeads);
    }
  };

  useEffect(() => {
    try {
      setIsLoading(true);
      collection("subBudgetHeads")
        .then((res) => {
          setSubBudgetHeads(res.data.data);
          // console.log(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err.message));
    } catch (error) {
      console.log(error);
    }

    getDepartments();
    updateAmount();
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

  const getData = (value) => {
    collection(`subBudgetHeads/${value}`)
      .then((res) =>
        setState({ ...state, sub_budget_head_id: res.data.data.id })
      )
      .catch((err) => console.log("Error reading data", err));
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
        .then((res) =>
          setClaimData({
            ...state,
            ...res.data.data,
          })
        )
        .catch((err) => console.log(err));
    }
  };

  const paymentType = [
    { key: "third-party", value: "Third Party" },
    { key: "staff-payment", value: "Staff Payment" },
  ];

  const getDepartments = async () => {
    const response = await collection("departments");
    setDepartmentIDs(response.data.data);
  };

  const type = [
    { key: "staff-claim", value: "Staff Claim" },
    { key: "touring-advance", value: "Touring Advance" },
    { key: "other", value: "Other" },
  ];

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
                <>
                  <Form
                    initialValues={state}
                    // validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    <div className="row">
                      <div className="col-md-4">
                        <FormSelect
                          options={paymentType}
                          // value={payment_type}
                          defaultText="Select Payment Type"
                          onChange={(e) => setPayment_Type(e.target.value)}
                          name="payment_type"
                        />
                      </div>

                      <div className="col-md-4">
                        <FormSelect
                          options={type}
                          disabled={payment_type === "third-party"}
                          defaultText="Type"
                          name="type"
                        />
                      </div>

                      <div className="col-md-4">
                        <FormInput
                          placeholder="Claim ID"
                          onChange={(e) => onClaimIDChange(e.target.value)}
                          type="text"
                          name="claim_id"
                          readOnly={payment_type === "third-party"}
                        />
                      </div>

                      <div className="col-md-12">
                        <FormSelect
                          defaultText="Sub Budget Head"
                          options={departmentIDs}
                          onChange={(e) => {
                            getData(e.target.value);
                          }}
                          name="sub_budget_head_id"
                        />
                      </div>

                      <div className="col-md-6">
                        <FormInput
                          placeholder="BUDGET CODE"
                          value={state.budget}
                          readOnly={payment_type === "staff-payment"}
                          name="budgetCode"
                          disabled={disabled}
                        />
                      </div>

                      <div className="col-md-6">
                        <FormInput
                          placeholder="0"
                          value={data.approved_amount}
                          readOnly={payment_type === "staff-payment"}
                          disabled={disabled}
                        />
                      </div>

                      <div className="col-md-6">
                        <FormInput
                          placeholder="AMOUNT"
                          onChange={(e) => updateAmount(e.target.value)}
                          value={state.claim}
                          readOnly={
                            payment_type === "staff-payment" ? true : false
                          }
                          name="amount"
                          // type="number
                        />
                      </div>

                      <div className="col-md-6">
                        <FormInput
                          placeholder="0"
                          readOnly={payment_type === "staff-payment"}
                          disabled={disabled}
                        />
                      </div>

                      <div className="col-md-12">
                        <FormInput
                          placeholder="Beneficiary"
                          readOnly={payment_type === "staff-payment"}
                          name="beneficiary"
                          disabled={disabled}
                        />
                      </div>

                      <div className="col-md-6">
                        <FormInput
                          placeholder="Description"
                          type="text"
                          readOnly={payment_type === "staff-payment"}
                          name="description"
                          multiline
                        />
                      </div>

                      <div className="col-md-6">
                        <FormInput
                          placeholder="Additional  Info"
                          type="text"
                          name="additional_info"
                          multiline
                        />
                      </div>

                      <>
                        <div className="mt-3 ml-3 d-flex">
                          <SubmitButton
                            className="btn btn-primary"
                            title="Submit"
                          />

                          <button
                            type="button"
                            className="btn btn-danger btn-block"
                            // onClick={() => {
                            //   // setUpdate(false);
                            //   // setState(initialState);
                            //   // setOpen(false);
                            //   // setErrors({});
                            // }}
                          >
                            Close
                          </button>
                        </div>
                      </>
                    </div>
                  </Form>

                  {/* <div className="row">
                    <div className="col-md-4">
                      <TextInputField
                        placeholder="Enter Role Name"
                        value={state.name}
                        onChange={(e) =>
                          setState({ ...state, name: e.target.value })
                        }
                        error={errors && errors.name && errors.name.length > 0}
                        errorMessage={errors && errors.name && errors.name[0]}
                      />
                    </div>

                    <div className="col-md-4">
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
                    <div className="col-md-4">
                      <CustomSelect
                        defaultText="Is Role Admin?"
                        options={options}
                        value={state.isSuper}
                        onChange={(e) =>
                          setState({ ...state, isSuper: e.target.value })
                        }
                        error={
                          errors && errors.isSuper && errors.isSuper.length > 0
                        }
                        errorMessage={
                          errors && errors.isSuper && errors.isSuper[0]
                        }
                      />
                    </div>
                    <div className="col-md-4">
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

                    <div className="col-md-4">
                      <TextInputField
                        placeholder="Expiry Date"
                        type="date"
                        value={state.expiry_date}
                        onChange={(e) =>
                          setState({ ...state, expiry_date: e.target.value })
                        }
                      />
                    </div>

                    <div className="col-md-4">
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
                  </div> */}
                </>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* <div className="col-lg-12">
        <DataTableComponent
          pageName="Expenditure"
          columns={columns}
          rows={searchTerm.length < 1 ? subBudgetHeads : results}
          handleEdit={handleEdit}
          handleDelete={handleDestroy}
          term={searchTerm}
          searchKeyWord={handleSearch}
          isFetching={isLoading}
        />
      </div> */}
    </div>
  );
};

export default Expenditures;
