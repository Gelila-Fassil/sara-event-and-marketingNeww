"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function CharityEvent() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroTitle = "Charity ";
  const heroSecondTitle = "Event";

  const serviceImage = {
    url: "/aboutEvent/large_3_W7_A9014_1_cb772560c0.jpg",
    alternativeText: "Charity Event Image",
  };

  const serviceContent = [
    {
      children: [
        {
          text: "We specialize in planning and executing professional corporate events that align with your brand and business goals. From team-building retreats to formal galas, we ensure every detail reflects your company's values.",
        },
      ],
    },
    {
      children: [
        {
          text: "Our corporate event planning process starts with understanding your company's culture, objectives, and audience. We focus on delivering events that not only achieve your business goals but also leave a lasting impression on attendees.",
        },
      ],
    },
  ];

  const serviceDetail2 = [
    {
      children: [
        {
          text: " Sara Events stands out by offering a personalized approach, ensuring that each corporate event is unique, engaging, and seamlessly executed. ",
        },
      ],
    },
    {
      children: [
        {
          text: "From venue selection to audiovisual setup, catering, and post-event feedback, we handle every aspect with professionalism and precision.",
        },
      ],
    },
  ];

  const galleryImages = [
    "/aboutEvent/large_3_W7_A9014_1_cb772560c0.jpg",
    "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732611284/charity2.jpg",
    "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732611291/charity3.jpg",
    "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732611301/charity4.jpg",
  ];

  const goToNextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const goToPrevImage = () => {
    const prevIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const openLightbox = (src) => setSelectedImage(src);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <>
      <head>
        <title>Charity Event | Sara Events and Marketing</title>
        <meta
          name="description"
          content="Sara Events and Marketing is the best event organizer in Ethiopia."
        />
      </head>

      <Header />

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
            <h1 className="text-6xl font-bold mb-4 text-white leading-tight w-full text-center uppercase">
              {heroTitle} <span className="font-bold">{heroSecondTitle}</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="mt-10 mb-20">
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

          {/* Text Content */}
          <main className="mt-5 lg:px-4 px-2">
            {serviceContent.map((item, idx) => (
              <p
                key={idx}
                className="font-normal text-lg text-justify mb-2"
                style={{ letterSpacing: "1px" }}
              >
                {item.children[0].text}
              </p>
            ))}

            {/* Gallery */}
            <section className="py-16 dark:bg-gray-900">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                  modules={[Autoplay]}
                  breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 20 },
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 3, spaceBetween: 40 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                  }}
                  className="w-[100%] mx-auto"
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
                          <span className="text-white font-bold text-lg">
                            View Full Image
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

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
            </section>

            {/* Additional Text */}
            {serviceDetail2.map((item, idx) => (
              <p
                key={idx}
                className="font-normal text-lg text-justify mb-2"
                style={{ letterSpacing: "1px" }}
              >
                {item.children[0].text}
              </p>
            ))}
          </main>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CharityEvent;
