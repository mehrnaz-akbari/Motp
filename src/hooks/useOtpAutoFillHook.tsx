import { useEffect } from "react";
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
const useOtpAutoFillHook = (setTheCode: (code: string) => void) => {
  useEffect(() => {
    if (!navigator?.credentials) {
      console.warn("OTP autofill API is not supported.");
      return;
    }

    const ac = new AbortController();
    const info: CredentialRequestOptions = {
      otp: { transport: ["sms"] },
      signal: ac.signal,
    };
    navigator.credentials
      .get(info)
      // @ts-ignore
      .then((otp: CredentialType) => {
        if (otp && otp.code) {
          setTheCode(otp.code);
        }
      })
      .catch((err) => {
        console.error("OTP autofill error:", err);
      })
      .finally(() => {
        ac.abort();
      });

    return () => {
      ac.abort();
    };
  }, [setTheCode]);
};

export default useOtpAutoFillHook;
