/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import DataTableComponent from "../../../components/commons/tables/DataTableComponent";
import useApi from "../../../services/hooks/useApi";
import { collection } from "../../../services/utils/controllers";
import Form from "../../../components/forms/Form";
import FormInput from "../../../components/forms/FormInput";
import FormSelect from "../../../components/forms/FormSelect";
import CustomCheckbox from "../../../components/forms/CustomCheckbox";
import SubmitButton from "../../../components/forms/SubmitButton";
import { store } from "../../../services/utils/controllers";

const Fund = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [creditBudgetHeads, setCreditBudgetHead] = useState([]);

  const {
    data: funds,
    request: fetch,
    loading: isLoading,
  } = useApi(collection);

  useEffect(() => {
    fetch("creditBudgetHeads");
    getCreditBudgetHeads();
  }, []);

  const columns = [
    {
      label: "Sub Budget Head",
      key: "sub_budget_head_id",
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
    fetch(`subBudgetHeads/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleEdit = (data) => {};

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

  const handleSubmit = (values) => {
    store("creditBudgetHeads", values)
      .then((res) => console.log("Succcess", res))
      .catch((err) => console.log(err));

    // console.log(values);

    // const formErrors = validate(rules, data);
    // setErrors(formErrors);
    // const status =
    //   Object.keys(formErrors).length === 0 && formErrors.constructor === Object;

    // if (status) {
    //   if (update) {
    //     try {
    //       alter("roles", state.id, data)
    //         .then((res) => {
    //           const result = res.data.data;

    //           setRoles(
    //             roles.map((el) => {
    //               if (result.id === el.id) {
    //                 return result;
    //               }

    //               return el;
    //             })
    //           );
    //           Alert.success("Updated", res.data.message);
    //         })
    //         .catch((err) => console.log(err.message));
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   } else {
    //     try {
    //       store("roles", data)
    //         .then((res) => {
    //           const result = res.data.data;
    //           setRoles([result, ...roles]);
    //           Alert.success("Created!!", res.data.message);
    //         })
    //         .catch((err) => console.log(err.message));
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }

    //   setErrors({});

    //   setUpdate(false);
    //   setState(initialState);
    //   setOpen(false);
    // }
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
                    <Form
                      initialValues={{
                        sub_budget_head_id: 0,
                        approved_amount: "",
                        description: "",
                      }}
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-md-6">
                          {/* <select>
                            {creditBudgetHeads.map((sbh) => (
                              <option
                                onChange={() => getSubBudgetHeadValue(sbh.id)}
                              >
                                {sbh.name}
                              </option>
                            ))}
                          </select> */}

                          <FormSelect
                            options={creditBudgetHeads}
                            // onChange={}
                            // placeholder="Enter Role Name"
                            name="sub_budget_head_id"
                          />
                        </div>

                        <div className="col-md-6">
                          <FormInput
                            placeholder="Approved amount"
                            type="text"
                            name="approved_amount"
                          />
                        </div>

                        <div className="col-md-6">
                          <FormInput
                            placeholder="Current Balance"
                            value="0"
                            type="text"
                            name="current_balance"
                            disabled
                          />
                        </div>

                        <div className="col-md-6">
                          <FormInput
                            placeholder="New Amount"
                            type="text"
                            name="new_amount"
                            disabled
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

                        <div className="mt-3">
                          <SubmitButton
                            className="btn btn-primary"
                            title="Submit"
                          />

                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>

                          {/* <button
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
