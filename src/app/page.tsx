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
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <PyramidScene />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-7xl md:text-9xl font-bold text-kemet-gold drop-shadow-[0_0_15px_rgba(193,155,87,0.5)] mb-4">
              كيمت
            </h1>
            <p className="text-xl md:text-2xl text-sand-200 tracking-[0.3em] font-light">
              أرض الأسرار وعظمة التاريخ
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-kemet-gold/30 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-2 bg-kemet-gold rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-kemet-gold/5 blur-[120px] rounded-full pointer-events-none" />
        <EgyptInfo />
      </section>

      {/* Modern Egypt Section */}
      <section id="modern" className="py-24 bg-stone-900/30 backdrop-blur-sm relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-5xl font-bold text-kemet-gold">مصر الحديثة</h2>
              <p className="text-xl text-sand-200 leading-relaxed">
                مصر لا تتوقف عن إبهار العالم، فبينما نحفظ تاريخنا العريق، نبني مستقبلاً مشرقاً يليق بعظمة أجدادنا. من العاصمة الإدارية الجديدة إلى أضخم المشاريع القومية، تنهض مصر من جديد.
              </p>
              <div className="flex gap-4">
                <Link href="/gallery" className="bg-kemet-gold text-stone-950 px-8 py-3 rounded-full font-bold hover:bg-gold-light transition-all">
                  استكشف المعرض
                </Link>
                <Link href="#vision" className="border border-kemet-gold/30 text-kemet-gold px-8 py-3 rounded-full font-bold hover:bg-kemet-gold/10 transition-all">
                  رؤية 2030
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden border border-kemet-gold/20 shadow-2xl shadow-kemet-gold/5"
            >
              <Image
                src="https://pioneerproperty.net/wp-content/uploads/2021/09/%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9-%D8%A7%D9%84%D8%B9%D8%A7%D8%B5%D9%85%D8%A9-%D8%A7%D9%84%D8%A7%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9.jpg"
                alt="Modern Egypt"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="vision" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kemet-gold mb-4">نحن لا نصنع التاريخ فحسب</h2>
            <p className="text-sand-300">بل نبني المستقبل بإرادة مصرية خالصة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className="p-8 bg-stone-900/50 rounded-3xl border border-white/5 hover:border-kemet-gold/20 transition-all group"
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-kemet-gold mb-4 group-hover:translate-x-2 transition-transform">{item.title}</h3>
                <p className="text-sand-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images3.alphacoders.com/793/thumb-1920-793638.jpg"
            alt="CTA Background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl font-bold text-white mb-8">هل أنت مستعد لاكتشاف أسرار كيمت؟</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/museum" className="bg-white text-stone-950 px-10 py-4 rounded-full font-black hover:scale-105 transition-all shadow-xl shadow-white/10">
              دخول المتحف الرقمي
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-stone-950">
        <div className="container mx-auto px-4 flex flex-col md:row justify-between items-center gap-8">
          <div className="text-kemet-gold text-3xl font-bold">كيمت</div>
          <div className="flex gap-8 text-sand-400">
            <Link href="/" className="hover:text-kemet-gold transition-colors">الرئيسية</Link>
            <Link href="/gallery" className="hover:text-kemet-gold transition-colors">المعرض</Link>
            <Link href="/museum" className="hover:text-kemet-gold transition-colors">المتحف</Link>
          </div>
          <div className="text-sand-500 text-sm">
            © 2025 كيمت - جميع الحقوق محفوظة
          </div>
        </div>
      </footer>
    </main>
  );
}
