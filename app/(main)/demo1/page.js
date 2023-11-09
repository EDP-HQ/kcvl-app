"use client";

import { useState } from "react";
import { Button } from "primereact/button";
import ArtistPage from "./ArtistPage.js";

import { NextResponse } from "next/server";

export default function Demo1() {
  const [show, setShow] = useState(false);

  // let cookie = request.cookies.get("nextjs");

  if (show) {
    return (
      <div className="card">
        <ArtistPage
          artist={{
            id: "the-beatles",
            name: "The Beatles",
          }}
        />
      </div>
    );
  } else {
    return (
      <div className="card">
        <Button label="Load" onClick={() => setShow(true)} />
        {/* {cookie} */}
      </div>
    );
  }
}
