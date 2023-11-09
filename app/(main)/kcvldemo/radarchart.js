import React, { useContext, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Radarchart = (posts) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "Thing 1",
    "Thing 2",
    "Thing 3",
    "Thing 4",
    "Thing 5",
    "Thing 6",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: labels.map(() => Math.floor(Math.random() * 100)),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Radar data={data} options={options} />
    </div>
  );
};

export default Radarchart;
