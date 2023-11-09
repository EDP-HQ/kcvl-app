import React, { useContext, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);
const Typechart = (posts) => {
  const min = -100;
  const max = 100;
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Dataset 1",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: labels.map(
          () => Math.floor(Math.random() * (max - min + 1)) + min
        ),
      },
      {
        type: "bar",
        label: "Dataset 2",
        backgroundColor: "rgb(75, 192, 192)",
        data: labels.map(
          () => Math.floor(Math.random() * (max - min + 1)) + min
        ),
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "bar",
        label: "Dataset 3",
        backgroundColor: "rgb(53, 162, 235)",
        data: labels.map(
          () => Math.floor(Math.random() * (max - min + 1)) + min
        ),
      },
    ],
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Chart type="bar" data={data} />
    </div>
  );
};

export default Typechart;
