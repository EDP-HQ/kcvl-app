import axios from "axios";
import { error } from "console";
const url1 = "http://194.1.141.10:3200/demo1";
const url2 = "http://194.1.31.8:3200/"

export async function data1() {
  const res = await fetch(url1, { next: { revalidate: 3600 } });
  const data = await res.json();

  return data;
}

export async function data1cache() {
  const res = await fetch(url1, { cache: "force-cache" });
  const data = await res.json();

  return data;
}

export async function data2() {
  return axios
    .get(url1, {
      timeout: 5000,
      params: {
        udate: Date.now(),
        uid: "null",
      },
    })
    .then((res) => res.data)
    .catch((error) => error);
}

export async function getUser() {
  try {
    const res = await axios.get(url1, {
      timeout: 5000,
      params: {
        udate: Date.now(),
        uid: "null",
      },
    });
    return res;
    // console.log(res);
  } catch (error) {
    return error;
  }
}
