'use client';

import { useTranslations } from 'next-intl';

export default function Stats() {
  const t = useTranslations('TransKoi');

  const stats = [
    { number: t('stats.languageCount'), label: t('stats.languages') },
    { number: t('stats.userCount'), label: t('stats.users') },
    { number: t('stats.accuracy'), label: t('stats.accuracyLabel') },
    { number: t('stats.speed'), label: t('stats.responseSpeed') },
  ];

  return (
    <section className="py-20 px-6 md:px-[5%] bg-gradient-to-br from-[#667eea] to-[#764ba2] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-rotate" />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-[1200px] mx-auto relative z-10">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl md:text-6xl font-black mb-2">
              {stat.number}
            </div>
            <div className="text-base md:text-lg opacity-90">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
