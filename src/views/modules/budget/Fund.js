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
    amount: 0,
    new_balance: 0,
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
    // getCreditBudgetHeads();
  }, []);

  useEffect(() => {
    if (state.amount > 0 && state.approved_amount > 0) {
      const value =
        parseFloat(state.approved_amount) - parseFloat(state.amount);

      setState({
        ...state,
        new_balance: value,
      });
    }
  }, [state.amount, state.approved_amount]);

  const columns = [
    {
      label: "Budget Code",
      key: "budgetCode",
    },
    {
      label: "Sub Budget Head",
      key: "sub_budget_head_name",
    },
    {
      label: "Department",
      key: "department",
    },
    {
      label: "Approved Amount",
      key: "approved_amount",
    },
  ];

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

  const fetchSubBudgetHead = (id) => {
    if (id > 0) {
      collection(`subBudgetHeads/${id}`)
        .then((res) =>
          setState({ ...state, approved_amount: res.data.data.approved_amount })
        )
        .catch((err) => console.log("Error getting the subdget heads", err));
    }
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
                            options={funds}
                            value={state.sub_budget_id}
                            onChange={(e) => {
                              setState({
                                ...state,
                                sub_budget_id: e.target.value,
                              });
                              fetchSubBudgetHead(e.target.value);
                            }}
                          />
                        </div>

                        <div className="col-md-6">
                          <TextInputField
                            type="text"
                            placeholder="AVAILABLE BALANCE"
                            value={state.approved_amount}
                            onChange={(e) =>
                              setState({
                                ...state,
                                approved_amount: e.target.value,
                              })
                            }
                            readOnly
                          />
                        </div>

                        <div className="col-md-6">
                          <TextInputField
                            type="number"
                            placeholder="ENTER AMOUNT"
                            value={state.amount}
                            onChange={(e) => {
                              setState({
                                ...state,
                                amount: e.target.value,
                              });
                            }}
                          />
                        </div>

                        <div className="col-md-6">
                          <TextInputField
                            placeholder="New Amount"
                            value={state.new_balance}
                            onChange={(e) => {
                              setState({
                                ...state,
                                new_balance: e.target.value,
                              });
                            }}
                            type="text"
                            name="new_amount"
                            disabled
                          />
                        </div>

                        <div className="col-md-12">
                          <TextInputField
                            placeholder="Description"
                            value={state.description}
                            onChange={(e) => {
                              setState({
                                ...state,
                                description: e.target.value,
                              });
                            }}
                            type="text"
                            name="description"
                            multiline={true}
                          />
                        </div>
                      </div>
                    </form>
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
          // handleEdit={handleEdit}
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
