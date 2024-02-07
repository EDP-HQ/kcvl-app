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

import {  getksb} from "../../api/ksb";

const MRRatio = ({serverFetchNow}) => {
  const [selectedMachCode, setSelectedMachCode] = useState("SWF"); // Initial value, you can change it as needed
  const [data, setData] = useState(null);
  const [fetchNow, setFetchNow] = useState();
  const [loading, setLoading] = useState(true);

  const selectData = [
    
    "SWF",
    "INLINE",
    "WR 1",
    "WR 2",
    "WR 3",
    "PC",
    "SPRINGWIRE",
    "BW-A",
    "BW-A1",
    "SC-B",
    "SC-E",
    "BW-G",
    "KNSB",
  ];

  const fetchAndSetData = async (code) => {
    try {
      let fetchDataFunction;
      setFetchNow(new Date());
      setLoading(true); // Set loading to true when starting to fetch data

      //based on selected
      switch (code) {
     
      
        case "SWF":
          code = "D01"; // Y
          fetchDataFunction = getksb;
          break;
        case "INLINE":
          code = "D02"; //y
          fetchDataFunction = getksb;
          break;
        case "WR 1":
          code = "D03"; //y
          fetchDataFunction = getksb;
          break;
        case "WR 2":
          code = "D04"; //y
          fetchDataFunction = getksb;
          break;
        case "WR 3":
          code = "D05"; //y
          fetchDataFunction = getksb;
          break;
        case "PC":
          code = "D06"; //n
          fetchDataFunction = getksb;
          break;
        case "SPRINGWIRE":
          code = "D07"; //y
          fetchDataFunction = getksb;
          break;
        case "BW-A":
          code = "D08"; //n
          fetchDataFunction = getksb;
          break;
        case "BW-A1":
          code = "D09"; //n
          fetchDataFunction = getksb;
          break;
        case "SC-B":
          code = "D10"; //n
          fetchDataFunction = getksb;
          break;
        case "SC-E":
          code = "D11"; //n
          fetchDataFunction = getksb;
          break;
        case "BW-G":
          code = "D12"; //n
          fetchDataFunction = getksb;
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

   const formattedDate = fetchNow ? fetchNow.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }): "";
 


  // Display data function
  const DisplayData = ({ data }) => {
     if (loading) {
       return <p>Loading data...</p>; // Show loading indicator while data is being fetched
     }

    if (!data) {
      return <p>No Fetching data for {selectedMachCode}</p>;
    }
    
/* const IdleTime = () => {
  
  if (data.D05000 === 0) {
  
    const idleTime = formattedDate - new Date(data.SIGTIME);
    
    return <p>Idle Time: {idleTime} milliseconds</p>;
  } else {
    return null; // or return an alternative component/message if needed
  }
}; */


    return (
  <>
    {data.map((item) => {
      
      const sigtime = new Date(item.SIGTIME);
      const currentDateTime = new Date();

      // Calculate the time difference in milliseconds
      const timeDifference = currentDateTime - sigtime;

      // Calculate the difference in hours
      const hoursDifference = timeDifference / (1000 * 60 * 60);
      return (
     
          <div key={item.MACHCODE}>
          {/* Add more properties as needed */}

          
            {hoursDifference < 24 && (

            <Card className="mx-5 mb-2"style={{backgroundColor: item.D05000 === "1" ? "#2A980B" : "#F62000" }}>
            <Text className="text-center text-2xl" color="white"  >{item.MACHNAME}</Text>
            
          
          {item.D05000 === "0" && (
          <Text
            className="text-center"
            color="white"
            
          >
          Stop Time:{item.DURATION}
          </Text>
        )}
      
        {item.D05000 === "1" && (
          <Text
            className="text-center"
            color="white"
            style={{ fontWeight: 'bold', fontSize: '1.5rem' }}
          >
             Run Time:{item.DURATION}
          </Text>
        )}
        
            <ProgressCircle
              id={item.MACHCODE}
              value={item.MC_RATIO}
              radius={80}
              strokeWidth={15}
              tooltip={`SIGTIME: ${item.SIGTIME.replace(/[TZ]/g, ' ')},
               QUALITY: ${item.QUALITY}`}
              color="yellow"
            >
              <Grid numItems={1}>
               
                <Text className="text-center" color="white">{item.MC_RATIO}%</Text>
              </Grid>
            </ProgressCircle>
            </Card>
                 )}

           {/*  if stop more than 24hours     */} 
            {hoursDifference >= 24 && (

              <Card className="mx-5 mb-2"style={{backgroundColor: "#B3B3B5" }}>
              <Text className="text-center text-2xl" color="white"  >{item.MACHNAME}</Text>


              {item.D05000 === "0" && (
              <Text
              className="text-center"
              color="white"

              >
              Stop Time:{(hoursDifference/24).toFixed(2)}days
              </Text>
              )}

              {item.D05000 === "1" && (
              <Text
              className="text-center"
              color="white"
              style={{ fontWeight: 'bold', fontSize: '1.5rem' }}
              >
              Stop Time:{(hoursDifference/24).toFixed(2)}days
              </Text>
              )}

              <ProgressCircle
                id={item.MACHCODE}
                value={item.MC_RATIO}
                radius={80}
                strokeWidth={15}
                tooltip={`SIGTIME: ${item.SIGTIME.replace(/[TZ]/g, ' ')},
                QUALITY: ${item.QUALITY}`}
                color="gray"
              >
                <Grid numItems={1}>
                
                  <Text className="text-center" color="white">{item.MC_RATIO}%</Text>
                </Grid>
              </ProgressCircle>
              </Card>
                  )}
          </div>
     );
    })}
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
