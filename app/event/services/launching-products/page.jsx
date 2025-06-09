"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

      <section className="hero-section relative w-full h-[50vh] pt-20">
        <div className="relative w-full h-full">
          {/* Background image */}
          <Image
            src="/aboutEvent/bg.webp"
            alt="background"
            fill
            priority
            className="object-cover z-0"
            sizes="100vw"
          />

          {/* Text overlay */}
          <div className="flex items-center justify-center w-full h-full z-10 relative">
// ... existing code ...
          {/* Service Image */}
          <div>
            <div className="relative h-[400px]">
              <Image
                src={serviceImage.url}
                alt={serviceImage.alternativeText}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 70vw"
              />
            </div>
          </div>
// ... existing code ...
                  {galleryImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className="relative group cursor-pointer h-[300px]"
                        onClick={() => openLightbox(image)}
                      >
                        <Image
                          src={image}
                          alt="Gallery Image"
                          fill
                          className="rounded-lg shadow-lg dark:border dark:border-white object-cover group-hover:opacity-75"
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// ... existing code ...
              {/* Lightbox */}
              {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="relative w-[85%] h-[85%]">
                    <Image
                      src={selectedImage}
                      alt="Selected"
                      fill
                      className="rounded-lg object-contain"
                      sizes="85vw"
                    />
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={closeLightbox}
                    className="absolute top-6 right-6 hover:cursor-pointer bg-white p-3 rounded-full"
                  >
                    <Image
                      src="https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732648286/x_solid_1_1_328c7cb152.svg"
                      alt="Close"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </button>

                  {/* Prev/Next Buttons */}
                  <button
                    onClick={goToPrevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
                  >
                    <Image
                      src="https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732648282/angle_left_solid_1_aff896a75a.webp"
                      alt="Previous"
                      width={30}
                      height={30}
                      className="w-8 h-8"
                    />
                  </button>
                  <button
                    onClick={goToNextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
                  >
                    <Image
                      src="https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732648282/angle_right_solid_1_aff896a75a.webp"
                      alt="Next"
                      width={30}
                      height={30}
                      className="w-8 h-8"
                    />
                  </button>
                </div>
              )}
// ... existing code ... 