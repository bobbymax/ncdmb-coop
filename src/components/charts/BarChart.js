/* eslint-disable no-unused-vars */
import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = ({ chartData }) => {
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

  const actual = [];
  const actualData = () => {
    labels.map((label) => (chartData[label][0] / chartData[label][1]) * 100);
  };

  console.log(chartData);

  const formatData = () => {
    const data = [];

    labels.map((label) =>
      // data.push(chartData[label])
      data.push({
        actual: chartData[label],
        exp: chartData[label],
      })
    );

    return data;
  };

  // console.log(
  //   "Expectec expenses data",
  //   labels.map((label) => (chartData[label][1] / chartData[label][0]) * 100)
  // );

  const data = {
    labels,
    datasets: [
      {
        label: "Actual Expenses",
        data: actual,
        backgroundColor: ["rgba(41, 128, 185, 1.0)"],
      },
      {
        label: "Expected Expenses",
        data: formatData()[1],
        backgroundColor: ["rgba(39, 174, 96, 1.0)"],
      },
    ],
  };

  return <Bar data={data} />;
};

export default BarChart;
