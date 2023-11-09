// "use client";
import Head from "next/head";
import React, { useState } from "react";
import { cookies } from "next/headers";

const DemoPage = () => {
  const cookieStore = cookies();
  // const theme = cookieStore.get("KCVL");
  // const hasCookie = cookieStore.has("KCVL");

  // console.log("DemoPage-cookieStore", cookieStore);
  // console.log("DemoPage-theme", theme);
  // console.log("DemoPage-KCVL", hasCookie);
  return <div className="card">DEMO PAGE</div>;
};

export default DemoPage;
