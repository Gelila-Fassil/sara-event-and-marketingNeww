

"use client";
import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


function Service() {
  const isLoading = false;

  const serviceData = {
    ServiceCard: [
      {
        title: "Charity Events",
        description:
          "We specialize in planning and executing professional corporate events that align with your brand and business goals. From team-building retreats to formal galas, we ensure every detail reflects your company’s values.",
        button: "Learn More",
        href: "/event/services/charity-events",
        image: {
          url: "/picture.webp",
          alternativeText: "Event Planning Service",
        },
      },
      {
        title: "Conferences and Seminars",
        description:
          "Our team organizes seamless conferences and seminars tailored to engage your audience, with expert coordination of venues, technology, and schedules for a successful experience.",
        button: "Explore",
        href: "/event/services/conferences-and-seminars",
        image: {
          url: "/meeting2.webp",
          alternativeText: "Marketing Campaign Service",
        },
      },
      {
        title: "Corporate Events",
        description:
          "Make a lasting impression with our creative and impactful product launch events, designed to generate buzz and spotlight your brand’s latest innovation.",
        button: "Get Started",
        href: "/event/services/corporate-event",
        image: {
          url: "/meeting.webp",
          alternativeText: "Brand Management Service",
        },
      },
      {
        title: "Fashion Shows ",
        description:
          "Our expertise in organizing fashion shows ensures a stunning and memorable event that showcases your designs with flawless coordination and creative flair. ",
        button: "Get Started",
        href: "/event/services/fashion-shows",
        image: {
          url: "/show2.webp",
          alternativeText: "Brand Management Service",
        },
      },
      {
        title: "Grand Openings",
        description:
          " Celebrate your milestone with a grand opening event that captivates and excites your audience, leaving a remarkable first impression of your brand or venue.",
        button: "Get Started",
        href: "/event/services/grand-opening",
        image: {
          url: "/speech.webp",
          alternativeText: "Brand Management Service",
        },
      },
      {
        title: "Product Launches",
        description:
          "Make a lasting impression with our creative and impactful product launch events, designed to generate buzz and spotlight your brand’s latest innovation",
        button: "Get Started",
        href: "/event/services/launching",
        image: {
          url: "/speech2.webp",
          alternativeText: "Brand Management Service",
        },
      },
      // {
      //   title: "Products and Movie",
      //   description:
      //     " Welcome to our Products and Movie Services, where we bring your brand and cinematic vision to life. Our comprehensive service combines product showcasing with professional video production to create compelling visual stories that resonate with your audience.",
      //   button: "Get Started",
      //   href: "/event/services/products-and-movie",
      //   image: {
      //     url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732700002/brand_management.jpg",
      //     alternativeText: "Brand Management Service",
      //   },
      // },
    ],
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
        <title>Service | Sara Events and Marketing</title>
        <meta
          name="description"
          content="Sara Events and Marketing is the best event organizer in Ethiopia."
        />
      </head>

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
                Our Services
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 pt-14">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 dark:text-white">
            Our <span className="text-[#137a70] font-bold">Service</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-white"></p>
        </div>

        <section className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {serviceData.ServiceCard.map((item, index) => {
            const { image, title, description, href, button } = item;
            const imageUrl = image ? `${image.url}` : null;
            const altText = image?.alternativeText || "Service Image";

            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants[index % 3]}
                className="shadow-md dark:border dark:border-white dark:hover:shadow-sm dark:hover:shadow-white"
              >
                <CardHeader className="p-0">
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={altText}
                      width={400}
                      height={250}
                      className="w-full h-52 object-cover"
                    />
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl font-semibold text-gray-800 mb-2 dark:text-[#1F995E]">
                    {title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4 dark:text-white">
                    {description}
                  </CardDescription>
                  {href && button && (
                    <Link
                      href={href}
                      target="_blank"
                      className="bg-[#137a70] hover:bg-white hover:text-[#137a70] hover:border hover:border-[#137a70] text-white py-2 px-4 rounded hover:scale-110 hover:shadow-lg transition-all duration-300"
                    >
                      {button}
                    </Link>
                  )}
                </CardContent>
              </motion.div>
            );
          })}
        </section>
      </section>

      <Footer />
    </>
  );
}

export default Service;
