"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, TrendingUp, Zap, Users, DollarSign, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const mainFeatures = [
  {
    title: "ثورة تجربة العملاء",
    subtitle: "من الفوضى المتفرقة إلى الخدمة الاحترافية المتميزة",
    description: "حوّل علاقات عملائك بين عشية وضحاها مع بوابات ذات علامة تجارية تجعلك تبدو كالوكالة المتميزة التي أنت عليها. شاهد العملاء ينتقلون من المستفسرين المحبطين إلى المدافعين المتحمسين.",
    image: "/corvex-dashboard.jpg",
    results: [
      "87% انخفاض في رسائل تحديث الحالة",
      "98.7% معدل رضا العملاء",
      "3 أضعاف معدل الاحتفاظ بالعملاء",
      "40% تسعير أعلى مبرر"
    ],
    icon: <Users className="w-6 h-6" />,
    layout: "default"
  },
  {
    title: "عروض مدعومة بالذكاء الاصطناعي تفوز",
    subtitle: "أوقف خسارة الصفقات لمنافسين أسرع",
    description: "أنشئ عروضاً احترافية وفائزة في دقائق بدلاً من أيام. يتعلم ذكاؤنا الاصطناعي من الوكالات متعددة الملايين لإنشاء عروض تُغلق الصفقات وتُحقق أسعاراً مميزة.",
    image: "/corvex-dashboard.jpg",
    results: [
      "73% معدل فوز أعلى بالعروض",
      "5 أضعاف سرعة إنشاء العروض",
      "34% متوسط قيمة مشاريع أعلى",
      "صفر تأخير في تسليم العروض"
    ],
    icon: <Zap className="w-6 h-6" />,
    layout: "large"
  },
  {
    title: "الفوترة والمدفوعات الذكية",
    subtitle: "أنهِ كوابيس التدفق النقدي إلى الأبد",
    description: "فوترة آلية مع تذكيرات دفع ذكية تعمل فعلاً. احصل على المدفوعات بـ23 يوماً أسرع مع صرف صفر وقت في ملاحقة المدفوعات.",
    image: "/corvex-dashboard.jpg",
    results: [
      "23 يوماً أسرع في تحصيل المدفوعات",
      "94% انخفاض في المدفوعات المتأخرة",
      "صفر إنشاء فواتير يدوي",
      "47 ألف دولار متوسط تحسين التدفق النقدي السنوي"
    ],
    icon: <DollarSign className="w-6 h-6" />,
    layout: "wide"
  }
];

const bentoFeatures = [
  {
    title: "إدارة المشاريع بشكل مبسط",
    description: "لا تفوّت موعداً نهائياً أو زحفاً في النطاق مرة أخرى",
    icon: <CheckCircle className="w-5 h-5" />,
    benefit: "95% تسليم في الوقت المحدد",
    layout: "default"
  },
  {
    title: "تتبع الوقت الذي يعمل فعلاً",
    description: "التقاط الوقت تلقائياً وتكامل الفوترة",
    icon: <Clock className="w-5 h-5" />,
    benefit: "31 ساعة موفرة أسبوعياً",
    layout: "default"
  },
  {
    title: "مركز تعاون الفريق",
    description: "حافظ على توافق الجميع بدون اجتماعات لا نهاية لها",
    icon: <Users className="w-5 h-5" />,
    benefit: "67% اجتماعات داخلية أقل",
    layout: "default"
  },
  {
    title: "لوحة تحليلات الإيرادات",
    description: "شاهد بالضبط من أين تأتي أموالك وأين تذهب",
    icon: <TrendingUp className="w-5 h-5" />,
    benefit: "289% متوسط نمو الإيرادات",
    layout: "large"
  },
  {
    title: "إدارة المستندات والأصول",
    description: "لا تفقد ملفات مهمة أو تعاني من الإصدارات مرة أخرى",
    icon: <Star className="w-5 h-5" />,
    benefit: "صفر مستندات مفقودة",
    layout: "default"
  },
  {
    title: "مركز تواصل العملاء",
    description: "جميع محادثات العملاء في مكان احترافي واحد",
    icon: <Users className="w-5 h-5" />,
    benefit: "تعزيز الصورة الاحترافية",
    layout: "default"
  }
];

