import { FC } from "react";
// Types
import { ButtonProps } from "../../type";
// Ui Components
import Image from "next/image";

interface Props extends ButtonProps {
  hasBorder: boolean;
}
const Button: FC<Props> = ({ icon, onClick, text, extra, hasBorder }) => {
  const buttonClassname =
    "flex justify-between items-center px-4 h-15 cursor-pointer";
  return (
    <div
      onClick={onClick}
      className={`${buttonClassname} ${hasBorder ? "border-b border-solid border-border" : ""}`}
    >
      <div className="flex">
        <Image src={icon} className="h-6 w-6 ml-1" alt={text} />
        <span className="text-base text-default">{text}</span>
      </div>
      <div>{extra}</div>
    </div>
  );
};

export default Button;
