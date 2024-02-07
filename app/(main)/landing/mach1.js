// // import ReactSpeedometer from "react-d3-speedometer";
// import GaugeChart from "react-gauge-chart";
// //import { CircularProgressbar } from "react-circular-progressbar";
// //import "react-circular-progressbar/dist/styles.css";

// import {
//   Card,
//   Metric,
//   CategoryBar,
//   Legend,
//   Text,
//   Flex,
//   BadgeDelta,
//   Subtitle,
//   ProgressCircle,
//   Tracker,
//   Tab,
//   TabGroup,
//   TabList,
//   TabPanels,
//   TabPanel,
//   List,
//   ListItem,
// } from "@tremor/react";
// const Mach1 = () => {
//   const operatehour = 15.5;
//   const operatepercentage = (operatehour / 24) * 100;
//   const value1 = 515.5;
//   const percentage = 66;
//   const data1 = [
//     { color: "emerald", tooltip: "Operational" },
//     { color: "emerald", tooltip: "Operational" },
//     { color: "emerald", tooltip: "Operational" },
//     { color: "emerald", tooltip: "Operational" },
//     { color: "emerald", tooltip: "Operational" },
//     { color: "emerald", tooltip: "Operational" },
//     { color: "yellow", tooltip: "Degraded" },
//     { color: "emerald", tooltip: "Operational" },
//     { color: "emerald", tooltip: "Operational" },
//     { color: "emerald", tooltip: "Operational" },
//     { color: "emerald", tooltip: "Operational" },
//     { color: "emerald", tooltip: "Operational" },
//     { color: "emerald", tooltip: "Operational" },
//     { color: "emerald", tooltip: "Operational" },
//     { color: "rose", tooltip: "Downtime" },
//     { color: "emerald", tooltip: "Operational" },
//     { color: "emerald", tooltip: "Operational" },
//     { color: "emerald", tooltip: "Operational" },
//     { color: "emerald", tooltip: "Operational" },
//     { color: "gray", tooltip: "" },
//     { color: "gray", tooltip: "" },
//     { color: "gray", tooltip: "" },
//     { color: "gray", tooltip: "" },
//     { color: "gray", tooltip: "" },
//   ];

//   const runtimes = [
//     {
//       date: "2023-11-14 09:43",
//       duration: "36",
//     },
//     {
//       date: "2023-11-14 09:32",
//       duration: "275",
//     },
//     {
//       date: "2023-11-14 09:21",
//       duration: "1840",
//     },
//     {
//       date: "2023-11-14 09:20",
//       duration: "44",
//     },
//     {
//       date: "2023-11-14 09:19",
//       duration: "69",
//     },
//   ];

//   return (
//     <>
//       <Card className="mx-auto" decoration="top" decorationColor="lime">
//         <Metric>MACHINE #1</Metric>
//         <Flex justifyContent="between" alignItems="center">
//           <Text>2023-11-13 09:29</Text>
//           <BadgeDelta
//             // deltaType="moderateIncrease"
//             isIncreasePositive={true}
//             size="xs"
//           >
//             RUNNING
//           </BadgeDelta>
//         </Flex>
//         <Tracker data={data1} className="mt-2" size="md" />
//         <TabGroup className="mt-2">
//           <TabList>
//             <Tab>DURATION</Tab>
//             <Tab>RUNTIME</Tab>
//             <Tab>VALUE</Tab>
//           </TabList>
//           <TabPanels>
//             <TabPanel>
//               <Text className="mt-2 font-medium text-gray-700">
//                 Operational : {operatehour} H
//               </Text>
//               <ProgressCircle
//                 value={operatepercentage}
//                 size="xl"
//                 color="indigo"
//               >
//                 <span className="text-lg text-gray-700">{`${Number(
//                   operatepercentage
//                 ).toFixed(2)}%`}</span>
//               </ProgressCircle>
//               {/* <div style={{ width: 300, height: 200 }}> </div> */}
//               {/* <CircularProgressbar
//                   className="mt-4"
//                   value={operatepercentage}
//                   text={`${Number(operatepercentage).toFixed(2)}%`}
//                 /> */}
//             </TabPanel>
//             <TabPanel>
//               <List>
//                 {runtimes.map((item) => (
//                   <ListItem key={item.date}>
//                     <span>{item.date}</span>
//                     <span>{item.duration}</span>
//                   </ListItem>
//                 ))}
//               </List>
//             </TabPanel>
//             <TabPanel>
//               <ReactSpeedometer
//                 className="mt-2"
//                 forceRender={true}
//                 maxSegmentLabels={1}
//                 customSegmentStops={[0, value1, 1000]}
//                 segmentColors={["#1e90ff", "#add8e6"]}
//                 needleColor={"#4682b4"}
//                 // currentValueText={"Current Value: ${value}"}
//                 minValue={0}
//                 maxValue={1000}
//                 value={value1}
//               />
//             </TabPanel>
//           </TabPanels>
//         </TabGroup>
//       </Card>
//     </>
//   );
// };

// export default Mach1;
