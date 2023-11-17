import ReactSpeedometer from "react-d3-speedometer";

const Mach1 = () => {
    const value1 = 515.5;

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <ReactSpeedometer
        // fluidWidth={true}
        needleHeightRatio={0.8}
        value={355}
        segments={2}
        minValue={0}
        maxValue={500}
        // customSegmentStops={[0, 250, 750, 1000]}
        customSegmentStops={[0, 100, 500]}
        // segmentColors={["firebrick", "gold", "limegreen"]}.
        segmentColors={["tomato", "limegreen"]}
        // customSegmentLabels={[
        //   {
        //     text: "Good",
        //     position: "OUTSIDE",
        //     // color: "#d8dee9",
        //   },
        //   {
        //     text: "Great",
        //     position: "OUTSIDE",
        //     // color: "#d8dee9",
        //   },
        //   {
        //     text: "Awesome!",
        //     position: "OUTSIDE",
        //     // color: "#d8dee9",
        //   },
        // ]}
        // ringWidth={47}
        needleTransitionDuration={3333}
        needleTransition="easeElastic"
        needleColor="steelblue"
        // currentValueText="How are you?"
        currentValueText={"Current Value:${value}"}
      />

      <ReactSpeedometer
        forceRender={true}
        maxSegmentLabels={1}
        customSegmentStops={[0, value1, 1000]}
        segmentColors={["#1e90ff", "#add8e6"]}
        needleColor={"#4682b4"}
        // currentValueText={"Current Value: ${value}"}
        minValue={0}
        maxValue={1000}
        value={value1}
      />
    </div>
  );
};

export default Mach1;
