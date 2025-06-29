"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Zap, Shield, Clock, ArrowRight, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const plans = [
  {
    name: "Starter",
    price: "FREE",
    originalPrice: null,
    period: "Forever",
    description: "Perfect for agencies just getting started",
    ctaText: "Start Free - No Credit Card",
    ctaVariant: "outline" as const,
    popular: false,
    features: [
      "Up to 3 active clients",
      "Basic client portal",
      "Project management tools",
      "Automated invoicing",
      "Email support",
      "White-label branding",
      "Basic reporting",
      "Mobile app access"
    ],
    limitations: [
      "Limited to 3 clients",
      "Basic features only"
    ],
    badge: "RISK-FREE START"
  },
  {
    name: "Professional",
    price: "$49",
    originalPrice: "$97",
    period: "per month",
    description: "Everything serious agencies need to scale",
    ctaText: "Start 30-Day FREE Trial",
    ctaVariant: "default" as const,
    popular: true,
    yearlyDiscount: "Save $240 with yearly billing",
    features: [
      "Unlimited clients & projects",
      "Advanced client portals",
      "AI-powered proposal generation",
      "Smart invoicing & payments",
      "Team collaboration tools",
      "Advanced reporting & analytics",
      "Priority support (2-hour response)",
      "Custom domain & full white-label",
      "Client feedback system",
      "Time tracking & billing",
      "Contract management",
      "API access & integrations"
    ],
    badge: "MOST POPULAR - 50% OFF",
    guarantee: "30-day money-back guarantee"
  },
  {
    name: "Enterprise",
    price: "Custom",
    originalPrice: null,
    period: "Contact us",
    description: "For agencies doing $100K+ monthly revenue",
    ctaText: "Book Strategy Call",
    ctaVariant: "outline" as const,
    popular: false,
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom integrations & workflows",
      "Advanced security & compliance",
      "Multi-brand management",
      "Priority feature requests",
      "1-on-1 onboarding & training",
      "Custom reporting dashboards",
      "White-glove migration service"
    ],
    badge: "PREMIUM SUPPORT"
  }
];

const valueProps = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "5-Minute Setup",
    description: "Live client portal faster than making coffee"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "30-Day Guarantee",
    description: "Love it or get every penny back, no questions"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Cancel Anytime",
    description: "No contracts, no commitments, total freedom"
  }
];

const faqs = [
  {
    question: "How quickly can I see results?",
    answer: "Most agencies see immediate improvements in client communication within 24 hours. Revenue improvements typically show within 30-60 days as clients experience your new professional systems."
  },
  {
    question: "What if my clients don't like the change?",
    answer: "In 3+ years, we've never had a client complain about MORE professional service. In fact, 94% of agencies report their clients specifically compliment the improved experience within the first month."
  },
  {
    question: "Can I really start completely free?",
    answer: "Absolutely. No credit card required. You only pay when you're ready to add your 4th client. We're confident you'll love the transformation by then."
  }
];

