"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Shield, Zap, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const urgencyFactors = [
  {
    text: "128 دولاراً خسارة يومية",
    subtext: "لكل يوم بدون أنظمة احترافية"
  },
  {
    text: "68% تذبذب العملاء",
    subtext: "بسبب تجربة تواصل سيئة"
  },
  {
    text: "31 ساعة مهدرة",
    subtext: "أسبوعياً على المهام الإدارية اليدوية"
  }
];

const transformationBenefits = [
  {
    text: "أوقف ملاحقة المدفوعات إلى الأبد",
    detail: "الفوترة الآلية تجعلك تحصل على المدفوعات بـ23 يوماً أسرع"
  },
  {
    text: "أنهِ ارتباك العملاء فوراً",
    detail: "البوابات الفورية تلغي 87% من رسائل الحالة"
  },
  {
    text: "تقاضَ أسعاراً مميزة بثقة",
    detail: "تجربة ذات علامة تجارية تبرر أسعاراً أعلى بـ40%"
  },
  {
    text: "توسّع بدون توظيف المزيد من الموظفين",
    detail: "سير العمل الآلي يتعامل مع 10 أضعاف حجم العملاء"
  },
  {
    text: "نم بسلام كل ليلة",
    detail: "لا مزيد من مكالمات أزمات العملاء في الساعة 3 صباحاً أو المواعيد الفائتة"
  }
];

const guarantees = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "إعداد في 5 دقائق",
    description: "بوابة عميل مباشرة في أقل من 5 دقائق"
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "تجربة بلا مخاطر",
    description: "مجاني حتى أول عميل يدفع"
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "بدون التزام",
    description: "إلغاء في أي وقت، بدون أسئلة"
  }
];

