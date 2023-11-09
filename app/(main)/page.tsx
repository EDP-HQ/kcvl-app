"use client";

import Image from "next/image";

import {
  Card,
  Grid,
  Col,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
} from "@tremor/react";

import {
  BadgeDelta,
  DeltaType,
  Flex,
  Metric,
  ProgressBar,
} from "@tremor/react";

export default function Home() {
  return (
    <main className="card">
     
        <Image
          alt="kiswire-vietnam"
          fill
          src="/img/DSC02513.JPG"
          sizes="(max-width: 768px) 100vw, (max-width: 1600px) 50vw, 33vw"
          // width={1600}
          // height={800}
        />
        {/* <div className="h-96" /> */}
      
    </main>
  );
}
