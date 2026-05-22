import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

// 18 languages supported
export const locales = ['zh', 'en', 'ja', 'ko', 'de', 'fr', 'es', 'it', 'pt', 'ru', 'ar', 'hi', 'th', 'vi', 'id', 'nl', 'sv', 'pl'] as const;

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !locales.includes(locale as Locale)) {
    locale = 'zh'; // Default to Chinese
  }

  return {
    locale: locale as string,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
