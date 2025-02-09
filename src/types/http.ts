import type { RawAxiosRequestConfig, AxiosHeaders } from "axios";

export interface CustomeErrorResponese {
  message: string;
  data: any;
  status: string;
  response: {
    status: number;
    statusText: string;
    data: ApiResponseData;
    headers: AxiosHeaders;
  };
  config: RawAxiosRequestConfig;
}

export interface ApiResponseData {
  code: number;
  data: any;
  message: string;
  signature: string;
}
