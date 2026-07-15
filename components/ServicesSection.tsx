'use client';

import Link from 'next/link';
import { Heart, TrendingDown, Building2, Home, Monitor, Brain, GraduationCap, ArrowRight } from 'lucide-react';

const services = [
    
  {
    slug: "general-fitness-yoga",
    title: "General Fitness Yoga",
    description: "Improve flexibility, strength, stamina and overall wellness with daily yoga practice.",
    time: "6:00 AM – 7:00 AM",
    fee: "₹2,000 / Month",
    icon: Heart,
    image: "/services/general-fitness.jpg",
    color: "from-green-50 to-emerald-50",
    badge: "Popular",
  },
  {
    slug: "weight-loss-yoga",
    title: "Weight Loss Yoga",
    description: "Dynamic yoga sequences for healthy weight management and improved metabolism.",
    time: "7:00 AM – 8:00 AM",
    fee: "₹2,000 / Month",
    icon: TrendingDown,
    image: "/services/weight-loss.jpg",
    color: "from-orange-50 to-amber-50",
    badge: null,
  },
  {
    slug: "female-yoga",
    title: "Female Yoga",
    description: "Special yoga sessions designed exclusively for women of all age groups.",
    time: "8:00 AM – 9:00 AM",
    fee: "₹1,500 / Month",
    icon: Heart,
    image: "/services/female-yoga.jpg",
    color: "from-pink-50 to-rose-50",
    badge: "Women",
  },
  {
    slug: "championship-yoga",
    title: "Yoga Championship",
    description: "Professional coaching for District, State, National and International Yoga Championships.",
    time: "10:00 AM – 11:00 AM",
    fee: "₹700 / Month",
    icon: GraduationCap,
    image: "/services/championship.jpg",
    color: "from-yellow-50 to-orange-50",
    badge: "Training",
  },
  {
    slug: "therapeutic-yoga",
    title: "Therapeutic Yoga",
    description: "Personalized yoga therapy for pain relief, stress management and lifestyle diseases.",
    time: "11:00 AM – 12:00 PM",
    fee: "₹3,000 / Month",
    icon: Heart,
    image: "/services/therapeutic.jpg",
    color: "from-red-50 to-pink-50",
    badge: "Most Popular",
  },
  {
    slug: "personal-yoga",
    title: "Personal Yoga Class",
    description: "One-to-one personalized yoga sessions based on your goals.",
    time: "12:00 PM – 3:00 PM",
    fee: "₹500 / Session",
    icon: Home,
    image: "/services/personal.jpg",
    color: "from-blue-50 to-cyan-50",
    badge: "Premium",
  },
  {
    slug: "stretching-yoga",
    title: "Stretching Yoga",
    description: "Improve flexibility, mobility and posture with personal stretching sessions.",
    time: "12:00 PM – 3:00 PM",
    fee: "₹1,000 / Session",
    icon: Brain,
    image: "/services/stretching.jpg",
    color: "from-teal-50 to-cyan-50",
    badge: null,
  },
  {
    slug: "meditation-pranayama",
    title: "Meditation & Pranayama",
    description: "Guided meditation and breathing exercises for mental peace and relaxation.",
    time: "12:00 PM – 3:00 PM",
    fee: "₹300 / Session",
    icon: Brain,
    image: "/services/meditation.jpg",
    color: "from-purple-50 to-indigo-50",
    badge: "Relax",
  },
  {
    slug: "home-yoga",
    title: "Home Yoga Service",
    description: "Certified instructors visit your home for personalized yoga sessions.",
    time: "Flexible",
    fee: "Contact Us",
    icon: Home,
    image: "/services/home.jpg",
    color: "from-green-50 to-lime-50",
    badge: "Home Visit",
  },
  {
    slug: "corporate-yoga",
    title: "Corporate Yoga",
    description: "Yoga sessions for offices, hospitals, schools and organizations.",
    time: "Flexible",
    fee: "₹3,000 / Session",
    icon: Building2,
    image: "/services/corporate.jpg",
    color: "from-blue-50 to-indigo-50",
    badge: "Corporate",
  },
  {
    slug: "online-yoga",
    title: "Online Yoga Class",
    description: "Live interactive yoga classes from anywhere in the world.",
    time: "9:00 AM – 10:00 AM",
    fee: "₹1,000 / Month",
    icon: Monitor,
    image: "/services/online.jpg",
    color: "from-violet-50 to-purple-50",
    badge: "Live",
  },
  {
    slug: "apartment-yoga",
    title: "Apartment Yoga Classes",
    description: "Group yoga classes in apartments, societies and residential communities.",
    time: "Flexible",
    fee: "₹10,000 / Month",
    icon: Building2,
    image: "/services/apartment.jpg",
    color: "from-emerald-50 to-green-50",
    badge: "Community",
  },

];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block font-inter text-sage text-sm font-semibold tracking-widest uppercase mb-3">
            What We Offer
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4">
            Programs for Every{' '}
            <span className="text-gradient">Wellness Goal</span>
          </h2>
          <p className="font-inter text-charcoal/60 max-w-2xl mx-auto text-base md:text-lg">
            Whether you&apos;re a beginner or an advanced practitioner, we have a program
            tailored specifically for your needs and lifestyle.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={service.slug}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Badge */}
              {service.badge && (
                <div className="absolute top-4 right-4 z-10 bg-sage text-white text-xs font-semibold font-inter px-3 py-1 rounded-full">
                  {service.badge}
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md`}>
                  <service.icon className="w-5 h-5 text-sage" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-poppins font-bold text-lg text-charcoal mb-2">
                  {service.title}
                </h3>
                <p className="font-inter text-sm text-charcoal/60 leading-relaxed mb-3">
                 {service.description}
                    </p>

                <div className="space-y-2 mb-5">
                <p className="text-sm font-medium">
                      ⏰ {service.time}
                 </p>

                <p className="text-sm font-semibold text-sage">
                 💰 {service.fee}
                    </p>
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 font-inter font-semibold text-sm text-sage hover:text-charcoal transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="font-inter text-charcoal/60 mb-4">
            Not sure which program is right for you?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-sage/10 hover:bg-sage/20 text-sage font-poppins font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Get Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
