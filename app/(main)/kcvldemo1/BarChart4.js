import { AreaChart, Card, Title, Flex, Switch } from "@tremor/react";
import React from "react";

const chartdata3 = [
  {
    date: "Jan 23",
    "Distance Running": 167,
    "Road Cycling": 145,
    "Open Water Swimming": 135,
    "Hatha Yoga": 115,
    "Street Basketball": 150,
  },
  {
    date: "Feb 23",
    "Distance Running": 125,
    "Road Cycling": 110,
    "Open Water Swimming": 155,
    "Hatha Yoga": 85,
    "Street Basketball": 180,
  },
  {
    date: "Mar 23",
    "Distance Running": 156,
    "Road Cycling": 149,
    "Open Water Swimming": 145,
    "Hatha Yoga": 90,
    "Street Basketball": 130,
  },
  {
    date: "Apr 23",
    "Distance Running": 165,
    "Road Cycling": 112,
    "Open Water Swimming": 125,
    "Hatha Yoga": 105,
    "Street Basketball": 170,
  },
  {
    date: "May 23",
    "Distance Running": 153,
    "Road Cycling": 138,
    "Open Water Swimming": 165,
    "Hatha Yoga": 100,
    "Street Basketball": 110,
  },
  {
    date: "Jun 23",
    "Distance Running": 124,
    "Road Cycling": 145,
    "Open Water Swimming": 175,
    "Hatha Yoga": 75,
    "Street Basketball": 140,
  },
];

const BarChart4 = () => {
  const [value, setValue] = React.useState(true);
  return (
    <>
      <Card className="mx-auto">
        <Flex>
          <Title className="whitespace-nowrap">All activities 2023</Title>
          {/* <Flex className="gap-2" justifyContent="end">
                        <label className="text-sm text-slate-500" htmlFor="switch">Legend Slider</label>
                        <Switch id="switch" checked={value} onChange={() => setValue(!value)} />
                    </Flex> */}
        </Flex>
        <AreaChart
          className="mt-0"
          data={chartdata3}
          index="date"
          categories={[
            "Distance Running",
            "Road Cycling",
            "Open Water Swimming",
            "Hatha Yoga",
            "Street Basketball",
          ]}
          colors={["neutral", "indigo", "rose", "orange", "emerald"]}
          yAxisWidth={30}
          // enableLegendSlider={value}
        />
      </Card>
    </>
  );
};

export default BarChart4;
