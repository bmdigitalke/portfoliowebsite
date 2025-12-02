"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ExtrasPage() {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    // Check which images actually exist by trying different formats
    const checkImages = async () => {
      const existingImages = [];
      const formats = ['jpg', 'png', 'jpeg', 'webp'];
      
      for (let i = 1; i <= 20; i++) {
        let found = false;
        
        // Try each format until we find one that works
        for (const format of formats) {
          if (found) break;
          
          const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/portfolio/extras/image-${i}.${format}`;
          
          try {
            const response = await fetch(imageUrl, { method: 'HEAD' });
            if (response.ok) {
              existingImages.push(imageUrl);
              found = true;
            }
          } catch (error) {
            // Try next format
          }
        }
      }
      
      setLoadedImages(existingImages);
    };

    if (cloudName) {
      checkImages();
    }
  }, [cloudName]);

  const images = loadedImages;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-zinc-200 px-6 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link 
            href="/"
            className="text-lg font-semibold text-zinc-900 hover:text-zinc-600 transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-2xl font-bold text-zinc-900">Extra Designs</h1>
        </div>
      </header>

      {/* Gallery Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-zinc-900 md:text-5xl">
              More Creative Work
            </h2>
            <p className="text-lg text-zinc-600">
              Additional designs and explorations
            </p>
          </div>

          {images.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-zinc-600">
                No designs yet. Upload images to Cloudinary's <strong>portfolio/extras</strong> folder.
              </p>
              <p className="mt-4 text-sm text-zinc-500">
                Name them: <strong>image-1</strong>, <strong>image-2</strong>, <strong>image-3</strong>, etc. (up to image-20)
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                Supported formats: .jpg, .png, .jpeg, .webp
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {images.map((imageUrl, index) => (
                <div
                  key={index}
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-zinc-100"
                  onClick={() => setSelectedImage(imageUrl)}
                >
                  <Image
                    src={imageUrl}
                    alt={`Extra design ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-10"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-4 top-4 text-4xl text-white hover:text-zinc-300"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative max-h-[90vh] max-w-6xl">
            <Image
              src={selectedImage}
              alt="Portfolio work"
              width={1200}
              height={1200}
              className="h-auto max-h-[90vh] w-auto object-contain"
              unoptimized
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-50 px-6 py-8 text-center text-sm text-zinc-600">
        <p>© 2024 Brian Ireri. All rights reserved.</p>
        <p className="mt-2">Brio – Principle-Driven Design</p>
      </footer>
    </div>
  );
}
