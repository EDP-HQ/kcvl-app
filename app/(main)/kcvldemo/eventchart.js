import React, {
  MouseEvent,
  useRef,
  useContext,
  useEffect,
  useState,
} from "react";

import { InteractionItem } from "chart.js";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import {
  Chart,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const Eventchart = (posts) => {
  const min = -100;
  const max = 100;

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

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

  const printDatasetAtEvent = (dataset) => {
    if (!dataset.length) return;

    const datasetIndex = dataset[0].datasetIndex;

    console.log(data.datasets[datasetIndex].label);
  };

  const printElementAtEvent = (element) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];

    console.log(data.labels[index], data.datasets[datasetIndex].data[index]);
  };

  const printElementsAtEvent = (elements) => {
    if (!elements.length) return;

    console.log(elements.length);
  };

  const chartRef = useRef(null);

  const onClick = (event) => {
    console.log("onclick", event);
    const chart = chartRef;
    console.log("chartRef", chartRef);
    console.log("chart", chart);

    // const getREF = getDatasetAtEvent(chartRef,event)

    // if (!chart) {
    //     return;
    // }

    // printDatasetAtEvent(getDatasetAtEvent(chart, event));
    // printElementAtEvent(chart, event);
    // printElementsAtEvent(getElementsAtEvent(chart, event));
  };

  useEffect(() => {}, []);

  return (
    <div>
      {" "}
      <Chart
        ref={chartRef}
        type="bar"
        onClick={onClick}
        options={options}
        data={data}
      />
    </div>
  );
};

export default Eventchart;
