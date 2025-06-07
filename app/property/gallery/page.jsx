"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PropertyHeader from "@/components/PropertyHeader";
import PropertyFooter from "@/components/PropertyFooter";
import { mockGalleryData } from "../mockData";

function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [galleries, setGalleries] = useState([]);
  const [filteredGalleries, setFilteredGalleries] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [categories, setCategories] = useState(["All"]);

  // Fetch image size based on window size
  const getImageSize = () => {
    if (typeof window !== "undefined") {
      const screenWidth = window.innerWidth;
      return screenWidth >= 1024
        ? { width: "200px", height: "200px" }
        : screenWidth >= 640
        ? { width: "150px", height: "150px" }
        : { width: "120px", height: "120px" };
    }
    return { width: "120px", height: "120px" };
  };

  const [imageSize, setImageSize] = useState(getImageSize());

  useEffect(() => {
    const handleResize = () => setImageSize(getImageSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize galleries with mock data
  useEffect(() => {
    setGalleries(mockGalleryData.data);
    setFilteredGalleries(mockGalleryData.data);

    // Extract unique categories
    const uniqueCategories = [
      "All",
      ...new Set(mockGalleryData.data.map((gallery) => gallery.attributes.category)),
    ];
    setCategories(uniqueCategories);
  }, []);

  // Filter galleries based on active tab
  useEffect(() => {
    if (activeTab === "All") {
      setFilteredGalleries(galleries);
    } else {
      const filtered = galleries.filter((gallery) =>
        gallery.attributes.category.toLowerCase().includes(activeTab.toLowerCase())
      );
      setFilteredGalleries(filtered);
    }
  }, [activeTab, galleries]);

  const openLightbox = (index) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  const showNextImage = () =>
    setSelectedImageIndex((prevIndex) =>
      prevIndex + 1 >= filteredGalleries.length ? 0 : prevIndex + 1
    );
  const showPrevImage = () =>
    setSelectedImageIndex((prevIndex) =>
      prevIndex - 1 < 0 ? filteredGalleries.length - 1 : prevIndex - 1
    );

  return (
    <>
      <PropertyHeader />
      <section className="hero-section relative w-full h-[70vh]">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732695347/background_ac0513044d.jpg"
            alt="Gallery"
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center p-8">
            <div className="w-[60%] mx-auto">
              <h1 className="text-center text-white font-medium text-4xl">
                Gallery
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 dark:bg-[#1e212a] py-10 flex flex-col items-center">
        <h1 className="text-3xl font-medium mb-8">Property Gallery</h1>

        {/* Responsive tabs */}
        <div className="flex justify-center gap-2 flex-wrap">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 rounded-xl text-sm sm:text-base md:text-[16px] font-medium transition-all ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Images */}
        <div className="w-11/12 flex flex-wrap justify-center gap-6 mt-8">
          {filteredGalleries.map((gallery, index) => {
            const image = gallery.attributes.image;
            const imageUrl = image?.data?.attributes?.formats?.small?.url || image?.data?.attributes?.url;

            return (
              <div
                key={gallery.id}
                className="relative p-2 transition-all cursor-pointer hover:scale-105"
                onClick={() => openLightbox(index)}
              >
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={image?.data?.attributes?.alternativeText || gallery.attributes.Title}
                    style={{
                      width: imageSize.width,
                      height: imageSize.height,
                    }}
                    className="object-cover rounded-lg shadow-lg transition-transform duration-300"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Lightbox */}
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <button
              className="absolute top-6 right-6 hover:cursor-pointer bg-white text-black py-1 px-2 pt-0 font-bold text-3xl rounded-full"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 bg-white text-black p-2 font-bold rounded-lg hover:cursor-pointer"
              onClick={showPrevImage}
            >
              &#10094;
            </button>
            <button
              onClick={showNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white text-black p-2 font-bold rounded-lg hover:cursor-pointer"
            >
              &#10095;
            </button>
            <div className="relative w-[85%] h-[85%] mx-auto">
              <div className="relative w-full h-full">
                <img
                  src={
                    filteredGalleries[selectedImageIndex]?.attributes?.image?.data?.attributes
                      ?.formats?.large?.url ||
                    filteredGalleries[selectedImageIndex]?.attributes?.image?.data?.attributes?.url
                  }
                  alt={
                    filteredGalleries[selectedImageIndex]?.attributes?.image?.data?.attributes
                      ?.alternativeText || "Selected"
                  }
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <PropertyFooter />
    </>
  );
}

export default Gallery;
