"use client";
import { FC, useEffect } from "react";
// UI Components
import { BannerWithButton, Header } from "@/components";
// Hooks
import { useTranslations } from "next-intl";
// Helpers
import { remove } from "@/helpers/storage";

const Start: FC = () => {
  const t = useTranslations("noName");
  useEffect(() => {
    remove("info");
  }, []);
  return (
    <div className="main-container">
      <Header title={t("registerBluCard")} />
      <BannerWithButton
        title={t("registerBluCard")}
        detail={t("registerBluCardText")}
        textButton={t("start")}
        link="/phone-number"
      />
    </div>
  );
};

export default Start;
