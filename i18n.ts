import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

// Can be imported from a shared config
export const locales = ['en', 'zh', 'ja'] as const;

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !locales.includes(locale as Locale)) {
    locale = 'zh'; // 默认中文
  }

  return {
    locale: locale as string,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
