import { FC, ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}
const FormItem: FC<Props> = ({ title, children }) => {
  return (
    <div className="h-37 w-full pt-2 px-5 box-border">
      <div className="h-14 flex items-center">
        <span className="loading-8 text-base">{title}</span>
      </div>
      <div className="h-23">{children}</div>
    </div>
  );
};

export default FormItem;
