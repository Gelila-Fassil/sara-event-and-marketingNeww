"use client";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState, useEffect, useMemo } from "react";
import PropertyHeader from "@/components/PropertyHeader";
import PropertyFooter from "@/components/PropertyFooter";
import Image from "next/image";
import { motion } from "framer-motion";
import { mockProperties, mockCities } from "../mockData";

const FindProperty = () => {
  const initialFilters = {
    location: "",
    city: "",
    subCity: "",
    priceRange: "",
    bedrooms: "",
  };

  const [filters, setFilters] = useState(initialFilters);
  const [properties, setProperties] = useState(mockProperties);
  const [locations, setLocations] = useState([]);
  const [cities, setCities] = useState([]);
  const [subCities, setSubCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set initial data from mock
    setProperties(mockProperties);
    
    // Extract unique locations
    const uniqueLocations = [...new Set(mockCities.cities.data.map(city => 
      city.attributes.location.data.attributes.Name
    ))];
    setLocations(uniqueLocations);

    // Extract unique cities
    const uniqueCities = [...new Set(mockCities.cities.data.map(city => 
      city.attributes.Name
    ))];
    setCities(uniqueCities);

    // Extract unique subcities
    const uniqueSubCities = [...new Set(mockCities.cities.data.flatMap(city => 
      city.attributes.subcities.data.map(subcity => 
        subcity.attributes.Name
      )
    ))];
    setSubCities(uniqueSubCities);

    setIsLoading(false);
  }, []);

  const handleFilterChange = (value, name) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === "location") {
      // Filter cities based on selected location
      const filteredCities = mockCities.cities.data
        .filter(city => city.attributes.location.data.attributes.Name === value)
        .map(city => city.attributes.Name);
      setCities(filteredCities);
      setSubCities([]);
      setFilters(prev => ({ ...prev, city: "", subCity: "" }));
    } else if (name === "city") {
      // Filter subcities based on selected city
      const selectedCity = mockCities.cities.data.find(
        city => city.attributes.Name === value
      );
      const subCities = selectedCity?.attributes.subcities.data.map(
        subcity => subcity.attributes.Name
      ) || [];
      setSubCities(subCities);
      setFilters(prev => ({ ...prev, subCity: "" }));
    }
  };

  const resetFilters = () => {
    setFilters(initialFilters);
    // Reset cities and subcities to initial state
    const uniqueCities = [...new Set(mockCities.cities.data.map(city => 
      city.attributes.Name
    ))];
    setCities(uniqueCities);
    setSubCities([]);
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
      const bedroomsFilter = !filters.bedrooms || 
        property.attributes.Bedrooms === parseInt(filters.bedrooms);

      return locationFilter && cityFilter && subCityFilter && bedroomsFilter;
    });
  }, [properties, filters]);

  if (!isLoading) {
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
      <PropertyHeader />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Find Your Property</h1>
        
        {/* Filters Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Location Filter */}
            <Select
              value={filters.location}
              onValueChange={(value) => handleFilterChange(value, "location")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* City Filter */}
            <Select
              value={filters.city}
              onValueChange={(value) => handleFilterChange(value, "city")}
              disabled={!filters.location}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sub-City Filter */}
            <Select
              value={filters.subCity}
              onValueChange={(value) => handleFilterChange(value, "subCity")}
              disabled={!filters.city}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Sub-City" />
              </SelectTrigger>
              <SelectContent>
                {subCities.map((subCity) => (
                  <SelectItem key={subCity} value={subCity}>
                    {subCity}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Bedrooms Filter */}
            <Input
              type="number"
              placeholder="Number of Bedrooms"
              value={filters.bedrooms}
              onChange={(e) => handleFilterChange(e.target.value, "bedrooms")}
            />
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants[index % 3]}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                <img
                  src={property.attributes.Image.data.attributes.url}
                  alt={property.attributes.Image.data.attributes.alternativeText}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-white dark:bg-gray-800 p-2 rounded-full">
                  <img
                    src={property.attributes.Icon.data.attributes.url}
                    alt={property.attributes.Icon.data.attributes.alternativeText}
                    className="w-6 h-6"
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle>{property.attributes.Title}</CardTitle>
                <CardDescription>
                  {property.attributes.city.data.attributes.Name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {property.attributes.Description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="font-bold">
                    ${property.attributes.Price.toLocaleString()}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {property.attributes.Bedrooms} Bedrooms
                  </p>
                </div>
              </CardContent>
            </motion.div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-300">
              No properties found matching your criteria.
            </p>
          </div>
        )}
      </div>
      <PropertyFooter />
    </>
  );
};

export default FindProperty;
