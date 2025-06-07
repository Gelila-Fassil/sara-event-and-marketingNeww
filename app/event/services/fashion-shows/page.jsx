"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mockFashionShowData } from "@/app/property/mockData";

function FashionShow() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { blocks } = mockFashionShowData.fashionShow.data.attributes;
  const heroData = blocks.find(
    (block) => block.__typename === "ComponentComponentsImage"
  );
  const contactData = blocks.find(
    (block) => block.__typename === "ComponentLayoutServiceDetail"
  );
  const galleryImages = contactData?.serviceGallery?.data?.map(
    (image) => image?.attributes?.url
  );

  const goToNextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages?.length;
    setSelectedImage(galleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const goToPrevImage = () => {
    const prevIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const serviceContent = contactData?.serviceContent;
  const serviceDetail = contactData?.serviceDetail2;

  const openLightbox = (src) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Header />
      <section className="hero-section relative w-full h-[50vh] pt-20">
        <div className="relative w-full h-full">
          <img
            src={heroData?.image?.data?.attributes?.url}
            alt={heroData?.image?.data?.attributes?.alternativeText}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4 text-white leading-tight uppercase">
                {contactData?.serviceTitle?.title}
                <span className="font-bold block mt-2">
                  {contactData?.serviceTitle?.secondTitle}
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 mb-20">
        <div className="w-[96%] lg:w-[70%] pb-10 mx-auto shadow-lg dark:border border-[rgba(255,255,255,0.6)]">
          <div>
            <div className="h-[50%]">
              {contactData?.serviceImage?.data?.attributes?.url && (
                <img
                  src={contactData.serviceImage.data.attributes.url}
                  alt={contactData.serviceImage.data.attributes.alternativeText}
                  className="w-full h-[400px] object-cover"
                />
              )}
            </div>
          </div>
          <main className="mt-5 lg:px-4 px-2">
            {serviceContent?.map((content, index) => (
              <p
                key={index}
                className="font-normal text-lg text-justify mb-4"
                style={{ letterSpacing: "1px" }}
              >
                {content.children[0].text}
              </p>
            ))}

            {serviceDetail?.map((detail, index) => (
              <div key={index} className="mt-6">
                <p
                  className="font-normal text-lg text-justify whitespace-pre-line"
                  style={{ letterSpacing: "1px" }}
                >
                  {detail.children[0].text}
                </p>
              </div>
            ))}
          </main>

          <section className="py-16 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
              <div>
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
                  {galleryImages?.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className="relative group cursor-pointer"
                        onClick={() => openLightbox(image)}
                      >
                        <img
                          src={image}
                          alt={`Fashion Show Gallery Image ${index + 1}`}
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
            </div>
          </section>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
              <div className="relative w-[85%] h-[85%]">
                <div className="relative w-full h-full">
                  <img
                    src={selectedImage}
                    alt="Selected Image"
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <button
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                  onClick={closeLightbox}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                  onClick={goToPrevImage}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                  onClick={goToNextImage}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default FashionShow;
