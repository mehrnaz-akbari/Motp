import axios, { type RawAxiosRequestConfig } from "axios";
import { requestInterceptors, responseInterceptors } from "./Interceptors";
// Helpers
import { baseUrl } from "@/helpers/baseUrl";

const http = <TReqData, TResData>(
  requestConfig: RawAxiosRequestConfig<TReqData>
): Promise<TResData> => {
  const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 60000,
    timeoutErrorMessage: "TIMEOUT Error",
    validateStatus(status) {
      return status >= 200 && status < 300;
    },
  });

  requestInterceptors(axiosInstance);
  responseInterceptors(axiosInstance);

  return axiosInstance(requestConfig);
};
export default http;
