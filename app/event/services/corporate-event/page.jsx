"use client";
import React, { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function CharityEvent() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroTitle = "Corporate" ;
  const heroSecondTitle = "Events";

  const serviceImage = {
    url: "/meeting.webp",
    alternativeText: "Charity Event Image",
  };

  const serviceContent = [
    {
      children: [
        {
          text: " We specialize in planning and executing professional corporate events that align with your brand and business goals.  From team-building retreats to formal galas, we ensure every detail reflects your company’s values. ",
        },
      ],
    },
    {
      children: [
        {
          text: "Our corporate event planning process starts with understanding your company’s culture, objectives, and audience.",
        },
      ],
    },
  ];

  const serviceDetail2 = [
    {
      children: [
        {
          text: " We focus on delivering events that not only achieve your business goals but also leave a lasting impression on attendees. ",
        },
      ],
    },
    {
      children: [
        {
          text: "Sara Events stands out by offering a personalized approach, ensuring that each corporate event is unique, engaging, and seamlessly executed. From venue selection to audiovisual setup, catering, and post-event feedback, we handle every aspect with professionalism and precision. ",
        },
      ],
    },
  ];

  const galleryImages = ["/award.webp", "/event.webp", "/meeting.webp"];

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
          <img
            src="/aboutEvent/bg.webp"
            alt="background"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />

          {/* Text overlay */}
          <div className="flex items-center justify-center w-full h-full z-10 relative">
            <h1 className="text-4xl font-bold mb-4 text-white leading-tight w-full text-center uppercase">
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
            <div className="h-[50%]">
              <img
                src={serviceImage.url}
                alt={serviceImage.alternativeText}
                className="w-full h-[400px] object-cover"
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
                        className="relative group cursor-pointer"
                        onClick={() => openLightbox(image)}
                      >
                        <img
                          src={image}
                          alt="Gallery Image"
                          width={500}
                          height={300}
                          className="rounded-lg shadow-lg dark:border dark:border-white w-full h-full object-cover group-hover:opacity-75"
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
                    <img
                      src={selectedImage}
                      alt="Selected"
                      className="rounded-lg object-cover"
                    />
                  </div>

                  {/* Close Button */}
                  <img
                    src="https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732648286/x_solid_1_1_328c7cb152.svg"
                    alt="Close"
                    onClick={closeLightbox}
                    width={40}
                    height={40}
                    className="absolute top-6 right-6 hover:cursor-pointer bg-white py-3 px-3 rounded-full"
                  />

                  {/* Prev/Next Buttons */}
                  <img
                    src="https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732648282/angle_left_solid_1_aff896a75a.webp"
                    onClick={goToPrevImage}
                    width={40}
                    height={40}
                    alt="Previous"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-lg hover:cursor-pointer"
                  />
                  <img
                    src="https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732648282/angle_right_solid_1_6d6e7dbde6.webp"
                    alt="Next"
                    onClick={goToNextImage}
                    height={40}
                    width={40}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-lg hover:cursor-pointer"
                  />
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
