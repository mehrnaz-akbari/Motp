"use client";
import { ChangeEvent, FC, useState, useRef, useEffect } from "react";
// Helpers
import { onlyNumbers, preventSpecialCharacters } from "@/helpers";

interface Props {
  onChange: (value: string[]) => void;
  error?: string;
}
type CredentialRequestOptions = {
  otp: OTPOptions;
  signal: AbortSignal;
};

type OTPOptions = {
  transport: string[];
};

const OtpInputs: FC<Props> = ({ onChange, error }) => {
  const inputArray = Array.from(Array(6), (x, i) => i);
  const [otpCode, setOtpCode] = useState<string[]>([]);
  const [theCode, setTheCode] = useState<any>();
  const codesRef = useRef<(HTMLInputElement | null)[]>([]);

  function updateForm(
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ): void {
    if (onlyNumbers(event)) {
      const value = preventSpecialCharacters(event);
      const currentOtpCode = otpCode;
      if (value.length < 2) {
        currentOtpCode[index] = value;
        setOtpCode([...currentOtpCode]);
        onChange([...currentOtpCode]);
        if (value) {
          codesRef.current[index + 1]?.focus();
          if (otpCode[index + 1]) {
            codesRef.current[index + 1]?.select();
          }
        } else {
          codesRef.current[index - 1]?.focus();
          if (otpCode[index - 1]) {
            codesRef.current[index - 1]?.select();
          }
        }
      } else if (value.length === 6) {
        const otp = value.split("");
        onChange(otp);
        setOtpCode(otp);
      }
    }
  }

  // useEffect(() => {
  //   alert("in herer");

  //   if ("OTPCredential" in window) {
  //     alert("in OTPCredential");
  //     alert(navigator);
  //     const ac = new AbortController();

  //     navigator?.credentials
  //       //@ts-ignore
  //       .get({ otp: { transport: ["sms"] }, signal: ac.signal })
  //       //@ts-ignore

  //       .then((otp) => {
  //         alert(JSON.stringify(otp));
  //         setTheCode(JSON.stringify(otp));
  //       })
  //       .catch((err) => {
  //         alert(err);
  //       })
  //       .finally(() => {
  //         alert("finnaly");
  //       });
  //     alert(ac.signal);
  //   }
  // }, []);
  if ("OTPCredential" in window) {
    alert("in OTPCredential");
    alert(navigator);
    const ac = new AbortController();

    navigator?.credentials
      //@ts-ignore
      .get({ otp: { transport: ["sms"] }, signal: ac.signal })
      //@ts-ignore

      .then((otp) => {
        alert(JSON.stringify(otp));
        setTheCode(JSON.stringify(otp));
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        alert("finnaly");
        ac.abort();
      });
    alert(ac.signal);
  }
  const handleClickInputs = (index: number): void => {
    if (otpCode[index]) {
      codesRef.current[index]?.select();
    }
  };
  const handleRef = (el: HTMLInputElement, item: number) => {
    codesRef.current[item] = el;
  };
  const staticClassName =
    "h-12 w-full border-2 border-solid rounded-[10px] bg-input-placeholder ";
  return (
    <>
      <div className="flex justify-evenly flex-row-reverse w-full">
        {/* {inputArray.map((item: number) => (
          <div
            className={`${staticClassName} 
              ${error ? "border-error focus-within:border-error" : "border-transparent focus-within:border-primary"}`}
            key={item}
          >
            <input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              name="otp"
              className="w-full h-full bg-transparent outline-none border-none text-center font-extrabold"
              // onChange={(e: ChangeEvent<HTMLInputElement>) =>
              //   updateForm(e, item)
              // }
              // ref={(el: HTMLInputElement) => handleRef(el, item)}
              // value={otpCode[item]}
              // onClick={() => handleClickInputs(item)}
            />
          </div>
        ))} */}
        <div
          className={`${staticClassName} 
              ${error ? "border-error focus-within:border-error" : "border-transparent focus-within:border-primary"}`}
        >
          <input
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            name="otp"
            className="w-full h-full bg-transparent outline-none border-none text-center font-extrabold"
            // onChange={(e: ChangeEvent<HTMLInputElement>) =>
            //   updateForm(e, item)
            // }
            // ref={(el: HTMLInputElement) => handleRef(el, item)}
            // value={otpCode[item]}
            // onClick={() => handleClickInputs(item)}
          />
        </div>
      </div>
      theCode:{theCode}
      {error && (
        <span className="text-error text-sm loading-6 h-6 mt-2 mr-3 block">
          {error}
        </span>
      )}
    </>
  );
};

export default OtpInputs;
