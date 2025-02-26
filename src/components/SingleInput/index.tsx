import { ChangeEvent, FC } from "react";
// Icons
import { IdIcon, PhoneIcon } from "@/assets/icons";
// Ui Components
import Image from "next/image";

interface Props {
  icon?: "PHONE" | "ID";
  placeHolder: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error?: string;
}
const SingleInput: FC<Props> = ({
  icon,
  placeHolder,
  name,
  onChange,
  error,
  value,
}) => {
  const staticClassName =
    "h-12 w-full border-2 flex  border-solid rounded-[10px] bg-input-placeholder items-center";
  return (
    <>
      <div
        className={`${staticClassName} 
              ${error ? "border-error focus-within:border-error " : "border-transparent focus-within:border-primary"}`}
      >
        <Image
          src={icon === "ID" ? IdIcon : PhoneIcon}
          alt="input-icon"
          className="w-6 h-6 mr-3 ml-2"
        />
        <input
          type="text"
          placeholder={placeHolder}
          inputMode="numeric"
          name={name}
          dir="ltr"
          value={value}
          onChange={onChange}
          className="w-full h-full bg-transparent  outline-none border-none text-right ltr:ml-3"
        />
      </div>
      {error && (
        <span className="text-error text-sm loading-6 h-6 mt-2 mr-3 block">
          {error}
        </span>
      )}
    </>
  );
};

export default SingleInput;
