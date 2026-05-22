'use client';

const FLAGS: Record<string, string> = {
  zh: '🇨🇳', en: '🇬🇧', ja: '🇯🇵', ko: '🇰🇷', de: '🇩🇪', fr: '🇫🇷',
  es: '🇪🇸', it: '🇮🇹', pt: '🇧🇷', ru: '🇷🇺', ar: '🇸🇦', hi: '🇮🇳',
  th: '🇹🇭', vi: '🇻🇳', id: '🇮🇩', nl: '🇳🇱', sv: '🇸🇪', pl: '🇵🇱',
};

const LABELS: Record<string, string> = {
  zh: '中文', en: 'EN', ja: '日本語', ko: '한국어', de: 'Deutsch', fr: 'Français',
  es: 'Español', it: 'Italiano', pt: 'Português', ru: 'Русский', ar: 'العربية', hi: 'हिन्दी',
  th: 'ไทย', vi: 'Tiếng Việt', id: 'Bahasa', nl: 'Nederlands', sv: 'Svenska', pl: 'Polski',
};

const LOCALES = ['zh', 'en', 'ja', 'ko', 'de', 'fr', 'es', 'it', 'pt', 'ru', 'ar', 'hi', 'th', 'vi', 'id', 'nl', 'sv', 'pl'];

export function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const switchLocale = (locale: string) => {
    // Get current path without locale
    const path = window.location.pathname.replace(/^\/[a-z]{2}(\/|$)/, '$1');
    const newPath = `/${locale}${path === '/' ? '' : path}`;
    window.location.href = newPath;
  };

  return (
    <div className="relative group inline-block">
      <button
        className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition cursor-pointer px-3 py-1.5 rounded-lg hover:bg-white/5"
        aria-label="Switch language"
      >
        <span className="text-lg">🌐</span>
        <span className="hidden lg:inline text-xs uppercase opacity-60">{currentLocale}</span>
      </button>
      <div className="absolute right-0 top-full mt-2 bg-[#0a0e1a] rounded-xl shadow-2xl border border-white/10 z-50 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden max-h-[300px] overflow-y-auto">
        <div className="py-1">
          {LOCALES.map((locale) => (
            <button
              key={locale}
              onClick={() => switchLocale(locale)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-white/5 transition text-left ${
                currentLocale === locale ? 'bg-white/5 text-white' : 'text-gray-400'
              }`}
            >
              <span className="text-lg">{FLAGS[locale]}</span>
              <span>{LABELS[locale]}</span>
              {currentLocale === locale && (
                <span className="ml-auto text-[#667eea]">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
