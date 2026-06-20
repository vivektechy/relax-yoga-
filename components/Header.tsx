'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#founder', label: 'Founder' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-sage flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              {/* <Leaf className="w-5 h-5 text-white" /> */}
              <img src="/images/logo-removebg-preview.png" alt="logo" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-poppins font-bold text-lg tracking-tight transition-colors ${
                  scrolled ? 'text-charcoal' : 'text-white'
                }`}
              >
                Relax Yoga
              </span>
              <span
                className={`font-inter text-xs tracking-widest transition-colors ${
                  scrolled ? 'text-sage' : 'text-mint'
                }`}
              >
                CENTRE
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-inter font-medium text-sm transition-colors hover:text-sage ${
                  scrolled ? 'text-charcoal/80' : 'text-white/90'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              className="bg-sage hover:bg-sage/90 text-white font-poppins font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-sage/30 transition-all hover:shadow-sage/50 hover:-translate-y-0.5"
            >
              <Link href="#contact">Book Free Demo</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-charcoal' : 'text-white'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-charcoal/95 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white flex flex-col pt-24 px-8 pb-8 transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-6 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-poppins font-semibold text-lg text-charcoal hover:text-sage transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button
            asChild
            className="w-full bg-sage hover:bg-sage/90 text-white font-poppins font-semibold rounded-full mt-4"
          >
            <Link href="#contact" onClick={() => setMenuOpen(false)}>
              Book Free Demo
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
