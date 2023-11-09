"use client";

import Image from "next/image";
import { CheckCircleIcon, ExclamationIcon } from "@heroicons/react/solid";
import { CashIcon, HandIcon, ClockIcon } from "@heroicons/react/outline";
import { UserGroupIcon, UserIcon } from "@heroicons/react/solid";

import {
  ProgressBar,
  Card,
  Grid,
  Col,
  Title,
  Badge,
  Text,
  Metric,
  BadgeDelta,
  Flex,
  CategoryBar,
  Legend,
  Callout,
  Icon,
  Divider,
  Subtitle,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
} from "@tremor/react";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
} from "@tremor/react";
import { List, ListItem } from "@tremor/react";

import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

const data = [
  {
    name: "Viola Amherd",
    Role: "Federal Councillor",
    departement:
      "The Federal Department of Defence, Civil Protection and Sport (DDPS)",
    status: "active",
  },
  {
    name: "Simonetta Sommaruga",
    Role: "Federal Councillor",
    departement:
      "The Federal Department of the Environment, Transport, Energy and Communications (DETEC)",
    status: "active",
  },
  {
    name: "Alain Berset",
    Role: "Federal Councillor",
    departement: "The Federal Department of Home Affairs (FDHA)",
    status: "active",
  },
  {
    name: "Ignazio Cassis",
    Role: "Federal Councillor",
    departement: "The Federal Department of Foreign Affairs (FDFA)",
    status: "active",
  },
  {
    name: "Karin Keller-Sutter",
    Role: "Federal Councillor",
    departement: "The Federal Department of Finance (FDF)",
    status: "active",
  },
  {
    name: "Guy Parmelin",
    Role: "Federal Councillor",
    departement:
      "The Federal Department of Economic Affairs, Education and Research (EAER)",
    status: "active",
  },
  {
    name: "Elisabeth Baume-Schneider",
    Role: "Federal Councillor",
    departement: "The Federal Department of Justice and Police (FDJP)",
    status: "active",
  },
];

import TAreachart from "./TAreaChart";
import TAreaChart1 from "./TAreaChart1";
import TAreaChart2 from "./TAreaChart2";
import TAreaChart3 from "./TAreaChart3";
import BarChart1 from "./BarChart1";
import BarChart2 from "./BarChart2";
import BarChart3 from "./BarChart3";
import BarChart4 from "./BarChart4";
import DonutChart1 from "./DonutChart1";
import DonutChart2 from "./DonutChart2";
import LineChart1 from "./LineChart1";
import LineChart2 from "./LineChart2";
import ScatterChart1 from "./ScatterChart1";
import BarList1 from "./BarList1";
import Databars1 from "./DataBars1";
import ProgressCircle1 from "./ProgressCircle1";
import SparkCharts1 from "./SparkCharts1";

