'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('TransKoi');

  const handleClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 pt-24 pb-20 md:px-[5%]">
      <div className="max-w-[1200px] text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-2 rounded-full text-sm text-gray-400 mb-8 animate-fade-in-up">
          <i className="fas fa-sparkles text-[#fbbf24]"></i>
          <span>{t('hero.badge')}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-fade-in-up [animation-delay:200ms]">
          {t('hero.title.part1')}
          <br />
          <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
            {t('hero.title.part2')}
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-[700px] mx-auto mb-12 animate-fade-in-up [animation-delay:400ms]">
          {t('hero.description')}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up [animation-delay:600ms]">
          <button
            onClick={() => handleClick('download')}
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold text-lg rounded-full transition-all hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(102,126,234,0.5)]"
          >
            <i className="fas fa-download"></i>
            {t('hero.downloadBtn')}
          </button>
          <button
            onClick={() => handleClick('products')}
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white/5 text-white font-semibold text-lg rounded-full border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-[#667eea]"
          >
            <i className="fas fa-play-circle"></i>
            {t('hero.productsBtn')}
          </button>
        </div>
      </div>
    </section>
  );
}
