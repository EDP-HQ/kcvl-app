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
} from "@tremor/react";

import { ProgressCircle } from "@tremor/react";

import {
  UserGroupIcon,
  UserIcon,
  BookOpenIcon,
  BellIcon,
  StatusOnlineIcon,
} from "@heroicons/react/solid";

import { getd14, getd15, getd16 } from "@/app/api/kcvl";

const MRRatio = () => {
  const [resultD14A, setResultD14A] = useState([]);
  const [resultD14B, setResultD14B] = useState([]);
  const [resultD14C, setResultD14C] = useState([]);
  const [resultD14D, setResultD14D] = useState([]);
  const [resultD15E, setResultD15E] = useState([]);
  const [resultD15F, setResultD15F] = useState([]);
  const [resultD15G, setResultD15G] = useState([]);
  const [resultD15H, setResultD15H] = useState([]);
  const [resultD16A, setResultD16A] = useState([]);
  const [resultD16B, setResultD16B] = useState([]);
  const [resultD16C, setResultD16C] = useState([]);
  const [resultD16D, setResultD16D] = useState([]);

  const LoadData = () => {
    // D14A
    // getd14("D14")
    //   .then((data) => {
    //     // console.log(data);
    //     //  setResultData(data);
    //   })
    //   .catch((err) => console.log(err));
    // // D15
    // getd15("D15")
    //   .then((data) => {
    //     // console.log(data);
    //     //  setResultData(data);
    //   })
    //   .catch((err) => console.log(err));

    // // D14A
    // getd16("D16")
    //   .then((data) => {
    //     // console.log(data);
    //     //  setResultData(data);
    //   })
    //   .catch((err) => console.log(err));

    getd14("D14A")
      .then((data) => {
        setResultD14A(data);
      })
      .catch((err) => console.log(err));
    getd14("D14B")
      .then((data) => {
        setResultD14B(data);
      })
      .catch((err) => console.log(err));
    getd14("D14C")
      .then((data) => {
        setResultD14C(data);
      })
      .catch((err) => console.log(err));
    getd14("D14D")
      .then((data) => {
        setResultD14D(data);
      })
      .catch((err) => console.log(err));

    getd15("D15E")
      .then((data) => {
        setResultD15E(data);
      })
      .catch((err) => console.log(err));
    getd15("D15F")
      .then((data) => {
        setResultD15F(data);
      })
      .catch((err) => console.log(err));
    getd15("D15G")
      .then((data) => {
        setResultD15G(data);
      })
      .catch((err) => console.log(err));
    getd15("D15H")
      .then((data) => {
        setResultD15H(data);
      })
      .catch((err) => console.log(err));

    getd16("D16A")
      .then((data) => {
        setResultD16A(data);
      })
      .catch((err) => console.log(err));
    getd16("D16B")
      .then((data) => {
        setResultD16B(data);
      })
      .catch((err) => console.log(err));
    getd16("D16C")
      .then((data) => {
        setResultD16C(data);
      })
      .catch((err) => console.log(err));
    getd16("D16D")
      .then((data) => {
        setResultD16D(data);
      })
      .catch((err) => console.log(err));
  };

  const LineA = () => {
    return (
      <>
        <ProgressCircle
          id="twa01"
          value={5}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWA01</Text>
            <Badge className="text-center">5%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="twa02"
          value={5}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWA02</Text>
            <Badge className="text-center">5%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="twa03"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWA03</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="twa04"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWA04</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="twa05"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWA05</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="twa05"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWA05</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="twa06"
          value={7}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="slate"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWA06</Text>
            <Badge className="text-center">7%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="twa07"
          value={7}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="slate"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWA07</Text>
            <Badge className="text-center">7%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="twa08"
          value={7}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="slate"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWA08</Text>
            <Badge className="text-center">7%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="twa09"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="slate"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWA09</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="twa10"
          value={1}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWA10</Text>
            <Badge className="text-center">1%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="twa11"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWA11</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="twa12"
          value={5}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWA12</Text>
            <Badge className="text-center">5%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="twa13"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWA13</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="twa14"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWA14</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="twa15"
          value={4}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWA15</Text>
            <Badge className="text-center">4%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="twa16"
          value={5}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWA16</Text>
            <Badge className="text-center">5%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="twa18"
          value={8}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWA18</Text>
            <Badge className="text-center">6%</Badge>
          </Grid>
        </ProgressCircle>
      </>
    );
  };

  const LineB = () => {
    return (
      <>
        <ProgressCircle
          id="twb01"
          value={5}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWB01</Text>
            <Badge className="text-center">5%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="twb02"
          value={2}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWB02</Text>
            <Badge className="text-center">2%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWB03"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWB03</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWB04"
          value={3}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWB04</Text>
            <Badge className="text-center">3%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWB05"
          value={4}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWB05</Text>
            <Badge className="text-center">4%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWB06"
          value={7}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWB06</Text>
            <Badge className="text-center">7%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWB07"
          value={7}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="slate"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWB07</Text>
            <Badge className="text-center">7%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWB08"
          value={7}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="slate"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWB08</Text>
            <Badge className="text-center">7%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWB09"
          value={7}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="slate"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWB09</Text>
            <Badge className="text-center">7%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWB10"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="slate"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWB10</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWB11"
          value={4}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWB11</Text>
            <Badge className="text-center">4%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWB12"
          value={2}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWB12</Text>
            <Badge className="text-center">2%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWB13"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWB13</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWB14"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWB14</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWB15"
          value={8}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWB15</Text>
            <Badge className="text-center">8%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWB16"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWB16</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWB17"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWB17</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWB18"
          value={4}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWB18</Text>
            <Badge className="text-center">4%</Badge>
          </Grid>
        </ProgressCircle>
      </>
    );
  };

  const LineC = () => {
    return (
      <>
        <ProgressCircle
          id="TWC01"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC01</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWC02"
          value={3}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC02</Text>
            <Badge className="text-center">3%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWC03"
          value={6}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC03</Text>
            <Badge className="text-center">6%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWC04"
          value={3}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC04</Text>
            <Badge className="text-center">3%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWC05"
          value={3}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC05</Text>
            <Badge className="text-center">3%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWC06"
          value={6}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC06</Text>
            <Badge className="text-center">6%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWC07"
          value={2}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="slate"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC07</Text>
            <Badge className="text-center">2%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWC08"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="slate"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC08</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWC09"
          value={6}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="slate"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC09</Text>
            <Badge className="text-center">6%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWC10"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="slate"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC10</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWC11"
          value={4}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC11</Text>
            <Badge className="text-center">4%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWC12"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC12</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWC13"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC13</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWC14"
          value={2}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC14</Text>
            <Badge className="text-center">2%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWC15"
          value={5}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC15</Text>
            <Badge className="text-center">5%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWC16"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC16</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWC17"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC17</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWC18"
          value={4}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC18</Text>
            <Badge className="text-center">4%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWC19"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC19</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWC20"
          value={8}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC20</Text>
            <Badge className="text-center">8%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWC21"
          value={2}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC21</Text>
            <Badge className="text-center">2%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWC22"
          value={1}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC22</Text>
            <Badge className="text-center">1%</Badge>
          </Grid>
        </ProgressCircle>

        <ProgressCircle
          id="TWC23"
          value={0}
          radius={60}
          strokeWidth={10}
          tooltip="SIGTIME: 2023-11-17T09:07:56.940Z, QUALITY: 192"
          color="emerald"
        >
          <Grid numItems={1}>
            <Text className="text-center">TWC23</Text>
            <Badge className="text-center">0%</Badge>
          </Grid>
        </ProgressCircle>
      </>
    );
  };

  useEffect(() => {
    // START
    LoadData();
    // console.log(resultD14A);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const DisplayData = ({ data }) => {
    console.log(data);
    return (
      <>
        {data.map((item) => (
          <div key={item.ID}>
            <p>ID: {item.ID}</p>
            <p>MACHNAME: {item.MACHNAME}</p>
            <p>MC_RATIO: {item.MC_RATIO}%</p>
            {/* Add more properties as needed */}
          </div>
        ))}
      </>
    );
  };

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const ProgresData = ({ data }) => {
    if (typeof data === "object") {
      // const length = data.length;
      // console.log("Length of the array:", length);
      // console.log(data);

      return (
        <>
          {data.map((item) => (
            <div key={item.ID}>
              {/* {item.MACHNAME} */}
              <ProgressCircle
                id={item.ID}
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
      
    } 
  };

  const YourComponent = ({ data }) => (
    <>
      {data.map((item) => (
        <ProgressCircle
          key={item.ID}
          id={item.ID}
          value={item.MC_RATIO}
          tooltip="radius: 25, strokeWidth: 10"
          color="emerald"
          size="xl"
        >
          <Grid numItems={1}>
            <Metric className="text-center">{item.MACHNAME}</Metric>
            <Title className="text-center">{item.MC_RATIO}%</Title>
          </Grid>
        </ProgressCircle>
      ))}
    </>
  );

  return (
    <main className="card">
      <Title>Machine Running Status</Title>

      <TabGroup>
        <TabList className="mt-0">
          <Tab icon={BellIcon}>D14</Tab>
          <Tab icon={BellIcon}>D15</Tab>
          <Tab icon={BellIcon}>D16</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <strong>LINE A</strong>
            <Card className="flex flex-wrap gap-3 mx-auto">
              {ProgresData(resultD14A)}
            </Card>
            <strong>LINE B</strong>
            <Card className="flex flex-wrap gap-3 mx-auto">
              {ProgresData(resultD14B)}
            </Card>
            <strong>LINE C</strong>
            <Card className="flex flex-wrap gap-3 mx-auto">
              {ProgresData(resultD14C)}
            </Card>
            <strong>LINE D</strong>
            <Card className="flex flex-wrap gap-3 mx-auto">
              {ProgresData(resultD14D)}
            </Card>
          </TabPanel>
          <TabPanel>D15</TabPanel>
          <TabPanel>D16</TabPanel>
        </TabPanels>
      </TabGroup>

      {/* <Grid numItemsMd={2} numItemsLg={6} className="mt-2 gap-2"></Grid> */}
    </main>
  );
};

export default MRRatio;
