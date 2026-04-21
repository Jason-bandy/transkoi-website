'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('TransKoi');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 md:px-[5%] bg-[#050810] border-t border-white/10" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[1400px] mx-auto mb-16">
        {/* Brand */}
        <div className="lg:col-span-1">
          <a href="#" className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center text-white font-bold text-lg">
              T
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              TransKoi
            </span>
          </a>
          
          <p className="text-gray-400 leading-relaxed mb-6">
            <strong className="text-white">{t('footer.company')}</strong>
            <br />
            {t('footer.description')}
          </p>
          
          <div className="text-sm text-gray-400 space-y-2 mb-6">
            <p>
              <i className="fas fa-map-marker-alt mr-2 text-[#667eea]"></i>
              {t('footer.address')}
            </p>
            <p>
              <i className="fas fa-phone mr-2 text-[#667eea]"></i>
              {t('footer.phone')}
            </p>
            <p>
              <i className="fas fa-envelope mr-2 text-[#667eea]"></i>
              {t('footer.email')}
            </p>
          </div>
          
          <div className="flex gap-3">
            {['twitter', 'weixin', 'github', 'linkedin'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all hover:bg-gradient-to-br hover:from-[#667eea] hover:to-[#764ba2] hover:text-white hover:border-transparent"
              >
                <i className={`fab fa-${social}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-base font-semibold mb-6">{t('footer.products.title')}</h4>
          <ul className="space-y-3">
            <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">{t('footer.products.app')}</a></li>
            <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">{t('footer.products.luckyPod')}</a></li>
            <li><a href="#download" className="text-gray-400 hover:text-white transition-colors">{t('footer.products.vip')}</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.products.enterprise')}</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-base font-semibold mb-6">{t('footer.support.title')}</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.support.help')}</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.support.tutorials')}</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.support.faq')}</a></li>
            <li><a href="mailto:support@transkoi.com" className="text-gray-400 hover:text-white transition-colors">{t('footer.support.contact')}</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-base font-semibold mb-6">{t('footer.company.title')}</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.company.about')}</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.company.careers')}</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.company.privacy')}</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.company.terms')}</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center pt-8 border-t border-white/10 text-gray-500">
        <p>&copy; {currentYear} {t('footer.copyright')}</p>
      </div>
    </footer>
  );
}
