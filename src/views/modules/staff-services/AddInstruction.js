/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { verifyNumOfDays } from "../../../services/utils/helpers";

const AddInstruction = (props) => {
  const initialState = {
    claim_id: 0,
    benefit_id: 0,
    from: "",
    to: "",
    category: 0,
    numOfDays: 0,
    description: "",
    amount: 0,
  };

  const [state, setState] = useState(initialState);

  const auth = useSelector((state) => state.auth.value.user);
  const child = props.benefit.children;

  const collectData = (e) => {
    e.preventDefault();

    const url = `claims/${state.claim_id}/instructions`;

    const data = {
      benefit_id: state.benefit_id,
      from: state.from,
      to: state.to,
      category: state.category,
      numOfDays: state.numOfDays,
      description: state.description,
      amount: state.amount,
    };

    props.onSubmit(url, data);

    setState({
      ...state,
      benefit_id: 0,
      from: "",
      to: "",
      category: 0,
      numOfDays: 0,
      description: "",
      amount: 0,
    });

    // props.onHide();
  };

  const closeModal = () => {
    // setState({
    //   ...state,
    //   benefit_id: 0,
    //   from: "",
    //   to: "",
    //   category: 0,
    //   numOfDays: 0,
    //   description: "",
    //   amount: 0,
    // });

    props.onHide();
  };

  useEffect(() => {
    if (props.claim) {
      setState({
        ...state,
        claim_id: props.claim.id,
      });
    } else {
      setState({
        ...state,
        claim_id: 0,
      });
    }
  }, [props.claim]);

  useEffect(() => {
    if (state.from !== "" && state.to !== "") {
      if (props.benefit && props.benefit.numOfDays) {
        setState({
          ...state,
          numOfDays: verifyNumOfDays(state.from, state.to),
        });
      } else {
        setState({
          ...state,
          numOfDays: 0,
        });
      }
    }
  }, [state.from, state.to]);

  // useEffect(() => {
  //   if (
  //     props.benefit &&
  //     !props.benefit.numOfDays &&
  //     props.benefit.entitlements.length !== 0 &&
  //     state.benefit_id > 0
  //   ) {
  //     const fee = props.benefit.entitlements.filter(
  //       (entitlement) => entitlement.grade === auth.level
  //     );

  //     const entitlement = fee[0];

  //     setState({
  //       ...state,
  //       amount: entitlement.amount,
  //     });
  //   } else {
  //     setState({
  //       ...state,
  //       amount: 0,
  //     });

  //     return null;
  //   }
  // }, [props.benefit]);

  useEffect(() => {
    if (
      props.benefit &&
      props.benefit.numOfDays &&
      props.benefit.entitlements.length !== 0 &&
      state.numOfDays > 0
    ) {
      const fee = props.benefit.entitlements.filter(
        (entitlement) => entitlement.grade === auth.level
      );
      const entitlement = fee[0];
      const total = entitlement.amount * state.numOfDays;

      setState({
        ...state,
        amount: total,
      });
    }
  }, [props.benefit, state.numOfDays]);

  useEffect(() => {
    if (
      child &&
      state.numOfDays > 0 &&
      child.entitlements.length !== 0 &&
      state.category > 0
    ) {
      const fee = child.entitlements.filter(
        (entitlement) => entitlement.grade === auth.level
      );
      const entitlement = fee[0];

      const total = entitlement.amount * state.numOfDays;

      setState({
        ...state,
        amount: total,
      });
    }
  }, [child]);

  // console.log(props.benefit);

  return (
    <>
      <Modal
        className="modal"
        show={props.show}
        onHide={closeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="modal-dia">
          <div className="modal-content">
            <form onSubmit={collectData}>
              <div className="modal-header">
                <h5 className="modal-title">Add Detail</h5>
              </div>

              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="form-label">Type</label>

                        <select
                          value={state.benefit_id}
                          className="form-control"
                          onChange={(e) => {
                            setState({
                              ...state,
                              benefit_id: e.target.value,
                            });

                            props.fetcher(e.target.value);
                          }}
                        >
                          <option value="0">Select Type</option>

                          {props.benefits.length !== 0
                            ? props.benefits.map((benefit) => {
                                if (benefit.parentId === 0) {
                                  return (
                                    <option key={benefit.id} value={benefit.id}>
                                      {benefit.name}
                                    </option>
                                  );
                                } else {
                                  return null;
                                }
                              })
                            : null}
                        </select>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="form-label">From</label>
                        <input
                          type="date"
                          className="form-control"
                          value={state.from}
                          onChange={(e) =>
                            setState({ ...state, from: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="form-label">To</label>
                        <input
                          type="date"
                          className="form-control"
                          value={state.to}
                          onChange={(e) =>
                            setState({ ...state, to: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {state.benefit_id !== 0 &&
                  props.benefit &&
                  props.benefit.hasChildren ? (
                    <div className="row mb-3">
                      <div className="col">
                        <label className="form-label">Select Category</label>

                        <select
                          as="select"
                          className="form-control"
                          value={state.category}
                          onChange={(e) => {
                            setState({ ...state, category: e.target.value });
                            props.children(e.target.value);
                          }}
                        >
                          <option value="0">Select Category</option>
                          {props.benefit !== null && props.benefit.children
                            ? props.benefit.children.map((child) => (
                                <option key={child.id} value={child.id}>
                                  {child.name}
                                </option>
                              ))
                            : null}
                        </select>
                      </div>
                    </div>
                  ) : null}

                  {state.benefit_id !== 0 &&
                  props.benefit &&
                  props.benefit.numOfDays ? (
                    <div className="row mb-3">
                      <div className="col">
                        <div className="form-group">
                          <label className="form-label">Number of Days</label>

                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Number of Days"
                            value={state.numOfDays}
                            onChange={(e) =>
                              setState({ ...state, numOfDays: e.target.value })
                            }
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <div className="row mb-3">
                    <div className="col">
                      <div className="form-group">
                        <label className="form-label">Description</label>
                        <textarea
                          className="form-control"
                          value={state.description}
                          onChange={(e) =>
                            setState({ ...state, description: e.target.value })
                          }
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <div className="form-group">
                        <label className="form-label">Amount</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter Amount"
                          value={state.amount}
                          onChange={(e) =>
                            setState({ ...state, amount: e.target.value })
                          }
                          readOnly={
                            props.benefit && props.benefit.label !== "others"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button className="btn btn-success" type="submit">
                  Submit
                </button>

                <button className="btn btn-danger">Close</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddInstruction;
