"use client";
import { FC, useEffect } from "react";
// Hooks
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const NotFound: FC = () => {
  const t = useTranslations("noName");
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  }, []);
  return <></>;
};

export default NotFound;
