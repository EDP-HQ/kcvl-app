"use client";
import { useState, useEffect, Suspense } from "react";
import {
  Title,
  Subtitle,
  Card,
  Flex,
  Metric,
  ProgressBar,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Badge,
  BadgeDelta,
  Grid,
  Bold,
  Icon,
  Button,
} from "@tremor/react";

import { ProgressCircle } from "@tremor/react";

import { BellIcon, RefreshIcon } from "@heroicons/react/solid";

import { getd14, getd15, getd16 } from "../../api/kcvl";

const MRRatio = ({ serverFetchNow }) => {
  const [selectedMachCode, setSelectedMachCode] = useState("D14A"); // Initial value, you can change it as needed
  const [data, setData] = useState(null);
  const [fetchNow, setFetchNow] = useState();
  const [loading, setLoading] = useState(true);

  const selectData = [
    "D14A",
    "D14B",
    "D14C",
    "D14D",
    "D15E",
    "D15F",
    "D15G",
    "D15H",
    "D16A",
    "D16B",
    "D16C",
    "D16D",
  ];

  const fetchAndSetData = async (code) => {
    try {
      setLoading(true); // Set loading to true when starting to fetch data

      let fetchDataFunction;
      setFetchNow(new Date());

      //based on selected
      switch (code.substring(0, 3)) {
        case "D14":
          fetchDataFunction = getd14;
          break;
        case "D15":
          fetchDataFunction = getd15;
          break;
        case "D16":
          fetchDataFunction = getd16;
          break;
        default:
          console.error(`Invalid MACHCODE: ${code}`);
          return;
      }

      const result = await fetchDataFunction(code);
      setData(result);
    } catch (error) {
      console.error(`Error fetching data for ${code}:`, error);
      setData(null);
    } finally {
      setLoading(false); // Set loading to false when data fetching is complete
    }
  };

  // handle machCode change
  const handleMachCodeChange = (event) => {
    setSelectedMachCode(event.target.value);
  };

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const formattedDate = fetchNow
    ? fetchNow.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })
    : "";

  // Display data function
  const DisplayData = ({ data }) => {
     if (loading) {
       // Show loading indicator while data is being fetched
       return <p>Loading...</p>;
     }

    if (!data) {
      return <p>No Fetching data for {selectedMachCode}</p>;
    }
    
    return (
      <>
        {data.map((item) => (
          <div key={item.MACHCODE}>
            {/* Add more properties as needed */}
            <ProgressCircle
              id={item.MACHCODE}
              value={item.MC_RATIO}
              radius={60}
              strokeWidth={10}
              tooltip={`SIGTIME: ${new Date(item.SIGTIME).toLocaleString(
                "vi",
                options
              )},  QUALITY: ${item.QUALITY}`}
              color={item.D05000 === "1" ? "emerald" : "slate"}
            >
              <Grid numItems={1}>
                <Text className="text-center">{item.MACHNAME}</Text>
                <Badge className="text-center">{item.MC_RATIO}%</Badge>
              </Grid>
            </ProgressCircle>
          </div>
        ))}
      </>
    );
  };

  useEffect(() => {
    // Fetch initial data
    fetchAndSetData(selectedMachCode);

    // Set up interval to fetch data every 1 minute
    const intervalId = setInterval(() => {
      fetchAndSetData(selectedMachCode);
    }, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [selectedMachCode]); // Trigger the effect when selectedMachCode changes

  return (
    <main className="card">
      <Title>
        Machine Running Status (Ratio) :
        <select
          id="machCodeSelect"
          value={selectedMachCode}
          onChange={handleMachCodeChange}
        >
          {selectData.map((machCode) => (
            <option key={machCode} value={machCode}>
              {machCode}
            </option>
          ))}
        </select>
      </Title>
      <Card className="flex flex-wrap gap-3 mx-auto">
        <DisplayData data={data} />
      </Card>

      <Subtitle>{formattedDate}</Subtitle>
    </main>
  );
};

export default MRRatio;
