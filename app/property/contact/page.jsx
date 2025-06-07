"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import PropertyHeader from "@/components/PropertyHeader";
import PropertyFooter from "@/components/PropertyFooter";
import Image from "next/image";
import { mockContactData } from "../mockData";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.Name) {
      toast.error("Name required...");
      return false;
    }
    if (!formData.Email) {
      toast.error("Email required...");
      return false;
    }
    if (!formData.Message) {
      toast.error("Message required...");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Message sent successfully!");
      setFormData({ Name: "", Email: "", Message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message");
    }
  };

  const [contactInfo, setContactInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set contact info from mock data
    const filteredContactSections = mockContactData.propertyContactPage.data.attributes.blocks.filter(
      (item) => item.__typename === "ComponentLayoutContactInfo"
    );
    setContactInfo(filteredContactSections);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img
          src="https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732648286/Spin_1x_1_5s_200px_200px_1_04797cef0e.gif"
          alt="Loading..."
          className="w-20 h-20"
        />
      </div>
    );
  }

  return (
    <>
      <PropertyHeader />
      <div className="min-h-screen flex flex-col items-center justify-center dark:bg-gray-900 transition-colors duration-300">
        {/* Hero Section */}
        <Toaster position="top-right" reverseOrder={false} />
        <section className="hero-section relative w-full h-[70vh]">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732695347/background_ac0513044d.jpg"
              alt="alt"
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center p-8">
              <div className="w-[60%] mx-auto">
                <h1 className="text-center text-white font-medium text-4xl">
                  Contact Us
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto py-16 px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                {contactInfo[0]?.contactTitle?.title}{" "}
                <span className="text-[#969963] underline">
                  {contactInfo[0]?.contactTitle?.secondTitle}
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {contactInfo[0]?.contactDescription}
              </p>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <Input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  value={formData.Name}
                  onChange={handleInputChange}
                  className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 placeholder-gray-600 dark:placeholder-gray-500 rounded-lg shadow-md transition-colors"
                />
                <Input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  value={formData.Email}
                  onChange={handleInputChange}
                  className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 placeholder-gray-600 dark:placeholder-gray-500 rounded-lg shadow-md transition-colors"
                />
                <Textarea
                  name="Message"
                  placeholder="Your Message"
                  value={formData.Message}
                  onChange={handleInputChange}
                  rows="5"
                  className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 placeholder-gray-600 dark:placeholder-gray-500 rounded-lg shadow-md transition-colors resize-none"
                />

                <Button
                  type="submit"
                  className="px-8 py-3 bg-[#9e8f72] dark:bg-[#9e8f72] text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-transform transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                {contactInfo[0]?.getInTouch}
              </h2>
              {contactInfo[0]?.contactCard?.map((card, index) => {
                const imageUrl = card?.image?.data?.attributes?.url;
                const altText = card?.image?.data?.attributes?.alternativeText || "contact Icon";

                return (
                  <div className="flex items-start space-x-4" key={index}>
                    <img
                      src={imageUrl}
                      alt={altText}
                      width={25}
                      height={25}
                      className="mt-1"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {card.description}
                      </p>
                      <button className="text-[#9e8f72] hover:text-[#7a6d57] font-medium mt-2">
                        {card.button}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <PropertyFooter />
    </>
  );
};

export default ContactPage;
