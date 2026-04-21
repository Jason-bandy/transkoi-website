import { setRequestLocale } from 'next-intl/server';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import Products from '@/components/Products';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

const locales = ['en', 'zh', 'ja'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function HomePage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  
  return (
    <div className="bg-[#0a0e1a] text-white min-h-screen overflow-x-hidden relative">
      {/* Background Animation */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div 
          className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(102,126,234,0.1)_0%,transparent_70%)] animate-rotate"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Stats />
        <Products />
        <Download />
        <Footer />
      </div>
    </div>
  );
}
