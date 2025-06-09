"use client";
import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function EventContact() {
  return (
    <>
      <Header />

      <section className="hero-section relative w-full h-[50vh] pt-20 ">
        <div className="relative w-full h-full">
          <Image
            src="/aboutEvent/bg.webp"
            alt="About Us Hero"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center p-8">
            <div className="text-white ">
              <h1 className="text-4xl md:text-7xl font-bold mb-4 leading-tight ml-[700PX]">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </section>
      <main className="pt-20">
        <section className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Contact <span className="text-[#137a70]">Us</span>
            </h1>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Get in touch with us for any inquiries about our event management
              services. We're here to help make your event a success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-semibold mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-[#137a70] mt-1" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-gray-600">info@saraevents.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-[#137a70] mt-1" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-gray-600">+251 911 123 456</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-[#137a70] mt-1" />
                      <div>
                        <h3 className="font-semibold">Address</h3>
                        <p className="text-gray-600">
                          Bole, Addis Ababa, Ethiopia
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-[#137a70] mt-1" />
                      <div>
                        <h3 className="font-semibold">Working Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM
                        </p>
                        <p className="text-gray-600">
                          Saturday: 10:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#137a70] focus:ring-[#137a70]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#137a70] focus:ring-[#137a70]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#137a70] focus:ring-[#137a70]"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#137a70] text-white py-2 px-4 rounded-md hover:bg-[#0f5d54] transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Map */}
            <div className="mt-12">
              <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5205105887855!2d38.7619!3d9.0221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDEnMjAuMCJOIDM4wrA0NSc0Mi44IkU!5e0!3m2!1sen!2set!4v1635000000000!5m2!1sen!2set"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
