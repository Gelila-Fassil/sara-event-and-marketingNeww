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
          <Image
            src="/aboutEvent/bg.webp"
            alt="background"
            fill
            priority
            className="object-cover z-0"
            sizes="100vw"
          />

          <div className="flex items-center justify-center w-full h-full z-10 relative">
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
            <div className="relative h-[400px]">
              <Image
                src={contactData?.serviceImage?.data?.attributes?.url}
                alt={contactData?.serviceImage?.data?.attributes?.alternativeText}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 70vw"
              />
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
            </div>
          </section>

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
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default FashionShow;