const socialProof = [
  { stat: "289%", label: "Average revenue increase" },
  { stat: "4.9★", label: "Customer satisfaction" },
  { stat: "800+", label: "Agencies transformed" },
  { stat: "23 days", label: "Faster payments" }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-gradient-to-b from-black via-zinc-900/50 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <Star className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-300 tracking-wide uppercase">
              STOP LOSING MONEY - PRICING THAT PAYS FOR ITSELF
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Transform your agency for less than
            <span className="block mt-2 text-emerald-300">your daily coffee budget</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            While you're losing $128/day to manual processes, 
            <span className="text-white font-semibold"> Corvex pays for itself in the first week</span>. 
            Join 800+ agencies already scaling effortlessly.
          </p>

          {/* Urgency Alert */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-500/10 border border-red-400/20"
          >
            <AlertTriangle className="w-5 h-5 text-red-400 animate-pulse" />
            <span className="text-red-300 font-semibold">
              ⚡ LIMITED TIME: 50% OFF Professional Plan (Save $240/year)
            </span>
          </motion.div>
        </motion.div>

        {/* Social Proof Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {socialProof.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-emerald-400">{item.stat}</div>
              <div className="text-sm text-zinc-400">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'lg:scale-105' : ''}`}
            >
              <Card className={`h-full relative overflow-hidden ${
                plan.popular 
                  ? 'bg-gradient-to-b from-emerald-500/10 to-blue-500/10 border-emerald-500/30' 
                  : 'bg-zinc-900/50 border-zinc-700'
              }`}>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* Non-popular badges */}
                {!plan.popular && plan.badge && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-zinc-800/80 text-zinc-300 px-3 py-1 rounded-full text-xs font-medium">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <CardHeader className="text-center space-y-4 pt-8">
                  <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center gap-2">
                      {plan.originalPrice && (
                        <span className="text-lg text-zinc-500 line-through">{plan.originalPrice}</span>
                      )}
                      <span className={`text-4xl lg:text-5xl font-bold ${
                        plan.popular ? 'text-emerald-400' : 'text-white'
                      }`}>
                        {plan.price}
                      </span>
                      {plan.period !== "Contact us" && (
                        <span className="text-zinc-400">/{plan.period}</span>
                      )}
                    </div>
                    
                    {plan.yearlyDiscount && (
                      <div className="text-sm text-emerald-400 font-semibold">
                        💰 {plan.yearlyDiscount}
                      </div>
                    )}
                  </div>
                  
                  <p className="text-zinc-400">{plan.description}</p>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          plan.popular ? 'text-emerald-400' : 'text-zinc-400'
                        }`} />
                        <span className="text-zinc-300 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                    
                    {/* Limitations for free plan */}
                    {plan.limitations && (
                      <div className="pt-4 border-t border-zinc-800">
                        <div className="text-xs text-zinc-500 mb-2 uppercase tracking-wider">Limitations:</div>
                        {plan.limitations.map((limitation, limitIndex) => (
                          <div key={limitIndex} className="flex items-center gap-2 text-xs text-zinc-500">
                            <div className="w-1 h-1 bg-zinc-600 rounded-full" />
                            <span>{limitation}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="space-y-4">
                    <Button 
                      className={`w-full py-6 text-lg font-semibold rounded-xl transition-all ${
                        plan.popular
                          ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg hover:shadow-xl hover:scale-105'
                          : plan.ctaVariant === 'outline'
                          ? 'border-zinc-600 text-white hover:bg-zinc-800/50'
                          : 'bg-zinc-800 text-white hover:bg-zinc-700'
                      }`}
                      variant={plan.popular ? 'default' : plan.ctaVariant}
                    >
                      {plan.ctaText}
                      {plan.popular && <ArrowRight className="ml-2 w-5 h-5" />}
                    </Button>
                    
                    {plan.guarantee && (
                      <div className="text-center text-sm text-emerald-400 font-medium">
                        ✓ {plan.guarantee}
                      </div>
                    )}
                  </div>
                </CardContent>

                {/* Background decoration for popular plan */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-blue-400 rounded-full blur-2xl" />
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Value Propositions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                {prop.icon}
              </div>
              <h4 className="text-lg font-semibold text-white">{prop.title}</h4>
              <p className="text-zinc-400 text-sm">{prop.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ROI Calculator Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-emerald-500/5 to-blue-500/5 border-emerald-500/20 max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12 text-center space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  Corvex pays for itself in 6.8 days
                </h3>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  The average agency saves $128/day on manual processes and gets paid 23 days faster. 
                  <span className="text-white font-semibold"> That's $3,500+ in monthly savings</span>.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-red-400">$128</div>
                  <div className="text-sm text-zinc-400">Daily losses without Corvex</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-emerald-400">$49</div>
                  <div className="text-sm text-zinc-400">Monthly Corvex cost</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-blue-400">$3,500</div>
                  <div className="text-sm text-zinc-400">Monthly savings</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-yellow-400">7,100%</div>
                  <div className="text-sm text-zinc-400">ROI in year one</div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-emerald-500 text-white hover:bg-emerald-400 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg group"
              >
                Stop Losing $128/Day - Start FREE
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="text-center space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              Questions that stop agencies from scaling
            </h3>
            <p className="text-zinc-400">
              Here are the honest answers to the concerns holding you back
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/30 border-zinc-800">
                  <CardContent className="p-6 space-y-3">
                    <h4 className="text-lg font-semibold text-white">{faq.question}</h4>
                    <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-8">
            <p className="text-zinc-400 mb-4">Still have questions?</p>
            <Button variant="outline" className="border-zinc-600 text-white hover:bg-zinc-800/50">
              Talk to a Real Human (Not a Bot)
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

