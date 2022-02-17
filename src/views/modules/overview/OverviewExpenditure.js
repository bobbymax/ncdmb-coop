import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Doughnut, Bar } from "react-chartjs-2";
import { formatCurrency } from "../../../services/utils/helpers";

const OverviewExpenditure = () => {
  const params = useLocation();

  const initialState = {
    subBudgetHead: {},
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

  const act = Math.round(
    (state.subBudgetHead.actual_expenditure /
      state.subBudgetHead.approved_amount) *
      100
  );

  const bala =
    state.subBudgetHead.approved_amount -
    state.subBudgetHead.actual_expenditure;

  const bal = Math.round((bala / state.subBudgetHead.approved_amount) * 100);

  const format = {
    labels: ["Expenditure", "Balance"],

    datasets: [
      {
        label: "Budget Overview",
        data: [act, bal],
        backgroundColor: ["rgba(39, 174, 96, 1.0)", "rgba(41, 128, 185, 1.0)"],
      },
    ],
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="page-titles">
          <h2>Expenditure Overview</h2>
        </div>
      </div>

      <div className="col-xl-12 col-md-12 col-sm-12">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="media align-items-center">
                  <Doughnut data={format} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-8 col-lg-8">
            <div className="card text-white bg-success"></div>
          </div>
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
