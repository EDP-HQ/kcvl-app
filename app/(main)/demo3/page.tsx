"use client";

import { useState, useEffect, Suspense } from "react";
import { Button } from "primereact/button";

import { data1, data2, data1cache, getUser } from "@/app/api/data";
import { Loading } from "@/app/api/common";

import UserTable from "./usertable";

export default function Demo3() {
  const [show, setShow] = useState(false);
  const [isData, setIsData] = useState();

  const LoadData = () => {
    // data2()
    //   .then((data) => {
    //     console.log(data);
    //     // setIsData(data);
    //   })
    //   .catch((err) => console.log(err));
    // getUser()
    //   .then((res) => {
    //     console.log(res);
    //     // setIsData(data);
    //   })
    //   .catch((err) => console.log(err));
    // data1cache()
    //   .then((data) => {
    //     console.log(data);
    //     // setIsData(data)
    //   })
    //   .catch((err) => console.log(err));
  };

  useEffect(() => {
    // START
    // LoadData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="card">
      <Suspense fallback={<Loading />}>
        <UserTable />
        {/* <Button label="Load" onClick={() => setShow(true)} /> */}
      </Suspense>
      {/* {cookie} */}
    </div>
  );
}
