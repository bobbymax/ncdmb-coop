/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { collection, store } from "../../../services/utils/controllers";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import useApi from "../../../services/hooks/useApi";
import Alert from "../../../services/classes/Alert";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../../services/utils/helpers";

const Logistics = (props) => {
  const {
    data: logisticsData,
    setData: setLogisticsData,
    request,
  } = useApi(collection);

  const initialState = {
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

  const [departments, setDepartments] = useState([]);
  const [users, setUsers] = useState([]);
  const [state, setState] = useState(initialState);
  const [open, setOpen] = useState(false);
  const [fulfilled, setFulfilled] = useState(0);
  const auth = useSelector((state) => state.auth.value.user);

  const staffOptions = (optionsArr) => {
    const arr = [];
    optionsArr.length > 0 &&
      optionsArr.forEach((el) => {
        arr.push({ key: el.id, label: el.name });
      });
    return arr;
  };

  const requestRefund = (e) => {
    e.preventDefault();

    const data = {
      sub_budget_head_id: state.sub_budget_head_id,
      budget_code: state.budgetCode,
      user_id: state.user_id,
      amount: state.amount,
      department_id: state.department_id,
      description: state.description,
      status: "pending",
    };

    store("logisticsRequests", data)
      .then((res) => {
        const result = res.data.data;

        setLogisticsData([result, ...logisticsData]);
        Alert.success("Created!!", res.data.message);

        setState(initialState);
        setOpen(false);
      })
      .catch((err) => console.log(err));
  };

  const fulfillLogistic = (logistic) => {
    const closed = logistic.closed === "True" ? 0 : 1;

    store(`logisticsRequests/${logistic.id}/complete`, { closed }).then(
      (res) => {
        const result = res.data.data;
        const closed = result.closed === "False" ? 0 : 1;

        setFulfilled(closed);

        Alert.success("Logistic Fulfilled!!", res.data.message);
      }
    );
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

    request("logisticsRequests");
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
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="page-titles">
            <button
              className="btn btn-success"
              onClick={() => setOpen(!open)}
              disabled={open}
            >
              <i className="fa fa-plus-square"></i> Add Logistics
            </button>
          </div>
        </div>
      </div>

      {open && (
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
                      disabled={
                        state.department_id === 0 || state.description === ""
                      }
                    >
                      <i className="fa fa-undo"></i> REQUEST REFUND
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        setOpen(false);
                        setState(initialState);
                      }}
                    >
                      <i className="fa fa-close"></i> CANCEL
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="col-md-12">
        <div className="card table-responsive">
          <div className="card-body">
            <table className="table table-bordered table-striped table-hover">
              <thead>
                <tr>
                  <th>Budget Code</th>
                  <th>Beneficiary</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Fulfilment</th>
                </tr>
              </thead>

              <tbody>
                {logisticsData && logisticsData.length > 0 ? (
                  logisticsData.map((logistic) => (
                    auth.id === logistic.controller_id && (
                      <tr key={logistic.id}>
                        <td>{logistic.subBudgetHead.budgetCode}</td>
                        <td>{logistic.beneficiary.name}</td>
                        <td>{logistic.description}</td>
                        <td>{formatCurrency(logistic.amount)}</td>
                        <td>{logistic.status}</td>
                        <td>
                          {logistic.closed === 1 ? (
                            <span class="badge bg-success text-white rounded-pill">
                              Fulfilled
                            </span>
                          ) : (
                            <button
                              className="btn btn-warning"
                              onClick={() => fulfillLogistic(logistic)}
                              disabled={logistic.closed === 1}
                            >
                              <i
                                className="fa fa-check-circle"
                                style={{ color: "white !important" }}
                              ></i>
                            </button>
                          )}
                        </td>
                      </tr>
                    )
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-danger">
                      No Data Found!!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logistics;
