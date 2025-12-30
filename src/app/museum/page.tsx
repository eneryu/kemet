'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const museumItems = [
  {
    era: "الدولة القديمة",
    items: [
      {
        name: "قناع توت عنخ آمون",
        image: "https://www.alakhbar.ca/gallery/images/articles/16290103191.jpg",
        description: "قناع ذهبي خالص يزن 11 كيلوجرام، يعتبر من أشهر القطع الأثرية المصرية",
        details: {
          date: "1323 ق.م",
          material: "ذهب خالص ومينا وأحجار كريمة",
          location: "المتحف المصري - القاهرة",
          history: "تم اكتشاف القناع في مقبرة توت عنخ آمون عام 1922 بواسطة هوارد كارتر. يعتبر من أهم وأجمل القطع الأثرية المصرية التي تم اكتشافها على الإطلاق.",
          features: [
            "مصنوع من الذهب الخالص",
            "مرصع بالأحجار الكريمة",
            "يمثل الملك بملامح أوزوريس",
            "يحمل رموزاً ملكية ودينية"
          ]
        }
      },
      {
        name: "تمثال الكاتب الجالس",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/The_seated_scribe-E_3023-IMG_4267-gradient-contrast.jpg/1200px-The_seated_scribe-E_3023-IMG_4267-gradient-contrast.jpg",
        description: "تمثال من الحجر الجيري الملون يمثل كاتباً مصرياً قديماً",
        details: {
          date: "2500 ق.م",
          material: "حجر جيري ملون وكريستال",
          location: "متحف اللوفر - باريس",
          history: "يعتبر هذا التمثال من أشهر التماثيل المصرية القديمة، ويمثل كاتباً في وضع الجلوس يستعد للكتابة.",
          features: [
            "العينان مصنوعتان من الكريستال",
            "تفاصيل دقيقة في الوجه والجسم",
            "يظهر الكاتب ممسكاً بورقة بردي",
            "ألوان أصلية محفوظة بشكل جيد"
          ]
        }
      }
    ]
  },
  {
    era: "الدولة الوسطى",
    items: [
      {
        name: "تابوت سنوسرت الثالث",
        image: "https://popular-archaeology.com/wp-content/uploads/2017/06/33934522754_43e53cac36_z.jpg",
        description: "تابوت خشبي مزخرف بالذهب والأحجار الكريمة",
        details: {
          date: "1850 ق.م",
          material: "خشب مطعم بالذهب والأحجار الكريمة",
          location: "المتحف المصري - القاهرة",
          history: "تابوت الملك سنوسرت الثالث، أحد أقوى ملوك الأسرة الثانية عشر، مزين بنقوش ونصوص من كتاب الموتى.",
          features: [
            "نقوش هيروغليفية مذهبة",
            "رسوم للآلهة المصرية",
            "زخارف هندسية دقيقة",
            "حالة حفظ ممتازة"
          ]
        }
      }
    ]
  }
];

export default function Museum() {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  return (
    <div className="min-h-screen bg-[url('https://wallpapercat.com/w/full/d/a/8/2128913-3840x2160-desktop-4k-hieroglyphics-background-image.jpg')] bg-cover bg-fixed">
      <div className="min-h-screen bg-black/70 backdrop-blur-sm">
        {/* Museum Content */}
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold text-kemet-gold text-center mb-16"
            >
              المتحف المصري الإلكتروني
            </motion.h1>

            {museumItems.map((era, eraIndex) => (
              <div key={era.era} className="mb-20">
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-kemet-gold mb-8 border-r-4 border-kemet-gold pr-4"
                >
                  {era.era}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {era.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.2 }}
                      onClick={() => setSelectedItem(item)}
                      className="bg-black/50 backdrop-blur-md rounded-2xl overflow-hidden group cursor-pointer border border-kemet-gold/20 hover:border-kemet-gold transition-all duration-500"
                    >
                      <div className="relative h-[300px]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      </div>

                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-kemet-gold mb-3">{item.name}</h3>
                        <p className="text-sand-100">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Item Details Popup */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto scrollbar-hide"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-stone-900/90 rounded-2xl w-full max-w-4xl my-8 relative"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative h-[250px] md:h-[400px]">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent" />
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 text-sand-100 hover:text-kemet-gold transition-colors bg-black/30 rounded-full p-2"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-kemet-gold mb-4">{selectedItem.name}</h3>
                  <p className="text-sand-100 text-base md:text-lg mb-6">{selectedItem.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-kemet-gold font-bold mb-2">التاريخ</h4>
                      <p className="text-sand-100">{selectedItem.details.date}</p>
                    </div>
                    <div>
                      <h4 className="text-kemet-gold font-bold mb-2">المادة</h4>
                      <p className="text-sand-100">{selectedItem.details.material}</p>
                    </div>
                    <div>
                      <h4 className="text-kemet-gold font-bold mb-2">الموقع</h4>
                      <p className="text-sand-100">{selectedItem.details.location}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-kemet-gold font-bold mb-4">التاريخ والأهمية</h4>
                    <p className="text-sand-100 leading-relaxed">{selectedItem.details.history}</p>
                  </div>

                  <div>
                    <h4 className="text-kemet-gold font-bold mb-4">المميزات</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedItem.details.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-sand-100">
                          <span className="text-kemet-gold mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}