export default function ClosingCTA() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* تأثيرات الخلفية */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* رأس الإلحاح */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20">
            <Clock className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="text-sm font-medium text-red-300 tracking-wide">
              تكلفة الانتظار تسحقك
            </span>
          </div>

          <h2 className="text-h2 font-bold text-white leading-tight tracking-tight">
            منافسوك يسرقون عملاءك
            <span className="block mt-2 text-red-300">بالفعل الآن</span>
          </h2>

          <p className="text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            بينما أنت عالق في الفوضى، الوكالات ذات الأنظمة الاحترافية
            <span className="text-white font-semibold"> تتقاضى أسعاراً أعلى، وتحتفظ بعملاء لفترة أطول،
            وتتوسع بسهولة</span>. كم من الوقت لا تزال تستطيع الانتظار؟
          </p>
        </motion.div>

        {/* إحصائيات الإلحاح */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {urgencyFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-red-500/5 border-red-500/20 text-center p-6">
                <CardContent className="p-0 space-y-3">
                  <div className="text-3xl font-bold text-red-400">{factor.text}</div>
                  <div className="text-sm text-zinc-400">{factor.subtext}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">

          {/* العمود الأيسر - الفوائد */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                حوّل وكالتك في
                <span className="block text-emerald-400">30 يوماً أو أقل</span>
              </h3>

              <p className="text-lg text-zinc-400 leading-relaxed">
                توقف عن قبول التواضع. انضم إلى أكثر من 800 وكالة
                <span className="text-white font-semibold"> أحدثت ثورة في عملياتها</span>
                وترى إيراداتها ترتفع.
              </p>
            </div>

            {/* قائمة الفوائد */}
            <div className="space-y-6">
              {transformationBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-white font-semibold leading-tight">{benefit.text}</div>
                    <div className="text-sm text-zinc-400">{benefit.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* الضمانات */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-zinc-800">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-2"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                    {guarantee.icon}
                  </div>
                  <div className="text-sm font-semibold text-white">{guarantee.title}</div>
                  <div className="text-xs text-zinc-400">{guarantee.description}</div>
                </motion.div>
              ))}
            </div>

            {/* أزرار الدعوة للعمل */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button
                size="lg"
                className="bg-emerald-500 text-white hover:bg-emerald-400 font-semibold px-8 py-6 text-lg h-auto rounded-xl group shadow-lg flex-1"
              >
                ابدأ تحولك مجاناً
                <ArrowRight className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-zinc-600 text-white hover:bg-zinc-800/50 px-8 py-6 text-lg h-auto rounded-xl group"
              >
                <Play className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                شاهد عرضاً مدته دقيقتان
              </Button>
            </div>

            {/* مؤشرات الثقة */}
            <div className="flex items-center justify-center sm:justify-start gap-6 text-sm text-zinc-500 pt-4">
              <span>✓ إعداد في 5 دقائق</span>
              <span>✓ مجاني حتى أول عميل</span>
              <span>✓ إلغاء في أي وقت</span>
            </div>
          </motion.div>

          {/* العمود الأيمن - معاينة لوحة التحكم */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl">
                <Image
                  src="/corvex-dashboard.jpg"
                  alt="لوحة تحكم وكالة احترافية - مستقبل وكالتك"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent" />
              </div>

              {/* عناصر النجاح العائمة */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-black/90 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-4 shadow-xl"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-emerald-400">رضا العملاء</span>
                  </div>
                  <div className="text-2xl font-bold text-white">98.7%</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="absolute -top-6 -left-6 bg-black/90 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4 shadow-xl"
              >
                <div className="text-center space-y-1">
                  <div className="text-sm font-medium text-blue-400">سرعة الدفع</div>
                  <div className="text-xl font-bold text-white">23 يوماً</div>
                  <div className="text-xs text-zinc-400">أسرع</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="absolute top-1/2 -left-8 bg-white text-black rounded-full p-6 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-lg font-bold">289%</div>
                  <div className="text-xs">نمو الإيرادات</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
                className="absolute bottom-1/4 -left-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg px-4 py-2 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-sm font-bold">عائد الاستثمار: 847%</div>
                  <div className="text-xs opacity-90">في 6 أشهر</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* الدفعة النهائية للإلحاح */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <Card className="bg-gradient-to-r from-red-500/10 via-zinc-900/50 to-emerald-500/10 border border-zinc-700 max-w-5xl mx-auto">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-400/20">
                  <Clock className="w-4 h-4 text-yellow-400 animate-pulse" />
                  <span className="text-yellow-400 font-semibold text-sm">قرار حساس للوقت</span>
                </div>

                <h3 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                  كل دقيقة تنتظرها، تخرج منها الأموال
                </h3>

                <div className="text-red-400 font-semibold text-xl">
                  ⏰ وكالتك تخسر 5.33 دولاراً كل دقيقة بدون أنظمة احترافية
                </div>
              </div>

              <p className="text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                المنافسون الذين انتقلوا إلى أنظمة احترافية منذ 6 أشهر يتقاضون الآن 40% أكثر،
                ويحصلون على المدفوعات بـ23 يوماً أسرع، ويتوسعون بلا ضغط.
                <span className="text-white font-semibold"> لا تدع يوماً آخر يمر.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
                <Button
                  size="lg"
                  className="bg-emerald-500 text-white hover:bg-emerald-400 font-semibold px-12 py-8 text-xl h-auto rounded-xl group shadow-2xl transform hover:scale-105 transition-all"
                >
                  أوقف النزيف - ابدأ مجاناً الآن
                  <ArrowRight className="mr-3 w-6 h-6 group-hover:-translate-x-1 transition-transform rotate-180" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-zinc-800 text-sm text-zinc-400">
                <div>✓ الإعداد مكتمل في 5 دقائق</div>
                <div>✓ مجاني حتى يدفع أول عميل</div>
                <div>✓ إلغاء في أي وقت، بدون أسئلة</div>
              </div>

              <div className="text-xs text-zinc-500 italic">
                انضم إلى أكثر من 800 وكالة توقفت عن قبول الفوضى وبدأت في المطالبة بالتميز
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
