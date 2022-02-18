/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Doughnut, Bar } from "react-chartjs-2";
import { formatCurrency } from "../../../services/utils/helpers";

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const OverviewExpenditure = () => {
  const params = useLocation();

  const initialState = {
    subBudgetHead: {},
    expenditures: [],
  };
  const [state, setState] = useState(initialState);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (params.pathname && params.state) {
      const subBudgetHead = params.state.subBudgetHead;

      setState({
        ...state,
        subBudgetHead: subBudgetHead,
        expenditures: subBudgetHead.expenditures,
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

  const data = {
    labels,
    datasets: [
      {
        label: "Budget Expenditure",
        data: [],
        backgroundColor: ["rgba(41, 128, 185, 1.0)"],
      },
    ],
  };

  const value = state.expenditures.map((ex) => {
    const label = ex.updated_at.split(",", 1);

    return label;
  });

  // const sumAmounts = (arr, key) => {
  //   return arr.reduce((a, b) => a + (b[key] || 0), 0);
  // };

  labels.map((month) => {
    // let monArr = [];
    let result = {};

    // const total = state.expenditures
    //   .map((exp) => {
    //     const label = exp.updated_at.split(",", 1);
    //     return month === label && exp.amount;
    //   })
    //   .reduce((prev, curr) => prev + curr);

    // const total = state.expenditures.reduce((sum, exp) => {
    //   const label = exp.updated_at.split(",", 1);

    //   return month === label && sum + parseFloat(exp.amount);
    // });

    const total = state.expenditures.filter((exp) => {
      const label = exp.updated_at.split(",", 1);
      console.log(label);
      return label === "Jan" && exp;
    });

    result["month"] = month;
    result["total_amount"] = total;

    return console.log(result);
  });

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="page-titles">
          <h2 className="text-black">Expenditure Overview</h2>
        </div>
      </div>

      <div className="col-xl-12 col-md-12 col-sm-12">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card bg-light">
              <div className="card-body">
                <div className="media align-items-center">
                  <Doughnut data={format} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-8 col-lg-8">
            <div className="card text-white bg-white">
              <div className="card-body pb-0 pt-0">
                <div className="d-flex align-items-center mb-3">
                  <Bar data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-12 col-md-12 col-sm-12">
        <div className="card">
          <div className="card-body table-responsive">
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
                {state.expenditures && state.expenditures.length > 0
                  ? state.expenditures.map((subBudget) => (
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
