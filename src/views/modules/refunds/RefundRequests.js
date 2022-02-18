/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { alter, collection } from "../../../services/utils/controllers";
import Alert from "../../../services/classes/Alert";

const RefundRequests = (props) => {
  const [refunds, setRefunds] = useState([]);
  const auth = useSelector((state) => state.auth.value.user);

  const initialState = {
    id: 0,
    subBudgetHeadId: 0,
    exp_id: 0,
    description: "",
    sub_budget_head_id: 0,
    subBudgetHeadName: "",
    budgetCode: "",
    amount: 0,
    balance: 0,
    newBalance: 0,
    status: "",
    showForm: false,
  };

  const [state, setState] = useState(initialState);
  const [subBudgetHead, setSubBudgetHead] = useState({});
  const [subBudgetHeads, setSubBudgetHeads] = useState({});

  const loadRefundDetails = (data) => {
    setState({
      ...state,
      id: data.id,
      exp_id: data.expenditure.id,
      sub_budget_head_id: data.expenditure.subBudgetHead.id,
      subBudgetHeadName: data.expenditure.subBudgetHead.name,
      budgetCode: data.expenditure.subBudgetHead.budgetCode,
      amount: data.expenditure.amount,
      showForm: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      oldSubBudgetHead: state.sub_budget_head_id,
      sub_budget_head_id: state.subBudgetHeadId,
      description: state.description,
      amount: state.amount,
      status: "approved",
    };

    alter("refunds", state.id, data).then((res) => {
      Alert.success("Created!!", res.data.message);

      setState(initialState);
    });

    setState({
      ...state,
      id: 0,
      subBudgetHeadId: 0,
      exp_id: 0,
      description: "",
      sub_budget_head_id: 0,
      subBudgetHeadName: "",
      budgetCode: "",
      amount: 0,
      balance: 0,
      newBalance: 0,
      status: "",
      showForm: false,
    });
  };

  const loadRefunds = () => {
    collection("refunds")
      .then((res) => setRefunds(res.data.data))
      .catch((err) => console.log(err.message));
  };

  const loadSubBudgetHeads = () => {
    collection("subBudgetHeads")
      .then((res) => {
        setState({
          ...state,
          subBudgetHeads: res.data.data,
        });
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    loadRefunds();
    loadSubBudgetHeads();
  }, []);

  useEffect(() => {
    if (state.isFunded) {
      setState({
        ...state,
        id: subBudgetHead.fund.id,
      });
    } else {
    }
  }, [state.isFunded]);

  useEffect(() => {
    const single =
      state.sub_budget_head_id > 0 &&
      subBudgetHeads.filter((sub) => sub.id == state.sub_budget_head_id && sub);

    if (single.length > 0) {
      setSubBudgetHead(single[0]);
      setState({
        ...state,
        approved_amount: parseFloat(single[0].approved_amount),
        description: single[0].fund !== null ? single[0].fund.description : "",
      });
    }
  }, [state.sub_budget_head_id]);

  useEffect(() => {
    if (state.approved_amount && state.amount) {
      const newBalance = state.approved_amount + state.amount;

      setState({
        ...state,
        newBalance: newBalance,
      });
    }
  }, [state.amount]);

  return (
    <>
      <h4 className="mb-4">Refund Requests</h4>

      {state.showForm ? (
        <Form className="mb-4" onSubmit={handleSubmit}>
          <Row>
            <Col md={8}>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={state.subBudgetHeadName}
                  onChange={(e) =>
                    setState({ ...state, subBudgetHeadName: e.target.value })
                  }
                  readOnly
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={state.budgetCode}
                  onChange={(e) =>
                    setState({ ...state, budgetCode: e.target.value })
                  }
                  readOnly
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={state.amount}
                  onChange={(e) =>
                    setState({ ...state, amount: e.target.value })
                  }
                  readOnly
                />
              </Form.Group>
            </Col>
            <Col md={8}>
              <Form.Group>
                <Form.Control
                  as="select"
                  className="form-control"
                  value={state.subBudgetHeadId}
                  onChange={(e) => {
                    setState({ ...state, subBudgetHeadId: e.target.value });
                  }}
                >
                  <option>Select Sub Budget Head</option>
                  {subBudgetHeads && subBudgetHeads.length > 0
                    ? subBudgetHeads.map((subBudgetHead) => {
                        if (
                          auth &&
                          auth.department.id === subBudgetHead.department_id &&
                          state.sub_budget_head_id !== subBudgetHead.id
                        ) {
                          return (
                            <option
                              key={subBudgetHead.id}
                              value={subBudgetHead.id}
                            >
                              {subBudgetHead.name}
                            </option>
                          );
                        } else {
                          return null;
                        }
                      })
                    : null}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="AVAILABLE BALANCE"
                  value={state.balance}
                  className="form-control"
                  onChange={(e) =>
                    setState({ ...state, balance: e.target.value })
                  }
                  readOnly
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="NEW BALANCE"
                  value={state.newBalance}
                  onChange={(e) =>
                    setState({ ...state, newBalance: e.target.value })
                  }
                  readOnly
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows="8"
                  placeholder="ENTER DESCRIPTION"
                  value={state.description}
                  onChange={(e) =>
                    setState({ ...state, description: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button
                type="submit"
                variant="success"
                size="sm"
                disabled={
                  state.description === "" || state.subBudgetHeadId === 0
                }
              >
                APPROVE REFUND
              </Button>
            </Col>
          </Row>
        </Form>
      ) : null}

      <div className="card">
        <div className="card-body table-responsive">
          <table className="table table-striped table-hover table-bordered ">
            <thead>
              <tr>
                <th>BUDGET NAME</th>
                <th>BENEFICIARY</th>
                <th>DESCRIPTION</th>
                <th>AMOUNT</th>
                <th>DATE REQUESTED</th>
                <th>DATE REFUNDED</th>
                <th>MODIFY</th>
              </tr>
            </thead>

            <tbody>
              {refunds && refunds.length > 0
                ? refunds.map((refund) => {
                    if (auth && auth.department.id === refund.department_id) {
                      return (
                        <tr key={refund.id}>
                          <td>{refund.expenditure.subBudgetHead.name}</td>
                          <td>{refund.expenditure.beneficiary}</td>
                          <td>{refund.expenditure.description}</td>
                          <td>{refund.expenditure.amount}</td>
                          <td>{refund.created_at}</td>
                          <td>
                            {refund.closed === 0
                              ? "Not Refunded"
                              : refund.updated_at}
                          </td>

                          <td>
                            <Button
                              variant="success"
                              size="sm"
                              onClick={() => loadRefundDetails(refund)}
                              disabled={refund.closed === 1}
                            >
                              {refund.closed === 1
                                ? "REFUNDED"
                                : "LOAD REQUEST"}
                            </Button>
                          </td>
                        </tr>
                      );
                    } else {
                      return null;
                    }
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RefundRequests;
