'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import EgyptInfo from './EgyptInfo';

const heroSlides = [
  {
    id: 1,
    title: "أرض الفراعنة",
    subtitle: "اكتشف عظمة الحضارة المصرية عبر العصور",
    image: "https://modernwarships.com/upload/image/MWLiveOps_Event_SPH_banner_0.81_1920x1080_0f8e9f845fd51d15e1305db18d110010.jpg",
    quote: "مصر هبة النيل",
    author: "هيرودوت"
  },
  {
    id: 2,
    title: "عاصمة المستقبل",
    subtitle: "رؤية مصر 2030 - نحو غدٍ أفضل",
    image: "https://aqaryamasr.com/blog/wp-content/uploads/2022/11/%D8%A7%D9%84%D8%A8%D8%B1%D8%AC-%D8%A7%D9%84%D8%A3%D9%8A%D9%82%D9%88%D9%86%D9%8A-%D8%A7%D9%84%D8%B9%D8%A7%D8%B5%D9%85%D8%A9-%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9-The-Iconic-Tower-New-Capital-1.jpg",
    quote: "مصر تبني... مصر تتقدم",
    author: "رؤية 2030"
  },
  {
    id: 3,
    title: "تاريخ وحضارة",
    subtitle: "7000 عام من الإنجازات والعظمة",
    image: "https://wallpapercave.com/wp/wp12769209.jpg",
    quote: "مصر أم الدنيا",
    author: "التاريخ"
  }
];

const timelineData = [
  {
    era: "العصر العتيق",
    year: "3150-2686 ق.م",
    info: "توحيد القطرين وتأسيس أول دولة مركزية في التاريخ",
    image: "https://www.iijazforum.org/wp-content/uploads/2021/03/mm.png",
    achievements: [
      "توحيد مصر العليا والسفلى على يد الملك نارمر",
      "اختراع الكتابة الهيروغليفية وبداية التدوين",
      "بناء أول هرم مدرج في سقارة",
      "تأسيس نظام إداري مركزي متطور"
    ]
  },
  {
    era: "الدولة القديمة",
    year: "2686-2181 ق.م",
    info: "عصر بناء الأهرامات وازدهار الحضارة",
    image: "https://wallpapers.com/images/hd/ancient-egypt-uqceynu78y6zqc13.jpg",
    achievements: [
      "بناء الأهرامات الثلاثة في الجيزة",
      "تطوير العلوم والفنون والعمارة",
      "توسيع التجارة مع البلدان المجاورة",
      "تطوير نظام الري والزراعة"
    ]
  },
  {
    era: "الدولة الوسطى",
    year: "2055-1650 ق.م",
    info: "عصر النهضة الأدبية والفنية",
    image: "https://i.ytimg.com/vi/zFLTGyja5I8/maxresdefault.jpg",
    achievements: [
      "إعادة توحيد البلاد بعد الانقسام",
      "ازدهار الأدب والفنون",
      "تحصين الحدود وبناء القلاع",
      "تطوير الزراعة والصناعة"
    ]
  },
  {
    era: "الدولة الحديثة",
    year: "1550-1069 ق.م",
    info: "العصر الذهبي للإمبراطورية المصرية",
    image: "https://dropinblog.net/34244460/files/featured/Ancient_Egypt_3D_Models_-_Hero_Image_-_KitBash3D.jpg",
    achievements: [
      "طرد الهكسوس وتوحيد البلاد",
      "بناء معابد الكرنك والأقصر",
      "توسيع الإمبراطورية إلى أقصى حدودها",
      "ازدهار الفنون والعمارة"
    ]
  },
  {
    era: "العصر البطلمي",
    year: "332-30 ق.م",
    info: "عصر الحضارة الهيلينستية",
    image: "https://cdn.thecollector.com/wp-content/uploads/2021/11/death-cleopatra-sculpture-book-dead-imhotep-egypt.jpg?width=1400&quality=70",
    achievements: [
      "تأسيس مكتبة الإسكندرية",
      "مزج الثقافة المصرية باليونانية",
      "تطوير العلوم والطب",
      "بناء المنارة والمتحف"
    ]
  },
  {
    era: "العصر الإسلامي",
    year: "641-1517 م",
    info: "دخول الإسلام وازدهار الحضارة الإسلامية",
    image: "https://i.pinimg.com/736x/f8/de/ab/f8deab0d006952d1cb361d420d7e31d0.jpg",
    achievements: [
      "بناء جامع عمرو بن العاص",
      "تأسيس القاهرة الفاطمية",
      "إنشاء الجامع الأزهر",
      "ازدهار العلوم والفنون الإسلامية"
    ]
  },
  {
    era: "مصر الحديثة",
    year: "1805-1952",
    info: "عصر النهضة الحديثة",
    image: "https://media.gettyimages.com/id/1465373888/video/view-of-the-pyramids-of-giza-from-modern-urban-cityscape-at-sunset.jpg?s=640x640&k=20&c=aYMW1HTOkATa-WMjeku7zpBGQA9dDTMsKPJedxJ70iY=",
    achievements: [
      "تحديث الجيش والإدارة",
      "إنشاء المدارس والجامعات",
      "بناء قناة السويس",
      "تطوير الصناعة والزراعة"
    ]
  },
  {
    era: "الجمهورية",
    year: "1952-2013",
    info: "عصر الاستقلال والتنمية",
    image: "https://images.pexels.com/photos/13420332/pexels-photo-13420332.jpeg?cs=srgb&dl=pexels-tarekhagrassph-13420332.jpg&fm=jpg",
    achievements: [
      "تأميم قناة السويس",
      "بناء السد العالي",
      "تطوير التعليم والصحة",
      "تحديث القوات المسلحة"
    ]
  },
  {
    era: "مصر الجديدة",
    year: "2014-الآن",
    info: "عصر التطوير والتنمية الشاملة",
    image: "https://i.pinimg.com/originals/33/94/49/339449f017d415b97b15252119e5576a.jpg",
    achievements: [
      "بناء العاصمة الإدارية الجديدة",
      "تطوير شبكة الطرق والكباري",
      "إنشاء محطات الطاقة العملاقة",
      "تنمية سيناء والدلتا والصعيد"
    ]
  }
];

