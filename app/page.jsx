"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import { motion } from "framer-motion";
function Page() {
  const titleSlide = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const imageSlideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5 } },
    exit: { opacity: 0, x: 100 },
  };

  return (
    <>
      <head>
        <title>Sara Events and Marketing and SAM Property Listing</title>
        <meta
          name="description"
          content="Sara Events and Marketing is the best event organizer in Ethiopia."
        />
      </head>
      <div className="flex justify-center flex-col lg:flex-col md:flex-col items-center min-h-screen ">
        <motion.main
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleSlide}
        >
          <div className="mb-6 md:mb-8 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-800 mb-2 text-center ">
              Discover Our Services
            </h1>
            <p className="text-base md:text-lg text-gray-600 text-center dark:text-white  w-[70%] mx-auto ">
              Explore a range of services tailored to meet your needs, from
              event management to property investment opportunities.
            </p>
          </div>
        </motion.main>
        <motion.main
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageSlideRight}
        >
          <div className="grid  md:gap-12 grid-cols-1 md:grid-cols-2">
            {/* Event Card */}
            <Card className="w-[350px] mx-auto shadow-md rounded-lg overflow-hidden hover:shadow-[rgba(0,0,0,0.3)] dark:border dark:border-white dark:hover:shadow-[rgba(255,255,255,0.2)] transition-all duration-300">
              <CardHeader className="p-0">
                <img
                  src='https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/3_W7_A9014_1_cb772560c0.jpg'
                  alt="image"
                  width={500}
                  height={210}
                  className="w-full h-[210px] object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl text-center font-semibold text-gray-800 mb-3 dark:text-[#1F995E]">
                  Events Management
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4 dark:text-white">
                  <ul className="list-disc ml-4 font-medium text-[16px] space-y-2">
                    <li>Upcoming Events</li>
                    <li>Event Management</li>
                    <li>Event Gallery</li>
                  </ul>
                </CardDescription>
                <a
                  target="_blank"
                  href="/event"
                  className="block bg-[#137a70] text-white text-center py-2 px-4 rounded hover:scale-105 hover:shadow-lg dark:hover:bg-white dark:hover:text-[#1e995e] dark:hover:border dark:hover:border-[#1e995e] transition-transform duration-300"
                >
                  Event
                </a>
              </CardContent>
            </Card>

            <Card className="w-[350px] mx-auto shadow-md rounded-lg overflow-hidden hover:shadow-[rgba(0,0,0,0.3)] dark:border dark:border-white dark:hover:shadow-[rgba(255,255,255,0.2)] transition-all duration-300">
              <CardHeader className="p-0">
                <img
                  src="https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650749/photo_5800701578242541043_y_1_e6682c900f.jpg"
                  alt="image"
                  width={500}
                  height={210}
                  className="w-full h-[210px] object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl text-center font-semibold text-gray-800 mb-3 dark:text-[#969963]">
                  Property Management
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4 dark:text-white">
                  <ul className="list-disc ml-4 font-medium text-[16px] space-y-2">
                    <li>Available Properties</li>
                    <li>Property Management </li>
                    <li>Investment Opportunities</li>
                  </ul>
                </CardDescription>
                <a
                  target="_blank"
                  href="/property"
                  className="block bg-[#969963] text-white text-center py-2 px-4 rounded hover:scale-105 hover:shadow-lg dark:hover:bg-white dark:hover:text-[#969963] dark:hover:border dark:hover:border-[#969963] transition-transform duration-300"
                >
                  Property
                </a>
              </CardContent>
            </Card>
          </div>
        </motion.main>
      </div>
    </>
  );
}

export default Page;
