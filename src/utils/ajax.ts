import axios from "axios";
import { getLocalUserData } from "./index";

const ajax = axios.create({
  baseURL: "https://green-thumb-64168.uc.r.appspot.com",
});

ajax.interceptors.request.use(
  function (request) {
    const userData = getLocalUserData();
    if (userData?.token) {
      request.headers!.Authorization = userData.token;
    }
    return request;
  },
  function (error) {
    throw error;
  }
);
export default ajax;