const modernAchievements = [
  {
    title: "مشروعات البنية التحتية",
    description: "تطوير شامل للبنية التحتية في مصر",
    image: "https://buildersofegypt.com/wp-content/uploads/2024/06/%D8%B5%D9%88%D8%B1%D8%A9-%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D8%B3%D8%AF-%D8%AA%D9%86%D8%B2%D8%A7%D9%86%D9%8A%D8%A7-2.jpg",
    stats: {
      roads: "7000 كم طرق",
      bridges: "1000 كوبري",
      housing: "مليون وحدة سكنية"
    },
    details: {
      mainGoals: [
        "تطوير شبكة الطرق والمحاور",
        "إنشاء المدن الجديدة",
        "تطوير العشوائيات",
        "تحديث شبكات المرافق"
      ],
      projects: [
        "محور روض الفرج",
        "الطريق الدائري الإقليمي",
        "كباري النيل الجديدة",
        "أنفاق قناة السويس"
      ]
    }
  },
  {
    title: "العاصمة الإدارية الجديدة",
    description: "مدينة المستقبل الذكية",
    image: "/images/capital.jpg",
    stats: {
      area: "170,000 فدان",
      towers: "20 برج",
      population: "6.5 مليون نسمة"
    },
    details: {
      districts: [
        "الحي الحكومي",
        "المدينة الرياضية",
        "المدينة الثقافية",
        "المركز المالي العالمي"
      ],
      features: [
        "أطول برج في أفريقيا",
        "أكبر كاتدرائية في الشرق الأوسط",
        "أكبر مسجد في مصر",
        "القطار الكهربائي السريع"
      ]
    }
  },
  {
    title: "المشروعات القومية",
    description: "مشروعات عملاقة لتنمية مصر",
    image: "https://www.exam-eg.com/wp-content/uploads/2022/12/%D8%A7%D9%84%D8%B9%D8%A7%D8%B5%D9%85%D8%A9-%D8%A7%D9%84%D8%A7%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9.jpg",
    stats: {
      investment: "تريليون جنيه",
      jobs: "5 مليون فرصة عمل",
      cities: "37 مدينة جديدة"
    },
    details: {
      projects: [
        "تنمية محور قناة السويس",
        "استصلاح 2 مليون فدان",
        "مشروع الدلتا الجديدة",
        "تطوير شمال وجنوب سيناء"
      ],
      impact: [
        "زيادة الناتج القومي",
        "توفير فرص عمل",
        "جذب الاستثمارات",
        "تحسين مستوى المعيشة"
      ]
    }
  },
  {
    title: "مشروعات الطاقة",
    description: "تطوير قطاع الطاقة في مصر",
    image: "https://www.env-news.com/wp-content/uploads/2023/05/2022-03-30T200950.jpg",
    stats: {
      power: "70 جيجاوات",
      renewable: "42% طاقة متجددة",
      gas: "اكتفاء ذاتي"
    },
    details: {
      stations: [
        "محطة الضبعة النووية",
        "محطة بني سويف المركبة",
        "مجمع بنبان للطاقة الشمسية",
        "مزارع الرياح في خليج السويس"
      ],
      achievements: [
        "القضاء على انقطاع الكهرباء",
        "تصدير الطاقة للدول المجاورة",
        "تحقيق الاكتفاء الذاتي من الغاز",
        "التحول للطاقة النظيفة"
      ]
    }
  },
  {
    title: "التنمية الاجتماعية",
    description: "برامج الحماية والتنمية الاجتماعية",
    image: "https://img.youm7.com/ArticleImgs/2023/12/20/136625-PHOTO-2023-12-20-11-43-57.jpg",
    stats: {
      support: "30 مليون مواطن",
      housing: "مليون وحدة للشباب",
      health: "100 مليون صحة"
    },
    details: {
      programs: [
        "تكافل وكرامة",
        "حياة كريمة",
        "سكن لكل المصريين",
        "تطوير الريف المصري"
      ],
      initiatives: [
        "100 مليون صحة",
        "القضاء على فيروس سي",
        "نور حياة",
        "التأمين الصحي الشامل"
      ]
    }
  },
  {
    title: "التعليم والبحث العلمي",
    description: "تطوير منظومة التعليم والبحث العلمي",
    image: "https://www.shutterstock.com/shutterstock/videos/3576375319/thumb/9.jpg?ip=x480",
    stats: {
      universities: "27 جامعة",
      schools: "100 ألف فصل",
      research: "50 مركز بحثي"
    },
    details: {
      initiatives: [
        "التحول الرقمي في التعليم",
        "الجامعات التكنولوجية",
        "مدارس النيل",
        "بنك المعرفة المصري"
      ],
      achievements: [
        "تطوير المناهج التعليمية",
        "التوسع في التعليم الفني",
        "دعم البحث العلمي",
        "التعاون الدولي الأكاديمي"
      ]
    }
  }
];

