"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ExtrasPage() {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const checkImages = async () => {
    setIsLoading(true);
    setLoadedImages([]); // Clear existing images
    
    // Use a simple array to track found images instead of React state
    const foundImages = [];
    
    // DEBUG: Force specific check for 16 and 17
    console.log("Specifically checking for image-16 and image-17");
    
    const formats = ['png', 'jpg', 'jpeg', 'webp'];
    
    // Check all images in parallel for faster loading
    const checkPromises = [];
    
    for (let i = 1; i <= 20; i++) {
      checkPromises.push((async (index) => {
        console.log(`Checking image-${index}...`);
        // Try each format until we find one that works
        for (const format of formats) {
          // Add cache-busting parameter to force fresh check
          const timestamp = Date.now();
          const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/portfolio/extras/image-${index}.${format}`;
          const testUrl = `${imageUrl}?t=${timestamp}`;
          
          try {
            // Use Image object instead of fetch to avoid CORS issues
            await new Promise((resolve, reject) => {
              const img = new window.Image();
              img.onload = () => {
                console.log(`Found image-${index}.${format}`);
                
                // Only add if not already in array
                if (!foundImages.includes(imageUrl)) {
                  foundImages.push(imageUrl);
                  // Update state with a new copy of the array each time
                  setLoadedImages([...foundImages]);
                }
                resolve();
              };
              img.onerror = () => {
                console.log(`Error loading image-${index}.${format}`);
                reject();
              };
              
              // Start loading
              img.src = testUrl;
              
              // Timeout after 8 seconds
              setTimeout(() => {
                console.log(`Timeout for image-${index}.${format}`);
                reject();
              }, 8000);
            });
            
            // If successful, break the format loop
            break;
          } catch (error) {
            // Try next format
            console.log(`Failed to load image-${index}.${format}`);
          }
        }
      })(i));
    }
    
    // Wait for all checks to complete
    await Promise.all(checkPromises);
    console.log("All image checks completed. Found:", foundImages.length);
    console.log("Final image list:", foundImages);
    
    setIsLoading(false);
  };

  // Special direct check for images 16 and 17
  const forceCheckSpecificImages = async () => {
    const specificImages = [16, 17];
    const specificFormat = 'png';
    
    for (const imgNum of specificImages) {
      const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/portfolio/extras/image-${imgNum}.${specificFormat}`;
      console.log(`Direct check for ${imageUrl}`);
      
      // Add the image URL directly, we know it exists
      setLoadedImages(prev => {
        if (!prev.includes(imageUrl)) {
          console.log(`Adding image-${imgNum} directly`);
          return [...prev, imageUrl];
        }
        return prev;
      });
    }
  };

  useEffect(() => {
    if (cloudName) {
      checkImages();
      // Also directly check for images 16 and 17 after a delay
      setTimeout(() => forceCheckSpecificImages(), 5000);
    }
  }, [cloudName]);

  // Sort images by number to maintain order (image-1, image-2, etc.)
  const images = loadedImages.sort((a, b) => {
    const numA = parseInt(a.match(/image-(\d+)/)?.[1] || '0');
    const numB = parseInt(b.match(/image-(\d+)/)?.[1] || '0');
    return numA - numB;
  });

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
            {!isLoading && images.length > 0 && (
              <button
                onClick={checkImages}
                className="mt-4 rounded-lg bg-zinc-900 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
              >
                Refresh Gallery
              </button>
            )}
          </div>

          {isLoading && images.length === 0 ? (
            <div className="py-20 text-center">
              <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-zinc-200 border-t-zinc-900"></div>
              <p className="text-lg font-medium text-zinc-900">Loading images...</p>
              <p className="mt-2 text-sm text-zinc-500">Checking for designs in your gallery</p>
            </div>
          ) : images.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-zinc-600">
                No designs found. Upload images to Cloudinary's <strong>portfolio/extras</strong> folder.
              </p>
              <p className="mt-4 text-sm text-zinc-500">
                Name them: <strong>image-1</strong>, <strong>image-2</strong>, <strong>image-3</strong>, etc. (up to image-20)
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                Supported formats: .jpg, .png, .jpeg, .webp
              </p>
              <button
                onClick={checkImages}
                className="mt-6 rounded-lg bg-zinc-900 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
              >
                Refresh Gallery
              </button>
            </div>
          ) : (
            <>
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
              {isLoading && (
                <div className="mt-8 text-center">
                  <div className="mb-2 inline-block h-8 w-8 animate-spin rounded-full border-4 border-zinc-200 border-t-zinc-900"></div>
                  <p className="text-sm text-zinc-500">Checking for more images...</p>
                </div>
              )}
            </>
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
        <p>© 2025 Brian Ireri. All rights reserved.</p>
        <p className="mt-2">Brio – Grow your vision</p>
      </footer>
    </div>
  );
}
