'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import EgyptInfo from '@/components/EgyptInfo';
import Image from 'next/image';
import Link from 'next/link';

const PyramidScene = dynamic(() => import('@/components/PyramidScene'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-sand-100 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 opacity-60">
          <PyramidScene />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-7xl md:text-9xl font-bold text-kemet-gold drop-shadow-[0_0_15px_rgba(193,155,87,0.5)] select-none">
              كيمت
            </h1>
            <p className="text-xl md:text-3xl text-sand-200 tracking-widest font-light mt-4 select-none">
              أرض الأسرار وعظمة التاريخ
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-kemet-gold/30 rounded-full flex justify-center p-1 cursor-pointer hover:border-kemet-gold transition-colors">
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-2 bg-kemet-gold rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* History Section - Egypt Info */}
      <section id="history" className="py-32 relative overflow-hidden bg-stone-950">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-kemet-gold/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6">
          <EgyptInfo />
        </div>
      </section>

      {/* Modern Egypt Section */}
      <section id="modern" className="py-32 bg-stone-900/30 backdrop-blur-sm relative border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <h2 className="text-5xl font-bold text-kemet-gold leading-tight">مصر الحديثة</h2>
                <h3 className="text-2xl text-sand-200">عاصمة المستقبل</h3>
              </div>

              <p className="text-xl text-sand-200 leading-relaxed text-justify opacity-90">
                مصر لا تتوقف عن إبهار العالم، فبينما نحفظ تاريخنا العريق، نبني مستقبلاً مشرقاً يليق بعظمة أجدادنا. من العاصمة الإدارية الجديدة إلى أضخم المشاريع القومية، تنهض مصر من جديد.
              </p>

              <div className="flex flex-wrap gap-5 pt-4">
                <Link href="/gallery" className="bg-kemet-gold text-stone-950 px-8 py-4 rounded-full font-bold hover:bg-gold-light transition-all shadow-lg shadow-kemet-gold/10 hover:shadow-kemet-gold/20 transform hover:-translate-y-1">
                  استكشف المعرض
                </Link>
                <Link href="#vision" className="border border-kemet-gold/30 text-kemet-gold px-8 py-4 rounded-full font-bold hover:bg-kemet-gold/10 transition-all">
                  رؤية 2030
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden border border-kemet-gold/20 shadow-2xl shadow-black/50"
            >
              <Image
                src="https://pioneerproperty.net/wp-content/uploads/2021/09/%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9-%D8%A7%D9%84%D8%B9%D8%A7%D8%B5%D9%85%D8%A9-%D8%A7%D9%84%D8%A7%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9.jpg"
                alt="Modern Egypt"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision 2030 Grid Section */}
      <section id="vision" className="py-32 relative bg-stone-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-bold text-kemet-gold">نحن لا نصنع التاريخ فحسب</h2>
            <p className="text-xl text-sand-300">بل نبني المستقبل بإرادة مصرية خالصة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "رؤية اقتصادية",
                desc: "تحول جذري في الاقتصاد المصري ليكون من ضمن الأقوى عالمياً بحلول 2030",
                icon: "📈"
              },
              {
                title: "مدن ذكية",
                desc: "إنشاء جيل جديد من المدن المستدامة والذكية لتوفير حياة كريمة",
                icon: "🏙️"
              },
              {
                title: "نهضة زراعية",
                desc: "استصلاح الأراضي وتطوير نظم الري لتأمين الغذاء للأجيال القادمة",
                icon: "🌾"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-10 bg-stone-900/40 rounded-[2rem] border border-white/5 hover:border-kemet-gold/30 hover:bg-stone-900/60 transition-all group hover:-translate-y-2 duration-300"
              >
                <div className="text-5xl mb-8 bg-black/20 w-fit p-4 rounded-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-2xl font-bold text-kemet-gold mb-4 group-hover:text-gold-light transition-colors">{item.title}</h3>
                <p className="text-sand-300 leading-relaxed text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images3.alphacoders.com/793/thumb-1920-793638.jpg"
            alt="CTA Background"
            fill
            className="object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-stone-950/60" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-10 leading-tight">هل أنت مستعد لاكتشاف أسرار كيمت؟</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/museum" className="bg-kemet-gold text-stone-950 px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-kemet-gold/20 hover:bg-gold-light">
              دخول المتحف الرقمي
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-stone-950 relative z-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="text-kemet-gold text-3xl font-bold tracking-tight">كيمت</div>
            <div className="flex gap-10 text-sand-400 font-medium">
              <Link href="/" className="hover:text-kemet-gold transition-colors">الرئيسية</Link>
              <Link href="/gallery" className="hover:text-kemet-gold transition-colors">المعرض</Link>
              <Link href="/museum" className="hover:text-kemet-gold transition-colors">المتحف</Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm border-t border-white/5 pt-8 gap-4">
            <div className="text-sand-500">
              © 2025 كيمت - جميع الحقوق محفوظة
            </div>
            <div className="flex items-center gap-2 text-sand-400">
              <span>Designed & Developed by</span>
              <a
                href="https://github.com/eneryu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-kemet-gold hover:text-white font-bold transition-colors flex items-center gap-2"
              >
                Jack
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
