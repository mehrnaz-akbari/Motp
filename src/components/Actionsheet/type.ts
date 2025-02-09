import { ReactNode } from "react";

export interface ButtonProps {
  icon: string;
  text: string;
  onClick: () => void;
  extra?: ReactNode;
}
export interface Props {
  open: boolean;
  title: string;
  description: string;
  onClose: () => void;
  buttonList: ButtonProps[];
}