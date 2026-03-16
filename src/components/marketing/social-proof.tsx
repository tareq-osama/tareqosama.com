"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const successMetrics = [
  {
    number: "289%",
    label: "متوسط نمو الإيرادات",
    subtext: "في أول 6 أشهر"
  },
  {
    number: "4.9★",
    label: "رضا العملاء",
    subtext: "من أكثر من 2,847 مراجعة"
  },
  {
    number: "$4.2M",
    label: "إيرادات معالجة",
    subtext: "في آخر 30 يوم فقط"
  },
  {
    number: "23 يوماً",
    label: "مدفوعات أسرع",
    subtext: "متوسط وقت التحصيل"
  }
];

const testimonials = [
  {
    name: "ماركوس رودريغيز",
    role: "المؤسس والرئيس التنفيذي",
    company: "Velocity Digital",
    revenue: "$2.1M ARR",
    image: "/api/placeholder/60/60",
    quote: "كنت أنزف أموالاً على العمليات اليدوية وتجارب العملاء غير الاحترافية. أنقذ طارق وكالتي. انتقلنا من الكفاح للتوسع إلى تجاوز 2.1 مليون دولار في 18 شهراً. عملاؤه يتوسلون للعمل معه الآن.",
    results: "+320% نمو في الإيرادات",
    featured: true
  },
  {
    name: "سارة شن",
    role: "مالكة الوكالة",
    company: "Digital Spark",
    revenue: "$1.2M ARR",
    image: "/api/placeholder/60/60",
    quote: "اليوم الذي انتقلت فيه إلى طارق كان اليوم الذي توقفت فيه عن فقدان النوم بسبب إدارة العملاء. تضاعفت إنتاجية فريقي، واختفت شكاوى العملاء، وبدأت أخيراً في تحصيل ما أستحقه.",
    results: "مضاعفة إنتاجية الفريق"
  },
  {
    name: "ديفيد كيم",
    role: "المدير الإبداعي",
    company: "Apex Creative",
    revenue: "$850K ARR",
    image: "/api/placeholder/60/60",
    quote: "لم يُنظّم طارق فوضاي فحسب - بل حوّل نموذج أعمالي بأكمله. انتقلت من إخماد الأزمات اليومية إلى التخطيط الاستراتيجي للنمو. أفضل استثمار قمت به على الإطلاق.",
    results: "صفر أزمات يومية"
  },
  {
    name: "جيسيكا تومبسون",
    role: "المؤسسة",
    company: "Growth Labs",
    revenue: "$1.8M ARR",
    image: "/api/placeholder/60/60",
    quote: "كانت وكالتي تغرق في جداول البيانات والمواعيد الفائتة. بعد 6 أشهر مع طارق: 1.8 مليون دولار إيرادات، 95% تسليم في الوقت المحدد، وعملاء يحيلوننا باستمرار. هذه المنصة أنقذت أعمالي من الفشل حرفياً.",
    results: "95% تسليم في الوقت المحدد",
    success: true
  }
];

const companyLogos = [
  { name: "Velocity Digital", logo: "VD" },
  { name: "Digital Spark", logo: "DS" },
  { name: "Apex Creative", logo: "AC" },
  { name: "Growth Labs", logo: "GL" },
  { name: "Peak Performance", logo: "PP" },
  { name: "Storm Digital", logo: "SD" },
  { name: "Bright Future", logo: "BF" },
  { name: "NextGen Agency", logo: "NG" }
];

