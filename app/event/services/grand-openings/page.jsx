"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const GrandOpenings = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const serviceImage = {
    url: "/event/services/grand-openings/service-image.jpg",
    alternativeText: "Grand Opening Event Service"
  };

  const galleryImages = [
    "/event/services/grand-openings/gallery-1.jpg",
    "/event/services/grand-openings/gallery-2.jpg",
    "/event/services/grand-openings/gallery-3.jpg",
    // Add more gallery images as needed
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    setCurrentImageIndex(galleryImages.indexOf(image));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevImage = () => {
    const newIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  const goToNextImage = () => {
    const newIndex = (currentImageIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
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
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4 text-white leading-tight uppercase">
                Grand Opening Events
              </h1>
              <p className="text-xl text-white">
                Creating memorable launch experiences for your business
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="w-[96%] lg:w-[70%] pb-10 mx-auto shadow-lg dark:border border-[rgba(255,255,255,0.6)]">
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

          {/* Service Content */}
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6">Grand Opening Events</h2>
            <p className="text-lg mb-6">
              Make your business launch unforgettable with our comprehensive grand opening event services. 
              We handle everything from venue selection to entertainment, ensuring your opening day creates 
              lasting impressions and generates buzz in your community.
            </p>

            {/* Add more content sections as needed */}
          </div>

          {/* Gallery Section */}
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6">Our Grand Opening Gallery</h3>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              autoplay={{ delay: 3000 }}
              className="w-full"
            >
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
                      <span className="text-white text-lg font-semibold">View Image</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

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
    </main>
  );
};

export default GrandOpenings; 