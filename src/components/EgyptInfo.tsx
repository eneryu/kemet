'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const egyptInfo = [
  {
    title: 'الحضارة المصرية القديمة',
    content: [
      'تعد الحضارة المصرية القديمة من أقدم وأعظم الحضارات في تاريخ البشرية، حيث استمرت لأكثر من 3000 عام.',
      'تميزت بإنجازاتها المذهلة في العمارة والفن والعلوم والطب والفلك والرياضيات.',
      'ابتكر المصريون القدماء التقويم الشمسي المكون من 365 يوماً، وقسموا السنة إلى 12 شهراً.',
      'طوروا نظاماً معقداً للكتابة الهيروغليفية التي تضم أكثر من 700 رمز مختلف.',
      'بنوا الأهرامات باستخدام تقنيات هندسية متقدمة لا تزال تثير الدهشة حتى اليوم.'
    ]
  },
  {
    title: 'الديانة المصرية القديمة',
    content: [
      'آمن المصريون القدماء بتعدد الآلهة، وكان لكل إله دور ووظيفة محددة في الكون.',
      'من أشهر الآلهة: رع (إله الشمس)، أوزيريس (إله البعث)، إيزيس (إلهة الأمومة)، حورس (إله السماء).',
      'اعتقدوا في البعث والخلود وحياة ما بعد الموت، لذلك طوروا فن التحنيط.',
      'بنوا المعابد الضخمة لعبادة آلهتهم، مثل معبد الكرنك والأقصر وأبو سمبل.',
      'كان للكهنة دور مهم في الحياة الدينية والسياسية في مصر القديمة.'
    ]
  },
  {
    title: 'العلوم والطب',
    content: [
      'برع المصريون في الطب وكانوا أول من أجرى عمليات جراحية معقدة.',
      'عرفوا العديد من الأدوية والعلاجات الطبيعية المستخلصة من النباتات.',
      'كتبوا البرديات الطبية مثل بردية إيبرس وإدوين سميث التي تحتوي على وصفات طبية.',
      'تفوقوا في علم الفلك وحساب مواعيد فيضان النيل.',
      'طوروا علم الهندسة لبناء الأهرامات والمعابد بدقة مذهلة.'
    ]
  },
  {
    title: 'الفن والعمارة',
    content: [
      'تميز الفن المصري القديم بالدقة والرمزية والجمال.',
      'استخدموا قواعد ثابتة في الرسم مثل قانون المواجهة والنسب الثابتة.',
      'نحتوا التماثيل الضخمة من الجرانيت والحجر الجيري.',
      'زينوا جدران المقابر والمعابد بالنقوش والرسوم الملونة.',
      'ابتكروا أساليب معمارية متقدمة مثل العمود والقبة والقوس.'
    ]
  },
  {
    title: 'الحياة الاجتماعية',
    content: [
      'كان المجتمع المصري القديم منظماً في طبقات اجتماعية واضحة.',
      'تمتعت المرأة المصرية بمكانة متميزة وحقوق لم تكن متوفرة في الحضارات الأخرى.',
      'اهتموا بالتعليم وأنشأوا المدارس لتعليم الكتابة والحساب.',
      'طوروا الموسيقى والرقص وصنعوا الآلات الموسيقية.',
      'عرفوا الألعاب والرياضة مثل المصارعة والصيد.'
    ]
  },
  {
    title: 'الاقتصاد والتجارة',
    content: [
      'اعتمد الاقتصاد على الزراعة وخاصة بعد فيضان النيل السنوي.',
      'طوروا نظام الري باستخدام القنوات والسدود.',
      'تاجروا مع البلدان المجاورة وصدروا البردي والحبوب والذهب.',
      'صنعوا السفن للتجارة والنقل عبر النيل والبحر المتوسط.',
      'عرفوا الصناعات مثل صناعة الفخار والنسيج والمعادن.'
    ]
  },
  {
    title: 'الكتابة والأدب',
    content: [
      'اخترع المصريون الكتابة الهيروغليفية قبل 5000 عام.',
      'كتبوا على البردي والحجر والخشب.',
      'تركوا لنا قصصاً وأشعاراً ونصوصاً دينية وطبية.',
      'من أشهر النصوص: كتاب الموتى وقصة سنوحي.',
      'استخدموا الكتابة الهيراطيقية للنصوص اليومية والإدارية.'
    ]
  },
  {
    title: 'المصريون والنيل',
    content: [
      'اعتبر المصريون النيل هبة من الآلهة وأساس حياتهم.',
      'طوروا تقويماً زراعياً مرتبطاً بفيضان النيل.',
      'بنوا مقاييس النيل لتوقع موعد الفيضان.',
      'زرعوا القمح والشعير والكتان على ضفاف النيل.',
      'استخدموا النيل للنقل والتجارة بين الشمال والجنوب.'
    ]
  },
  {
    title: 'الأسرار والألغاز',
    content: [
      'لا تزال طريقة بناء الأهرامات تثير الجدل والدهشة حتى اليوم.',
      'بعض النقوش والرموز الهيروغليفية لم يتم فك رموزها بعد.',
      'هناك مقابر ومعابد لم يتم اكتشافها بعد في وادي الملوك.',
      'تقنيات التحنيط المتقدمة لا تزال تحير العلماء.',
      'بعض المومياوات تحمل أسراراً عن أمراض وعلاجات قديمة.'
    ]
  },
  {
    title: 'تأثير الحضارة المصرية',
    content: [
      'أثرت الحضارة المصرية على الحضارات اليونانية والرومانية.',
      'لا تزال العمارة المصرية تلهم المعماريين حتى اليوم.',
      'الطب المصري القديم أثر على تطور الطب في العالم.',
      'الفن المصري أثر على الفنون في الحضارات الأخرى.',
      'النظام الإداري المصري القديم كان نموذجاً للدول الأخرى.'
    ]
  }
];

