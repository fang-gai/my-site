import { showMessage } from "../utils";
import axios from "axios";

const ins = axios.create(); //创建一个axios的实例
//配置响应拦截
ins.interceptors.response.use(function (resp) {
  if (resp.data.code !== 0) {
    showMessage({ content: resp.data.msg, duration: 1500, type: "error" });
    return null;
  }
  return resp.data.data;
});

export default ins;
