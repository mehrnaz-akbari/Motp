import { useState, useEffect } from "react";

type CredentialRequestOptions = {
  otp: OTPOptions;
  signal: AbortSignal;
};

type OTPOptions = {
  transport: string[];
};
interface CredentialType extends Credential {
  code: string;
  type: string;
}
interface Props {
  otp: string;
}
export const OTPAutoFill = (): Props => {
  const [otp, setOtp] = useState("");

  useEffect(() => {
    // if ("OTPCredential" in window) {
    const ac = new AbortController();
    const info: CredentialRequestOptions = {
      otp: { transport: ["sms"] },
      signal: ac.signal,
    };
    navigator.credentials
      .get(info)
      //@ts-ignore
      .then((otp: CredentialType) => {
        setOtp(otp?.code);
        ac.abort();
      })
      .catch((err) => {
        ac.abort();
        console.error(err);
      });
    // }
  });

  return { otp };
};
