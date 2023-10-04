import React from "react";

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';

import ThemeProvider from '@/components/ThemeProvider';
import AntdStyleRegistry from "@/utils/style-registry/antd";
import EmotionStyleRegistry from "@/utils/style-registry/emotion";

export default async function RootLayout({ children, params: { locale }}: { children: React.ReactNode; params: Record<string, any>; }) {
  let messages;
  try {
    messages = (await import(`@/data/languages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <head />
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider locale={locale}>
            <EmotionStyleRegistry>
              <AntdStyleRegistry>
                {/*<SiteHeader />*/}
                <main>{children}</main>
              </AntdStyleRegistry>
            </EmotionStyleRegistry>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('site');
  const locale = getLocale();
  const title = t('title');
  const description = t('desc');

  return {
    title,
    description,
    icons: {
      icon: '/favicon.ico',
    },
    openGraph: {
      title,
      description,
      url: 'https://nextjs.org',
      siteName: title,
      images: [
        {
          url: 'https://nextjs.org/og.png',
          width: 800,
          height: 600,
        },
        {
          url: 'https://nextjs.org/og-alt.png',
          width: 1800,
          height: 1600,
          alt: 'My custom alt',
        },
      ],
      locale,
      type: 'website',
    },
  };
}
