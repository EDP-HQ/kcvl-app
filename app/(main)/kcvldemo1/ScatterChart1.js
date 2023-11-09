import { Card, ScatterChart, Text, Title } from "@tremor/react";

const chartdata2 = [
  {
    location: "Location A",
    x: 100,
    y: 200,
    z: 200,
  },
  {
    location: "Location A",
    x: 120,
    y: 100,
    z: 260,
  },
  {
    location: "Location A",
    x: 170,
    y: 300,
    z: 400,
  },
  {
    location: "Location B",
    x: 140,
    y: 250,
    z: 280,
  },
  {
    location: "Location B",
    x: 150,
    y: 400,
    z: 500,
  },
  {
    location: "Location B",
    x: 110,
    y: 280,
    z: 200,
  },
  {
    location: "Location C",
    x: 200,
    y: 260,
    z: 240,
  },
  {
    location: "Location C",
    x: 220,
    y: 290,
    z: 120,
  },
  {
    location: "Location D",
    x: 0,
    y: 190,
    z: 250,
  },
  {
    location: "Location D",
    x: 70,
    y: 0,
    z: 950,
  },
];

const customTooltip = ({ payload, active, label }) => {
  if (!active || !payload) return null;
  return (
    <div className="w-48 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border">
      <div className="flex flex-1 space-x-2.5">
        <div
          className={`w-1.5 flex flex-col bg-${payload[0]?.color}-500 rounded`}
        />
        <div className="w-full">
          <p className="mb-2 font-medium text-tremor-content-emphasis">
            {label}
          </p>
          {payload.map((payloadItem, index) => (
            <div
              key={index}
              className="flex items-center justify-between space-x-6"
            >
              <span className="text-tremor-content">{payloadItem.name}</span>
              <span className="font-medium tabular-nums text-tremor-content-emphasis">
                {payloadItem.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ScatterChart1 = () => {
  // const [value, setValue] = React.useState(null);

  return (
    <>
      <Card>
        <ScatterChart
          className="h-80 mt-6 -ml-2"
          yAxisWidth={50}
          data={chartdata2}
          category="location"
          x="x"
          y="y"
          size="z"
          showLegend={false}
          customTooltip={customTooltip}
        />
      </Card>
    </>
  );
};

export default ScatterChart1;
