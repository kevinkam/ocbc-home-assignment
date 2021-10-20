import axios from "axios";
import { getLocalUserData, removeLocalUserData } from "./index";

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
ajax.interceptors.response.use(
  function (res) {
    return res;
  },
  function (error) {
    if (
      error.response?.status === "401" &&
      error.response?.error?.name === "TokenExpiredError"
    ) {
      removeLocalUserData();
      window.location.href = "/login";
    } else {
      throw error;
    }
  }
);
export default ajax;
