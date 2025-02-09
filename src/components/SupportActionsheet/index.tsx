import { FC } from "react";
// Hooks
import { useTranslations } from "next-intl";
// Ui Components
import Actionsheet, { ButtonProps } from "../Actionsheet";
// Icons
import { CallIcon, ChatIcon, QuestionIcon } from "@/assets/icons";
interface Props {
  open: boolean;
  onClose: () => void;
}
const phoneNumber = "+982191036060";
const SupportActionsheet: FC<Props> = ({ onClose, open }) => {
  const t = useTranslations("common");
  const handleClick = (type: "CALL" | "CHAT" | "QUESTIONS"): void => {
    if (type === "CALL") {
      window.open(`tel:${phoneNumber}`, "_blank", "noopener,noreferrer");
    } else if (type === "QUESTIONS") {
      window.open("https://blubank.sb24.ir/faq/", "_blank");
    } else {
      window.open("https://chat.blubank.com/c/BlBank", "_blank");
    }
  };
  const extra = (
    <span className="bg-success rounded-[16px] text-xs h-6 w-10 flex items-center justify-center  text-white">
      {t("new")}
    </span>
  );
  const list: ButtonProps[] = [
    {
      text: t("frequentlyAskedQuestions"),
      icon: QuestionIcon,
      onClick: () => handleClick("QUESTIONS"),
      extra,
    },
    {
      text: t("conversation"),
      icon: ChatIcon,
      onClick: () => handleClick("CHAT"),
    },
    { text: t("call"), icon: CallIcon, onClick: () => handleClick("CALL") },
  ];

  return (
    <Actionsheet
      open={open}
      onClose={onClose}
      title={t("bluLine")}
      description={t("bluLineText")}
      buttonList={list}
    />
  );
};

export default SupportActionsheet;
