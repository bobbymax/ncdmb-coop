/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";
// import { customTheme, filterByRef } from "../../../services/helpers/functions";

const AddEntitlements = (props) => {
  const defaultState = {
    benefit: null,
    prices: 0,
  };

  const [entitlement, setEntitlement] = useState(defaultState);
  const [grades, setGrades] = useState([]);

  const handleModalStateChange = (e) => {
    e.preventDefault();

    const data = {
      benefit_id: props.benefit.id,
      grades: grades,
      price_list_id: entitlement.prices,
    };

    props.onSubmit(data);
    setEntitlement(defaultState);
    setGrades([]);
    props.onHide();
  };

  return (
    <>
      <div className="modal">
        <div
          className="modal-content"
          {...props}
          // size="lg"
          // aria-labelledby="contained-modal-title-vcenter"
          // centered
        >
          <div className="modal-dialog">
            <form onSubmit={handleModalStateChange}>
              <div className="modal-header">
                <h5 className="modal-title" id="contained-modal-title-vcenter">
                  Add Entitlements
                </h5>
              </div>

              <div className="modal-body">
                {/* <Container fluid>
                <div className="row" style={{ marginBottom: 20 }}>
                  <Col>
                    <Form.Group>
                      <Form.Label>Benefit Name</Form.Label>
                      <input
                        type="text"
                        className="form-control"
                        value={props.benefit ? props.benefit.name : null}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                </div>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Grade Levels</Form.Label>
                      <Select
                        components={makeAnimated()}
                        theme={customTheme}
                        options={
                          props.benefit
                            ? filterByRef(
                                props.grades,
                                props.benefit.entitlements
                              )
                            : props.grades
                        }
                        placeholder="Select Grade Levels"
                        onChange={setGrades}
                        value={grades}
                        isSearchable
                        isMulti
                        autoFocus
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Amount</Form.Label>
                      <select
                        name="price_list_id"
                        className="form-control"
                        value={entitlement.prices}
                        onChange={(e) =>
                          setEntitlement({
                            ...entitlement,
                            prices: e.target.value,
                          })
                        }
                      >
                        <option>Select Payment Category</option>
                        {props.benefit
                          ? props.benefit.wages.map((wage) => (
                              <option key={wage.id} value={wage.id}>
                                {wage.amount}
                              </option>
                            ))
                          : null}
                      </select>
                    </Form.Group>
                  </Col>
                </Row>
              </Container> */}
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
      </div>
    </>
  );
};

export default AddEntitlements;
