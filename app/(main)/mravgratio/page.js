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

import Indicator from "./indicator";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { getratio } from "../../api/avg";


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
    "KCVL-TW1",
    "KCVL-TW2",
    "KCVL-FD",
  ];

  

  const fetchAndSetData = async (code) => {
    try {
      let fetchDataFunction;
      setFetchNow(new Date());
      setLoading(true); // Set loading to true when starting to fetch data

      //based on selected
      switch (code) {
     
            case "SWF":
              code = "D01";
              fetchDataFunction = getratio;
              break;
            case "INLINE":
              code = "D02";
              fetchDataFunction = getratio;
              break;
            case "WR 1":
              code = "D03";
              fetchDataFunction = getratio;
              break;
            case "WR 2":
              code = "D04";
              fetchDataFunction = getratio;
              break;
            case "WR 3":
              code = "D05";
              fetchDataFunction = getratio;
              break;
            case "PC":
              code = "D06";
              fetchDataFunction = getratio;
              break;
            case "SPRINGWIRE":
              code = "D07";
              fetchDataFunction = getratio;
              break;
            case "BW-A":
              code = "D08";
              fetchDataFunction = getratio;
              break;
            case "BW-A1":
              code = "D09";
              fetchDataFunction = getratio;
              break;
            case "SC-B":
              code = "D10";
              fetchDataFunction = getratio;
              break;
            case "SC-E":
              code = "D11";
              fetchDataFunction = getratio;
              break;
            case "BW-G":
              code = "D12";
              fetchDataFunction = getratio;
              break;
            case "KNSB":
              code = "D13";
              fetchDataFunction = getratio;
              break;
            case "KCVL-TW1":
              code = "D14";
              fetchDataFunction = getratio;
              break;
            case "KCVL-TW2":
              code = "D15";
              fetchDataFunction = getratio;
              break;
            case "KCVL-FD":
              code = "D16";
              fetchDataFunction = getratio;
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
    



return (
  <>
    {data.map((item) => {
       const ratioData = [
        { mcstatus: item.MCSTATUS, duration: item.DURATION, realtime: item.REALTIMERATIO, day: item.DAILYRATIO, week: item.WEEKLYRATIO , month: item.MONTHLYRATIO },
    
      ];
      //duration:item.SIGTIME.replace(/[TZ]/g, ' ')
       
      return (

        
        <Grid  key={item.id} style={{ gap: '3px' , width: '33.33%'}}>
        <Card   className="p-3 pr-3 pl-3" >
        <Metric style={{ fontSize:'35px', textAlign: 'center' }}>{item.MACHNAME} 
             
    </Metric>
       
         
        <DataTable
       
       size="small"
       showGridlines
       stripedRows
       value={ratioData}
       
   
     >
       {}
       <Column
            header="RUN/STOP"
            headerStyle={{ border:"2px solid black", textAlign: 'center' }}
           
           
            body={(rowData) => (
              <div style={{  width: '117px' , height:'80px', 
              fontSize: '39px',  color: 'black',
              justifyContent: 'center', display: 'flex',
              alignItems: 'center',backgroundColor: rowData.mcstatus == 1 ? "#2B80E0" : "gray"  }}>
              
    
            </div>
            
            )}
            bodyStyle={{ border:"2px solid black",textAlign: 'center' }}
          ></Column>
       <Column
            header="YESTERDAY"
            headerStyle={{ border:"2px solid black", textAlign: 'center' }}
           
            body={(rowData) => (
              
              <div style={{ width: '117px' , height:'80px', 
                            fontSize: '39px',  color: 'black',
                            justifyContent: 'center', display: 'flex',
                            alignItems: 'center',
                            backgroundColor: rowData.day <= 40
                             ? "red"
                           : rowData.day >= 41 && rowData.day <= 60
                             ? "yellow"
                           : "green",}}>
                {rowData.day} %
              </div>
            )}
            bodyStyle={{ border:"2px solid black",textAlign: 'center' }}
          ></Column>
       <Column
         
         header="WEEK"
         headerStyle={{border:"2px solid black", textAlign: 'center' }}
         body={(rowData) => (
         
          <div style={{ width: '117px' , height:'80px',  
                        fontSize: '39px',  color: 'black',
                        justifyContent: 'center', display: 'flex',
                        alignItems: 'center',
                        backgroundColor: rowData.week <= 40
                         ? "red"
                       : rowData.week >= 41 && rowData.week <= 60
                         ? "yellow"
                       : "green",}}>
            {rowData.week} %
          </div>
        )}
        bodyStyle={{ border:"2px solid black",textAlign: 'center' }}
       ></Column>
         <Column
         
         header="MONTH"
         headerStyle={{ border:"2px solid black",textAlign: 'center' }}
         body={(rowData) => (
        
          <div style={{ width: '117px' , height:'80px', 
                        fontSize: '39px',  color: 'black',
                        justifyContent: 'center', display: 'flex',
                        alignItems: 'center',
                        backgroundColor: rowData.month <= 40
                         ? "red"
                       : rowData.month >= 41 && rowData.month <= 60
                         ? "yellow"
                       : "green",}}>
            {rowData.month} %
          </div>
        )}
      
        bodyStyle={{ border:"2px solid black",textAlign: 'center' }}
       ></Column>
      
     </DataTable>

     {item.MCSTATUS == 1 && (

        <Metric style={{fontSize:'20px', textAlign: 'center' }}>START TIME: {item.DURATION}</Metric> 

     )}
    {item.MCSTATUS == 0 && (

        <Metric style={{fontSize:'20px', textAlign: 'center' }}>STOP TIME: {item.DURATION}</Metric> 

)}
      </Card>

      </Grid>
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
    
    
    <main className="card flex flex-wrap gap-3" 
    
      >
      
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
         
    <Indicator /> 
      
      
  
    
     <DisplayData data={data} />
     <Card>
      <Subtitle>{formattedDate}</Subtitle>
      </Card>
    </main>
  );
};

export default MRRatio;
