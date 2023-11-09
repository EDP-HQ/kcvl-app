import React, { useContext, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const Polarchart = (posts) => {
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

  const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: labels.map(() => Math.floor(Math.random() * 100)),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {}, []);

  return (
    <div>
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default Polarchart;
