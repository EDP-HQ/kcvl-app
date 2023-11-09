import React, { useContext, useEffect, useState } from "react";

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const Scatterchart = (posts) => {
  const min = -100;
  const max = 100;
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "A dataset",
        data: Array.from({ length: 100 }, () => ({
          x: Math.floor(Math.random() * (max - min + 1) + min),
          y: Math.floor(Math.random() * (max - min + 1) + min),
        })),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Scatter options={options} data={data} />
    </div>
  );
};

export default Scatterchart;
