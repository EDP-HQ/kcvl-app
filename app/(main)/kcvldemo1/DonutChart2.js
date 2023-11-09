import { Card, DonutChart, Title } from "@tremor/react";
import React from "react";

const cities = [
  {
    name: "New York",
    sales: 9800,
  },
  {
    name: "London",
    sales: 4567,
  },
  {
    name: "Hong Kong",
    sales: 3908,
  },
  {
    name: "San Francisco",
    sales: 2400,
  },
  {
    name: "Singapore",
    sales: 1908,
  },
  {
    name: "Zurich",
    sales: 1398,
  },
];

const valueFormatter = (number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

const DonutChart2 = () => {
  const [value, setValue] = React.useState(null);
  return (
    <>
      <Card className="mx-auto">
        <Title>Sales</Title>
        <DonutChart
          className="mt-6"
          data={cities}
          category="sales"
          index="name"
          colors={["rose", "yellow", "orange", "indigo", "blue", "emerald"]}
          onValueChange={(v) => setValue(v)}
        />
      </Card>
      <pre>{JSON.stringify(value)}</pre>
    </>
  );
};

export default DonutChart2;
