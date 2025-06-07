"use client";
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { gallery } from "@/app/property/mockData"; 

export default function EventGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  
  const openLightbox = (index) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  const showNextImage = () => setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length);
  const showPrevImage = () => setSelectedImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <>
      <Header />

      <section className="hero-section relative w-full h-[50vh] pt-20 ">
        <div className="relative w-full h-full">
          <img
            src="/aboutEvent/bg.webp"
            alt="About Us Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center p-8">
            <div className="text-white ">
              <h1 className="text-4xl md:text-7xl font-bold mb-4 leading-tight ml-[700PX]">
               Gallary
              </h1>
            </div>
          </div>
        </div>
      </section>
      <main className="pt-20">
        <section className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Our <span className="text-[#137a70]">Gallery</span>
            </h1>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Explore our collection of memorable events and moments we've
              created for our clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={img.url}
                    // alt={img.attributes.alternativeText}
                    className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to enlarge
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Lightbox */}
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
            >
              ×
            </button>
            <button
              onClick={showPrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300"
            >
              ‹
            </button>
            <button
              onClick={showNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300"
            >
              ›
            </button>
            <img
              src={gallery[selectedImageIndex].url}
              // alt={galleryImages[selectedImageIndex].attributes.alternativeText}
              className="max-w-[90%] max-h-[90vh] object-contain"
            />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
} 