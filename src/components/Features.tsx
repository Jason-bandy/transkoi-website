'use client';

import { useTranslations } from 'next-intl';

export default function Features() {
  const t = useTranslations('TransKoi');

  const features = [
    {
      icon: 'fa-film',
      title: t('features.feature1.title'),
      description: t('features.feature1.description'),
    },
    {
      icon: 'fa-phone',
      title: t('features.feature2.title'),
      description: t('features.feature2.description'),
    },
    {
      icon: 'fa-comments',
      title: t('features.feature3.title'),
      description: t('features.feature3.description'),
    },
    {
      icon: 'fa-bolt',
      title: t('features.feature4.title'),
      description: t('features.feature4.description'),
    },
    {
      icon: 'fa-shield-alt',
      title: t('features.feature5.title'),
      description: t('features.feature5.description'),
    },
    {
      icon: 'fa-cloud',
      title: t('features.feature6.title'),
      description: t('features.feature6.description'),
    },
  ];

  return (
    <section className="py-24 px-6 md:px-[5%] bg-[#050810]">
      <div className="max-w-[800px] mx-auto text-center mb-20">
        <span className="inline-block bg-white/5 border border-white/10 px-6 py-2 rounded-full text-sm text-[#4facfe] font-semibold mb-6">
          {t('features.tag')}
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          {t('features.title')}
        </h2>
        <p className="text-lg text-gray-400">
          {t('features.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-white/5 border border-white/10 rounded-3xl p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:border-[#667eea]/30 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#667eea] to-[#764ba2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center text-white text-2xl mb-6">
              <i className={`fas ${feature.icon}`}></i>
            </div>
            
            <h3 className="text-xl font-bold mb-3">
              {feature.title}
            </h3>
            
            <p className="text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
