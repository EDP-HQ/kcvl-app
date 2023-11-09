"use server";

import { cookies } from "next/headers";

async function create(data) {
  const oneDay = 24 * 60 * 60 * 1000;

  cookies().set({
    name: "KCVL",
    value: "001",
    secure: true,
    httpOnly: true,
    path: "/",
    expires: Date.now() - oneDay,
  });
}
