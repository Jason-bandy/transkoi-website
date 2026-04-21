'use client';

import { useTranslations } from 'next-intl';

export default function Products() {
  const t = useTranslations('TransKoi');

  return (
    <section className="py-24 px-6 md:px-[5%]" id="products">
      <div className="max-w-[800px] mx-auto text-center mb-20">
        <span className="inline-block bg-white/5 border border-white/10 px-6 py-2 rounded-full text-sm text-[#4facfe] font-semibold mb-6">
          {t('products.tag')}
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          {t('products.title')}
        </h2>
        <p className="text-lg text-gray-400">
          {t('products.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1400px] mx-auto">
        {/* TransKoi App */}
        <div className="group bg-white/5 border border-white/10 rounded-[30px] p-12 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(102,126,234,0.3)]">
          <div className="w-24 h-24 rounded-[30px] bg-gradient-to-br from-[#4facfe] to-[#00f2fe] flex items-center justify-center text-white text-4xl mb-8">
            <i className="fas fa-mobile-alt"></i>
          </div>
          
          <h3 className="text-3xl font-bold mb-4">
            {t('products.app.title')}
          </h3>
          
          <p className="text-gray-400 mb-8 leading-relaxed">
            {t('products.app.description')}
          </p>
          
          <ul className="space-y-4 mb-8">
            {t.raw('products.app.features').map((feature: string, index: number) => (
              <li key={index} className="flex items-center gap-3 text-gray-400">
                <i className="fas fa-check-circle text-[#10b981]"></i>
                {feature}
              </li>
            ))}
          </ul>
          
          <div className="flex flex-col gap-4">
            {/* iOS Download */}
            <a
              href="https://apps.apple.com/cn/app/锦鲤翻译/id6746327674"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold rounded-full transition-all hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgba(102,126,234,0.5)]"
            >
              <i className="fab fa-apple"></i>
              <span>{t('products.app.iosBtn')}</span>
            </a>
            
            {/* Android Downloads */}
            <div className="flex gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.lujiang.transkoi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 transition-all hover:bg-white/10 hover:border-[#667eea]"
              >
                <i className="fab fa-google-play"></i>
                <span>Google Play</span>
              </a>
              <a
                href="https://luckprint.oss-cn-beijing.aliyuncs.com/transkoi/transkoi.1.0.8.apk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold rounded-full transition-all hover:-translate-y-0.5"
              >
                <i className="fab fa-android"></i>
                <span>APK</span>
              </a>
            </div>
          </div>
        </div>

        {/* LuckyPod */}
        <div className="group bg-white/5 border border-white/10 rounded-[30px] p-12 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(102,126,234,0.3)] relative">
          <span className="absolute top-8 right-8 bg-gradient-to-br from-[#f093fb] to-[#f5576c] px-5 py-2 rounded-full text-xs font-semibold">
            {t('products.luckyPod.badge')}
          </span>
          
          <div className="w-24 h-24 rounded-[30px] bg-gradient-to-br from-[#4facfe] to-[#00f2fe] flex items-center justify-center text-white text-4xl mb-8">
            <i className="fas fa-headphones"></i>
          </div>
          
          <h3 className="text-3xl font-bold mb-4">
            {t('products.luckyPod.title')}
          </h3>
          
          <p className="text-gray-400 mb-8 leading-relaxed">
            {t('products.luckyPod.description')}
          </p>
          
          <ul className="space-y-4 mb-8">
            {t.raw('products.luckyPod.features').map((feature: string, index: number) => (
              <li key={index} className="flex items-center gap-3 text-gray-400">
                <i className="fas fa-check-circle text-[#10b981]"></i>
                {feature}
              </li>
            ))}
          </ul>
          
          <a
            href="mailto:support@transkoi.com?subject=LuckyPod 产品咨询"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 transition-all hover:bg-white/10 hover:border-[#667eea]"
          >
            <i className="fas fa-info-circle"></i>
            {t('products.luckyPod.contactBtn')}
          </a>
        </div>
      </div>
    </section>
  );
}
