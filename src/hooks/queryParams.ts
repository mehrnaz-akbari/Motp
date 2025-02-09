"use client";
// Hooks
import { useRouter, useSearchParams } from "next/navigation";

export const useSetSearch = () => {
  const params = useSearchParams();
  const router = useRouter();

  const searchParams = new URLSearchParams(params.toString());

  return (title: string, value: string) => {
    searchParams.set(title, value);

    router.push(`${location.pathname}?${searchParams.toString()}`);
  };
};

export const useDeleteSearch = () => {
  const params = useSearchParams();
  const router = useRouter();

  const searchParams = new URLSearchParams(params.toString());

  return (title: string) => {
    searchParams.delete(title);

    router.push(`${location.pathname}?${searchParams.toString()}`);
  };
};
