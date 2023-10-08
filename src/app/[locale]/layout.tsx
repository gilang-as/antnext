import React from "react";

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';

import LocaleProvider from '@/components/LocaleProvider';
import AntdStyleRegistry from "@/utils/style-registry/antd";
import EmotionStyleRegistry from "@/utils/style-registry/emotion";
import {ThemesProvider} from "@/components/ThemesProvider";
import Provider from "@/services/store";

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
      <AntdStyleRegistry>
        <EmotionStyleRegistry>
          <ThemesProvider>
            <LocaleProvider locale={locale} messages={messages}>
              <Provider>
                {children}
              </Provider>
            </LocaleProvider>
          </ThemesProvider>
        </EmotionStyleRegistry>
      </AntdStyleRegistry>
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
