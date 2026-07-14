import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Users, Star, MessageCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

type Props = {
  params: { slug: string };
};

const serviceDetails: Record<string, {
  fullDescription: string;
  benefits: string[];
  includes: string[];
  duration: string;
  groupSize: string;
  level: string;
}> = {
  'therapeutic-yoga': {
    fullDescription:
      'Therapeutic Yoga at Relax Yoga Centre is a specialized program designed to address specific health conditions and chronic ailments. Under the expert guidance of Dharmanath Singh, each session is carefully customized to your unique physical and medical needs, combining traditional yoga postures with modern therapeutic techniques for maximum healing.',
    benefits: ['Chronic pain relief', 'Stress and anxiety reduction', 'Improved flexibility and mobility', 'Better posture and alignment', 'Enhanced immune system', 'Hormonal balance'],
    includes: ['Initial health assessment', 'Personalized yoga protocol', 'Breathwork (Pranayama)', 'Meditation techniques', 'Diet and lifestyle guidance', 'Weekly progress review'],
    duration: '60 minutes per session',
    groupSize: 'Small groups (max 8)',
    level: 'All levels welcome',
  },
  'weight-loss-yoga': {
    fullDescription:
      'Our Weight Loss Yoga program combines dynamic asana sequences, power yoga, and targeted breathwork to accelerate metabolism and promote sustainable weight management. This isn\'t just about burning calories — it\'s about creating a mindful relationship with your body and food.',
    benefits: ['Sustainable weight loss', 'Boosted metabolism', 'Reduced stress eating', 'Improved body composition', 'Enhanced energy levels', 'Better sleep quality'],
    includes: ['Dynamic yoga sequences', 'Power yoga sessions', 'Metabolic breathwork', 'Nutrition guidance', 'Weekly body measurements', 'Progress tracking'],
    duration: '60 minutes per session',
    groupSize: 'Small groups (max 12)',
    level: 'Beginner to Intermediate',
  },
  'corporate-yoga': {
    fullDescription:
      'Our Corporate Yoga program brings the transformative power of yoga directly to your workplace. We design customized wellness programs for companies in Patna and across Bihar, helping employees reduce stress, improve focus, and boost overall productivity.',
    benefits: ['Reduced workplace stress', 'Improved employee focus', 'Better team dynamics', 'Reduced absenteeism', 'Enhanced productivity', 'Positive company culture'],
    includes: ['On-site yoga sessions', 'Customized corporate program', 'Stress management workshops', 'Ergonomics training', 'Breathing techniques for desk workers', 'Monthly wellness reports'],
    duration: '45–60 minutes per session',
    groupSize: 'Up to 30 employees',
    level: 'All fitness levels',
  },
  'home-yoga': {
    fullDescription:
      'Our Home Yoga service brings professional yoga instruction directly to your doorstep. Perfect for those with busy schedules or who prefer the privacy and comfort of their own space, our certified instructors provide fully personalized one-on-one sessions.',
    benefits: ['Convenience of home practice', 'Fully personalized attention', 'Flexible scheduling', 'Comfortable environment', 'Safe for beginners', 'Family-friendly sessions'],
    includes: ['One-on-one instruction', 'Personalized yoga sequence', 'All equipment provided', 'Nutrition consultation', 'Progress tracking', 'WhatsApp support'],
    duration: '60 minutes per session',
    groupSize: 'Individual or family',
    level: 'All levels welcome',
  },
  'online-yoga': {
    fullDescription:
      'Experience professional yoga instruction from anywhere in the world with our Online Yoga Classes. Live, interactive sessions via high-quality video streaming ensure you get the same quality instruction and corrections as an in-person class.',
    benefits: ['No commute required', 'Access from anywhere', 'Session recordings available', 'Interactive live instruction', 'Community support', 'Flexible batch timings'],
    includes: ['Live HD video sessions', 'Interactive Q&A', 'Session recordings', 'WhatsApp community group', 'Monthly progress check-ins', 'Digital resources'],
    duration: '60 minutes per session',
    groupSize: 'Small groups (max 15)',
    level: 'Beginner to Advanced',
  },
  'meditation': {
    fullDescription:
      'Our Meditation program is a comprehensive journey into inner peace and mental clarity. Dharmanath Singh guides students through various meditation techniques — from mindfulness to transcendental practices — helping cultivate lasting emotional resilience and mental wellbeing.',
    benefits: ['Deep mental clarity', 'Reduced anxiety and depression', 'Better emotional regulation', 'Improved sleep quality', 'Enhanced concentration', 'Spiritual growth'],
    includes: ['Multiple meditation techniques', 'Guided visualization', 'Pranayama integration', 'Mantra meditation', 'Yoga Nidra sessions', 'Take-home meditation toolkit'],
    duration: '45–60 minutes per session',
    groupSize: 'Small groups (max 10)',
    level: 'Complete beginners welcome',
  },
  'teacher-training': {
    fullDescription:
      'Our 200-Hour Yoga Teacher Training program is a transformative certification course recognized by Yoga Alliance USA. Designed for aspiring yoga teachers and dedicated practitioners, this comprehensive program covers yoga philosophy, anatomy, teaching methodology, and practical teaching experience.',
    benefits: ['International certification', 'Comprehensive curriculum', 'Teaching methodology', 'Career opportunities', 'Lifetime community', 'Business training for yoga teachers'],
    includes: ['200 hours of training', 'Yoga philosophy and history', 'Anatomy and physiology', 'Teaching practicum', 'Yoga Alliance registration', 'Post-certification support'],
    duration: '3 months (intensive)',
    groupSize: 'Small cohorts (max 15)',
    level: 'Intermediate practitioners',
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data } = await supabase
    .from('services')
    .select('title, description')
    .eq('slug', params.slug)
    .single();

  if (!data) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${data.title} in Patna | Relax Yoga Centre`,
    description: data.description,
    openGraph: {
      title: `${data.title} | Relax Yoga Centre Patna`,
      description: data.description,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { data: service } = await supabase
    .from('services')
    .select('*')
    .eq('slug', params.slug)
    .single();

  const details = serviceDetails[params.slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-poppins font-bold text-2xl text-charcoal mb-4">Service Not Found</h1>
          <Link href="/#services" className="text-sage hover:underline font-inter">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="absolute inset-0">
            <img
              src={service.image_url}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/70" />
          </div>
          <div className="relative container-custom">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 font-inter text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            <div className="max-w-2xl">
              <span className="inline-block bg-sage/80 text-white text-xs font-semibold font-inter px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
                Yoga Program
              </span>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-4">
                {service.title}
              </h1>
              <p className="font-inter text-white/80 text-lg leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Clock className="w-4 h-4" />
                  {details?.duration ?? '60 minutes'}
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Users className="w-4 h-4" />
                  {details?.groupSize ?? 'Small groups'}
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  {details?.level ?? 'All levels'}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-offwhite">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                {/* About */}
                <div>
                  <h2 className="font-poppins font-bold text-2xl text-charcoal mb-4">
                    About This Program
                  </h2>
                  <p className="font-inter text-charcoal/70 leading-relaxed">
                    {details?.fullDescription ?? service.description}
                  </p>
                </div>

                {/* Benefits */}
                {details?.benefits && (
                  <div>
                    <h2 className="font-poppins font-bold text-2xl text-charcoal mb-4">
                      Key Benefits
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {details.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-mint/20">
                          <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                          <span className="font-inter text-sm text-charcoal/80">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* What&apos;s Included */}
                {details?.includes && (
                  <div>
                    <h2 className="font-poppins font-bold text-2xl text-charcoal mb-4">
                      What&apos;s Included
                    </h2>
                    <ul className="space-y-3">
                      {details.includes.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-sage flex-shrink-0" />
                          <span className="font-inter text-sm text-charcoal/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Price Card */}
                <div className="bg-white rounded-3xl p-6 shadow-xl border border-mint/20 sticky top-24">
                  <p className="font-inter text-sm text-charcoal/50 mb-1">Starting from</p>
                  <p className="font-poppins font-bold text-4xl text-charcoal mb-1">
                    ₹{Number(service.base_price).toLocaleString('en-IN')}
                  </p>
                  <p className="font-inter text-sm text-charcoal/50 mb-6">/month</p>

                  <Link
                    href="/#contact"
                    className="block w-full text-center bg-sage hover:bg-sage/90 text-white font-poppins font-semibold py-3.5 rounded-2xl shadow-lg shadow-sage/30 transition-all hover:-translate-y-0.5 mb-3"
                  >
                    Book Free Demo
                  </Link>

                  <a
                    href="https://wa.me/9835384062?text=Hi%20Relax%20Yoga%20Centre%2C%20I%20am%20interested%20in%20the%20{service.title}%20program."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-poppins font-semibold py-3 rounded-2xl transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Enquire on WhatsApp
                  </a>

                  <div className="mt-6 pt-6 border-t border-mint/20 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-inter text-sm text-charcoal/60">Duration</span>
                      <span className="font-inter text-sm font-medium text-charcoal">{details?.duration ?? '60 min'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-inter text-sm text-charcoal/60">Class Size</span>
                      <span className="font-inter text-sm font-medium text-charcoal">{details?.groupSize ?? 'Small group'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-inter text-sm text-charcoal/60">Level</span>
                      <span className="font-inter text-sm font-medium text-charcoal">{details?.level ?? 'All levels'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
