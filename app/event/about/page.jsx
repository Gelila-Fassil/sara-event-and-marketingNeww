"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function About() {
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
        <title>About | Sara Events and Marketing</title>
        <meta
          name="description"
          content="Sara Events and Marketing is the best event organizer in Ethiopia."
        />
      </head>

      <Header />

      {/* Hero Section */}
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
                About Us

              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start py-12 md:py-16">
        <div className="space-y-5">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleSlide}
            className="text-4xl font-bold text-gray-800 leading-tight dark:text-white"
          >
            About <span className="text-[#137a70] font-bold">Us</span>
          </motion.h1>

          <div className="space-y-4">
            <p className="text-lg text-gray-600 leading-relaxed dark:text-gray-300">
              At Sara Events and Marketing, we believe in creating unforgettable
              moments that connect people, celebrate milestones, and inspire
              communities. With years of experience in the event planning
              industry, our team is dedicated to providing exceptional service,
              innovative solutions, and flawless execution.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed dark:text-gray-300">
              We pride ourselves on understanding our clients' unique needs and
              turning their ideas into extraordinary realities. Whether it’s a
              corporate gathering, a glamorous fashion show, or a heartfelt
              charity event, we are passionate about delivering excellence every
              step of the way.
            </p>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageSlideRight}
          className="w-full h-full"
        >
          <img
            src="/aboutEvent/large_3_W7_A9014_1_cb772560c0.jpg"
            alt="About Sara Events"
            className="rounded-xl shadow-xl w-full h-[400px] object-cover"
          />
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
              Our Mission{" "}
              <span className="text-[#137a70] font-bold">Our Vision</span>
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto dark:text-gray-300">
              To provide exceptional event management services that exceed
              expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#137a70] bg-opacity-10 flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#137a70]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center dark:text-white">
                Event Planning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                We plan and execute unforgettable events with precision and
                creativity
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#137a70] bg-opacity-10 flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#137a70]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center dark:text-white">
                Marketing Strategy
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Innovative marketing solutions to maximize your event's impact
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#137a70] bg-opacity-10 flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#137a70]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center dark:text-white">
                Client Focus
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Personalized service tailored to your unique needs and vision
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={titleSlide}
                className="text-4xl font-bold text-gray-800 dark:text-white"
              >
                Why Choose Us{" "}
                <span className="text-[#137a70] font-bold">Our Strengths</span>
              </motion.h2>

              <p className="text-xl text-gray-600 mt-6 mb-8 dark:text-gray-300">
                We offer unmatched service quality and professionalism
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#137a70] bg-opacity-10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#137a70]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      Tailored Services
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      We understand that no two events are the same, so we craft
                      every detail to match your unique needs and preferences
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#137a70] bg-opacity-10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#137a70]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      Client-Centered Approach
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      Your satisfaction is our priority, and we work closely
                      with you to exceed expectations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#137a70] bg-opacity-10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#137a70]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      Stress-Free Experience
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      From start to finish, we manage all aspects of your event,
                      allowing you to relax and enjoy the occasion.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#137a70] bg-opacity-10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#137a70]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      Innovation and Creativity
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      We stay ahead of trends to provide fresh ideas and
                      creative solutions that elevate your event.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageSlideRight}
              className="w-full h-full"
            >
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-full h-full bg-[#137a70] bg-opacity-20 rounded-2xl"></div>
                <img
                  src="/aboutEvent/whyUs.jpg"
                  alt="Why Choose Us"
                  className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
              Client{" "}
              <span className="text-[#137a70] font-bold">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto dark:text-gray-300">
              Hear what our clients say about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <div className="text-yellow-400 flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic dark:text-gray-300">
                "Sara Events transformed our corporate gala into an
                unforgettable experience. Their attention to detail was
                impeccable!"
              </p>
              <div className="mt-6 flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Abebe Kebede
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    CEO, Tech Solutions Inc.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <div className="text-yellow-400 flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic dark:text-gray-300">
                "Our wedding was perfect thanks to Sara Events. They handled
                everything from start to finish with professionalism."
              </p>
              <div className="mt-6 flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Meron Getachew
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Happy Bride
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <div className="text-yellow-400 flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic dark:text-gray-300">
                "Working with Sara Events on our product launch was a
                game-changer. Their marketing expertise made all the
                difference!"
              </p>
              <div className="mt-6 flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Tewodros Alemayehu
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Marketing Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;