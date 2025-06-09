"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock data for Portfolio
const mockPortfolioData = {
  hero: {
    backgroundImage: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732695348/background_1_b4c6e3b4c8.jpg",
    title: "Our Portfolio"
  },
  categories: ["All", "Corporate Events", "Weddings", "Charity Events", "Product Launches"],
  galleries: [
    {
      id: 1,
      attributes: {
        title: "Corporate Annual Gala",
        description: "A sophisticated corporate event featuring elegant decor and professional networking.",
        category: "Corporate Events",
        image: {
          data: {
            attributes: {
              url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732695348/corporate-gala_1.jpg",
              alternativeText: "Corporate Annual Gala"
            }
          }
        }
      }
    },
    {
      id: 2,
      attributes: {
        title: "Summer Wedding Celebration",
        description: "A beautiful outdoor wedding ceremony with stunning floral arrangements.",
        category: "Weddings",
        image: {
          data: {
            attributes: {
              url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732695348/summer-wedding_1.jpg",
              alternativeText: "Summer Wedding Celebration"
            }
          }
        }
      }
    },
    {
      id: 3,
      attributes: {
        title: "Charity Fundraiser",
        description: "An impactful charity event raising awareness and funds for a noble cause.",
        category: "Charity Events",
        image: {
          data: {
            attributes: {
              url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732695348/charity-event_1.jpg",
              alternativeText: "Charity Fundraiser"
            }
          }
        }
      }
    },
    {
      id: 4,
      attributes: {
        title: "Tech Product Launch",
        description: "An innovative product launch event showcasing cutting-edge technology.",
        category: "Product Launches",
        image: {
          data: {
            attributes: {
              url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732695348/product-launch_1.jpg",
              alternativeText: "Tech Product Launch"
            }
          }
        }
      }
    },
    {
      id: 5,
      attributes: {
        title: "Corporate Team Building",
        description: "An engaging team building event fostering collaboration and creativity.",
        category: "Corporate Events",
        image: {
          data: {
            attributes: {
              url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732695348/team-building_1.jpg",
              alternativeText: "Corporate Team Building"
            }
          }
        }
      }
    },
    {
      id: 6,
      attributes: {
        title: "Winter Wedding",
        description: "A magical winter wedding with elegant seasonal decorations.",
        category: "Weddings",
        image: {
          data: {
            attributes: {
              url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732695348/winter-wedding_1.jpg",
              alternativeText: "Winter Wedding"
            }
          }
        }
      }
    }
  ]
};

function Portfolio() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("All");
  const [filteredGalleries, setFilteredGalleries] = useState(mockPortfolioData.galleries);

  // Filter galleries based on active tab
  React.useEffect(() => {
    if (activeTab === "All") {
      setFilteredGalleries(mockPortfolioData.galleries);
    } else {
      const filtered = mockPortfolioData.galleries.filter((gallery) =>
        gallery.attributes.category.toLowerCase().includes(activeTab.toLowerCase())
      );
      setFilteredGalleries(filtered);
    }
  }, [activeTab]);

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
      <head>
        <title>Portfolio | Sara Events and Marketing</title>
        <meta
          name="description"
          content="Sara Events and Marketing is the best event organizer in Ethiopia."
        />
      </head>

      <Header />
      <section className="hero-section relative w-full h-[50vh]">
        <div className="relative w-full h-full">
          <Image
            src={mockPortfolioData.hero.backgroundImage}
            alt="portfolio"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center p-8">
            <div className="text-white text-left max-w-lg ml-12">
              <h1 className="text-2xl font-bold mb-4 leading-tight shadow-lg">
                {mockPortfolioData.hero.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 dark:bg-[#1f2937] min-h-screen flex flex-col items-center py-10">
        <h1 className="text-3xl font-medium mb-8 dark:text-white">Our Portfolio</h1>

        {/* Responsive tabs */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {mockPortfolioData.categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 rounded-xl text-sm sm:text-base md:text-[16px] font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#137a70] text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[80%] mx-auto">
          {filteredGalleries.map((gallery, index) => {
            const { image, title, description } = gallery.attributes;
            const imageUrl = image?.data?.attributes?.url;

            return (
              <div
                key={gallery.id}
                className="relative bg-white dark:bg-gray-800 pb-10 rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-2 h-[400px] flex flex-col"
                onClick={() => openLightbox(index)}
              >
                <div className="relative w-full h-[300px]">
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox */}
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
            >
              ×
            </button>
            <button
              onClick={showPrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300"
            >
              ‹
            </button>
            <button
              onClick={showNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300"
            >
              ›
            </button>
            <div className="relative w-[90%] h-[90vh]">
              <Image
                src={filteredGalleries[selectedImageIndex].attributes.image.data.attributes.url}
                alt={filteredGalleries[selectedImageIndex].attributes.title}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Portfolio;
