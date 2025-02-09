"use client";

import { callToast } from "@/helpers/toast";
import type { AxiosInstance, AxiosResponse } from "axios";
import type { CustomeErrorResponese } from "@/types/http";

export const responseInterceptors = (axiosInstance: AxiosInstance) =>
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response?.data;
    },
    async (error: CustomeErrorResponese) => {
      const { message } = error.response.data;
      if (message) callToast(message, "error");
      return Promise.reject(error);
    }
  );

export const requestInterceptors = (
  axiosInstance: AxiosInstance,
  isAuthException?: boolean
) =>
  axiosInstance.interceptors.request.use(
    (config) => {
      if (isAuthException) {
        delete axiosInstance.defaults.headers.common.Authorization;
      }
      return config;
    },
    (error) => {
      callToast("No Response", "error");
      return Promise.reject(error);
    }
  );
