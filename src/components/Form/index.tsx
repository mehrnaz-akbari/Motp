"use client";
import { ChangeEvent, FC, ReactNode, useEffect, useRef, useState } from "react";
import useDetectKeyboardOpen from "use-detect-keyboard-open";
// Ui Components
import Image from "next/image";
import ButtonLoading from "./components/ButtonLoading";
// Icons
import arrow from "@/assets/icons/next-arrow.svg";

interface Props {
  text?: ReactNode;
  disabled: boolean;
  children: ReactNode;
  loading?: boolean;
  onSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
}
const Form: FC<Props> = ({ text, children, onSubmit, disabled, loading }) => {
  const footerRef = useRef<HTMLFormElement>(null);
  const isKeyboardOpen = useDetectKeyboardOpen();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const bottomExtraSpace = footerRef?.current?.clientHeight;
    if (bottomExtraSpace) setHeight(bottomExtraSpace);
  }, [footerRef?.current]);

  window?.visualViewport?.addEventListener("resize", (event: Event) => {
    const target = event.target as VisualViewport | null;
    if (target) {
      setHeight(target?.height);
    }
  });

  return (
    <form
      className="flex w-full h-full flex-col justify-between"
      onSubmit={onSubmit}
      ref={footerRef}
      style={{ height: isKeyboardOpen ? `${height - 48}px` : "100%" }}
    >
      <div>{children}</div>

      <div className="h-[96px] px-5 w-full flex justify-between  box-border items-center">
        <span className="text-sm text-secondary">{text ?? ""}</span>
        <button
          type="submit"
          className={`h-21 w-21 rounded-[32px] flex justify-center items-center border-none ${disabled ? "bg-disabled" : "bg-primary"}`}
        >
          {loading ? (
            <ButtonLoading />
          ) : (
            <Image src={arrow} className="h-9 w-9" alt="icon" />
          )}
        </button>
      </div>
    </form>
  );
};

export default Form;
