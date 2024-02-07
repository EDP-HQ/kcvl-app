

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
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
const Indicator = () => {
  const infoData = [
    { worse: "0-40", normal: "41-60" , good: "61-100" },

  ];
  return (
    <>
         <div  style={{ color: 'white', overflow: 'hidden', height: 'auto' }}>
  Something went wrongssssssssssssssssssssssssssssssssssssscsccccccccccccccccccccccc
  ccccccccccccddcccccccccsaadsdssssss
</div>
    <DataTable
                  
                  size="small"
                  showGridlines
                  stripedRows     
                  className="tableWithPadding"
                  value={infoData}
            >
              {}
              <Column
         
                    
                    header="RUN"
                    headerStyle={{ border:"2px solid black", textAlign: 'center' }}
                    style={{ textAlign: 'center' ,width: '45px' , height:'8px', 
                    backgroundColor: "#2B80E0"}}
                    body={(rowData) => (
                      <div style={{ width: '50px' , height:'8px', 
                                    color:"black",
                                    justifyContent: 'center', display: 'flex',
                                    alignItems: 'center',}}>
                          
                      </div>
                    )}
                    bodyStyle={{ border:"2px solid black",textAlign: 'center' }}
                   
                  
                  ></Column>
                      <Column
         
                    
                  header="STOP"
                  headerStyle={{ border:"2px solid black", textAlign: 'center' }}
                  style={{ textAlign: 'center', width: '45px' , height:'8px', 
                  backgroundColor: "gray"}}
                  body={(rowData) => (
                    <div style={{ width: '50px' , height:'8px', 
                                  color:"black",
                                  justifyContent: 'center', display: 'flex',
                                  alignItems: 'center',}}>
                        
                    </div>
                  )}
         
                  bodyStyle={{ border:"2px solid black",textAlign: 'center' }}
       
       ></Column>
              <Column
         
                    
                    header="WORSE"
                    headerStyle={{ border:"2px solid black", textAlign: 'center' }}
                    style={{ textAlign: 'center' ,width: '45px' , height:'8px', 
                    backgroundColor: "red"}}
                    body={(rowData) => (
                      <div style={{ width: '50px' , height:'8px', 
                                    color:"black",
                                    justifyContent: 'center', display: 'flex',
                                    alignItems: 'center',}}>
                          {rowData.worse}
                      </div>
                    )}
                    bodyStyle={{ border:"2px solid black",textAlign: 'center' }}
                   
                  
                  ></Column>
                  <Column
                    
                    
                    header="NORMAL"
                    headerStyle={{ border:"2px solid black", textAlign: 'center' }}
                    style={{ textAlign: 'center' ,width: '45px' , height:'8px', 
                    backgroundColor: "yellow"}}
                    body={(rowData) => (
                      <div style={{ width: '50px' , height:'8px', 
                                    color:"black",
                                    justifyContent: 'center', display: 'flex',
                                    alignItems: 'center',}}>
                          {rowData.normal}
                      </div>
                    )}
                  bodyStyle={{ border:"2px solid black",textAlign: 'center' }}
                  ></Column>
                   <Column
                    
                    header="GOOD"
                    headerStyle={{ border:"2px solid black", textAlign: 'center' }}
                    style={{ textAlign: 'center' ,width: '45px' , height:'8px', 
                    backgroundColor: "green"}}
                    body={(rowData) => (
                      <div style={{ width: '50px' , height:'8px', 
                                    color:"black",
                                    justifyContent: 'center', display: 'flex',
                                    alignItems: 'center',}}>
                          {rowData.good}
                      </div>
                    )}
                    bodyStyle={{ border:"2px solid black",textAlign: 'center' }}
                  
                  ></Column>
            
            </DataTable>
       


            </>
  )
   }
 export default Indicator;