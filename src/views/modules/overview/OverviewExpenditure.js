import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { formatCurrency } from "../../../services/utils/helpers";

const OverviewExpenditure = () => {
  const params = useLocation();

  const initialState = {
    subBudgetHead: null,
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (params.pathname && params.state) {
      const subBudgetHead = params.state.subBudgetHead;

      setState({
        ...state,
        subBudgetHead,
      });
    }
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="page-titles">
          <h2>Expenditure Overview</h2>
        </div>
      </div>

      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <td>Budget Code</td>
                  <td>Beneficiary</td>
                  <td>Description</td>
                  <td>Amount</td>
                </tr>
              </thead>

              <tbody>
                {state.subBudgetHead.expenditures &&
                state.subBudgetHead.expenditures.length > 0
                  ? state.subBudgetHead.expenditures.map((subBudget) => (
                      <tr key={subBudget.id}>
                        <td>{subBudget.subBudgetHead.budgetCode}</td>
                        <td>{subBudget.beneficiary}</td>
                        <td>{subBudget.description}</td>
                        <td>{formatCurrency(subBudget.amount)}</td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewExpenditure;
