"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-24 gap-16">
          {/* العمود الأيسر - المحتوى */}
          <div className="flex-1 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* الشارة */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="text-sm font-medium text-zinc-300">
                  تثق بها أكثر من 800 وكالة حول العالم
                </span>
              </div>

              {/* العنوان الرئيسي */}
              <h1 className="text-h1 font-bold text-white leading-tight">
                أوقف خسارة العملاء بسبب
                <span className="block text-zinc-400 mt-2">
                  الفوضى غير الاحترافية
                </span>
              </h1>

              {/* العنوان الفرعي */}
              <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
                المنصة التي تحوّل الوكالات المتفرقة إلى
                <span className="text-white font-medium"> مؤسسات احترافية قوية</span>.
                نمّ إيراداتك بينما تعمل أقل.
              </p>

              {/* نقاط القيمة */}
              <div className="grid grid-cols-2 gap-4 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full" />
                  <span>الإعداد في 5 دقائق</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full" />
                  <span>مجاني حتى أول عميل</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full" />
                  <span>بدون عقود</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full" />
                  <span>إلغاء في أي وقت</span>
                </div>
              </div>

              {/* أزرار الدعوة للعمل */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="#pricing" className="btn-primary gap-2">
                  ابدأ مجاناً
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </Link>

                <Link href="#features" className="btn-secondary gap-2">
                  <Play className="w-4 h-4" />
                  شاهد العرض
                </Link>
              </div>

              {/* إحصائيات الإثبات الاجتماعي */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-zinc-800">
                <div>
                  <div className="text-2xl font-bold text-white">289%</div>
                  <div className="text-sm text-zinc-500">متوسط زيادة الإيرادات</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">4.9★</div>
                  <div className="text-sm text-zinc-500">تقييم العملاء</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">$4.2M</div>
                  <div className="text-sm text-zinc-500">إيرادات معالجة</div>
                </div>
              </div>

              {/* اقتباس شهادة */}
              <div className="card-minimal p-6">
                <p className="text-zinc-300 mb-3">
                  "حوّل طارق وكالتي الفوضوية إلى عملية مبسطة.
                  عملاؤه يشكرونه الآن على التجربة الاحترافية."
                </p>
                <div className="text-sm">
                  <span className="text-white font-medium">سارة شن</span>
                  <span className="text-zinc-500"> — Digital Spark Agency</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* العمود الأيمن - معاينة لوحة التحكم */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <div className="relative">
              {/* صورة لوحة التحكم الرئيسية */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-zinc-800">
                <Image
                  src="/corvex-dashboard.jpg"
                  alt="لوحة تحكم وكالة طارق"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* عناصر عائمة */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -right-4 bg-zinc-900 border border-zinc-800 rounded-lg p-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm text-white">بوابة مباشرة</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-4 -left-4 bg-white text-black rounded-lg p-3"
              >
                <div className="text-center">
                  <div className="text-lg font-bold">3x</div>
                  <div className="text-xs">عائد الاستثمار</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
