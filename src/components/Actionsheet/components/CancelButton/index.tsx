import { FC } from "react";

interface Props {
  text: string;
  onClick: () => void;
}
const CancelButton: FC<Props> = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white h-15 rounded-[10px] w-full flex items-center justify-center text-primary text-lg"
    >
      {text}
    </button>
  );
};

export default CancelButton;
