import axios from 'axios';
// import { error } from "console";
const url1 = 'http://194.1.141.10:3200/demo1';
const url2 = 'http://194.1.31.8:3200/';

const fetchData = async (endpoint, vcode) => {
    try {
        const res = await axios.get(url2 + endpoint, {
            timeout: 5000,
            params: {
                udate: Date.now(),
                code: vcode
            }
        });
        return res.data; // Return the data property of the response
    } catch (error) {
        throw error; // Throw the error to be caught by the calling function
    }
};

export const getksb = async (vcode) => fetchData('ksb', vcode);
export const getratio = async (vcode) => fetchData("avg", vcode);
