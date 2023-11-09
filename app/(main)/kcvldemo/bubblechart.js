import React, { useContext, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const Bubblechart = (posts) => {
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
        label: "Red dataset",
        data: Array.from({ length: 10 }, () => ({
          x: Math.floor(Math.random() * (max - min + 1) + min),
          y: Math.floor(Math.random() * (max - min + 1) + min),
          r: Math.floor(Math.random() * (max - min + 1) + min),
        })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Blue dataset",
        data: Array.from({ length: 10 }, () => ({
          x: Math.floor(Math.random() * (max - min + 1) + min),
          y: Math.floor(Math.random() * (max - min + 1) + min),
          r: Math.floor(Math.random() * (max - min + 1) + min),
        })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Bubble options={options} data={data} />
    </div>
  );
};

export default Bubblechart;
