/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import DataTableComponent from "../../../components/commons/tables/DataTableComponent";
import useApi from "../../../services/hooks/useApi";
import { collection } from "../../../services/utils/controllers";
import Form from "../../../components/forms/Form";
import FormInput from "../../../components/forms/FormInput";
import TextInputField from "../../../components/forms/TextInputField";
import FormSelect from "../../../components/forms/FormSelect";
import CustomCheckbox from "../../../components/forms/CustomCheckbox";
import CustomSelect from "../../../components/forms/CustomSelect";
import SubmitButton from "../../../components/forms/SubmitButton";
import { store, alter } from "../../../services/utils/controllers";
import Alert from "../../../services/classes/Alert";

const Fund = () => {
  const initialState = {
    id: 0,
    sub_budget_id: 0,
    approved_amount: 0,
    available_balance: 0,
    description: "",
    subBudgetHeads: [],
    name: "",
    previousAmount: 0,
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [results, setResults] = useState([]);
  const [update, setUpdate] = useState(false);
  const [open, setOpen] = useState(false);
  const [creditBudgetHeads, setCreditBudgetHead] = useState([]);
  // const [budget, setBudget] = useState({});

  const {
    data: funds,
    request: fetch,
    loading: isLoading,
    setData: setFunds,
  } = useApi(collection);

  useEffect(() => {
    fetch("creditBudgetHeads");
    getCreditBudgetHeads();

    if (state.available_balance > 0 && state.approved_amount > 0) {
      const value =
        parseFloat(state.available_balance) - parseFloat(state.approved_amount);

      setState({
        ...state,
        new_balance: value,
      });
    }
  }, [state.available_balance, state.approved_amount]);

  const columns = [
    {
      label: "Sub Budget Head",
      key: "name",
    },
    {
      label: "Amount",
      key: "approved_amount",
    },
  ];

  const getCreditBudgetHeads = () => {
    fetch("subBudgetHeads")
      // .then((res) => console.log("Response", res))
      .then((res) => setCreditBudgetHead(res.data.data))
      .catch((err) => console.log("Error", err));
  };

  const getSubBudgetHeadValue = (id) => {
    collection(`subBudgetHeads/${id}`)
      .then((res) => {
        const result = res.data.data;
        setState({ ...state, result });

        // setBudget([...creditBudgetHeads], res);
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (data) => {
    setState(data);
    setUpdate(true);
    setOpen(true);
  };

  const handleDestroy = (data) => {};

  const handleSearch = (str) => {
    setSearchTerm(str);

    if (str !== "") {
      const filtered = funds.filter((row) => {
        return Object.values(row)
          .join(" ")
          .toLowerCase()
          .includes(str.toLowerCase());
      });

      setResults(filtered);
    } else {
      setResults(funds);
    }
  };

  const handleSubmit = (values, { resetForm }) => {
    // store("creditBudgetHeads", values)
    //   .then((res) => console.log("Succcess", res))
    //   .catch((err) => console.log(err));

    // console.log(values);
    if (update) {
      try {
        alter("creditBudgetHeads", state.id, values)
          .then((res) => {
            const result = res.data.data;

            setFunds(
              funds.map((el) => {
                if (result.id === el.id) {
                  return result;
                }

                return el;
              })
            );

            Alert.success("Updated", res.data.message);
          })
          .catch((err) => console.log(err.message));
      } catch (error) {
        console.log(error);
      }
    } else {
      store("creditBudgetHeads", values)
        .then((res) => {
          const result = res.data.data;

          setFunds([result, ...funds]);
          Alert.success("Created!!", res.data.message);
        })
        .catch((err) => console.log(err));
    }

    setUpdate(false);
    setState(initialState);
    resetForm();
    setOpen(false);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="page-titles">
          <button
            className="btn btn-primary"
            onClick={() => setOpen(!open)}
            disabled={open}
          >
            <i className="fa fa-plus-square"></i> Add Fund
          </button>
        </div>
      </div>

      {open && (
        <>
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="form-body">
                  <>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <CustomSelect
                            options={creditBudgetHeads}
                            value={state.sub_budget_id}
                            onChange={(e) => {
                              setState({
                                ...state,
                                sub_budget_id: e.target.value,
                              });
                            }}
                            // placeholder="Enter Role Name"
                          />
                        </div>

                        <div className="col-md-6">
                          <TextInputField
                            type="number"
                            placeholder="ENTER AMOUNT"
                            value={state.approved_amount}
                            onChange={(e) =>
                              setState({
                                ...state,
                                approved_amount: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div className="col-md-6">
                          <TextInputField
                            type="text"
                            placeholder="AVAILABLE BALANCE"
                            value={state.available_balance}
                            onChange={(e) =>
                              setState({
                                ...state,
                                available_balance: e.target.value,
                              })
                            }
                            disabled
                          />
                        </div>

                        <div className="col-md-6">
                          <TextInputField
                            placeholder="New Amount"
                            value={state.available_balance}
                            type="text"
                            name="new_amount"
                            disabled
                          />
                        </div>

                        <div className="col-md-12">
                          <TextInputField
                            placeholder="Description"
                            type="text"
                            name="description"
                            multiline={true}
                          />
                        </div>
                      </div>
                    </form>
                    {/* <div className="row">
                      <div className="col-md-4">
                        <TextInputField
                          placeholder="Enter Role Name"
                          value={state.name}
                          onChange={(e) =>
                            setState({ ...state, name: e.target.value })
                          }
                          error={
                            errors && errors.name && errors.name.length > 0
                          }
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
                            errors &&
                            errors.isSuper &&
                            errors.isSuper.length > 0
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
      )}

      <div className="col-md-12">
        <DataTableComponent
          pageName="Credit Sub Budget Head"
          columns={columns}
          rows={searchTerm.length < 1 ? funds : results}
          handleEdit={handleEdit}
          handleDelete={handleDestroy}
          term={searchTerm}
          searchKeyWord={handleSearch}
          isFetching={isLoading}
        />
      </div>
    </div>
  );
};

export default Fund;
