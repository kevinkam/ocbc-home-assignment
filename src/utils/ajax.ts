import axios from "axios";

const ajax = axios.create({
  baseURL: "https://green-thumb-64168.uc.r.appspot.com",
});

export default ajax;
