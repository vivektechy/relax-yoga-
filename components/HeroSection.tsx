'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Yoga practice background"
          className="w-full h-full object-cover object-center scale-105"
          style={{ transform: 'scale(1.05)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/80 via-charcoal/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
      </div>

      {/* Floating decorative orbs */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-mint/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-sage/10 blur-3xl" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 container-custom pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
            <span className="text-white/90 text-sm font-inter font-medium tracking-wide">
              Patna&apos;s Premier Wellness Centre
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Transform Your
            <span className="block text-mint">Body, Mind</span>
            <span className="block">&amp; Life Through Yoga</span>
          </h1>

          {/* Subheadline */}
          <p className="font-inter text-white/80 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            Balance Body, Calm Mind, Transform Life — with expert guidance from
            Dharmanath Singh and 15+ years of transformative yoga practice.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-sage hover:bg-sage/90 text-white font-poppins font-semibold px-8 py-4 rounded-full shadow-xl shadow-sage/40 transition-all hover:-translate-y-1 hover:shadow-sage/60 text-base"
            >
              <Link href="#contact">Book Free Demo</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white bg-white/10 hover:bg-white/20 font-poppins font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1 text-base backdrop-blur-sm"
            >
              <Link href="#services">
                <Play className="w-4 h-4 mr-2" />
                Explore Classes
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-8">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '2000+', label: 'Students Trained' },
              { value: '7', label: 'Yoga Programs' },
              { value: '98%', label: 'Satisfaction Rate' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-poppins font-bold text-3xl text-mint">{stat.value}</span>
                <span className="font-inter text-white/70 text-sm mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <span className="text-xs font-inter tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
}
