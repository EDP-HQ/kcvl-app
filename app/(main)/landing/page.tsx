"use client"

import { Grid } from "@tremor/react";

import Mach1 from "./mach1";
import Mach2 from "./mach2";
const Dashboard = () => {

  return (
    <main className="card">
      <Grid numItemsMd={2} numItemsLg={6} className="mt-2 gap-2">
        <Mach1 />
      </Grid>

      
    </main>
  );
}

export default Dashboard