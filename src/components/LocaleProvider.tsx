import { PropsWithChildren } from 'react';

import { ConfigProvider } from 'antd';

import { defaultLocale, languages } from 'src/utils/locale';
import {NextIntlClientProvider} from "next-intl";

export type ProviderProps = PropsWithChildren<{
  locale: string;
  messages: Record<string, string>;
}>;

const LocaleProvider = ({ children, locale, messages }: ProviderProps) => {
  return (
      <NextIntlClientProvider locale={locale} messages={messages} >
        <ConfigProvider locale={(languages as any)[(locale as any) ?? defaultLocale].antd} >
          {children}
        </ConfigProvider>
      </NextIntlClientProvider>
  );
}

export default LocaleProvider