export default function SocialProof() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* رأس القسم */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700">
            <Award className="w-4 h-4 text-zinc-400" />
            <span className="text-sm font-medium text-zinc-300 tracking-wide">قصص نجاح مثبتة</span>
          </div>

          <h2 className="text-h2 font-bold text-white leading-tight tracking-tight">
            وكالات حقيقية، نتائج حقيقية،
            <span className="block mt-2 text-zinc-300">نمو حقيقي في الإيرادات</span>
          </h2>

          <p className="text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            لا تأخذ كلامنا على محمل الجد. إليك ما يحدث عندما تتوقف الوكالات عن قبول الفوضى
            وتبدأ في <span className="text-white font-semibold">المطالبة بالتميز من أنظمتها</span>.
          </p>
        </motion.div>

        {/* لوحة مقاييس النجاح */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {successMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-zinc-900/50 border-zinc-700 text-center p-6 group hover:bg-zinc-800/50 transition-colors">
                <CardContent className="p-0 space-y-3">
                  <div className="text-3xl lg:text-4xl font-bold text-emerald-400 group-hover:scale-105 transition-transform">
                    {metric.number}
                  </div>
                  <div className="text-sm font-medium text-white">{metric.label}</div>
                  <div className="text-xs text-zinc-400">{metric.subtext}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* شبكة الشهادات */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">

          {/* شهادة مميزة كبيرة */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <Card className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border-emerald-500/20 h-full relative overflow-hidden">
              <CardContent className="p-10 space-y-8">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-emerald-400 font-semibold mr-2">قصة نجاح مميزة</span>
                </div>

                <blockquote className="text-xl lg:text-2xl text-white font-medium leading-relaxed">
                  "{testimonials[0].quote}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonials[0].image} alt={testimonials[0].name} />
                      <AvatarFallback className="bg-emerald-500/20 text-emerald-400">
                        {testimonials[0].name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-white">{testimonials[0].name}</div>
                      <div className="text-sm text-zinc-400">{testimonials[0].role}، {testimonials[0].company}</div>
                      <div className="text-sm font-medium text-emerald-400">{testimonials[0].revenue}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-400">{testimonials[0].results}</div>
                    <div className="text-sm text-zinc-400">النتائج المحققة</div>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
                  <TrendingUp className="w-full h-full text-emerald-400" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* شهادات متوسطة */}
          <div className="lg:col-span-4 space-y-8">
            {testimonials.slice(1, 3).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/50 border-zinc-700 h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <blockquote className="text-zinc-300 leading-relaxed text-sm">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center gap-3 pt-2 border-t border-zinc-800">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback className="bg-zinc-700 text-zinc-300 text-xs">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium text-white text-sm">{testimonial.name}</div>
                        <div className="text-xs text-zinc-400">{testimonial.company}</div>
                      </div>
                      <div className="text-xs font-semibold text-emerald-400">{testimonial.results}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* قصة نجاح سفلية */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 border-zinc-700 relative overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold text-sm tracking-wider">
                      من شفا الإفلاس إلى سبعة أرقام
                    </span>
                  </div>

                  <blockquote className="text-lg lg:text-xl text-white leading-relaxed">
                    "{testimonials[3].quote}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={testimonials[3].image} alt={testimonials[3].name} />
                      <AvatarFallback className="bg-emerald-500/20 text-emerald-400">
                        {testimonials[3].name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-white">{testimonials[3].name}</div>
                      <div className="text-sm text-zinc-400">{testimonials[3].role}، {testimonials[3].company}</div>
                    </div>
                  </div>
                </div>

                <div className="text-center lg:text-right space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold text-sm">مقاييس النجاح</span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-emerald-400">{testimonials[3].revenue}</div>
                    <div className="text-sm text-zinc-400">الإيرادات السنوية المتكررة</div>
                    <div className="text-lg font-semibold text-white">{testimonials[3].results}</div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-400/20 text-xs">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                    <span className="text-yellow-400 font-medium">نتائج موثقة</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* عرض الشركات */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <div className="space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              تثق بها أكثر من 800 وكالة ناجحة حول العالم
            </h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              انضم إلى المجموعة المتميزة من الوكالات التي حوّلت عملياتها
              و<span className="text-white font-semibold">ضاعفت إيراداتها</span> مع طارق.
            </p>
          </div>

          <div className="grid grid-cols-4 lg:grid-cols-8 gap-6 opacity-60 hover:opacity-100 transition-opacity">
            {companyLogos.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl bg-zinc-800/50 border border-zinc-700 flex items-center justify-center font-bold text-zinc-400 text-sm lg:text-base hover:bg-zinc-700/50 hover:text-white transition-colors">
                  {company.logo}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-zinc-500 pt-8 border-t border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span>289% متوسط نمو الإيرادات</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span>4.9★ رضا العملاء</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              <span>23 يوماً مدفوعات أسرع</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
