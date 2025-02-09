import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  try {
    const noName = (await import(`@/locales/${locale}/noName.json`)).default;
    const common = (await import(`@/locales/${locale}/common.json`)).default;

    return {
      messages: {
        ...noName,
        ...common,
      },
    };
  } catch {
    notFound();
  }
});
