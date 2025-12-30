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
    image: "https://aqaryamasr.com/blog/wp-content/uploads/2022/11/%D8%A7%D9%84%D8%A8%D8%B1%D8%AC-%D8%A7%D9%84%D8%A3%D9%8A%D9%82%D9%88%D9%86%D9%8I-%D8%A7%D9%84%D8%B9%D8%A7%D8%B5%D9%85%D8%A9-%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9-The-Iconic-Tower-New-Capital-1.jpg",
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
    image: "https://www.exam-eg.com/wp-content/uploads/2022/12/%D8%A7%D9%84%D8%B9%D8%A7%D8%B5%D9%85%D8%A9-%D8%A7%D9%84%D8%A7%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9.jpg",
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
    image: "https://buildersofegypt.com/wp-content/uploads/2024/06/%D8%B5%D9%88%D8%B1%D8%A9-%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D8%B3%D8%AF-%D8%AA%D9%86%D8%B2%D8%A7%D9%86%D9%8A%D8%A7-2.jpg",
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
  }
];

export default function PyramidScene() {
  const [selectedEra, setSelectedEra] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 text-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-kemet-gold mb-6 drop-shadow-2xl">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-sand-100 max-w-2xl mx-auto mb-8 font-light tracking-wide">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="bg-kemet-gold/10 backdrop-blur-sm border border-kemet-gold/20 p-6 rounded-2xl inline-block">
                <p className="text-sand-200 italic text-lg mb-2">"{heroSlides[currentSlide].quote}"</p>
                <p className="text-kemet-gold text-sm font-bold">- {heroSlides[currentSlide].author}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 z-20 pointer-events-none">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
            className="p-4 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-kemet-gold hover:text-stone-950 transition-all pointer-events-auto"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
            className="p-4 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-kemet-gold hover:text-stone-950 transition-all pointer-events-auto"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === i ? 'bg-kemet-gold w-10' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </section>

      {/* Encyclopedia Section */}
      <section id="encyclopedia" className="py-32 relative overflow-hidden bg-stone-950 border-t border-kemet-gold/10">
        <EgyptInfo />
      </section>

      {/* Timeline Section */}
      <section id="history" className="py-32 bg-stone-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-kemet-gold text-center mb-20 flex items-center justify-center gap-4">
            <span className="h-0.5 w-12 bg-kemet-gold/30"></span>
            رحلة عبر الزمن
            <span className="h-0.5 w-12 bg-kemet-gold/30"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {timelineData.map((era, index) => (
              <motion.div
                key={era.era}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
                onMouseEnter={() => setSelectedEra(index)}
                onMouseLeave={() => setSelectedEra(null)}
              >
                <Image src={era.image} alt={era.era} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-kemet-gold text-sm font-bold mb-2 block">{era.year}</span>
                  <h3 className="text-3xl font-bold text-white mb-2">{era.era}</h3>
                  <p className="text-sand-200 line-clamp-2">{era.info}</p>
                </div>

                <AnimatePresence>
                  {selectedEra === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-stone-950/95 backdrop-blur-md p-8 flex flex-col justify-center"
                    >
                      <h4 className="text-2xl font-bold text-kemet-gold mb-6 border-b border-kemet-gold/20 pb-4">أهم الإنجازات</h4>
                      <ul className="space-y-4">
                        {era.achievements.map((a, i) => (
                          <li key={i} className="flex gap-3 text-sand-100 items-start">
                            <span className="text-kemet-gold text-xl">𓂀</span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Egypt Section */}
      <section id="modern" className="py-32 bg-stone-950">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-kemet-gold text-center mb-20">مصر الحديثة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {modernAchievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-stone-900/50 rounded-3xl overflow-hidden border border-white/5 hover:border-kemet-gold/30 transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={ach.image} alt={ach.title} fill className="object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-kemet-gold mb-4">{ach.title}</h3>
                  <p className="text-sand-200 mb-8 leading-relaxed">{ach.description}</p>
                  <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                    {Object.entries(ach.stats).map(([k, v]) => (
                      <div key={k} className="text-center">
                        <div className="text-xl font-black text-white mb-1">{v}</div>
                        <div className="text-[10px] uppercase tracking-widest text-sand-400">{k}</div>
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
      <section id="vision" className="py-32 bg-stone-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-kemet-gold mb-6 italic">رؤية مصر 2030</h2>
          <p className="text-sand-300 max-w-2xl mx-auto mb-16">إستراتيجية التنمية المستدامة نحو اقتصاد تنافسي، متوازن ومتنوع</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "هدف استراتيجي", d: "تحسين جودة حياة المواطن المصري ورفع مستوى معيشته", i: "🎯" },
              { t: "عدالة اجتماعية", d: "تحقيق العدالة والمساندة المتبادلة بين جميع فئات المجتمع", i: "⚖️" },
              { t: "اقتصاد قوي", d: "اقتصاد متقدم يضمن توفير فرص عمل لائقة للجميع", i: "📈" }
            ].map((v, i) => (
              <div key={i} className="p-10 bg-black/40 rounded-3xl border border-kemet-gold/10 hover:border-kemet-gold/40 transition-all">
                <div className="text-5xl mb-6">{v.i}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{v.t}</h3>
                <p className="text-sand-400">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section (Team) */}
      <section id="about" className="py-32 bg-stone-950">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-kemet-gold text-center mb-20 flex items-center justify-center gap-4">
            <span className="text-3xl">𓂀</span>
            فريق العمل
            <span className="text-3xl">𓂀</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-stone-900/80 p-10 rounded-3xl border border-kemet-gold/20 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-kemet-gold mb-6">
                <Image src="https://media-hbe1-1.cdn.whatsapp.net/v/t61.24694-24/56106005_562937790779117_4335318350537162752_n.jpg?ccb=11-4&oh=01_Q5AaIMP2D2Nx_FTFw4wYP2B279BJQTdm_sAgWgwOkPwQy4j0&oe=6783E6A9&_nc_sid=5e03e0&_nc_cat=100" alt="Special thanks" width={128} height={128} className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-kemet-gold mb-2">شكر خاص</h3>
              <p className="text-white font-bold mb-4">د. نبيل الغمري</p>
              <p className="text-sand-400">رئيس قسم الوسائط المتعددة - كلية iAEMS</p>
            </div>
            <div className="bg-stone-900/80 p-10 rounded-3xl border border-kemet-gold/20 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-kemet-gold/20 flex items-center justify-center border-2 border-kemet-gold mb-6">
                <span className="text-5xl text-kemet-gold">𓃭</span>
              </div>
              <h3 className="text-2xl font-bold text-kemet-gold mb-2">عن المطور</h3>
              <p className="text-white font-bold mb-4">Jack (Eneryu)</p>
              <p className="text-sand-400">مطور ومصمم المشروع - خريج كلية iAEMS</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}