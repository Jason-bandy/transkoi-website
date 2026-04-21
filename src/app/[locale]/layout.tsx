import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'TransKoi' });

  return {
    title: 'TransKoi 锦鲤翻译 - AI 实时翻译，连接世界',
    description: t('hero.description'),
    keywords: '翻译，AI 翻译，实时翻译，锦鲤翻译，TransKoi, LuckyPod, 智能翻译，跨语言沟通',
    authors: [{ name: '厦门智伽科技有限公司' }],
    creator: 'TransKoi Team',
    publisher: '厦门智伽科技有限公司',
    metadataBase: new URL('https://transkoi.com'),
  };
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={inter.variable}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
