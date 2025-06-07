"use client";
import React, { useState, useMemo } from "react";
import PropertyHeader from "@/components/PropertyHeader";
import PropertyFooter from "@/components/PropertyFooter";
import PropertyCard from "@/components/PropertyCard";
import PropertyFilters from "@/components/PropertyFilters";
import { mockProperties, mockCities } from "@/libs/data/propertyData";

export default function PropertyListings() {
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

  return (
    <>
      <head>
        <title>Property Listings - SAM Property</title>
        <meta
          name="description"
          content="Browse our extensive collection of properties in UAE and Ethiopia."
        />
      </head>

      <PropertyHeader />
      
      <main className="container mx-auto px-4 py-8">
        <PropertyFilters
          filters={filters}
          locations={locations}
          cities={cities}
          subCities={subCities}
          onFilterChange={handleFilterChange}
          onReset={resetFilters}
        />

        {/* Property Listings */}
        <section className="py-16 bg-gray-50 dark:bg-[#1f2937]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <PropertyFooter />
    </>
  );
} 