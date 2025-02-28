"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderPage from "@/app/components/header/page";
import { Footer } from "@/app/components/footer/page";

const ProductPage = ({ params }) => {
  const resolvedParams = React.use(params); // Unwrap the promise
  const id = resolvedParams?.id; // Safely access id after unwrapping
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true); // You need a loading state
  const [error, setError] = useState(null); // For error handling

  const fetchProperty = async () => {
    try {
      const response = await axios.get(
        `https://real-estate-api-j2gt.onrender.com/propertyDetail/read`
      );
      console.log(response.data.data);
      setProperty(response.data.data[id]);
      setLoading(false);
    } catch (error) {
      setError("Failed to load property details");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProperty();
    }
  }, [id]);

  if (loading) return <div className="text-center text-2xl animate-pulse text-blue-500 font-serif">
  <span className="block">Loading...</span>
  <div className="mt-2 text-sm text-gray-500">Please wait</div>
</div>;
  if (error)
    return <div className="text-center text-2xl text-red-500">{error}</div>;

  return (
    <>
      <HeaderPage />
      <div className="w-full bg-gray-50 py-12">
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
          <div className="relative h-64 sm:h-80 lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src={property.photos[0] || "/"}
              alt={property.name}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-500 transform hover:scale-110"
            />
          </div>
          <div className="p-6 space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">
              {property.name}
            </h1>
            <p className="text-gray-600 text-lg">{property.description}</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              <div className="flex justify-start">
                <span className="font-semibold text-gray-700">Price :-</span>
                <span className="text-gray-900">
                  ${property.price.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-start">
                <span className="font-semibold text-gray-700">Status :-</span>
                <span className="text-gray-900">{property.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">
                  Property Type
                </span>
                <span className="text-gray-900">{property.propertyType}</span>
              </div>
              <div className="flex justify-start gap-1">
                <span className="font-semibold text-gray-700">Area Size :-</span>
                <span className="text-gray-900"> {property.areaSize} sqft</span>
              </div>
              <div className="flex justify-start">
                <span className="font-semibold text-gray-700">Bedrooms :-</span>
                <span className="text-gray-900">{property.bedroom}</span>
              </div>
              <div className="flex justify-start">
                <span className="font-semibold text-gray-700">Bathrooms :-</span>
                <span className="text-gray-900">{property.room}</span>
              </div>
              <div className="flex justify-start">
                <span className="font-semibold text-gray-700">Garage :-</span>
                <span className="text-gray-900">{property.garage}</span>
              </div>
              <div className="flex justify-start">
                <span className="font-semibold text-gray-700">Year Built :-</span>
                <span className="text-gray-900">{property.built}</span>
              </div>
              <div className="flex justify-start">
                <span className="font-semibold text-gray-700">Furnished :-</span>
                <span className="text-gray-900">
                  {property.furnicher ? "Yes" : "No"}
                </span>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Location
              </h2>
              <p className="text-gray-700">{property.location}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Other Details
              </h2>
              <p className="text-gray-700">{property.other}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Photos
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {property.photos.slice(1).map((photo, index) => (
                  <div
                    key={index}
                    className="relative h-40 lg:h-48 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={photo || "/placeholder.svg"}
                      alt={`Property photo ${index + 2}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-110 rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