export default function PyramidScene() {
  const [selectedEra, setSelectedEra] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-900 via-sand-900 to-stone-900">


      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 z-20 text-sand-100 hover:text-kemet-gold transition-colors transform hover:scale-110 group"
        >
          <div className="relative bg-black/30 backdrop-blur-md rounded-full p-3 group-hover:bg-black/50 transition-all">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ x: -3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </motion.svg>
          </div>
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 z-20 text-sand-100 hover:text-kemet-gold transition-colors transform hover:scale-110 group"
        >
          <div className="relative bg-black/30 backdrop-blur-md rounded-full p-3 group-hover:bg-black/50 transition-all">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </div>
        </button>

        <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center min-h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-kemet-gold mb-8 text-shadow-lg">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-3xl text-sand-100 max-w-4xl mx-auto mb-8 text-shadow">
                {heroSlides[currentSlide].subtitle}
              </p>
              <blockquote className="text-lg md:text-xl text-sand-200 italic mb-12">
                "{heroSlides[currentSlide].quote}"
                <footer className="text-sm text-sand-300 mt-2">- {heroSlides[currentSlide].author}</footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>

          {/* Scroll Indicator */}
          <motion.div
            animate={{
              y: [0, 10, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            onClick={() => document.getElementById('history')?.scrollIntoView({ behavior: 'smooth' })}
            className="cursor-pointer"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sand-200 text-sm">اكتشف المزيد</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-sand-200 rounded-full flex justify-center mt-2"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-2 bg-kemet-gold rounded-full mt-2"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Slider Pagination */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                  ? 'bg-kemet-gold w-8'
                  : 'bg-sand-100/50 hover:bg-sand-100'
                }`}
            />
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section id="history" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-kemet-gold text-center mb-16"
          >
            رحلة عبر الزمن
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timelineData.map((era, index) => (
              <motion.div
                key={era.era}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div
                  className="relative h-[400px] rounded-lg overflow-hidden cursor-pointer"
                  onMouseEnter={() => setSelectedEra(index)}
                  onMouseLeave={() => setSelectedEra(null)}
                >
                  <Image
                    src={era.image}
                    alt={era.era}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-lg" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500">
                    <h3 className="text-3xl font-bold text-kemet-gold mb-2">{era.era}</h3>
                    <p className="text-sand-100 text-lg mb-2">{era.year}</p>
                    <p className="text-sand-200">{era.info}</p>
                  </div>

                  <AnimatePresence>
                    {selectedEra === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                        className="absolute inset-0 bg-black/95 backdrop-blur-sm p-6 flex flex-col justify-center"
                      >
                        <h4 className="text-2xl font-bold text-kemet-gold mb-4">أهم الإنجازات</h4>
                        <ul className="space-y-2">
                          {era.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: i * 0.1,
                                duration: 0.3,
                                ease: "easeOut"
                              }}
                              className="text-sand-100 flex items-center gap-2"
                            >
                              <span className="text-kemet-gold">•</span>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Egypt Section */}
      <section id="modern" className="py-20 bg-gradient-to-b from-stone-900 to-sand-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-kemet-gold text-center mb-16"
          >
            مصر الحديثة
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {modernAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-black/30 rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-kemet-gold mb-4">{achievement.title}</h3>
                  <p className="text-sand-100 text-lg mb-6">{achievement.description}</p>

                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(achievement.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className="text-2xl font-bold text-kemet-gold mb-1">{value}</p>
                        <p className="text-sand-200 text-sm">
                          {key === 'revenue' ? 'الإيرادات السنوية' :
                            key === 'investment' ? 'الاستثمارات السنوية' :
                              key === 'population' ? 'السكان' :
                                key === 'area' ? 'المساحة' :
                                  key === 'sectors' ? 'القطاعات' :
                                    key === 'goals' ? 'الأهداف' :
                                      key === 'ships' ? 'السفن يومياً' :
                                        key === 'length' ? 'الطول' :
                                          key === 'towers' ? 'الأبراج' :
                                            key === 'bridges' ? 'الكباري' :
                                              key === 'housing' ? 'الوحدات السكنية' :
                                                key === 'roads' ? 'الطرق' :
                                                  key === 'cities' ? 'المدن الجديدة' :
                                                    key === 'jobs' ? 'فرص العمل' :
                                                      key === 'renewable' ? 'الطاقة المتجددة' :
                                                        key === 'power' ? 'القدرة الكهربائية' :
                                                          key === 'gas' ? 'الغاز الطبيعي' :
                                                            key === 'health' ? 'المنشآت الصحية' :
                                                              key === 'support' ? 'الدعم السنوي' :
                                                                key === 'universities' ? 'الجامعات الجديدة' :
                                                                  key === 'schools' ? 'الفصول الدراسية' :
                                                                    key === 'research' ? 'المراكز البحثية' : key}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision 2030 Section */}
      <section id="vision" className="py-20 bg-gradient-to-b from-sand-900 to-stone-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-kemet-gold text-center mb-16"
          >
            رؤية مصر 2030
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modernAchievements[0]?.details?.mainGoals?.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-black/30 rounded-xl p-6 hover:bg-black/40 transition-all duration-300"
              >
                <div className="text-kemet-gold text-4xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-sand-100 mb-2">
                  {goal}
                </h3>
                <p className="text-sand-200">
                  {modernAchievements[0]?.details?.projects?.[index]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Egypt Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-stone-900 to-sand-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-kemet-gold text-center mb-16"
          >
            عن مصر
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black/30 rounded-2xl overflow-hidden p-8"
            >
              <h3 className="text-3xl font-bold text-kemet-gold mb-6">الموقع الاستراتيجي</h3>
              <p className="text-sand-100 text-lg mb-4">
                تقع مصر في قلب العالم، حيث تربط بين قارات آسيا وأفريقيا وأوروبا عبر قناة السويس.
              </p>
              <ul className="space-y-3 text-sand-200">
                <li>• المساحة: 1,001,450 كم²</li>
                <li>• عدد السكان: 104 مليون نسمة</li>
                <li>• العاصمة: القاهرة</li>
                <li>• اللغة الرسمية: العربية</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black/30 rounded-2xl overflow-hidden p-8"
            >
              <h3 className="text-3xl font-bold text-kemet-gold mb-6">التنوع الثقافي</h3>
              <p className="text-sand-100 text-lg mb-4">
                تتميز مصر بتنوع ثقافي وحضاري فريد يمتد عبر آلاف السنين.
              </p>
              <ul className="space-y-3 text-sand-200">
                <li>• 7 مواقع تراث عالمي</li>
                <li>• أكثر من 100 متحف</li>
                <li>• تنوع في الفنون والموسيقى</li>
                <li>• مطبخ مصري غني بالنكهات</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Did You Know Section */}
      <section id="didyouknow" className="py-20 bg-gradient-to-b from-stone-900 to-sand-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-kemet-gold text-center mb-16"
          >
            هل تعلم؟
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black/30 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-kemet-gold mb-4">حقائق مثيرة عن مصر القديمة</h3>
              <ul className="space-y-4 text-sand-100 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-kemet-gold mt-1">•</span>
                  المصريون ليسوا عرباً، بل هم أحفاد الفراعنة وأصحاب أقدم حضارة في التاريخ
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-kemet-gold mt-1">•</span>
                  اخترع المصريون القدماء التقويم السنوي المكون من 365 يوماً
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-kemet-gold mt-1">•</span>
                  بنى المصريون أول مبنى حجري في التاريخ وهو هرم زوسر المدرج
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-kemet-gold mt-1">•</span>
                  كانت مصر أول دولة مركزية موحدة في التاريخ
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/museum"
                  className="inline-flex items-center gap-2 bg-kemet-gold text-stone-900 px-8 py-3 rounded-full font-bold hover:bg-sand-100 transition-colors group"
                >
                  اكتشف المزيد في المتحف
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ←
                  </motion.span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black/30 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-kemet-gold mb-4">إنجازات علمية مذهلة</h3>
              <ul className="space-y-4 text-sand-100 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-kemet-gold mt-1">•</span>
                  طور المصريون القدماء علم الطب وأجروا عمليات جراحية معقدة
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-kemet-gold mt-1">•</span>
                  استخدموا الرياضيات المتقدمة في بناء الأهرامات والمعابد
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-kemet-gold mt-1">•</span>
                  اخترعوا الكتابة وصناعة الورق من نبات البردي
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-kemet-gold mt-1">•</span>
                  طوروا نظام ري متقدم باستخدام فيضان النيل
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/museum"
                  className="inline-flex items-center gap-2 bg-kemet-gold text-stone-900 px-8 py-3 rounded-full font-bold hover:bg-sand-100 transition-colors group"
                >
                  شاهد الاكتشافات في المتحف
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ←
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credits Section */}
      <section className="py-20 bg-gradient-to-b from-sand-900 to-stone-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-kemet-gold text-center mb-16 flex items-center justify-center gap-4"
          >
            <span className="text-4xl">☥</span>
            فريق العمل
            <span className="text-4xl">☥</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black/30 rounded-2xl p-8 hover:bg-black/40 transition-all duration-300 h-full"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-kemet-gold shadow-lg relative">
                    <Image
                      src="https://media-hbe1-1.cdn.whatsapp.net/v/t61.24694-24/56106005_562937790779117_4335318350537162752_n.jpg?ccb=11-4&oh=01_Q5AaIMP2D2Nx_FTFw4wYP2B279BJQTdm_sAgWgwOkPwQy4j0&oe=6783E6A9&_nc_sid=5e03e0&_nc_cat=100"
                      alt="Dr. Nabil"
                      fill
                      className="object-cover"
                      style={{ clipPath: 'circle(50%)' }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-kemet-gold mb-3">شكر خاص</h3>
                  <h4 className="text-xl font-semibold text-sand-100 mb-2">د. نبيل الغمري</h4>
                  <p className="text-sand-200 text-lg leading-relaxed">
                    رئيس قسم الوسائط المتعددة في كلية iAEMS
                  </p>
                  <p className="text-sand-100 text-lg mt-4">
                    شكراً على توجيهك وقيادتك المستمرة لنا. أنت قدوة في العطاء والإخلاص، نعتز بك قائداً ومعلماً.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Separator */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
              <div className="h-48 w-0.5 bg-gradient-to-b from-transparent via-kemet-gold to-transparent"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black/30 rounded-2xl p-8 hover:bg-black/40 transition-all duration-300 h-full"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-kemet-gold shadow-lg bg-sand-800 flex items-center justify-center">
                    <span className="text-6xl text-kemet-gold">م</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-kemet-gold mb-3">عن المطور</h3>
                  <h4 className="text-xl font-semibold text-sand-100 mb-2">Eneryu (جاك)</h4>
                  <p className="text-sand-200 text-lg leading-relaxed">
                    مطور ويب وتطبيقات | 3D Artist | كاتب محتوى إبداعي
                    <br />
                    خريج كلية iAEMS [ درجة إمتياز ] قسم الوسائط المتعددة
                  </p>
                  <p className="text-sand-100 text-lg mt-4">
                    مشروع شخصي تم تطويره كتجربة تفاعلية لإلهام طلاب iAEMS وإظهار إمكانيات التقنيات الحديثة في عرض تراثنا العريق.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hieroglyphic Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="relative bg-gradient-to-b from-black/40 to-black/20 p-12 rounded-2xl border border-kemet-gold/30">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-10 bg-stone-900 border-2 border-kemet-gold rounded-full flex items-center justify-center">
                  <span className="text-kemet-gold text-2xl">𓂀</span>
                </div>
              </div>

              <div className="text-kemet-gold text-3xl mb-6 tracking-[0.3em] opacity-90 text-center">𓂀 𓃭 𓆣 𓇯 𓈖</div>

              <p className="font-noto-kufi-arabic text-2xl text-sand-100 text-center relative inline-block w-full px-12">
                <span className="absolute -left-2 top-0 text-kemet-gold text-4xl opacity-80">"</span>
                من يزرع المعرفة يحصد المستقبل
                <span className="absolute -right-2 bottom-0 text-kemet-gold text-4xl opacity-80">"</span>
              </p>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="w-20 h-10 bg-stone-900 border-2 border-kemet-gold rounded-full flex items-center justify-center">
                  <span className="text-kemet-gold text-2xl">𓂀</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-stone-900 to-black py-12 border-t-2 border-kemet-gold/30" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            <div className="text-right">
              <h3 className="text-3xl font-bold text-kemet-gold mb-4 flex items-center gap-2">
                <span className="text-2xl">𓃭</span>
                كيمت
                <span className="text-2xl">𓃭</span>
              </h3>
              <p className="text-sand-200 text-sm md:text-base font-noto-kufi-arabic">
                اكتشف عظمة الحضارة المصرية القديمة والحديثة من خلال رحلة تفاعلية عبر العصور
              </p>
            </div>

            <div className="text-right">
              <h3 className="text-2xl font-bold text-kemet-gold mb-4 flex items-center gap-2">
                <span className="text-xl">𓂀</span>
                تواصل معنا
                <span className="text-xl">𓂀</span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:contact@kemet.eg" className="text-sand-200 hover:text-kemet-gold transition-colors text-sm md:text-base flex items-center gap-2">
                    <span className="text-kemet-gold text-sm">𓃾</span>
                    البريد الإلكتروني
                  </a>
                </li>
                <li>
                  <a href="tel:+201234567890" className="text-sand-200 hover:text-kemet-gold transition-colors text-sm md:text-base flex items-center gap-2">
                    <span className="text-kemet-gold text-sm">𓃾</span>
                    الهاتف
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-right">
              <h3 className="text-2xl font-bold text-kemet-gold mb-4 flex items-center gap-2">
                <span className="text-xl">𓂀</span>
                روابط سريعة
                <span className="text-xl">𓂀</span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#history" className="text-sand-200 hover:text-kemet-gold transition-colors text-sm md:text-base flex items-center gap-2">
                    <span className="text-kemet-gold text-sm">𓆣</span>
                    التاريخ
                  </Link>
                </li>
                <li>
                  <Link href="#modern" className="text-sand-200 hover:text-kemet-gold transition-colors text-sm md:text-base flex items-center gap-2">
                    <span className="text-kemet-gold text-sm">𓆣</span>
                    مصر الحديثة
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-sand-200 hover:text-kemet-gold transition-colors text-sm md:text-base flex items-center gap-2">
                    <span className="text-kemet-gold text-sm">𓆣</span>
                    المعرض
                  </Link>
                </li>
                <li>
                  <Link href="/museum" className="text-sand-200 hover:text-kemet-gold transition-colors text-sm md:text-base flex items-center gap-2">
                    <span className="text-kemet-gold text-sm">𓆣</span>
                    المتحف
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-right">
              <h3 className="text-2xl font-bold text-kemet-gold mb-4 flex items-center gap-2">
                <span className="text-xl">𓂀</span>
                تابعنا
                <span className="text-xl">𓂀</span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sand-200 hover:text-kemet-gold transition-colors text-sm md:text-base flex items-center gap-2">
                    <span className="text-kemet-gold text-sm">𓃾</span>
                    فيسبوك
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sand-200 hover:text-kemet-gold transition-colors text-sm md:text-base flex items-center gap-2">
                    <span className="text-kemet-gold text-sm">𓃾</span>
                    تويتر
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sand-200 hover:text-kemet-gold transition-colors text-sm md:text-base flex items-center gap-2">
                    <span className="text-kemet-gold text-sm">𓃾</span>
                    انستجرام
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-kemet-gold/30 mt-12 pt-8 text-center">
            <p className="text-sand-300 text-sm md:text-base flex items-center justify-center gap-3">
              <span className="text-kemet-gold">𓂋</span>
              جميع الحقوق محفوظة © 2024 - {new Date().getFullYear()} كيميت
              <span className="text-kemet-gold">𓂋</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 