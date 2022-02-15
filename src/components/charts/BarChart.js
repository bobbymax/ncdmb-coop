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

  const data = {
    labels,
    datasets: [
      {
        label: "Actual Expenses",
        data: labels.map((label) => chartData[label] && chartData[label][0]),
        backgroundColor: ["rgba(41, 128, 185, 1.0)"],
      },
      {
        label: "Expected Expenses",
        data: labels.map((label) => chartData[label] && chartData[label][1]),
        backgroundColor: ["rgba(39, 174, 96, 1.0)"],
      },
    ],
  };

  return <Bar data={data} />;
};

export default BarChart;
