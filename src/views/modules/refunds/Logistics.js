/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { collection, fetch, store } from "../../../services/utils/controllers";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const Logistics = (props) => {
  const [departments, setDepartments] = useState([]);
  const [users, setUsers] = useState([]);

  const initialState = {
    code: "",
    batch: null,
    expenditure_id: 0,
    user_id: 0,
    budgetCode: "",
    beneficiary: "",
    sub_budget: "",
    description: "",
    department_id: 0,
    amount: 0,
    activeExp: false,
    sub_budget_head_id: 0,
    subBudgetHeads: [],
  };

  const staffOptions = (optionsArr) => {
    const arr = [];
    optionsArr.length > 0 &&
      optionsArr.forEach((el) => {
        arr.push({ key: el.id, label: el.name });
      });
    return arr;
  };

  const [state, setState] = useState(initialState);

  const fetchBatch = (e) => {
    e.preventDefault();

    if (state.code !== "") {
      fetch("batches", state.code)
        .then((res) => {
          const data = res.data.data;

          setState({
            ...state,
            batch: data,
          });
        })
        .catch((err) => console.log(err.message));

      setState({
        ...state,
        code: "",
      });
    }
  };

  const requestRefund = (e) => {
    e.preventDefault();

    const data = {
      expenditure_id: state.expenditure_id,
      department_id: state.department_id,
    };

    store("refunds", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setState(initialState);
  };

  const fillExpenditure = (exp) => {
    setState({
      ...state,
      expenditure_id: exp.id,
      budgetCode: exp.subBudgetHead.budgetCode,
      beneficiary: exp.beneficiary,
      sub_budget: exp.subBudgetHead.name,
      description: exp.description,
      amount: exp.amount,
      activeExp: true,
    });
  };

  const getDepartments = () =>
    collection("departments")
      .then((res) => {
        setDepartments(res.data.data);
      })
      .catch((err) => console.log(err.message));

  const getSubBudgetHeads = () =>
    collection("subBudgetHeads")
      .then((res) => {
        setState({
          ...state,
          subBudgetHeads: res.data.data,
        });
      })
      .catch((err) => console.log(err.message));

  const getUsers = () => {
    collection("users")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getDepartments();

    getSubBudgetHeads();

    getUsers();
  }, []);

  useEffect(() => {
    const single =
      state.sub_budget_head_id > 0 &&
      state.subBudgetHeads.filter(
        (sub) => sub.id == state.sub_budget_head_id && sub
      );

    if (single.length > 0) {
      setState({
        ...state,
        budgetCode: single[0].budgetCode,
      });
    }
  }, [state.sub_budget_head_id]);

  useEffect(() => {
    const user =
      state.user_id > 0 &&
      users.filter((user) => user.id == state.user_id && user);

    if (user.length > 0) {
      setState({
        ...state,
        department_id:
          state.department === "" ? user.department.id : state.department_id,
      });
    }
  }, [state.user_id]);

  return (
    <>
      <h4 className="mb-4">Logistics</h4>

      <div className="mb-4">
        <form onSubmit={fetchBatch}>
          <div className="row">
            <div className="col-md-12">
              <input
                className="form-control"
                type="text"
                placeholder="ENTER BATCH NUMBER"
                value={state.code}
                onChange={(e) => setState({ ...state, code: e.target.value })}
                style={{
                  backgroundColor: state.activeExp ? "#f4f4f4" : "",
                }}
                disabled={state.activeExp ? true : false}
              />
            </div>
          </div>
        </form>
      </div>

      {state.activeExp ? (
        <div className="row mb-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <table className="table table-bordered table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Budget Code</th>
                      <th>Beneficiary</th>
                      <th>Description</th>
                      <th>Amount</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {state.batch && state.batch.expenditures.length > 0 ? (
                      state.batch.expenditures.map((exp) => (
                        <tr key={exp.id}>
                          <td>{exp.subBudgetHead.budgetCode}</td>
                          <td>{exp.beneficiary}</td>
                          <td>{exp.amount}</td>
                          <td>{exp.description}</td>

                          <td>
                            <button
                              className="btn btn-success btn-sm"
                              variant="success"
                              size="sm"
                              onClick={() => fillExpenditure(exp)}
                              disabled={exp.refunded !== null}
                            >
                              <i className="fa arrow-rotate-left"></i> REQUEST
                              REFUND
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-danger">
                          No Data Found!!
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {!state.activeExp ? (
        <div className="card">
          <div className="card-body">
            <form onSubmit={requestRefund}>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <select
                      className="form-control"
                      value={state.sub_budget_head_id}
                      onChange={(e) =>
                        setState({
                          ...state,
                          sub_budget_head_id: e.target.value,
                        })
                      }
                    >
                      <option>SELECT SUB BUDGET HEAD</option>

                      {state.subBudgetHeads && state.subBudgetHeads.length > 0
                        ? state.subBudgetHeads.map((dept) => (
                            <option key={dept.id} value={dept.id}>
                              {dept.name.toUpperCase()}
                            </option>
                          ))
                        : null}
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="BUDGET CODE"
                      value={state.budgetCode}
                      onChange={(e) =>
                        setState({ ...state, budgetCode: e.target.value })
                      }
                      readOnly
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <Select
                      styles={{ height: "40px" }}
                      components={makeAnimated()}
                      options={staffOptions(users)}
                      placeholder="Select Beneficiary"
                      onChange={(selectedOption) => {
                        setState({
                          ...state,
                          user_id: selectedOption.key,
                        });
                      }}
                      isSearchable
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <select
                      className="form-control"
                      value={state.department_id}
                      onChange={(e) =>
                        setState({ ...state, department_id: e.target.value })
                      }
                    >
                      <option>SELECT DEPARTMENT</option>

                      {departments && departments.length > 0
                        ? departments.map((dept) => (
                            <option key={dept.id} value={dept.id}>
                              {dept.name.toUpperCase()}
                            </option>
                          ))
                        : null}
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="AMOUNT"
                      value={state.amount}
                      onChange={(e) =>
                        setState({ ...state, amount: e.target.value })
                      }
                      // readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows={2}
                      // style={{ resize: "none" }}
                      type="text"
                      placeholder="EXPENDITURE DESCRIPTION"
                      value={state.description}
                      onChange={(e) =>
                        setState({ ...state, description: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="btn-group">
                    <button
                      className="btn btn-success"
                      disabled={state.department_id === 0}
                    >
                      <i className="fa fa-spinner"></i>
                      REQUEST REFUND
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() => setState({ ...state, activeExp: false })}
                    >
                      <i className="fa fa-close"></i>
                      CANCEL
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Logistics;
