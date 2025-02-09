import { FC, useState } from "react";
// Icons
import { BackIcon, SupportIcon } from "@/assets/icons";
// Ui Components
import Image from "next/image";
import { useRouter } from "next/navigation";
import SupportActionsheet from "../SupportActionsheet";

interface Props {
  hasBack?: boolean;
  title: string;
}

const Header: FC<Props> = ({ hasBack, title }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleBack = (): void => {
    router.back();
  };
  const handleClose = (): void => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="flex justify-between h-[48px] w-full px-4 box-border items-center">
        {hasBack ? (
          <Image
            src={BackIcon}
            className="h-6 w-6"
            alt="BackIcon"
            onClick={handleBack}
          />
        ) : (
          <span className="h-6 w-6" />
        )}
        <span className="text-center font-bold text-base loading-[24px]">
          {title}
        </span>
        <Image
          src={SupportIcon}
          className="h-6 w-6"
          alt="SupportIcon"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <SupportActionsheet open={isOpen} onClose={handleClose} />
    </>
  );
};

export default Header;
