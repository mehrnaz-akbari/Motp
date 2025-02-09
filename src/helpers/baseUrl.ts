import { read } from "@/helpers/storage";

export const serverList = "https://uat.sdb247.com/card-mobile-adapter/api/v1/";

export const baseUrl = read("baseUrl") || serverList?.[0];
