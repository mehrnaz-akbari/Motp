"use client";
import {
  ChangeEvent,
  FC,
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
} from "react";
// Helpers
import { onlyNumbers, preventSpecialCharacters } from "@/helpers";
import useOtpAutoFillHook from "@/hooks/useOtpAutoFillHook";

interface Props {
  onChange: (value: string[]) => void;
  error?: string;
}
type OTPOptions = {
  transport: string[];
};

const OtpInputs: FC<Props> = ({ onChange, error }) => {
  const inputArray = Array.from(Array(6), (x, i) => i);

  const [otpCode, setOtpCode] = useState<string[]>([]);
  const [otp, setOtp] = useState("");
  useOtpAutoFillHook(setOtp);
  const codesRef = useRef<(HTMLInputElement | null)[]>([]);

  function updateForm(
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ): void {
    console.log(event.target.value)
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
        }
      } else if (value.length === 6) {
        const otp = value.split("");
        onChange(otp);
        setOtpCode(otp);
      }else if(value.length > 6){
        const otp = value.substring(0,6).split("");
        onChange(otp);
        setOtpCode(otp);
      }
    }
  }
  useEffect(() => {
    if (otp.length === 6) {
      const cuurentOtp = otp.split("");
      onChange(cuurentOtp);
      setOtpCode(cuurentOtp);
    }
  }, [otp]);
  const handleClickInputs = (index: number): void => {
    if (otpCode[index]) {
      codesRef.current[index]?.select();
    }
  };
  const handleKey = (event: KeyboardEvent, index: number) => {
    if (event.key === "Backspace") {
      const currentOtpCode = otpCode;
      currentOtpCode[index] = "";
      setOtpCode([...currentOtpCode]);
      codesRef.current[index - 1]?.select();
    }
  };
  const handleRef = (el: HTMLInputElement, item: number) => {
    codesRef.current[item] = el;
  };

  const staticClassName =
    "h-12 w-[14%] border-2 border-solid rounded-[10px] bg-input-placeholder ";
  return (
    <>
      <div className="flex justify-evenly flex-row-reverse w-full">
        {inputArray.map((item: number) => (
          <div
            className={`${staticClassName} 
              ${error ? "border-error focus-within:border-error" : "border-transparent focus-within:border-primary"}`}
            key={item}
          >
            <input
              type="search"
              inputMode="numeric"
              name="otp"
              className="w-full h-full bg-transparent outline-none border-none text-center font-extrabold"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                updateForm(e, item)
              }
              ref={(el: HTMLInputElement) => handleRef(el, item)}
              value={otpCode[item]}
              onClick={() => handleClickInputs(item)}
              onKeyDown={(e: KeyboardEvent) => handleKey(e, item)}
            />
          </div>
        ))}
      </div>

      {error && (
        <span className="text-error text-sm loading-6 h-6 mt-2 mr-3 block">
          {error}
        </span>
      )}
    </>
  );
};

export default OtpInputs;
