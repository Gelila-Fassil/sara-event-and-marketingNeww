import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

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

export default function PropertyCard({ property, index }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants[index % 3]}
    >
      <Card className="h-full">
        <CardHeader className="p-0">
          <div className="relative w-full h-48">
            <Image
              src={property.attributes.Image.data.attributes.url}
              alt={property.attributes.Image.data.attributes.alternativeText}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
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
  );
} 