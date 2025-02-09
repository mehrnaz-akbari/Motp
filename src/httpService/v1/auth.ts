// HTTP Component
import http from "@/httpService/http";
// Types
import { NationalIdResponse, GetOtpResponse } from "@/types";

export const requestOtp = async (mobile: string): Promise<GetOtpResponse> => {
  return await http({
    url: "/otp/get-otp",
    data: {
      mobile,
      type: "GENERAL",
    },
    method: "post",
  });
};
export const postOtp = async (mobileNumber: string, otp: string) => {
  return await http({
    url: "/otp/verify-otp",
    data: {
      otp,
      mobileNumber,
      type: "GENERAL",
    },
    method: "post",
  });
};

export const postNationalId = async (
  nationalCode: string,
  mobileNumber: string
): Promise<NationalIdResponse> => {
  return await http({
    url: "/noname/card/check",
    data: {
      nationalCode,
      mobileNumber,
    },
    method: "post",
  });
};
