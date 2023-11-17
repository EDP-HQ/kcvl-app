import GaugeChart from "react-gauge-chart";

const Mach3 = () => {
  const value1 = 515.5;
  const chartStyle = {
    height: 150,
  };

  return (
    <div>
      <GaugeChart
        id="gauge-chart1"
        nrOfLevels={10}
        percent={0.86}
        // style={chartStyle}
      />
      <GaugeChart
        id="gauge-chart3"
        nrOfLevels={30}
        colors={["#FF5F6D", "#FFC371"]}
        arcWidth={0.3}
        percent={0.37}
      />

      <GaugeChart
        id="gauge-chart4"
        nrOfLevels={10}
        arcPadding={0.1}
        cornerRadius={3}
        percent={0.6}
      />
      <GaugeChart
        id="gauge-chart5"
        nrOfLevels={420}
        arcsLength={[0.3, 0.5, 0.2]}
        colors={["#5BE12C", "#F5CD19", "#EA4228"]}
        percent={0.37}
        arcPadding={0.01}
      />

      <GaugeChart
        id="gauge-chart6"
        animate={false}
        nrOfLevels={15}
        percent={0.56}
        needleColor="#345243"
      />
    </div>
  );
};

export default Mach3;
