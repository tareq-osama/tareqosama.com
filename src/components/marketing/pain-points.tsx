"use client";

import React from 'react';
import { X, Check } from 'lucide-react';

export default function PainPoints() {
  const comparisons = [
    {
      problem: "تواصل متفرق عبر أكثر من 15 أداة",
      solution: "جميع تواصلات العملاء في مكان واحد"
    },
    {
      problem: "فواتير يدوية تستغرق أكثر من ساعتين لكل منها",
      solution: "فوترة آلية في أقل من 5 دقائق"
    },
    {
      problem: "عملاء يسألون باستمرار عن تحديثات المشروع",
      solution: "لوحة تحكم مشروع فورية للعملاء"
    },
    {
      problem: "فقدان تتبع المواعيد النهائية والمخرجات",
      solution: "تتبع آلي للمواعيد النهائية والتذكيرات"
    },
    {
      problem: "تجربة غير احترافية تضر بالسمعة",
      solution: "بوابة مخصصة بعلامتك التجارية"
    },
    {
      problem: "ملاحقة الدفعات لأكثر من 30 يوماً",
      solution: "مدفوعات أسرع مع تذكيرات آلية"
    }
  ];

  return (
    <section className="bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center component-spacing">
          <h2 className="text-h2 font-bold text-white mb-4">
            التكلفة الخفية للفوضى
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            كل يوم بدون أنظمة احترافية يكلّف وكالتك المال والسمعة
          </p>
        </div>

        <div className="card-minimal overflow-hidden">
          {/* رأس الجدول */}
          <div className="grid grid-cols-2 bg-zinc-900/50 border-b border-zinc-800">
            <div className="p-6 border-r border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center">
                  <X className="w-4 h-4 text-zinc-400" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-300">بدون طارق</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-white">مع طارق</h3>
              </div>
            </div>
          </div>

          {/* صفوف المقارنة */}
          {comparisons.map((item, index) => (
            <div key={index} className="grid grid-cols-2 border-b border-zinc-800 last:border-b-0">
              <div className="p-6 border-r border-zinc-800">
                <div className="flex items-start gap-3">
                  <X className="w-4 h-4 text-zinc-600 mt-1 flex-shrink-0" />
                  <p className="text-zinc-400">{item.problem}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-zinc-400 mt-1 flex-shrink-0" />
                  <p className="text-zinc-200">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* دعوة للعمل السفلية */}
        <div className="text-center mt-12">
          <p className="text-sm text-zinc-500 mb-4">
            كل يوم انتظار يكلّفك 128 دولاراً في الكفاءة المفقودة
          </p>
          <a href="#pricing" className="btn-primary">
            أوقف النزيف
          </a>
        </div>
      </div>
    </section>
  );
}
