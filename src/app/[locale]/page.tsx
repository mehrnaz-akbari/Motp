"use client";
import { FC, useEffect } from "react";
// Hooks
import { useRouter } from "next/navigation";

const NoName: FC = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/start");
  }, []);
  return <></>;
};

export default NoName;
