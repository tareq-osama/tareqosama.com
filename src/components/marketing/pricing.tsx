"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const plans = [
  {
    name: "المبتدئ",
    price: "مجاني",
    period: "للأبد",
    description: "مثالي للوكالات التي بدأت للتو",
    ctaText: "ابدأ مجاناً",
    features: [
      "حتى 3 عملاء نشطين",
      "بوابة عملاء أساسية",
      "أدوات إدارة المشاريع",
      "فوترة آلية",
      "دعم البريد الإلكتروني",
      "علامة تجارية مخصصة"
    ]
  },
  {
    name: "الاحترافي",
    price: "$49",
    period: "شهرياً",
    description: "كل ما تحتاجه الوكالات الجادة للتوسع",
    ctaText: "ابدأ التجربة",
    popular: true,
    features: [
      "عملاء ومشاريع غير محدودة",
      "بوابات عملاء متقدمة",
      "إنشاء عروض بالذكاء الاصطناعي",
      "فوترة ومدفوعات ذكية",
      "أدوات تعاون الفريق",
      "تقارير وتحليلات متقدمة",
      "دعم ذو أولوية",
      "نطاق وعلامة تجارية مخصصة",
      "نظام ملاحظات العملاء",
      "تتبع الوقت والفوترة",
      "إدارة العقود",
      "وصول API وتكاملات"
    ]
  },
  {
    name: "المؤسسي",
    price: "مخصص",
    period: "تواصل معنا",
    description: "للوكالات التي تحقق أكثر من 100 ألف دولار شهرياً",
    ctaText: "تواصل مع المبيعات",
    features: [
      "كل شيء في الاحترافي",
      "مدير حساب مخصص",
      "تكاملات وسير عمل مخصصة",
      "أمان متقدم والامتثال",
      "إدارة متعددة العلامات التجارية",
      "طلبات ميزات ذات أولوية",
      "تأهيل وتدريب 1-1",
      "لوحات تقارير مخصصة",
      "خدمة نقل بيانات احترافية"
    ]
  }
];

const faqs = [
  {
    question: "كم سرعة رؤية النتائج؟",
    answer: "معظم الوكالات ترى تحسينات فورية في تواصل العملاء خلال 24 ساعة. التحسينات في الإيرادات تظهر عادةً خلال 30-60 يوماً مع تجربة العملاء لأنظمتك الاحترافية الجديدة."
  },
  {
    question: "ماذا لو لم يعجب عملاؤه التغيير؟",
    answer: "في أكثر من 3 سنوات، لم نتلقَّ أي شكوى من عميل حول الخدمة الأكثر احترافية. في الواقع، 94% من الوكالات تُفيد بأن عملاءها تحديداً يثنون على التجربة المحسّنة خلال الشهر الأول."
  },
  {
    question: "هل يمكنني الاشتراك مجاناً تماماً؟",
    answer: "بالتأكيد. لا يُطلب بطاقة ائتمانية. تدفع فقط عندما تكون مستعداً لإضافة عميلك الرابع."
  }
];

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* الرأس */}
        <div className="text-center component-spacing">
          <h2 className="text-h2 font-bold text-white mb-4">
            أسعار بسيطة تتوسع معك
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            ابدأ مجاناً، رقّي عندما تحتاج المزيد. بدون عقود، إلغاء في أي وقت.
          </p>
        </div>

        {/* بطاقات الأسعار */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={plan.popular ? 'lg:scale-105' : ''}
            >
              <Card className={`h-full relative ${
                plan.popular
                  ? 'bg-zinc-900/30 border-zinc-700'
                  : 'bg-transparent border-zinc-800'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-white text-black px-4 py-1 text-sm font-medium rounded-full">
                      الأكثر شعبية
                    </div>
                  </div>
                )}

                <CardHeader className="text-right space-y-4">
                  <CardTitle className="text-xl font-semibold text-white">{plan.name}</CardTitle>

                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-white">
                        {plan.price}
                      </span>
                      {plan.period !== "تواصل معنا" && (
                        <span className="text-zinc-400">/{plan.period}</span>
                      )}
                    </div>
                  </div>

                  <p className="text-zinc-400">{plan.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* الميزات */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-zinc-500" />
                        <span className="text-zinc-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* زر الدعوة للعمل */}
                  <div className="pt-4">
                    <a
                      href="#"
                      className={plan.popular ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}
                    >
                      {plan.ctaText}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* قسم الأسئلة الشائعة */}
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-right space-y-4">
            <h3 className="text-h3 font-semibold text-white">
              الأسئلة الشائعة
            </h3>
            <p className="text-zinc-400">
              احصل على إجابات للأسئلة الشائعة حول طارق
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-right p-0 h-auto"
                  >
                    <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors cursor-pointer w-full">
                      <CardContent className="p-6">
                        <h4 className="font-medium text-white text-right">{faq.question}</h4>
                      </CardContent>
                    </Card>
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-zinc-900 border-zinc-700">
                  <DialogHeader>
                    <DialogTitle className="text-white text-right">{faq.question}</DialogTitle>
                    <DialogDescription className="text-zinc-400 leading-relaxed pt-4 text-right">
                      {faq.answer}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          <div className="text-right pt-8">
            <p className="text-zinc-500 mb-4 text-sm">
              لا تزال لديك أسئلة؟
            </p>
            <a href="#" className="btn-secondary">
              تواصل مع الدعم
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
