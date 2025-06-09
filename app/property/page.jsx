"use client";
import React, { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import PropertyFooter from "@/components/PropertyFooter";
import PropertyHeader from "@/components/PropertyHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import toast, { Toaster } from "react-hot-toast";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { motion } from "framer-motion";
import { mockProperties, mockCities } from "./mockData";

// Mock data for additional sections
const mockHomeData = {
  hero: {
    title: "Discover Luxury Living",
    subtitle: "Find properties that match your style and redefine your standards of living.",
    backgroundImage: "/propertybg.jpg"
  },
  aboutUs: {
    title: "About Us",
    description: "We are dedicated to providing exceptional real estate services with a focus on customer satisfaction and quality properties.",
    image: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/about-us_1.jpg"
  },
  partners: {
    title: "Our Partners",
    logos: [
      {
        url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/partner1_1.jpg",
        alt: "Partner 1"
      },
      {
        url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/partner2_1.jpg",
        alt: "Partner 2"
      },
      {
        url: "https://res.cloudinary.com/dkqlrnz6r/image/upload/v1732650082/partner3_1.jpg",
        alt: "Partner 3"
      }
    ]
  },
  achievements: {
    title: "Our Achievements",
    stats: [
      { number: 500, label: "Properties Sold" },
      { number: 1000, label: "Happy Clients" },
      { number: 50, label: "Awards Won" },
      { number: 10, label: "Years Experience" }
    ]
  }
};

const PropertyHome = React.memo(function PropertyHome() {
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

  const initialFilters = {
    location: "",
    city: "",
    subCity: "",
    priceRange: "",
    propertyType: "all",
    bedrooms: "any",
  };

  const [filters, setFilters] = useState(initialFilters);
  const [properties] = useState(mockProperties);
  const [locations] = useState([...new Set(mockCities.cities.data.map(city => 
    city.attributes.location.data.attributes.Name
  ))]);
  const [cities] = useState([...new Set(mockCities.cities.data.map(city => 
    city.attributes.Name
  ))]);
  const [subCities] = useState([...new Set(mockCities.cities.data.flatMap(city => 
    city.attributes.subcities.data.map(subcity => 
      subcity.attributes.Name
    )
  ))]);
  const [counterOn, setCounterOn] = useState(false);

  const handleFilterChange = (value, name) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetFilters = () => {
    setFilters({
      ...initialFilters,
      bedrooms: "any"
    });
  };

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      const locationFilter = !filters.location || 
        property.attributes.city.data.attributes.location.data.attributes.Name === filters.location;
      const cityFilter = !filters.city || 
        property.attributes.city.data.attributes.Name === filters.city;
      const subCityFilter = !filters.subCity || 
        property.attributes.city.data.attributes.subcities.data.some(
          subcity => subcity.attributes.Name === filters.subCity
        );
      const bedroomsFilter = filters.bedrooms === "any" || 
        property.attributes.Bedrooms === parseInt(filters.bedrooms);

      return locationFilter && cityFilter && subCityFilter && bedroomsFilter;
    });
  }, [properties, filters]);

  const titleSlide = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.5,
        duration: 0.7,
      },
    }),
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
        <title>SAM Property Listing and Management</title>
        <meta
          name="description"
          content="SAM Property Listing and Management is the best Property listing in UAE and Ethiopia."
        />
      </head>

      <PropertyHeader />
      <Toaster position="top-right" reverseOrder={false} />
      <section className="relative w-full h-[80vh]">
        <div className="relative w-full h-full">
          <Image
            src={mockHomeData.hero.backgroundImage}
            alt="Luxury Living Background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={titleSlide}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                {mockHomeData.hero.title}
              </motion.h1>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={titleSlide}
                className="text-xl md:text-2xl"
              >
                {mockHomeData.hero.subtitle}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleSlide}
        className="bg-white dark:bg-[#1f2937] w-[83%] mx-auto shadow-lg rounded-lg flex flex-col md:flex-row justify-center items-center px-8 py-6 -mt-20 z-10 relative"
      >
        <section>
          <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">
            Find Your Dream Property
          </h2>
          <div className="flex justify-between items-center mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {/* Location Filter */}
              <Select
                value={filters?.location || ""}
                onValueChange={(value) => handleFilterChange(value, "location")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations?.map((location) => (
                    <SelectItem value={location} key={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* City Filter */}
              <Select
                value={filters?.city || ""}
                onValueChange={(value) => handleFilterChange(value, "city")}
                disabled={!filters?.location}
                className={!filters?.location ? "disabled-cursor" : ""}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  {cities?.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sub-City Filter */}
              <Select
                value={filters?.subCity || ""}
                onValueChange={(value) => handleFilterChange(value, "subCity")}
                disabled={!filters?.city}
                className={!filters?.city ? "disabled-cursor" : ""}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sub City" />
                </SelectTrigger>
                <SelectContent>
                  {subCities?.map((subCity) => (
                    <SelectItem key={subCity} value={subCity}>
                      {subCity}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Bedrooms Filter */}
              <Select
                value={filters.bedrooms}
                onValueChange={(value) => handleFilterChange(value, "bedrooms")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              onClick={resetFilters}
              className="bg-[#137a70] hover:bg-[#0f5d56] text-white"
            >
              Reset Filters
            </Button>
          </div>
        </section>
      </motion.div>

      {/* Property Listings */}
      <section className="py-16 bg-gray-50 dark:bg-[#1f2937]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants[index % 3]}
              >
                <Card className="h-full">
                  <CardHeader className="p-0">
                    <img
                      src={property.attributes.Image.data.attributes.url}
                      alt={property.attributes.Image.data.attributes.alternativeText}
                      className="w-full h-48 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-semibold mb-2 dark:text-white">
                      {property.attributes.Title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                      {property.attributes.Description}
                    </CardDescription>
                    <div className="flex justify-between items-center">
                      <span className="text-[#137a70] font-bold">
                        ${property.attributes.Price.toLocaleString()}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {property.attributes.Bedrooms} Beds
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src={mockHomeData.aboutUs.image}
                alt="About Us"
                fill
                className="object-cover rounded-lg shadow-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">{mockHomeData.aboutUs.title}</h2>
              <p className="text-gray-600">{mockHomeData.aboutUs.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{mockHomeData.partners.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockHomeData.partners.logos.map((logo, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={logoVariants}
                className="relative h-32"
              >
                <Image
                  src={logo.url}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white dark:bg-[#1f2937]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
            {mockHomeData.achievements.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {mockHomeData.achievements.stats.map((stat, index) => (
              <ScrollTrigger
                key={index}
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-[#137a70] mb-2">
                    {counterOn && <CountUp end={stat.number} duration={2} />}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
                </div>
              </ScrollTrigger>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50 dark:bg-[#1f2937]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  id="Name"
                  name="Name"
                  type="text"
                  placeholder="Your Name"
                  onChange={handleInputChange}
                  value={formData.Name}
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  id="Email"
                  name="Email"
                  type="email"
                  placeholder="Your Email"
                  onChange={handleInputChange}
                  value={formData.Email}
                  className="w-full"
                />
              </div>
              <div>
                <Textarea
                  id="Message"
                  name="Message"
                  placeholder="Your Message"
                  onChange={handleInputChange}
                  value={formData.Message}
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#137a70] hover:bg-[#0f5d56] text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      <PropertyFooter />
    </>
  );
});

export default PropertyHome;
