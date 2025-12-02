"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Logo
  const logoUrl = "https://res.cloudinary.com/dpjlcuq4d/image/upload/v1764679968/portfolio/Inverted_pyramid_20251127_112311_0000_gm7erg.png";
  
  // Canva anniversary video - YouTube embed
  const canvaVideoId = "wCdu3GJvZZc";
  
  // Cloudinary folder configuration with specific image URLs
  const portfolioCategories = [
    {
      category: "Bible Study",
      folder: "Bible%20Study",
      description: "Visual communication for spiritual growth and church events",
      images: [
        "https://res.cloudinary.com/dpjlcuq4d/image/upload/v1715121034/portfolio/Bible%20Study/image-1.jpg.jpg",
        "https://res.cloudinary.com/dpjlcuq4d/image/upload/v1715121034/portfolio/Bible%20Study/image-2.jpg.jpg",
        "https://res.cloudinary.com/dpjlcuq4d/image/upload/v1715121034/portfolio/Bible%20Study/image-3.jpg.jpg"
      ]
    },
    {
      category: "Real estate",
      folder: "Real%20estate",
      description: "Property marketing and real estate campaigns",
      images: [
        // Add your Real estate image URLs - check Cloudinary for exact filenames and extensions
        `https://res.cloudinary.com/${cloudName}/image/upload/portfolio/Real%20estate/image-1.jpg.jpg`,
        `https://res.cloudinary.com/${cloudName}/image/upload/portfolio/Real%20estate/image-2.jpg.jpg`,
        `https://res.cloudinary.com/${cloudName}/image/upload/portfolio/Real%20estate/image-3.jpg.jpg`
      ]
    },
    {
      category: "Politics",
      folder: "Politics",
      description: "Civic engagement and community dialogue initiatives",
      images: [
        "https://res.cloudinary.com/dpjlcuq4d/image/upload/v1764680246/portfolio/Politics/image-1.jpg.png",
        "https://res.cloudinary.com/dpjlcuq4d/image/upload/v1764680246/portfolio/Politics/image-2.jpg.png",
        "https://res.cloudinary.com/dpjlcuq4d/image/upload/v1764680246/portfolio/Politics/image-3.jpg.png"
      ]
    },
    {
      category: "SMEs",
      folder: "SMEs",
      description: "Small business branding and entrepreneurship support",
      images: [
        // Add your SMEs image URLs - check Cloudinary for exact filenames and extensions
        `https://res.cloudinary.com/${cloudName}/image/upload/portfolio/SMEs/image-1.jpg.jpg`,
        `https://res.cloudinary.com/${cloudName}/image/upload/portfolio/SMEs/image-2.jpg.jpg`,
        `https://res.cloudinary.com/${cloudName}/image/upload/portfolio/SMEs/image-3.jpg.jpg`
      ]
    }
  ];
  
  // Placeholder image if folder is empty or images fail to load
  const placeholderImage = `https://res.cloudinary.com/${cloudName}/image/upload/v1/portfolio/placeholder.jpg`;

  const services = [
    {
      name: "Poster Design",
      description: "Event posters built on visual hierarchy, clarity, and purpose"
    },
    {
      name: "Event Flyers",
      description: "Print and digital flyers that communicate with precision and beauty"
    },
    {
      name: "Brand Identity",
      description: "Logos, color systems, and visual languages rooted in principle"
    },
    {
      name: "Social Media Kits",
      description: "Cohesive content systems for consistent, powerful presence"
    },
    {
      name: "Template Systems",
      description: "Scalable design frameworks for ongoing communication needs"
    },
    {
      name: "Principle-Driven Design",
      description: "Custom projects guided by biblical wisdom and design excellence"
    }
  ];

  const testimonials = [
    {
      name: "Pastor Michael Odhiambo",
      role: "Lead Pastor, New Life Church",
      text: "Brian doesn't just design – he listens, understands our mission, and translates it into visuals that truly represent who we are. His work elevated our entire conference."
    },
    {
      name: "Sarah Wanjiku",
      role: "Founder, Grace Apparel",
      text: "Working with Brian was transformative. He brought clarity to our vision and created a brand identity that feels both timeless and fresh. His principle-driven approach shows."
    },
    {
      name: "David Kimani",
      role: "Event Coordinator",
      text: "Professionalism, creativity, and integrity. Brian delivered exceptional work on tight deadlines without compromising quality. His designs made our event unforgettable."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-zinc-900">
            Brian Ireri
          </Link>
          <div className="flex items-center gap-6">
            <a href="#work" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
              Work
            </a>
            <a href="#about" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
              About
            </a>
            <Link 
              href="/extras"
              className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
            >
              More Designs
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-6 py-20">
        <div className="max-w-4xl space-y-8 text-center">
          {/* Logo */}
          <div className="mx-auto mb-8 w-32 md:w-40">
            <Image
              src={logoUrl}
              alt="Brian Ireri Logo"
              width={160}
              height={160}
              className="h-auto w-full"
              priority
              unoptimized
            />
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 md:text-7xl">
            Brian Ireri
          </h1>
          <p className="text-2xl font-medium text-zinc-600 md:text-3xl">
            Graphic Designer
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-700 md:text-xl">
            Creating visual clarity through principle-driven design. Every project built on timeless foundations, executed with modern precision.
          </p>
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
            Graphics by God's Design
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-zinc-200 bg-zinc-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-3xl font-bold text-zinc-900 md:text-4xl">
            About
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-zinc-700">
                I'm Brian Ireri, a graphic designer specializing in poster design, event flyers, and visual systems for churches, events, brands, and SMEs.
              </p>
              <p className="text-lg leading-relaxed text-zinc-700">
                What sets me apart: I design from principle, not preference. Every project is built on universal design principles—Educative, Impact, Usability, Aesthetic, Wisdom— and executed with modern precision.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-zinc-900">Mission</h3>
                <p className="leading-relaxed text-zinc-700">
                  To serve brands and organizations with design that honors their vision, serves people, and elevates messages worth sharing.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-zinc-900">Design Framework</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 rounded bg-zinc-900 px-2 py-1 text-xs font-bold text-white">E</span>
                    <div>
                      <p className="font-medium text-zinc-900">Educative</p>
                      <p className="text-sm text-zinc-600">Teaching through visual clarity</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 rounded bg-zinc-900 px-2 py-1 text-xs font-bold text-white">I</span>
                    <div>
                      <p className="font-medium text-zinc-900">Impact</p>
                      <p className="text-sm text-zinc-600">Designs that move people to action</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 rounded bg-zinc-900 px-2 py-1 text-xs font-bold text-white">U</span>
                    <div>
                      <p className="font-medium text-zinc-900">Usability</p>
                      <p className="text-sm text-zinc-600">Function drives beautiful form</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 rounded bg-zinc-900 px-2 py-1 text-xs font-bold text-white">A</span>
                    <div>
                      <p className="font-medium text-zinc-900">Aesthetic</p>
                      <p className="text-sm text-zinc-600">Visual excellence as communication</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 rounded bg-zinc-900 px-2 py-1 text-xs font-bold text-white">W</span>
                    <div>
                      <p className="font-medium text-zinc-900">Wisdom</p>
                      <p className="text-sm text-zinc-600">Timeless principles, modern execution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canva Anniversary Video Section */}
      <section className="border-t border-zinc-200 bg-zinc-900 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Top 1% Worldwide
          </h2>
          <p className="mb-8 text-lg text-zinc-300">
            Recognized by Canva as a top 1% social media designer worldwide in the last year
          </p>
          <div className="relative mx-auto aspect-[9/16] max-w-md overflow-hidden rounded-lg bg-zinc-800 md:aspect-video md:max-w-3xl">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${canvaVideoId}`}
              title="Canva Top 1% Designer Recognition"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="border-t border-zinc-200 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-16 text-3xl font-bold text-zinc-900 md:text-4xl">
            When Design Meets Opportunity
          </h2>
          
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-zinc-100">
              <Image
                src={`https://res.cloudinary.com/${cloudName}/image/upload/portfolio/Real%20estate/image-1.jpg.jpg`}
                alt="Real estate property design that won a major client"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-zinc-900">
                One Graphic. One Message. One Major Client.
              </h3>
              
              <div className="space-y-4 text-lg leading-relaxed text-zinc-700">
                <p>
                  <strong>Here's what happened:</strong> A real estate company needed a property flyer. Simple request. But here's the thing—they didn't just need a flyer. They needed their message to land with the right people.
                </p>
                
                <p>
                  The graphic was shared in a residents' association group. Within hours, inquiries started coming in. Within days, the company secured a major client who saw the post and immediately recognized quality, clarity, and professionalism.
                </p>
                
                <p>
                  <strong>Why did it work?</strong> Because good design isn't just about looking nice. It's about being <em>seen</em>, <em>understood</em>, and <em>trusted</em> by the right audience at the right moment.
                </p>
                
                <p className="border-l-4 border-zinc-900 pl-4 italic">
                  "Your audience doesn't need more noise. They need clarity. They need a message that speaks directly to them—one that makes them think, 'This is exactly what I've been looking for.'"
                </p>
                
                <p>
                  That's the power of principle-driven design. It doesn't just communicate. It connects. It converts.
                </p>
                
                <div className="mt-8 rounded-lg bg-zinc-50 p-6">
                  <p className="font-semibold text-zinc-900">The Result:</p>
                  <p className="mt-2 text-zinc-700">
                    One graphic shared in the right place led to a major client partnership. Not because of luck. Because of design that understood its audience and delivered exactly what they needed to say yes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-3xl font-bold text-zinc-900 md:text-4xl">
            Tools & Expertise
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {/* High Proficiency */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-zinc-900">High Proficiency</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium text-zinc-900">Canva</span>
                    <span className="text-sm text-zinc-600">Expert</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
                    <div className="h-full w-[95%] bg-zinc-900"></div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium text-zinc-900">Photoshop</span>
                    <span className="text-sm text-zinc-600">Expert</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
                    <div className="h-full w-[90%] bg-zinc-900"></div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium text-zinc-900">Web Design</span>
                    <span className="text-sm text-zinc-600">Advanced</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
                    <div className="h-full w-[85%] bg-zinc-900"></div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium text-zinc-900">Video Editing</span>
                    <span className="text-sm text-zinc-600">Advanced</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
                    <div className="h-full w-[85%] bg-zinc-900"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Moderate Proficiency */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-zinc-900">Proficient</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium text-zinc-900">InDesign</span>
                    <span className="text-sm text-zinc-600">Proficient</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
                    <div className="h-full w-[70%] bg-zinc-900"></div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium text-zinc-900">Illustrator</span>
                    <span className="text-sm text-zinc-600">Proficient</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
                    <div className="h-full w-[70%] bg-zinc-900"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 rounded-lg bg-white p-6">
                <p className="font-semibold text-zinc-900">What This Means for You:</p>
                <p className="mt-2 text-zinc-700">
                  Whether you need a quick social media graphic, a comprehensive brand system, or a full web presence—I have the tools and expertise to bring your vision to life with precision and impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="border-t border-zinc-200 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-16 text-3xl font-bold text-zinc-900 md:text-4xl">
            Selected Work
          </h2>
          
          {portfolioCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20 last:mb-0">
              {/* Category Header */}
              <div className="mb-10">
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-bold text-zinc-900 md:text-3xl">
                    {category.category}
                  </h3>
                  <div className="h-px flex-1 bg-zinc-300"></div>
                </div>
                <p className="mt-3 text-lg text-zinc-600">{category.description}</p>
              </div>
              
              {/* Image Gallery - Displays images from category.images array */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.images.map((imageUrl, imageIndex) => (
                  <div 
                    key={imageIndex} 
                    className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-lg bg-zinc-100"
                    onClick={() => setSelectedImage(imageUrl)}
                  >
                    <Image
                      src={imageUrl}
                      alt={`${category.category} work ${imageIndex + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-10"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-3xl font-bold text-zinc-900 md:text-4xl">
            Services
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold text-zinc-900">
                  {service.name}
                </h3>
                <p className="leading-relaxed text-zinc-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="border-t border-zinc-200 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-3xl font-bold text-zinc-900 md:text-4xl">
            Testimonials
          </h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="space-y-4">
                <p className="leading-relaxed text-zinc-700">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-zinc-900">{testimonial.name}</p>
                  <p className="text-sm text-zinc-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-zinc-200 bg-zinc-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Let's Create Together
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-zinc-300">
            Whether you're planning an event, launching a brand, or need design that serves your mission – let's talk.
          </p>
          
          {/* Contact Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/254715124248"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition-all hover:bg-green-700"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href="mailto:brianmutugi07@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-zinc-900 transition-all hover:bg-zinc-100"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
          </div>
          
          {/* Email Display */}
          <p className="mt-6 text-sm text-zinc-400">
            brianmutugi07@gmail.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-900 px-6 py-8 text-center text-sm text-zinc-400">
        <p>© 2025 Brian Ireri. All rights reserved.</p>
        <p className="mt-2">Brio – Grow your vision</p>
      </footer>

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
              height={1600}
              className="h-auto max-h-[90vh] w-auto object-contain"
              unoptimized
            />
          </div>
        </div>
      )}
    </div>
  );
}
