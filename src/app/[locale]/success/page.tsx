"use client";
import { FC } from "react";
// UI Components
import { BannerWithButton, Header } from "@/components";
// Hooks
import { useTranslations } from "next-intl";
// Helpers
import { read } from "@/helpers/storage";
// Types
import { NationalIdResponse } from "@/types";

const Success: FC = () => {
  const t = useTranslations("noName");
  const info: NationalIdResponse = read("info");
  const renderLink = (): string => {
    return info?.link ?? "";
  };
  return (
    <div className="main-container">
      <Header title={t("registerBluCard")} />
      renderLink:{renderLink()}
      <BannerWithButton
        title={info?.title ?? t("bluCardHasRegistered")}
        detail={info?.description ?? t("enterBluForActivate")}
        textButton={t("enterBlu")}
        link={renderLink()}
      />
    </div>
  );
};

export default Success;
