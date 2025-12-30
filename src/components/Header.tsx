'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="relative bg-black/30 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between">
          <Link href="/" className="text-kemet-gold text-2xl font-bold hover:scale-105 transition-transform">
            كيمت
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="#history" className="text-sand-100 hover:text-kemet-gold transition-colors">التاريخ</Link>
            <Link href="#modern" className="text-sand-100 hover:text-kemet-gold transition-colors">مصر الحديثة</Link>
            <Link href="#vision" className="text-sand-100 hover:text-kemet-gold transition-colors">رؤية 2030</Link>
            <Link href="/gallery" className="text-sand-100 hover:text-kemet-gold transition-colors">المعرض</Link>
            <Link href="/museum" className="text-sand-100 hover:text-kemet-gold transition-colors">المتحف</Link>
            <Link href="#about" className="text-sand-100 hover:text-kemet-gold transition-colors">عن مصر</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-sand-100 hover:text-kemet-gold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 mt-4 w-64 bg-black/90 backdrop-blur-md rounded-2xl overflow-hidden border border-kemet-gold/20"
              >
                <div className="py-2">
                  <Link href="#history" className="block px-6 py-3 text-sand-100 hover:bg-kemet-gold/20 hover:text-kemet-gold transition-colors text-right">
                    التاريخ
                  </Link>
                  <Link href="#modern" className="block px-6 py-3 text-sand-100 hover:bg-kemet-gold/20 hover:text-kemet-gold transition-colors text-right">
                    مصر الحديثة
                  </Link>
                  <Link href="#vision" className="block px-6 py-3 text-sand-100 hover:bg-kemet-gold/20 hover:text-kemet-gold transition-colors text-right">
                    رؤية 2030
                  </Link>
                  <Link href="/gallery" className="block px-6 py-3 text-sand-100 hover:bg-kemet-gold/20 hover:text-kemet-gold transition-colors text-right">
                    المعرض
                  </Link>
                  <Link href="/museum" className="block px-6 py-3 text-sand-100 hover:bg-kemet-gold/20 hover:text-kemet-gold transition-colors text-right">
                    المتحف
                  </Link>
                  <Link href="#about" className="block px-6 py-3 text-sand-100 hover:bg-kemet-gold/20 hover:text-kemet-gold transition-colors text-right">
                    عن مصر
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}