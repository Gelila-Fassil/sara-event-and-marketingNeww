"use client";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Button } from "@/components/ui/button";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import {
  HeroSlides,
  upcomingEvents,
  EventService,
  achievementSection,
  tabs,
  allGalleries,
} from "@/app/property/mockData";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [counterOn, setCounterOn] = useState(false);


  const [activeTab, setActiveTab] = useState("All");
 
  const filteredGalleries =
    activeTab === "All"
      ? allGalleries
      : allGalleries.filter((gallery) => gallery.category === activeTab);

  
  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showPrevImage = () => {
    setSelectedImageIndex((prev) =>
      prev > 0 ? prev - 1 : filteredGalleries.length - 1
    );
  };

  const showNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev < filteredGalleries.length - 1 ? prev + 1 : 0
    );
  };


  useEffect(() => {
    setMounted(true);
    return () => {
      setSelectedImageIndex(null);
      setCounterOn(false);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  // Animations
  const titleSlide = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const descriptionSlide = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5 } },
  };
  const buttonSlide = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.8 } },
  };
  const cardVariants = [
    {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.8 } },
    },
    {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } },
    },
    {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.8 } },
    },
  ];

 
  return (
    <>
      <head>
        <title>Sara Events and Marketing</title>
        <meta
          name="description"
          content="Sara Events and Marketing is the best event organizer in Ethiopia."
        />
      </head>
      <Header />
      {/* hero section */}

      <div className="hero-section relative w-full h-[80vh] mb-0 pt-20">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop={true}
          speed={800}
          slidesPerView={1}
          grabCursor={true}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="h-[100%]"
        >
          {HeroSlides.slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={slide.imageUrl}
                  alt={slide.altText}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center p-8">
                  <div className="text-white text-left max-w-lg ml-12">
                    <motion.h1
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={titleSlide}
                      className="text-5xl font-bold mb-4 leading-tight shadow-lg"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={descriptionSlide}
                      className="text-xl mb-6 leading-relaxed shadow-lg"
                    >
                      {slide.description}
                    </motion.p>
                    <motion.a
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={buttonSlide}
                      href="/about"
                      className="bg-[#137a70] text-white hover:bg-white hover:text-[#137a70] hover:border hover:border-[#137a70] py-3 px-6 rounded hover:shadow-2xl hover:scale-110 transition-all duration-300 shadow-md"
                    >
                      <Link href="/event/about">Learn More</Link>
                    </motion.a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Upcoming Events */}
      <section className="pb-16 pt-10 bg-[url('/bg2.jpg')] dark:bg-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-4xl font-bold text-gray-800 text-center mb-5 leading-tight dark:text-white"
          >
            Upcoming <span className="font-bold text-[#137a70]">Events</span>
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-[90%] mx-auto">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105"
                >
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                  <div className="flex items-center mb-2">
                    <Calendar className="mr-2 w-5 h-5" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <MapPin className="mr-2 w-5 h-5" />
                    <span>{event.location}</span>
                  </div>
                  <p className="mb-6">{event.description}</p>
                  <div className="absolute inset-0 rounded-lg pointer-events-none border border-white/20"></div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-300">
                No upcoming events.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <main className="mt-9">
        <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start py-12">
          <div className="space-y-5">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={titleSlide}
              className="text-4xl font-bold text-gray-800 leading-tight dark:text-white"
            >
              About <span className="font-bold text-[#137a70]">Us</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={descriptionSlide}
              className="text-lg text-gray-600 leading-relaxed dark:text-white mb-10"
            >
              Sara Events and Marketing is a leading event management company
              dedicated to creating unforgettable experiences. Our team
              specializes in organizing charity events, corporate functions,
              conferences, grand openings, and product launches.
            </motion.p>
            <motion.a
              href="/event/about"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={buttonSlide}
              className="bg-[#137a70] mb-5 hover:bg-white hover:text-[#137a70] hover:border hover:border-[#137a70] text-white py-3 px-6 rounded hover:shadow-2xl hover:scale-110 transition-all duration-300 shadow-md"
            >
              Learn More
            </motion.a>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants[2]}
            className="w-full h-full"
          >
            <img
              src="/aboutEvent/large_3_W7_A9014_1_cb772560c0.jpg"
              alt="About Sara Events"
              className="rounded-lg shadow-lg w-full h-[80%] object-cover"
              width={500}
              height={100}
            />
          </motion.div>
        </section>

        {/* Service Section */}
        <section className="pb-12 pt-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 dark:text-white">
              Our <span className="text-[#137a70] font-bold">Service</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-white">
              We offer a wide range of event management services, customized to
              suit your specific needs. From corporate functions to private
              celebrations, our team ensures every detail is expertly handled
              for a smooth and memorable experience
            </p>
          </div>
          <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {EventService.data.map((item, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants[index % 3]}
                className="shadow-md hover:shadow-[rgba(0,0,0,0.6)] hover:shadow-md dark:border dark:border-white dark:hover:shadow-[rgba(255,255,255,0.2)] dark:hover:shadow-lg"
                key={index}
              >
                <CardHeader className="p-0">
                  <img
                    src={item.image.url}
                    alt={item.image.alternativeText}
                    width={400}
                    height={250}
                    className="w-full h-52 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-semibold text-gray-800 mb-2 dark:text-[#1F995E]">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4 dark:text-white">
                    {item.description}
                  </CardDescription>
                  <a
                    href="/event/services"
                    className="bg-[#137a70] text-white dark:hover:bg-white dark:hover:text-[#137a70] dark:hover:border dark:hover:border-[#137a70] py-2 px-4 rounded hover:scale-110 hover:shadow-lg transition-all duration-300"
                  >
                    Learn More
                  </a>
                </CardContent>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Achievement Section */}
        <section className="pb-12 pt-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 dark:text-white">
              Our <span className="text-[#137a70] font-bold">Achievement</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-white">
              {achievementSection.description}
            </p>
          </div>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="bg-[#137a70] w-[80%] mx-auto rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[80%] mx-auto">
                {achievementSection.cards.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-transparent pb-8 ${
                      index === 0 || index === 1
                        ? "border-r border-r-white"
                        : ""
                    } text-white flex flex-row lg:flex-col lg:items-center items-start h-[80%] my-auto dark:border-b-white`}
                  >
                    <h2 className="text-2xl font-semibold">{item.title}</h2>
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={parseInt(item.title)}
                        duration={3}
                        className="text-6xl font-bold"
                      />
                    )}
                    <span className="ml-2">{item.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollTrigger>
        </section>

        {/* Portfolio Section */}
        <section className="pb-6 text-center dark:bg-none bg-cover bg-center min-h-screen w-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 dark:text-white">
              Our <span className="text-[#137a70] font-bold">Portfolio</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-white dark:font-normal">
              Explore our diverse range of events, carefully curated to showcase
              our expertise in delivering unforgettable experiences across all
              occasions.
            </p>
          </div>
          <div className="dark:bg-none min-h-screen flex flex-col items-center py-10">
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-4 rounded-xl text-sm sm:text-base md:text-[16px] font-medium transition-all ${
                    activeTab === tab
                      ? "bg-[#137a70] text-white shadow-lg"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="w-11/12 flex flex-wrap justify-center gap-6">
              {filteredGalleries.map((gallery) =>
                gallery.images.map((imageUrl, index) => (
                  <div
                    key={`${gallery.id}-${index}`}
                    className="relative p-2 transition-all cursor-pointer"
                    onClick={() => openLightbox(imageUrl)}
                  >
                    <img
                      src={imageUrl}
                      alt={`${gallery.title} ${index + 1}`}
                      className="w-[300px] h-[200px] object-cover rounded-lg shadow-lg transition-transform duration-300"
                    />
                  </div>
                ))
              )}
            </div>

            {selectedImageIndex !== null &&
              filteredGalleries[selectedImageIndex] && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                  <button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 text-white text-xl"
                  >
                    &times;
                  </button>
                  <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 bg-white text-black p-2 rounded-lg hover:cursor-pointer"
                    onClick={showPrevImage}
                  >
                    &#10094;
                  </button>
                  <button
                    onClick={showNextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white text-black p-2 rounded-lg hover:cursor-pointer"
                  >
                    &#10095;
                  </button>
                  <img
                    src={filteredGalleries[selectedImageIndex]?.imageUrl}
                    alt={filteredGalleries[selectedImageIndex]?.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}
          </div>
        </section>

        {/* Working Hours & Map */}
        <section className="dark:bg-gray-900 pb-12 mb-5">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="flex flex-col lg:flex-row items-center lg:justify-between">
              {/* Working Hours */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Working <span className="text-[#137a70]">Hours</span>
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  We are open to serve you during the following hours:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-[#137a70] dark:text-[#137a70] mr-3" />
                    <span className="text-lg text-gray-800 dark:text-gray-200">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-[#137a70] dark:text-[#137a70] mr-3" />
                    <span className="text-lg text-gray-800 dark:text-gray-200">
                      Saturday: 10:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-[#137a70] dark:text-[#137a70] mr-3" />
                    <span className="text-lg text-gray-800 dark:text-gray-200">
                      Sunday: Closed
                    </span>
                  </div>
                </div>
              </div>
              {/* Map */}
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Visit <span className="text-[#137a70]">Us</span>
                </h2>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509006!2d144.9630579153168!3d-37.81627977975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3d4bfb7%3A0x506f0b535df22a0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1681456832979!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
