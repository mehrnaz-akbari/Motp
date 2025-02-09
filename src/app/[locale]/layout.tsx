import React from "react";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
// Styles
import "./globals.scss";

// Helpers
import { geistIranYekan } from "@/helpers/fonts";

export const metadata: Metadata = {
  title: "کارت بلوبانک",
  description: "کارت بلوبانک",
  other: {
    viewport:
      "width=device-width, initial-scale=1, interactive-widget=resizes-content",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = React.use(getLocale());
  const messages = React.use(getMessages());

  const header = React.use(headers());
  const localeHeader = header.get("x-next-intl-locale");
  if (localeHeader === null) {
    notFound();
  }
  return (
    <html lang={locale} dir={"rtl"}>
      <body className={`${geistIranYekan.className}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
