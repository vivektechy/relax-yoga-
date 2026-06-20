import { MetadataRoute } from 'next';

const BASE_URL = 'https://relaxyogacentre.in';

const servicesSlugs = [
  'therapeutic-yoga',
  'weight-loss-yoga',
  'corporate-yoga',
  'home-yoga',
  'online-yoga',
  'meditation',
  'teacher-training',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const services = servicesSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...services,
  ];
}
