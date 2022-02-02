import React, { useEffect, useState } from "react";
import DataTableComponent from "../../../components/commons/tables/DataTableComponent";
import { collection } from "../../../services/utils/controllers";
import Form from "../../../components/forms/Form";
import FormInput from "../../../components/forms/FormInput";
import FormSelect from "../../../components/forms/FormSelect";
import CustomCheckbox from "../../../components/forms/CustomCheckbox";
import SubmitButton from "../../../components/forms/SubmitButton";

const SubBudgetHeads = () => {
  const [subBudgetHeads, setSubBudgetHeads] = useState([]);
  const [departmentIDs, setDepartmentIDs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);

  const [state, setState] = useState();
  const [update, setUpdate] = useState(false);
  const [errors, setErrors] = useState({});

  // const initialState = {
  //   id: 0,
  //   name: "",
  //   max_slots: 0,
  //   isSuper: 0,
  //   start_date: "",
  //   expiry_date: "",
  //   cannot_expire: 0,
  // };

  const columns = [
    {
      label: "Name",
      key: "name",
    },
  ];

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
          console.log(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err.message));
    } catch (error) {
      console.log(error);
    }
    getDepartments();
  }, []);

  const options = [
    { key: "0", label: "Yes" },
    { key: "1", label: "No" },
  ];

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const data = {
  //     name: state.name,
  //     max_slots: parseInt(state.max_slots),
  //     isSuper: state.isSuper,
  //     start_date: state.start_date,
  //     expiry_date: state.expiry_date,
  //     cannot_expire: state.cannot_expire,
  //   };

  //   const formErrors = validate(rules, data);
  //   setErrors(formErrors);
  //   const status =
  //     Object.keys(formErrors).length === 0 && formErrors.constructor === Object;

  //   if (status) {
  //     if (update) {
  //       try {
  //         alter("roles", state.id, data)
  //           .then((res) => {
  //             const result = res.data.data;

  //             setRoles(
  //               roles.map((el) => {
  //                 if (result.id === el.id) {
  //                   return result;
  //                 }

  //                 return el;
  //               })
  //             );
  //             Alert.success("Updated", res.data.message);
  //           })
  //           .catch((err) => console.log(err.message));
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     } else {
  //       try {
  //         store("roles", data)
  //           .then((res) => {
  //             const result = res.data.data;
  //             setRoles([result, ...roles]);
  //             Alert.success("Created!!", res.data.message);
  //           })
  //           .catch((err) => console.log(err.message));
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }

  //     setErrors({});

  //     setUpdate(false);
  //     setState(initialState);
  //     setOpen(false);
  //   }
  // };

  const getDepartments = async () => {
    const response = await collection("departments");
    setDepartmentIDs(response.data.data);
  };

  const optionsType = [
    { key: "capital", value: "Capital" },
    { key: "recursive", value: "Recursive" },
    { key: "personnel", value: "Personnel" },
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
                    <Form
                      initialValues={{
                        budget_head_id: "Choose Option",
                        department_id: "Choose Option",
                        budgetCode: "",
                        description: "",
                        name: "",
                        type: "",
                        logisticsBudget: true,
                      }}
                    >
                      <div className="row">
                        <div className="col-md-4">
                          <FormSelect
                            options={subBudgetHeads}
                            // placeholder="Enter Role Name"
                            name="budget_head_id"
                          />
                        </div>

                        <div className="col-md-4">
                          <FormSelect
                            options={departmentIDs}
                            // placeholder="Enter "
                            name="department_id"
                            type="number"
                          />
                        </div>

                        <div className="col-md-4">
                          <FormInput
                            placeholder="Budget Code"
                            type="text"
                            name="budgetCode"
                          />
                        </div>

                        <div className="col-md-12">
                          <FormInput
                            placeholder="Description"
                            type="text"
                            name="description"
                            multiline={true}
                          />
                        </div>

                        <div className="col-md-4">
                          <FormInput
                            placeholder="Name"
                            type="text"
                            name="name"
                          />
                        </div>

                        <div className="col-md-4">
                          <FormSelect
                            defaultText="Type"
                            name="type"
                            options={optionsType}
                          />
                        </div>

                        <div className="col-md-4 mt-2">
                          <CustomCheckbox
                            label="Logistics Budget"
                            name="logisticsBudget"
                          />

                          {/* <div class="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckChecked"
                              checked
                            />

                            <label
                              class="form-check-label"
                              for="flexSwitchCheckChecked"
                            >
                              Logistics Budget
                            </label>
                          </div> */}
                        </div>

                        <div className="mt-3">
                          <SubmitButton
                            className="btn btn-primary"
                            title="Submit"
                          />

                          {/* <button type="submit" className="btn btn-primary">
                            Submit
                          </button>

                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => {
                              // setUpdate(false);
                              // setState(initialState);
                              setOpen(false);
                              // setErrors({});
                            }}
                          >
                            Close
                          </button> */}
                        </div>
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

      <div class="col-lg-12">
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
