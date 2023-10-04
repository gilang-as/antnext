'use client';

import { PropsWithChildren, useEffect, useState } from 'react';

import { ConfigProvider, theme } from 'antd';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { useTheme } from 'next-themes';

import { defaultLocale, languages } from 'src/utils/locale';

import themes from '@/utils/themes';

export type ProviderProps = PropsWithChildren<{
  locale: string;
}>;

export function AntdConfigProvider({ children, locale }: ProviderProps) {
  const [themeSystem, changeSystemTheme] = useState('system');
  const { theme: nowTheme } = useTheme();

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', e => {
      changeSystemTheme(e.matches ? 'dark' : 'light');
    });
  }, [themeSystem]);

  return (
    <ConfigProvider
      locale={(languages as any)[(locale as any) ?? defaultLocale].antd}
      theme={{
          algorithm: nowTheme === 'system' ? (themeSystem === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm) : (nowTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm),
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default function ThemeProvider(props: ProviderProps) {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // use your loading page
    return <div className="hidden">{props.children}</div>;
  }

  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AntdConfigProvider {...props} />
    </NextThemeProvider>
  );
}
