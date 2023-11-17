"use client";

import Image from "next/image";

const photoimg = "/img/DSC02513.JPG";


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

  const imageStyle = {
    borderRadius: "1%",
    border: "1px solid #fff",
  };

  return (
    <>
      <Image
        priority={true}
        alt="kiswire-vietnam"
        src={photoimg}
        width={1600}
        height={475}
        sizes="100vw"
        style={{
          objectFit : 'contain',
          width: "100%",
          height: "auto",
        }}
      />
    </>
    
  );
}
