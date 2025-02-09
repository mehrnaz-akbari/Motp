import { FC } from "react";

const ButtonLoading: FC = () => {
  return (
    <div className="flex justify-between w-9 ">
      <span className="w-2 h-2 rounded-full bg-white animate-bounce" />
      <span className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:.3s]" />
      <span className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:.5s]" />
    </div>
  );
};

export default ButtonLoading;
