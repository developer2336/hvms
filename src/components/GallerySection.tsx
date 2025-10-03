import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 101,
    url: 'https://i.postimg.cc/T3WJKvY6/Whats-App-Image-2025-10-03-at-12-11-33-AM-1.jpg',
  },
  {
    id: 102,
    url: 'https://i.postimg.cc/CKGC4Cqm/Whats-App-Image-2025-10-03-at-12-11-33-AM.jpg',
  },
  {
    id: 103,
    url: 'https://i.postimg.cc/NGp4Vxzh/Whats-App-Image-2025-10-03-at-12-11-31-AM.jpg',
  },

  {
    id: 1,
    url: 'https://i.postimg.cc/RhXRc309/Whats-App-Image-2025-05-19-at-9-10-28-AM.jpg',
  },
  {
    id: 2,
    url: 'https://i.postimg.cc/3RbNmYHV/Whats-App-Image-2025-05-19-at-9-16-50-AM-1.jpg',
  },
  {
    id: 3,
    url: 'https://i.postimg.cc/TPK3xBbc/Whats-App-Image-2025-05-19-at-9-16-50-AM.jpg',
  },
  {
    id: 4,
    url: 'https://i.postimg.cc/4yfCfhMT/Whats-App-Image-2025-05-19-at-9-16-49-AM.jpg',
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Gallery</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto my-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-xl shadow-lg group cursor-pointer h-[300px] sm:h-[350px] md:h-[400px]"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl w-full bg-gray-900 rounded-xl overflow-hidden">
              <button
                className="absolute top-4 right-4 z-10 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
                onClick={() => setSelectedImage(null)}
              >
                <X size={20} />
              </button>
              <div className="h-[80vh] flex justify-center items-center">
                <img
                  src={galleryImages[selectedImage].url}
                  alt=""
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
