'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';

const galleryItems = [
  {
    category: "المعالم الأثرية",
    items: [
      {
        title: "الأهرامات",
        image: "https://images3.alphacoders.com/793/thumb-1920-793638.jpg",
        description: "أحد عجائب الدنيا السبع القديمة"
      },
      {
        title: "معبد الكرنك",
        image: "https://c0.wallpaperflare.com/preview/952/93/167/egypt-karnak-history-old.jpg",
        description: "أكبر دار عبادة دينية في العالم القديم"
      },
      {
        title: "معبد أبو سمبل",
        image: "https://images.unsplash.com/photo-1702909171830-2c4dca2ac090?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWJ1JTIwc2ltYmVsfGVufDB8fDB8fHww",
        description: "معبد منحوت في الصخر لرمسيس الثاني"
      }
    ]
  },
  {
    category: "مصر الحديثة",
    items: [
      {
        title: "العاصمة الإدارية",
        image: "https://pioneerproperty.net/wp-content/uploads/2021/09/%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9-%D8%A7%D9%84%D8%B9%D8%A7%D8%B5%D9%85%D8%A9-%D8%A7%D9%84%D8%A7%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9.jpg",
        description: "مدينة المستقبل الذكية"
      },
      {
        title: "برج القاهرة",
        image: "https://www.egypttoursportal.com/images/2023/12/Cairo-Tower-Egypt-Tours-Portal.jpg",
        description: "أيقونة العمارة المصرية الحديثة"
      }
    ]
  },
  {
    category: "الطبيعة المصرية",
    items: [
      {
        title: "نهر النيل",
        image: "https://t4.ftcdn.net/jpg/06/22/78/29/360_F_622782969_pI6eZxO1EdjaAIXeN1Mg5L3zRQYgPk3M.jpg",
        description: "شريان الحياة في مصر"
      },
      {
        title: "سيناء",
        image: "https://images.unsplash.com/photo-1572376069663-5f52bdd158f2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnQlMjBzaW5haXxlbnwwfHwwfHx8MA%3D%3D",
        description: "جمال الصحراء والجبال"
      }
    ]
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredItems = selectedCategory
    ? galleryItems.filter(cat => cat.category === selectedCategory)
    : galleryItems;

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-900 to-amber-900">
      {/* Header */}
      <Header />

      {/* Gallery Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-kemet-gold text-center mb-16"
          >
            معرض الصور
          </motion.h1>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full transition-colors ${
                !selectedCategory
                  ? 'bg-kemet-gold text-stone-900'
                  : 'bg-black/30 text-sand-100 hover:bg-black/50'
              }`}
            >
              الكل
            </button>
            {galleryItems.map(category => (
              <button
                key={category.category}
                onClick={() => setSelectedCategory(category.category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category.category
                    ? 'bg-kemet-gold text-stone-900'
                    : 'bg-black/30 text-sand-100 hover:bg-black/50'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(category => (
              category.items.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl aspect-square"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-kemet-gold mb-2">{item.title}</h3>
                    <p className="text-sand-100">{item.description}</p>
                  </div>
                </motion.div>
              ))
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 