'use client';

import { useTranslations } from 'next-intl';

export default function Download() {
  const t = useTranslations('TransKoi');

  return (
    <section className="py-24 px-6 md:px-[5%] bg-[#050810]" id="download">
      <div className="max-w-[900px] mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 md:p-20 relative overflow-hidden text-center">
          {/* Animated background */}
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(102,126,234,0.2)_0%,transparent_70%)] animate-rotate" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              {t('download.title')}
            </h2>
            
            <p className="text-lg text-gray-400 mb-12 max-w-[600px] mx-auto">
              {t('download.description')}
            </p>
            
            <div className="flex flex-col gap-4 max-w-[500px] mx-auto">
              {/* iOS Download */}
              <a
                href="https://apps.apple.com/cn/app/锦鲤翻译/id6746327674"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold text-lg rounded-full transition-all hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(102,126,234,0.5)]"
              >
                <i className="fab fa-apple"></i>
                <span>{t('download.iosBtn')}</span>
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
              
              <p className="text-sm text-gray-500 mt-4">
                <i className="fas fa-info-circle mr-2"></i>
                {t('download.note')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