const Dashbord1 = () => (
  <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
    <Col numColSpan={1} numColSpanLg={2}>
      <Card className="mx-auto">
        <Text>Total Users</Text>
        <Metric>10,483</Metric>
        <CategoryBar
          className="mt-4"
          values={[6724, 3621]}
          colors={["emerald", "red"]}
        />
        <Legend
          className="mt-3"
          categories={["Active users", "Inactive users"]}
          colors={["emerald", "red"]}
        />
      </Card>
    </Col>
    <Card className="mx-auto">
      <Flex justifyContent="between" alignItems="center">
        <Text>Production</Text>
        <BadgeDelta
          deltaType="moderateIncrease"
          isIncreasePositive={true}
          size="xs"
        >
          +12.3%
        </BadgeDelta>
      </Flex>
      <Metric>$ 23,456</Metric>
      <Subtitle>Info</Subtitle>
      <Text className="mt-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        tempor lorem non est congue
      </Text>
    </Card>
    <Card className="max-auto">
      <Text>Current wind speed: Turbine 1</Text>
      <Metric>18.4knts</Metric>
      <Callout
        className="mt-1"
        title="Critical speed limit reached"
        // icon={ExclamationIcon}
        color="rose"
      >
        Turbine reached critical speed. Immediately reduce turbine speed.
      </Callout>
    </Card>
    <Card className="max-auto">
      <Text>Current wind speed: Turbine 2</Text>
      <Metric>7.2knts</Metric>
      <Callout className="mt-4" title="No critical system data" color="teal">
        All systems are currently within their default operating ranges.
      </Callout>
    </Card>
    <Card>
      <Text>Total Sales</Text>
      <Metric>$ 442,276</Metric>
      <Badge icon={ClockIcon}>waiting</Badge>
      <TabGroup>
        <TabList className="mt-8">
          <Tab icon={UserGroupIcon}>Location A</Tab>
          <Tab icon={UserIcon}>Location B</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="mt-10">
              <Flex className="mt-4">
                <Text className="w-full">Product Y</Text>
                <Flex className="space-x-2" justifyContent="end">
                  <Text>$ 108,799</Text>
                  <Text>38%</Text>
                </Flex>
              </Flex>
              <ProgressBar value={38} className="mt-2" />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-10">
              <Flex className="mt-4">
                <Text className="w-full">Product Z</Text>
                <Flex className="space-x-2" justifyContent="end">
                  <Text>$ 99,484</Text>
                  <Text>16%</Text>
                </Flex>
              </Flex>
              <ProgressBar value={12} className="mt-2" />
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
    <Card className="mx-auto">
      <Flex>
        <div>
          <Text>Tickets </Text>
          <Metric>9,876</Metric>
          <BadgeDelta deltaType="moderateIncrease">text</BadgeDelta>
        </div>
        <div>
          <Text>Max </Text>
          <Metric>1,876</Metric>
          <BadgeDelta deltaType="moderateIncrease">text</BadgeDelta>
        </div>
        <div>
          <Text>Min </Text>
          <Metric>$ 175.20</Metric>
          <BadgeDelta deltaType="moderateDecrease">text</BadgeDelta>
        </div>
      </Flex>
    </Card>
    <Card className="max-auto">
      <Title>LIST</Title>
      <List>
        <ListItem key={1}>
          <span>Athens</span>
          <span>10 open PR</span>
        </ListItem>
        <ListItem key={2}>
          <span>Luzern</span>
          <span>3 open PR</span>
        </ListItem>
        <ListItem key={3}>
          <span>Zürich</span>
          <span>1 open PR</span>
        </ListItem>
      </List>
    </Card>
  </Grid>
);
const Table1 = () => (
  <Card>
    {/* <Title>TABLE EXAMPLE</Title> */}
    <Table className="mt-0">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Position</TableHeaderCell>
          <TableHeaderCell>Department</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.name}>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              <Text>{item.Role}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.departement}</Text>
            </TableCell>
            <TableCell>
              <Badge color="emerald" icon={StatusOnlineIcon}>
                {item.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

export default function Home() {
  return (
    <main className="card">
      <AccordionList className="mx-auto mt-1">
        <Accordion>
          <AccordionHeader>CARD</AccordionHeader>
          <AccordionBody>
            <Dashbord1 />
          </AccordionBody>
        </Accordion>
        <Accordion>
          <AccordionHeader>AREA CHART</AccordionHeader>
          <AccordionBody>
            <TAreachart />
            <TAreaChart1 />
            <TAreaChart2 />
            <TAreaChart3 />
          </AccordionBody>
        </Accordion>
        <Accordion>
          <AccordionHeader>BAR CHART</AccordionHeader>
          <AccordionBody>
            <BarChart1 />
            <BarChart2 />
            <BarChart3 />
            <BarChart4 />
          </AccordionBody>
        </Accordion>
        <Accordion>
          <AccordionHeader>LINE CHART</AccordionHeader>
          <AccordionBody>
            <LineChart1 />
            <LineChart2 />
          </AccordionBody>
        </Accordion>
        <Accordion>
          <AccordionHeader>SCATTER CHART</AccordionHeader>
          <AccordionBody>
            <ScatterChart1 />
          </AccordionBody>
        </Accordion>
        <Accordion>
          <AccordionHeader>BAR LIST </AccordionHeader>
          <AccordionBody>
            <BarList1 />
          </AccordionBody>
        </Accordion>
        <Accordion>
          <AccordionHeader>PROGRESS CIRCLE </AccordionHeader>
          <AccordionBody>
            <ProgressCircle1 />
          </AccordionBody>
        </Accordion>
        <Accordion>
          <AccordionHeader>DATA BARS </AccordionHeader>
          <AccordionBody>
            <Databars1 />
          </AccordionBody>
        </Accordion>
        {/* <Accordion> */}
        {/* <AccordionHeader>SPARK CHARTS</AccordionHeader> */}
        {/* <AccordionBody> */}
        {/* <SparkCharts1 /> */}
        {/* </AccordionBody> */}
        {/* </Accordion> */}
        <Accordion>
          <AccordionHeader>DONUT CHART</AccordionHeader>
          <AccordionBody>
            <DonutChart1 />
            <DonutChart2 />
          </AccordionBody>
        </Accordion>
        <Accordion>
          <AccordionHeader>TABLE</AccordionHeader>
          <AccordionBody>
            <Table1 />
          </AccordionBody>
        </Accordion>
      </AccordionList>
    </main>
  );
}
