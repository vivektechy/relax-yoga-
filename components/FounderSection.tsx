'use client';

import { Award, BookOpen, Users, Briefcase, Star, CheckCircle } from 'lucide-react';

const certifications = [
  { icon: Award, title: 'M.A. in Yoga', body: 'Jain Vishva Bharati University, Ladnun' },
  { icon: BookOpen, title: 'PG Diploma in Yogic Science', body: 'Nalanda Open University' },
  { icon: Users, title: 'Certified Yoga Referee', body: 'Yoga Federation of India' },
  { icon: Briefcase, title: 'NIS Coaching Certification', body: 'National Institute of Sports, Patiala' },
];

const highlights = [
  '15+ Years of Professional Yoga Teaching',
  'Founder & Owner, Relax Yoga Centre',
  'Yoga Trainer – State Health Society, Bihar',
  'Former Yoga Trainer – SCERT',
  'Associated with IIT Patna & Kendriya Vidyalaya',
  'Treasurer, Bihar Yoga Association',
  'National Yoga Championship Judge & Referee',
  'Expert in Yoga Therapy & Lifestyle Disorders',
];

export default function FounderSection() {
  return (
    <section id="founder" className="section-padding bg-offwhite">
      <div className="container-custom">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="inline-block font-inter text-sage text-sm font-semibold tracking-widest uppercase mb-3">
            Meet Your Guide
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal">
            The Heart Behind{' '}
            <span className="text-gradient">Relax Yoga Centre</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/founder.png"
                alt="Dharmnath Singh – Founder, Relax Yoga Centre"
                className="w-full h-[500px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl p-4">
                  <p className="font-poppins font-bold text-white text-xl">Dharmnath Singh</p>
                  <p className="font-inter text-white/80 text-sm mt-1">
                    Founder &amp; Head Yoga Instructor
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-sage text-white rounded-2xl p-4 shadow-xl shadow-sage/30">
              <p className="font-poppins font-bold text-3xl">15+</p>
              <p className="font-inter text-xs text-white/80">Years Exp.</p>
            </div>

            {/* Floating reviews badge */}
          </div>
          {/* Right: Content */}
          <div>
            <h3 className="font-poppins font-bold text-2xl md:text-3xl text-charcoal mb-4">
              Dharmnath Singh
            </h3>
                   <p className="font-inter text-charcoal/70 leading-relaxed mb-4">
  I am Dharmnath Singh, a dedicated yoga instructor with over 15 years of
  experience helping people achieve physical, mental, and spiritual well-being
  through yoga, pranayama, meditation, and holistic wellness practices.
</p>
        <p className="font-inter text-charcoal/70 leading-relaxed mb-8">
  As Founder of Relax Yoga Centre, I have worked with institutions including
  State Health Society Bihar, SCERT, IIT Patna, Kendriya Vidyalaya, and
  Nalanda Open University. My expertise lies in yoga therapy, lifestyle
  disorder management, stress relief, and preventive healthcare.
</p>
            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                  <span className="font-inter text-sm text-charcoal/80">{item}</span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="bg-white rounded-2xl p-4 shadow-md border border-mint/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-mint/20 flex items-center justify-center mb-3">
                    <cert.icon className="w-5 h-5 text-sage" />
                  </div>
                  <p className="font-poppins font-semibold text-sm text-charcoal">{cert.title}</p>
                  <p className="font-inter text-xs text-charcoal/60 mt-0.5">{cert.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
