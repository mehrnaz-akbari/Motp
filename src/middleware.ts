import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  return createMiddleware({
    locales: ["fa"],
    defaultLocale: "fa",
    localePrefix: "as-needed",
  })(request);
}

export const config = {
  matcher: ["/((?!_next|fa|en|favicon.ico).*)", "/(fa|en)/:path*"],
};
