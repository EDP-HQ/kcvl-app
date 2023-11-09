"use client";

import React, { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Grid } from "@tremor/react";
import { Card } from "@tremor/react";
import { Col } from "@tremor/react";
import { Flex, Text, Metric } from "@tremor/react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

// import { LayoutContext } from '../../../layout/context/layoutcontext';

// IMPORT OTHER COMPONENTS
import VBarchart from "./vbarchart";
import Hbarchart from "./hbarchart";
import Stackchart from "./stackchart";
import Groupchart from "./groupchart";
import Areachart from "./areachart";
import Linechart from "./linechart";
import Multichart from "./multichart";
import Piechart from "./piechart";
import Doughnutchart from "./doughnutchart";
import Polarchart from "./polarchart";
import Radarchart from "./radarchart";
import Scatterchart from "./scatterchart";
import Bubblechart from "./bubblechart";
import Typechart from "./typechart";
import Eventchart from "./eventchart";
const Chartjsindex = (posts) => {
  // const { layoutConfig } = useContext(LayoutContext);

  useEffect(() => {
    // ChartJS.register(ArcElement, Tooltip, Legend);
  }, []);

  return (
    <div className="">
      <Grid numItemsLg={6} className="gap-1 mt-1">
        {/* Main section */}
        <Col numColSpanLg={4}>
          <Card className="h-full">
            <Linechart />
          </Card>
        </Col>

        {/* KPI sidebar */}
        <Col numColSpanLg={2}>
          <div className="space-y-1">
            <Card>
              <VBarchart />
            </Card>
            <Card>
              <Hbarchart />
            </Card>
          </div>
        </Col>
      </Grid>
      <Grid numItemsMd={1} numItemsLg={4} className="gap-1 mt-1">
        <Card>
          <Piechart />
        </Card>
        <Card>
          <Doughnutchart />
        </Card>
        <Card>
          <Polarchart />
        </Card>
        <Card>
          <Radarchart />
        </Card>
      </Grid>
      <Grid numItemsMd={1} numItemsLg={2} className="gap-1 mt-1">
        <Card>
          <Scatterchart />
        </Card>
        <Card>
          <Bubblechart />
        </Card>
      </Grid>

      <Grid numItemsLg={6} className="gap-1 mt-1">
        {/* KPI sidebar */}
        <Col numColSpanLg={2}>
          <div className="space-y-1">
            <Card>
              <Groupchart />
            </Card>
            <Card>
              <Areachart />
            </Card>
          </div>
        </Col>
        {/* Main section */}

        <Col numColSpanLg={4}>
          <Card className="h-full">
            <Eventchart />
          </Card>
        </Col>
      </Grid>
      <Grid numItemsMd={2} numItemsLg={3} className="gap-1 mt-1">
        <Card>
          <Multichart />
        </Card>
        <Card>
          <Typechart />
        </Card>
        <Card>
          <Stackchart />
        </Card>
      </Grid>
    </div>
    // <div className="card">
    //     <div className='grid nested-grid'>
    //         <div className='col-8'>
    //             <div className="grid">
    //                 <div className='col-4'><Doughnutchart />
    //                 </div>
    //                 <div className='col-4'><Polarchart />
    //                 </div>
    //                 <div className='col-4'><Radarchart />
    //                 </div>
    //                 <div className='col-6'><Scatterchart />
    //                 </div>
    //                 <div className='col-6'> <Typechart />
    //                 </div>
    //             </div>
    //         </div>
    //         <div className='col-4'>
    //             <Eventchart/>
    //             <div className="grid">
    //                 <div className='col-6'> <Typechart />
    //                 </div>
    //                 <div className='col-6'> <Typechart />
    //                 </div>
    //                 <div className='col-3'> <Polarchart />
    //                 </div>
    //                 <div className='col-3'><Polarchart />
    //                 </div>
    //                 <div className='col-3'><Polarchart />
    //                 </div>
    //                 <div className='col-3'><Polarchart />
    //                 </div>
    //                 <div className='col-12'>
    //                 </div>
    //             </div>
    //         </div>

    //     </div>
    //     <div className="grid nested-grid">
    //         <div className="col-8">
    //             <div className="grid">
    //                 <div className="col-4"><h5 className="text-center">Real Time Chart</h5>
    //                     <Hbarchart />
    //                 </div>
    //                 <div className="col-4"><h5 className="text-center">Real Time Chart</h5>
    //                     <Stackchart />
    //                 </div>
    //                 <div className="col-4"><h5 className="text-center">Real Time Chart</h5>
    //                     <Groupchart />
    //                 </div>
    //                 <div className="col-4"><h5 className="text-center">Real Time Chart</h5>
    //                     <Areachart />
    //                 </div>
    //                 <div className='col-4'><h5 className="text-center">Real Time Chart</h5>
    //                     <Linechart />
    //                 </div>
    //                 <div className='col-4'><h5 className="text-center">Real Time Chart</h5>
    //                     <VBarchart />
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="col-4"><h5 className="text-center">Real Time Chart</h5>
    //             <Piechart />
    //         </div>
    //     </div>
    //     <div className='grid'>
    //         <div className='col-12'>
    //         <Bubblechart />
    //             {/* <Multichart/> */}
    //         </div>
    //     </div>
    // </div>
  );
};

export default Chartjsindex;
