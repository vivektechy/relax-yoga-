'use client';

import { useState } from 'react';
import { X, Play } from 'lucide-react';

type Category = 'All' | 'online Class' | 'Workshop' | 'Championship' | 'Meditation';

const galleryItems = [
  { id: 1, url: '/images/gallery (1).jpeg', type: 'image', category: ' online Class', title: 'Morning Yoga Session' },
  { id: 2, url: 'https://images.squarespace-cdn.com/content/v1/656753170118141586dfc6c4/70f9ac32-a24a-45c4-b2c1-44a457fc8c0a/web+triabgle+closer+Wendy+Oberg.jpg',   type: 'image', category: 'Class', title: 'Group Training' }, 
  { id: 4, url: 'https://th.bing.com/th/id/OIP.IGpfz-yCC3f-hvBI36nPUgHaDo?w=301&h=171&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3', type: 'image', category: 'Workshop', title: 'Wellness Workshop' },
  { id: 5, url: '/images/gallery (4).jpeg', type: 'image', category: 'Workshop', title: 'Flexibility Training' },
  { id: 6, url: 'https://th.bing.com/th/id/R.3b74bdf40c759dd2209ccf4e3993cf42?rik=Y9MQZTEQ%2bk6uEw&riu=http%3a%2f%2fcrunch.com%2fwp-content%2fuploads%2f2024%2f05%2fCR011AG_May-w-o-5-13-article-images_Hot-Yoga-FIERCE_article-image_5.28.24_2.jpg&ehk=zGsm%2bhzOZg%2ftutqsCu6UDFUCq81R9bWYKhuM3JFXzLs%3d&risl=&pid=ImgRaw&r=0', type: 'image', category: 'Workshop', title: 'Corporate Wellness' },
  { id: 7, url: 'https://tse3.mm.bing.net/th/id/OIP.x9jqhop0yvFRXjHyzvcRwQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3', type: 'image', category: 'Meditation', title: 'Morning Meditation' },
  { id: 8, url: '/images/gallery (7).jpeg', type: 'image', category: 'Meditation', title: 'Guided Meditation' },
  { id: 9, url: '/images/gallery (8).jpeg', type: 'image', category: 'Meditation', title: 'Deep Relaxation' },
  { id: 10, url: '/images/gallery (9).jpeg', type: 'image', category: 'Championship', title: 'Yoga Championship 2024' },
  { id: 11, url: 'https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=800', type: 'image', category: 'Championship', title: 'State Level Competition' },
  { id: 12, url: 'https://tse1.mm.bing.net/th/id/OIP.eCwirt4jWo5vF5ZtcQQamgAAAA?r=0&pid=ImgDet&w=184&h=276&c=7&dpr=1.3&o=7&rm=3', type: 'image', category: 'online Class', title: 'Power Yoga' },
];

const categories: Category[] = ['All', 'online Class', 'Workshop', 'Championship', 'Meditation'];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[0] | null>(null);

  const filtered =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-offwhite">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block font-inter text-sage text-sm font-semibold tracking-widest uppercase mb-3">
            Our Community
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4">
            Moments of{' '}
            <span className="text-gradient">Transformation</span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-poppins font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-sage text-white shadow-md shadow-sage/30'
                  : 'bg-white text-charcoal/70 hover:text-sage hover:bg-sage/10 border border-mint/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              style={{ marginBottom: '1rem' }}
              onClick={() => setLightbox(item)}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ height: idx % 3 === 0 ? '280px' : '200px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-poppins font-semibold text-white text-sm">{item.title}</p>
                  <p className="font-inter text-white/70 text-xs">{item.category}</p>
                </div>
              </div>
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                    <Play className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 rounded-full p-2 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.url}
              alt={lightbox.title}
              className="w-full h-full object-contain"
            />
            <div className="bg-charcoal/80 px-6 py-3">
              <p className="font-poppins font-semibold text-white">{lightbox.title}</p>
              <p className="font-inter text-white/60 text-sm">{lightbox.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
