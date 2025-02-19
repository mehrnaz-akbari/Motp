import { read } from "@/helpers/storage";

export const serverList = process.env.NEXT_PUBLIC_BASE_URL?.split(",");

export const baseUrl = read("baseUrl") || serverList?.[0];
