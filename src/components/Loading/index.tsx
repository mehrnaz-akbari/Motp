import { FC } from "react";
// Hooks
import { useTranslations } from "next-intl";

const Loading: FC = () => {
  const t = useTranslations("common");
  return (
    <div className="flex flex-col justify-center items-center h-full w-full fixed top-0 left-0">
      <div className="flex justify-between w-9 ">
        <span className="w-[9px] h-[9px] rounded-full bg-primary animate-bounce" />
        <span className="w-[9px] h-[9px] rounded-full bg-primary animate-bounce  [animation-delay:.3s]" />
        <span className="w-[9px] h-[9px] rounded-full bg-primary animate-bounce [animation-delay:.5s]" />
      </div>
      <span className="block text-center text-base font-semibold mt-4">
        {t("loading")}
      </span>
    </div>
  );
};

export default Loading;
