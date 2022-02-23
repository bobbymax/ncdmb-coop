/* eslint-disable eqeqeq */
import React from "react";
import { formatCurrency } from "../../../services/utils/helpers";

function BatchWidget({
  data,
  addToBatch,
  isButtonOff,
  paymentType,
  maxed,
  subBudgetHeadId,
}) {
  if (data) {
    return (
      <div className="row">
        {data.map((grp) => (
          <div className="col-md-6" key={grp.id}>
            <h4 className="group-title text-muted mb-3">- {grp.title} -</h4>

            {grp.items.length > 0 ? (
              grp.items.map((item) => (
                <div className="row" key={item.id}>
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="payments">
                          <div className="row">
                            <div className="col-md-10 mb-3">
                              <h4 className="budget-code text-success">
                                BC: {item.subBudgetHead.budgetCode}
                              </h4>
                            </div>
                            <div className="col-md-2 mb-3">
                              <div>
                                <button
                                  className="btn btn-success btn-xs btn-rounded"
                                  onClick={() => addToBatch(item)}
                                  disabled={
                                    isButtonOff &&
                                    subBudgetHeadId > 0 &&
                                    item.subBudgetHead.id != subBudgetHeadId
                                  }
                                >
                                  {console.log(item.subBudgetHead.id)}
                                  <i className="fa fa-plus"></i>
                                </button>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="text-muted">
                                <h5 className="text-muted">
                                  {item.description}
                                </h5>
                                <h5 className="text-warning mt-3">
                                  {formatCurrency(item.amount)}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bottom-card">
                <span className="">No Expenditure Data</span>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default BatchWidget;
