import { FC } from "react";

interface Props {
  title: string;
  description: string;
}
const Info: FC<Props> = ({ title, description }) => {
  return (
    <div className="h-21 w-full text-center border-b-2 border-solid border-border flex flex-col items-center justify-evenly">
      <span className="h-6 text-base text-default font-bold ">{title}</span>
      <span className="h-6 text-sm text-secondary ">{description}</span>
    </div>
  );
};

export default Info;
