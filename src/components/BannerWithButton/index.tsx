import { FC } from "react";
// Images
import cardbanner from "@/assets/images/card.svg";
// UI Components
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  detail: string;
  textButton: string;
  link: string;
}
const BannerWithButton: FC<Props> = ({ detail, link, textButton, title }) => {
  return (
    <div className="flex w-full h-full justify-between flex-col">
      <div className="w-full h-auto my-auto">
        <Image className=" mx-auto mb-8 block " src={cardbanner} alt="banner" />
        <div className="text-center">
          <span className="text-base text-default font-bold h-6 loading-h24 block m-2 ">
            {title}
          </span>
          <span className="block text-sm font-normal text-secondary loading-21 max-w-[90%] mx-auto">
            {detail}
          </span>
        </div>
      </div>
      <div className="h-20 w-full flex justify-center align-middle">
        <Link
          href={link}
          className="w-[calc(100%-40px)] bg-primary text-white  border-none no-underline font-bold flex items-center justify-center h-12 rounded-[10px]"
        >
          {textButton}
        </Link>
      </div>
    </div>
  );
};

export default BannerWithButton;
