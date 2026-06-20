'use client';

import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Software Engineer',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    review:
      'Joining Relax Yoga Centre was one of the best decisions of my life. In just 3 months, I lost 12 kg and feel more energetic than ever. Dharmanath Sir is an exceptional teacher who truly cares about his students!',
    rating: 5,
    program: 'Weight Loss Yoga',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    review:
      'The therapeutic yoga sessions have completely relieved my chronic back pain that I suffered from for over 5 years. The personalized attention and guidance here is truly unmatched in Patna.',
    rating: 5,
    program: 'Therapeutic Yoga',
  },
  {
    id: 3,
    name: 'Anita Singh',
    role: 'Teacher',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    review:
      'The online yoga classes are incredibly convenient and just as effective as in-person. The instructor ensures everyone follows postures correctly even through the screen. Highly recommended!',
    rating: 5,
    program: 'Online Yoga',
  },
  {
    id: 4,
    name: 'Vikram Patel',
    role: 'HR Manager',
    image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200',
    review:
      'Corporate yoga sessions have transformed our office culture. Our team is more focused, less stressed, and overall productivity has increased significantly. Worth every penny!',
    rating: 5,
    program: 'Corporate Yoga',
  },
  {
    id: 5,
    name: 'Sunita Devi',
    role: 'Homemaker',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
    review:
      'The meditation classes have given me a sense of peace I never experienced before. I now handle stress much better, my anxiety is gone, and I sleep deeply every night.',
    rating: 5,
    program: 'Meditation',
  },
  {
    id: 6,
    name: 'Arjun Mishra',
    role: 'Fitness Trainer',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
    review:
      'Excellent teacher training program! I am now a certified yoga instructor thanks to Dharmanath Sir. The curriculum is comprehensive and the learning environment is truly amazing.',
    rating: 5,
    program: 'Teacher Training',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [autoplay, next]);

  const visible = [
    testimonials[(current - 1 + testimonials.length) % testimonials.length],
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block font-inter text-sage text-sm font-semibold tracking-widest uppercase mb-3">
            Success Stories
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4">
            Lives{' '}
            <span className="text-gradient">Transformed</span>
          </h2>
          {/* Google reviews badge */}
          <div className="inline-flex items-center gap-3 bg-white border border-mint/30 rounded-full px-5 py-2.5 shadow-md mt-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-poppins font-bold text-charcoal text-sm">4.9/5</span>
            <span className="text-charcoal/50 text-sm font-inter">·</span>
            <span className="font-inter text-sm text-charcoal/60">200+ Google Reviews</span>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="hidden md:grid grid-cols-3 gap-6">
            {visible.map((t, idx) => (
              <div
                key={t.id}
                className={`rounded-3xl p-6 transition-all duration-500 ${
                  idx === 1
                    ? 'bg-sage text-white shadow-2xl shadow-sage/30 scale-105'
                    : 'bg-offwhite border border-mint/20 opacity-75 scale-95'
                }`}
              >
                <Quote className={`w-8 h-8 mb-4 ${idx === 1 ? 'text-white/30' : 'text-mint'}`} />
                <p className={`font-inter text-sm leading-relaxed mb-6 ${idx === 1 ? 'text-white/90' : 'text-charcoal/70'}`}>
                  &ldquo;{t.review}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                  />
                  <div>
                    <p className={`font-poppins font-semibold text-sm ${idx === 1 ? 'text-white' : 'text-charcoal'}`}>
                      {t.name}
                    </p>
                    <p className={`font-inter text-xs ${idx === 1 ? 'text-white/60' : 'text-charcoal/50'}`}>
                      {t.role} · {t.program}
                    </p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 fill-current ${idx === 1 ? 'text-amber-300' : 'text-amber-400'}`} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile single card */}
          <div className="md:hidden">
            <div className="bg-sage text-white rounded-3xl p-6 shadow-2xl shadow-sage/30">
              <Quote className="w-8 h-8 text-white/30 mb-4" />
              <p className="font-inter text-sm leading-relaxed text-white/90 mb-6">
                &ldquo;{testimonials[current].review}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                />
                <div>
                  <p className="font-poppins font-semibold text-sm text-white">
                    {testimonials[current].name}
                  </p>
                  <p className="font-inter text-xs text-white/60">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-sage/30 hover:border-sage hover:bg-sage hover:text-white text-sage transition-all flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 h-2.5 bg-sage' : 'w-2.5 h-2.5 bg-sage/30 hover:bg-sage/60'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-sage/30 hover:border-sage hover:bg-sage hover:text-white text-sage transition-all flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
