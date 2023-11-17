import axios from "axios";
import { error } from "console";
const url1 = "http://194.1.141.10:3200/demo1";
const url2 = "http://194.1.31.8:3200/";


export async function getd14(vcode:string) {
  try {
    const res = await axios.get(url2 + "d14", {
      timeout: 5000,
      params: {
        udate: Date.now(),
        code: vcode,
      },
    });
    return res;
    // console.log(res);
  } catch (error) {
    return error;
  }
}

export async function getd15(vcode: string) {
  try {
    const res = await axios.get(url2 + "d15", {
      timeout: 5000,
      params: {
        udate: Date.now(),
        code: vcode,
      },
    });
    return res;
    // console.log(res);
  } catch (error) {
    return error;
  }
}

export async function getd16(vcode: string) {
  try {
    const res = await axios.get(url2 + "d16", {
      timeout: 5000,
      params: {
        udate: Date.now(),
        code: vcode,
      },
    });
    return res;
    // console.log(res);
  } catch (error) {
    return error;
  }
}