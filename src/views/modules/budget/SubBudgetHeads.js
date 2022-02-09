import React, { useEffect, useState } from "react";
import DataTableComponent from "../../../components/commons/tables/DataTableComponent";
import {
  alter,
  collection,
  destroy,
  store,
} from "../../../services/utils/controllers";
import useApi from "../../../services/hooks/useApi";
import FormInput from "../../../components/forms/FormInput";
import FormSelect from "../../../components/forms/FormSelect";
import CustomCheckbox from "../../../components/forms/CustomCheckbox";
import Alert from "../../../services/classes/Alert";
import SubmitButton from "../../../components/forms/SubmitButton";
import * as Yup from "yup";
import CustomSelect from "../../../components/forms/CustomSelect";
import TextInputField from "../../../components/forms/TextInputField";
import { validate } from "../../../services/utils/validation";

const SubBudgetHeads = () => {
  const {
    request,
    data: subBudgetHeads,
    setData: setSubBudgetHeads,
    loading: isLoading,
  } = useApi(collection);

  const [departmentIDs, setDepartmentIDs] = useState([]);
  const [budgetHeads, setBudgetHeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const initialState = {
    id: 0,
    budget_head_id: 0,
    department_id: 0,
    budgetCode: "",
    description: "",
    name: "",
    type: "",
    logisticsBudget: false,
  };

  const [state, setState] = useState(initialState);
  const [update, setUpdate] = useState(false);

  const columns = [
    {
      label: "Name",
      key: "name",
    },
  ];

  const handleEdit = (data) => {
    console.log(data);
    setState(data);
    setUpdate(true);
    setOpen(true);
  };

  const handleDestroy = (data) => {
    Alert.flash(
      "Are you sure?",
      "warning",
      "You would not be able to revert this!!"
    ).then((result) => {
      if (result.isConfirmed) {
        destroy("subBudgetHeads", data.id)
          .then((res) => {
            setSubBudgetHeads([
              ...subBudgetHeads.filter((sb) => sb.id !== res.data.data.id),
            ]);
            Alert.success("Deleted!!", res.data.message);
          })
          .catch((err) => console.log(err.message));
      }
    });
  };
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
    request("subBudgetHeads");

    getDepartments();
    getBudgetHead();
  }, []);

  const getDepartments = async () => {
    const response = await collection("departments");
    setDepartmentIDs(response.data.data);
  };

  const getBudgetHead = () => {
    collection("budgetHeads")
      .then((res) => setBudgetHeads(res.data.data))
      .catch((err) => console.log(err));
  };

  const rules = [
    { name: "budget_head_id", rules: ["required", "integer"] },
    { name: "department_id", rules: ["required", "integer"] },
    { name: "budgetCode", rules: ["required"] },
    { name: "name", rules: ["required"] },
    { name: "description", rules: ["required"] },
    { name: "type", rules: ["required"] },
    { name: "logisticsBudget", rules: ["required"] },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      budget_head_id: state.budget_head_id,
      department_id: state.department_id,
      budgetCode: state.budgetCode,
      name: state.name,
      description: state.description,
      type: state.type,
      logisticsBudget: state.logisticsBudget,
    };

    const formErrors = validate(rules, data);
    setErrors(formErrors);
    const status =
      Object.keys(formErrors).length === 0 && formErrors.constructor === Object;

    if (status) {
      if (update) {
        try {
          alter("subBudgetHeads", state.id, data)
            .then((res) => {
              const result = res.data.data;

              setSubBudgetHeads(
                subBudgetHeads.map((el) => {
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
        try {
          store("subBudgetHeads", data)
            .then((res) => {
              const result = res.data.data;
              setSubBudgetHeads([result, ...subBudgetHeads]);
              Alert.success("Created!!", res.data.message);
            })
            .catch((err) => console.log(err.message));
        } catch (error) {
          console.log(error);
        }
      }

      setErrors({});

      setUpdate(false);
      setState(initialState);
      setOpen(false);
    }
  };

  const optionsType = [
    { key: "capital", label: "Capital" },
    { key: "recursive", label: "Recursive" },
    { key: "personnel", label: "Personnel" },
  ];

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="page-titles">
          <button
            className="btn btn-success"
            onClick={() => setOpen(!open)}
            disabled={open}
          >
            <i className="fa fa-plus-square"></i> Add Sub budget Head
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
                        <div className="col-md-4">
                          <CustomSelect
                            options={budgetHeads}
                            value={state.budget_head_id}
                            onChange={(e) => {
                              setState({
                                ...state,
                                budget_head_id: e.target.value,
                              });
                            }}
                            error={
                              errors &&
                              errors.budget_head_id &&
                              errors.budget_head_id.length > 0
                            }
                            errorMessage={
                              errors &&
                              errors.budget_head_id &&
                              errors.budget_head_id[0]
                            }
                            // placeholder="Enter Role Name"
                          />
                        </div>

                        <div className="col-md-4">
                          <CustomSelect
                            options={departmentIDs}
                            value={state.department_id}
                            error={
                              errors &&
                              errors.department_id &&
                              errors.department_id.length > 0
                            }
                            onChange={(e) => {
                              setState({
                                ...state,
                                department_id: e.target.value,
                              });
                            }}
                            errorMessage={
                              errors &&
                              errors.department_id &&
                              errors.department_id[0]
                            }
                            name="department_id"
                            type="number"
                          />
                        </div>

                        <div className="col-md-4">
                          <TextInputField
                            value={state.budgetCode}
                            placeholder="Budget Code"
                            onChange={(e) => {
                              setState({
                                ...state,
                                budgetCode: e.target.value,
                              });
                            }}
                            error={
                              errors &&
                              errors.budgetCode &&
                              errors.budgetCode.length > 0
                            }
                            errorMessage={
                              errors &&
                              errors.budgetCode &&
                              errors.budgetCode[0]
                            }
                            type="text"
                          />
                        </div>

                        <div className="col-md-12">
                          <TextInputField
                            value={state.description}
                            error={
                              errors &&
                              errors.description &&
                              errors.description.length > 0
                            }
                            errorMessage={
                              errors &&
                              errors.description &&
                              errors.description[0]
                            }
                            onChange={(e) => {
                              setState({
                                ...state,
                                description: e.target.value,
                              });
                            }}
                            placeholder="Description"
                            type="text"
                            name="description"
                            multiline={2}
                          />
                        </div>

                        <div className="col-md-4">
                          <TextInputField
                            value={state.name}
                            onChange={(e) => {
                              setState({
                                ...state,
                                name: e.target.value,
                              });
                            }}
                            error={
                              errors && errors.name && errors.name.length > 0
                            }
                            errorMessage={
                              errors && errors.name && errors.name[0]
                            }
                            placeholder="Name"
                            type="text"
                            name="name"
                          />
                        </div>

                        <div className="col-md-4">
                          <CustomSelect
                            value={state.type}
                            onChange={(e) => {
                              setState({
                                ...state,
                                type: e.target.value,
                              });
                            }}
                            error={
                              errors && errors.type && errors.type.length > 0
                            }
                            errorMessage={
                              errors && errors.type && errors.type[0]
                            }
                            defaultText="Type"
                            name="type"
                            options={optionsType}
                          />
                        </div>

                        <div className="col-md-4 mt-2">
                          <input
                            type="checkbox"
                            checked={state.logisticsBudget === 0 ? true : false}
                            value={state.logisticsBudget}
                            onChange={(e) => {
                              console.log(e.target.value);
                              setState({
                                ...state,
                                logisticsBudget: e.target.value,
                              });
                            }}
                          />
                          <label htmlFor="">Logistics Budget</label>
                        </div>

                        <div className="mt-3 d-flex ml-3">
                          <button type="submit" className="btn btn-primary">
                            {update ? "Update" : "Submit"}
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
                  </>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="col-lg-12">
        <DataTableComponent
          pageName="Sub Budget Heads"
          columns={columns}
          rows={searchTerm.length < 1 ? subBudgetHeads : results}
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

export default SubBudgetHeads;
