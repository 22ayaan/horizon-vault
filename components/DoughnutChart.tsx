"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from "chart.js";
import { doughnutChartColors } from "@/constants";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const accountNames = accounts.map((acc) => acc.name);
  const balances = accounts.map((acc) => acc.currentBalance);

  const data = {
    datasets: [
      {
        label: "Balance",
        data: balances,
        backgroundColor: doughnutChartColors.slice(0, balances.length),
      },
    ],
    labels: accountNames,
  };
  return (
    <Doughnut
      data={data}
      options={{
        cutout: "70%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