export default function EgyptInfo() {
  const [currentSection, setCurrentSection] = useState(0);

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % egyptInfo.length);
  };

  const prevSection = () => {
    setCurrentSection((prev) => (prev - 1 + egyptInfo.length) % egyptInfo.length);
  };

  return (
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-kemet-gold text-center mb-16 select-none"
      >
        موسوعة مصر
      </motion.h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Navigation Arrows - Adjusted position and z-index */}
        <button
          onClick={prevSection}
          className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-30 text-sand-100/70 hover:text-kemet-gold transition-colors transform hover:scale-110 active:scale-95 hidden md:block"
          aria-label="Previous Section"
        >
          <div className="relative bg-black/40 backdrop-blur-md rounded-full p-4 border border-white/10 hover:border-kemet-gold/50 transition-all">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ x: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </motion.svg>
          </div>
        </button>

        <button
          onClick={nextSection}
          className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-30 text-sand-100/70 hover:text-kemet-gold transition-colors transform hover:scale-110 active:scale-95 hidden md:block"
          aria-label="Next Section"
        >
          <div className="relative bg-black/40 backdrop-blur-md rounded-full p-4 border border-white/10 hover:border-kemet-gold/50 transition-all">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </div>
        </button>

        {/* Content Card */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-stone-900/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-kemet-gold/20 shadow-2xl relative z-20 min-h-[400px] flex flex-col justify-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-kemet-gold mb-8 text-center border-b border-white/5 pb-4">
                {egyptInfo[currentSection].title}
              </h3>

              <div className="space-y-4">
                {egyptInfo[currentSection].content.map((paragraph, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-kemet-gold text-xl mt-1">•</span>
                    <p className="text-sand-100 leading-loose text-lg md:text-xl font-light">
                      {paragraph}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-10 flex-wrap px-4">
          {egyptInfo.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              aria-label={`Go to section ${index + 1}`}
              className={`h-3 rounded-full transition-all duration-500 ease-out ${currentSection === index
                  ? 'bg-kemet-gold w-10 shadow-[0_0_10px_rgba(193,155,87,0.5)]'
                  : 'bg-white/10 w-3 hover:bg-white/30 hover:w-5'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 