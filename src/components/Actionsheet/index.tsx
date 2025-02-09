import { FC, ReactNode } from "react";
// Hooks
import { useTranslations } from "next-intl";
// Ui Components
import Button from "./components/Button";
import Info from "./components/Info";
import CancelButton from "./components/CancelButton";

export interface ButtonProps {
  icon: string;
  text: string;
  onClick: () => void;
  extra?: ReactNode;
}
interface Props {
  open: boolean;
  title: string;
  description: string;
  onClose: () => void;
  buttonList: ButtonProps[];
}
const Actionsheet: FC<Props> = ({
  buttonList,
  description,
  onClose,
  open,
  title,
}) => {
  const t = useTranslations("common");
  const bodyClassname = {
    base: "absolute bottom-16 w-full h-auto z-[51]",
    show: "transition-transform ease-in-out duration-300 translate-y-8",
    hide: "transition-transform ease-in-out duration-300  translate-y-125",
  };

  const backDropClassname = {
    base: "absolute h-full w-full z-[50] top-0 left-0 bg-modal-background",
    show: "ease-in-out transition-opacity duration-300 opacity-100",
    hidden: "ease-in-out transition-opacity duration-300 opacity-0",
  };
  const modalClassname = {
    base: "fixed h-full w-full top-0 left-0 transition-all",
    show: " visible",
    hidden: "invisible",
  };
  return (
    <div
      className={`${modalClassname.base} ${open ? modalClassname.show : modalClassname.hidden}`}
    >
      <div
        onClick={onClose}
        className={`${backDropClassname.base}  ${open ? backDropClassname.show : backDropClassname.hidden}`}
      />
      <div
        className={`${bodyClassname.base} ${open ? bodyClassname.show : bodyClassname.hide} `}
      >
        <div className=" w-[calc(100%-32px)] mx-auto box-border max-w-[500px]">
          <div className="bg-white w-full rounded-[10px]  mb-2 overflow-hidden">
            <Info title={title} description={description} />
            {buttonList.map((button, index: number) => (
              <Button
                key={index}
                text={button.text}
                icon={button.icon}
                onClick={button.onClick}
                extra={button.extra}
                hasBorder={buttonList.length > index + 1}
              />
            ))}
          </div>

          <CancelButton text={t("cancel")} onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Actionsheet;
