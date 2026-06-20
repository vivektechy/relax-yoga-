import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: {
    default: 'Relax Yoga Centre | Best Yoga Classes in Patna',
    template: '%s | Relax Yoga Centre Patna',
  },
  description:
    'Relax Yoga Centre by Dharmanath Singh – Premium yoga therapy, weight loss yoga, corporate wellness, online classes & teacher training in Patna, Bihar. Balance Body, Calm Mind, Transform Life.',
  keywords: [
    'best yoga classes in Patna',
    'yoga therapy Patna',
    'corporate yoga Patna',
    'online yoga classes Bihar',
    'yoga teacher training Patna',
    'weight loss yoga Patna',
    'meditation classes Patna',
    'Dharmanath Singh yoga',
    'Relax Yoga Centre',
  ],
  authors: [{ name: 'Dharmanath Singh' }],
  creator: 'Relax Yoga Centre',
  publisher: 'Relax Yoga Centre',
  metadataBase: new URL('https://relaxyogacentre.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://relaxyogacentre.in',
    siteName: 'Relax Yoga Centre',
    title: 'Relax Yoga Centre | Best Yoga Classes in Patna',
    description:
      'Premium yoga therapy, weight loss yoga, corporate wellness, online classes & teacher training in Patna. Founded by Dharmanath Singh.',
    images: [
      {
        url: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg',
        width: 1200,
        height: 630,
        alt: 'Relax Yoga Centre Patna',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Relax Yoga Centre | Best Yoga Classes in Patna',
    description:
      'Premium yoga therapy, weight loss yoga, corporate wellness & online classes in Patna.',
    images: ['https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Relax Yoga Centre',
              image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg',
              description:
                'Premium yoga therapy, weight loss yoga, corporate wellness & online classes in Patna, Bihar.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Patna',
                addressLocality: 'Patna',
                addressRegion: 'Bihar',
                postalCode: '800001',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 25.5941,
                longitude: 85.1376,
              },
              url: 'https://relaxyogacentre.in',
              telephone: '+91-9876543210',
              founder: {
                '@type': 'Person',
                name: 'Dharmanath Singh',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  opens: '06:00',
                  closes: '20:00',
                },
              ],
              priceRange: '₹₹',
              servesCuisine: 'Yoga & Wellness',
            }),
          }}
        />
      </head>
      <body className="font-inter antialiased">
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
