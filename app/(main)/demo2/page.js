// "use client";
import Head from "next/head";
// import React, { useEffect } from "react";
import axios from "axios";

async function getData() {
  const res = await fetch("http://194.1.141.10:3200/demo1", {
    // cache: "force-cache",
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getDataDemo() {
  const APIUrl = "http://194.1.141.10:3200/demo1";

  return axios
    .get(APIUrl, { params: { group: "null" } })
    .then((res) => res.data);
}

export default async function Page() {
  const data = await getData();

  // console.log("getData", data);

  getDataDemo()
    .then((data) => {
      // console.log("getDataDemo", data);
      // setCustomerList(data);
    })
    .catch((err) => console.log(err));

  return <main>sss</main>;
}

// const Demo2Page = () => {

//   const data =  await  getData()
//   console.log (data)

//   useEffect(() => {
//     // useEffect Start
//     getDataDemo()
//       .then((data) => {
//         console.log(data);
//         // setCustomerList(data);
//       })
//       .catch((err) => console.log(err));
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   // getData(`http://194.1.141.10:3200/demo1`);
//   return <div className="card">DEMO 2 PAGE</div>;
// };

// export default Demo2Page;
