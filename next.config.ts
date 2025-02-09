import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { otpUrl } from "@/helpers/baseUrl";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withNextIntl(nextConfig);