export default function BentoFeatures() {
  return (
    <section id="features" className="py-32 bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* رأس القسم */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-300 tracking-wide uppercase">
              مميزات التحول
            </span>
          </div>

          <h2 className="text-h2 font-bold text-white leading-tight tracking-tight">
            من الفوضى إلى
            <span className="block mt-2 text-emerald-300">آلة توليد الإيرادات</span>
          </h2>

          <p className="text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            كل ميزة مصممة بهدف واحد:
            <span className="text-white font-semibold"> تحقيق المزيد من المال بينما تعمل أقل</span>.
            إليك كيف تحوّل الوكالات الناجحة عملياتها.
          </p>
        </motion.div>

        {/* المميزات الرئيسية */}
        <div className="space-y-32 mb-32">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid gap-16 items-center ${
                index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
              } ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}
            >
              {/* المحتوى */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      {feature.icon}
                    </div>
                    <div className="text-sm font-medium text-emerald-400 uppercase tracking-wider">
                      نقطة التحول #{index + 1}
                    </div>
                  </div>

                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-lg text-emerald-300 font-semibold">
                    {feature.subtitle}
                  </p>

                  <p className="text-lg lg:text-xl text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* شبكة النتائج */}
                <div className="grid grid-cols-2 gap-4">
                  {feature.results.map((result, resultIndex) => (
                    <motion.div
                      key={resultIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: resultIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <div className="text-sm text-zinc-300 leading-tight">{result}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="bg-emerald-500 text-white hover:bg-emerald-400 font-semibold px-8 py-6 text-lg h-auto rounded-xl group shadow-lg"
                >
                  جرّب هذا التحول
                  <ArrowRight className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
                </Button>
              </div>

              {/* الصورة */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl"
                >
                  <Image
                    src={feature.image}
                    alt={`${feature.title} - شاهد التحول في العمل`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent" />

                  {/* شارة النجاح العائمة */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="absolute top-6 left-6 bg-black/90 backdrop-blur-sm border border-emerald-500/30 rounded-lg px-4 py-2 shadow-xl"
                  >
                    <div className="text-center">
                      <div className="text-sm font-bold text-emerald-400">
                        {feature.results[0].split(' ')[0]}
                      </div>
                      <div className="text-xs text-zinc-300">
                        {feature.results[0].split(' ').slice(1).join(' ').replace(/^\d+%\s*/, '')}
                      </div>
                    </div>
                  </motion.div>

                  {/* مؤشر العائد */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}
                    className="absolute bottom-6 right-6 bg-white text-black rounded-full px-4 py-2 shadow-xl"
                  >
                    <div className="text-sm font-bold">
                      ✅ {index === 0 ? "رضا العملاء" : index === 1 ? "المزيد من الفوز" : "دفع أسرع"}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* شبكة المميزات الداعمة */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h3 className="text-3xl lg:text-4xl font-bold text-white">
              بالإضافة إلى كل ما تحتاجه للسيطرة
            </h3>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              هذه الميزات الداعمة تضمن عدم عودتك إلى الفوضى أبداً
            </p>
          </div>

          {/* شبكة بنتو */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bentoFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${
                  feature.layout === 'large' ? 'md:col-span-2' : ''
                } ${
                  feature.layout === 'wide' ? 'lg:col-span-3' : ''
                }`}
              >
                <Card className="bg-zinc-900/50 border-zinc-700 h-full hover:bg-zinc-800/50 transition-colors group">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                        {feature.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-emerald-400">{feature.benefit}</div>
                        <div className="text-xs text-zinc-500">نتيجة نموذجية</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-zinc-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* دعوة للعمل السفلية */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8 mt-20"
        >
          <Card className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border-emerald-500/20 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  هل أنت مستعد للتوقف عن إدارة الفوضى والبدء في
                  <span className="block text-emerald-300">توليد الإيرادات؟</span>
                </h3>

                <p className="text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                  كل ميزة تعمل معاً لتحويل وكالتك إلى
                  <span className="text-white font-semibold"> عمل احترافي ومربح وقابل للتوسع</span>.
                  شاهد الفرق في أسبوعك الأول.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-emerald-500 text-white hover:bg-emerald-400 font-semibold px-8 py-6 text-lg h-auto rounded-xl group shadow-lg"
                >
                  ابدأ تحولك مجاناً
                  <ArrowRight className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-600 text-white hover:bg-zinc-800/50 px-8 py-6 text-lg h-auto rounded-xl"
                >
                  شاهد عرضاً مدته دقيقتان
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-zinc-800 text-sm text-zinc-400">
                <div>✓ إعداد في 5 دقائق</div>
                <div>✓ مجاني حتى أول عميل</div>
                <div>✓ إلغاء في أي وقت</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
