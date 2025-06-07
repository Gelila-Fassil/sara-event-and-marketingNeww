import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function PropertyFilters({ 
  filters, 
  locations, 
  cities, 
  subCities, 
  onFilterChange, 
  onReset 
}) {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">
        Find Your Dream Property
      </h2>
      <div className="flex justify-between items-center mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {/* Location Filter */}
          <Select
            value={filters?.location || ""}
            onValueChange={(value) => onFilterChange(value, "location")}
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
            onValueChange={(value) => onFilterChange(value, "city")}
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
            onValueChange={(value) => onFilterChange(value, "subCity")}
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
            onValueChange={(value) => onFilterChange(value, "bedrooms")}
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
          onClick={onReset}
          className="bg-[#137a70] hover:bg-[#0f5d56] text-white"
        >
          Reset Filters
        </Button>
      </div>
    </section>
  );
} 