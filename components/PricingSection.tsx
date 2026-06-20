'use client';

import { useState } from 'react';
import { CheckCircle, Wifi, MapPin } from 'lucide-react';
import Link from 'next/link';

type Mode = 'Online' | 'Offline';

type PricingPlan = {
  batch: string;
  duration: string;
  price: number;
  originalPrice: number;
  popular: boolean;
  benefits: string[];
};

const pricingData: Record<Mode, PricingPlan[]> = {
  Online: [
    {
      batch: 'Morning 6 AM',
      duration: '60 min',
      price: 999,
      originalPrice: 1499,
      popular: false,
      benefits: [
        'Live interactive sessions',
        'HD video quality',
        'Recorded sessions access',
        'WhatsApp group support',
        'Monthly progress tracking',
      ],
    },
    {
      batch: 'Morning 7 AM',
      duration: '60 min',
      price: 999,
      originalPrice: 1499,
      popular: true,
      benefits: [
        'Live interactive sessions',
        'HD video quality',
        'Recorded sessions access',
        'WhatsApp group support',
        'Monthly progress tracking',
        'Personalized diet tips',
      ],
    },
    {
      batch: 'Evening 5 PM',
      duration: '60 min',
      price: 799,
      originalPrice: 1199,
      popular: false,
      benefits: [
        'Live interactive sessions',
        'HD video quality',
        'Recorded sessions access',
        'WhatsApp group support',
      ],
    },
    {
      batch: 'Evening 6 PM',
      duration: '60 min',
      price: 799,
      originalPrice: 1199,
      popular: false,
      benefits: [
        'Live interactive sessions',
        'HD video quality',
        'Recorded sessions access',
        'WhatsApp group support',
      ],
    },
  ],
  Offline: [
    {
      batch: 'Morning 6 AM',
      duration: '60 min',
      price: 1500,
      originalPrice: 2000,
      popular: false,
      benefits: [
        'In-person instruction',
        'Personalized corrections',
        'Yoga mat provided',
        'Locker room access',
        'Monthly assessment',
      ],
    },
    {
      batch: 'Morning 7 AM',
      duration: '60 min',
      price: 1500,
      originalPrice: 2000,
      popular: true,
      benefits: [
        'In-person instruction',
        'Personalized corrections',
        'Yoga mat provided',
        'Locker room access',
        'Monthly assessment',
        'Nutrition guidance',
      ],
    },
    {
      batch: 'Evening 5 PM',
      duration: '60 min',
      price: 1200,
      originalPrice: 1800,
      popular: false,
      benefits: [
        'In-person instruction',
        'Personalized corrections',
        'Yoga mat provided',
        'Locker room access',
      ],
    },
    {
      batch: 'Evening 6 PM',
      duration: '60 min',
      price: 1200,
      originalPrice: 1800,
      popular: false,
      benefits: [
        'In-person instruction',
        'Personalized corrections',
        'Yoga mat provided',
        'Locker room access',
      ],
    },
  ],
};

export default function PricingSection() {
  const [mode, setMode] = useState<Mode>('Online');

  const plans = pricingData[mode];

  return (
    <section id="pricing" className="section-padding bg-offwhite">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block font-inter text-sage text-sm font-semibold tracking-widest uppercase mb-3">
            Pricing
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4">
            Simple,{' '}
            <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="font-inter text-charcoal/60 max-w-xl mx-auto mb-8">
            Choose your preferred batch timing and mode. All plans include a free demo session.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1.5 shadow-md border border-mint/30">
            <button
              onClick={() => setMode('Online')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-poppins font-semibold text-sm transition-all duration-200 ${
                mode === 'Online'
                  ? 'bg-sage text-white shadow-md'
                  : 'text-charcoal/60 hover:text-charcoal'
              }`}
            >
              <Wifi className="w-4 h-4" />
              Online
            </button>
            <button
              onClick={() => setMode('Offline')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-poppins font-semibold text-sm transition-all duration-200 ${
                mode === 'Offline'
                  ? 'bg-sage text-white shadow-md'
                  : 'text-charcoal/60 hover:text-charcoal'
              }`}
            >
              <MapPin className="w-4 h-4" />
              Offline
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.batch}
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? 'bg-sage text-white shadow-2xl shadow-sage/40 scale-105'
                  : 'bg-white shadow-lg border border-mint/20 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="bg-white/20 text-white text-xs font-bold font-inter text-center py-2 tracking-widest uppercase">
                  Most Popular
                </div>
              )}

              <div className="p-6">
                {/* Batch */}
                <div className={`text-sm font-inter font-semibold tracking-wide uppercase mb-1 ${plan.popular ? 'text-white/70' : 'text-sage'}`}>
                  {plan.batch}
                </div>
                <div className={`text-xs font-inter mb-4 ${plan.popular ? 'text-white/60' : 'text-charcoal/50'}`}>
                  {plan.duration} · {mode} Class
                </div>

                {/* Price */}
                <div className="flex items-end gap-2 mb-6">
                  <span className={`font-poppins font-bold text-4xl ${plan.popular ? 'text-white' : 'text-charcoal'}`}>
                    ₹{plan.price.toLocaleString('en-IN')}
                  </span>
                  <div className="flex flex-col mb-1">
                    <span className={`text-xs line-through ${plan.popular ? 'text-white/50' : 'text-charcoal/40'}`}>
                      ₹{plan.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className={`text-xs font-medium ${plan.popular ? 'text-white/70' : 'text-charcoal/60'}`}>
                      /month
                    </span>
                  </div>
                </div>

                {/* Benefits */}
                <ul className="space-y-2.5 mb-6">
                  {plan.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-mint' : 'text-sage'}`} />
                      <span className={`text-sm font-inter ${plan.popular ? 'text-white/90' : 'text-charcoal/70'}`}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="#contact"
                  className={`block w-full text-center font-poppins font-semibold text-sm py-3 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 ${
                    plan.popular
                      ? 'bg-white text-sage hover:bg-white/90 shadow-lg'
                      : 'bg-sage/10 text-sage hover:bg-sage hover:text-white'
                  }`}
                >
                  Book Free Demo
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center font-inter text-sm text-charcoal/50 mt-8">
          * All prices are per month. Free demo session included. No hidden charges.
        </p>
      </div>
    </section>
  );
}
