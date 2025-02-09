import { useEffect } from "react";

const useOtpAutoFillHook = (setTheCode: (code: string) => void) => {
  useEffect(() => {
    if (!navigator?.credentials) {
      console.warn("OTP autofill API is not supported.");
      return;
    }

    const ac = new AbortController();

    // @ts-ignore
    navigator.credentials
      // @ts-ignore
      .get({ otp: { transport: ["sms"] }, signal: ac.signal })
      .then((otp: any) => {
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
