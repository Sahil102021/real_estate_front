"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// import type { Property } from "@/lib/types"

const Page = (props) => {
  return (
    <div className="w-full p-4">
      <Link href={`/products/${props.id}`} className="block">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="relative h-48 w-full overflow-hidden">
            {/* Use Image component for better performance */}
            <Image
              src={props.photos[0] || ""}
              alt={props.name}
              width={500}
              height={300}
              layout="responsive"
              objectFit="cover"
            />
            <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded">
              {props.status}
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{props.name}</h2>
            <p className="text-gray-600 mb-2 truncate">{props.location}</p>
            <div className="flex flex-wrap justify-between items-center">
              <span className="text-2xl font-bold text-primary">
                ${props.price.toLocaleString()}
              </span>
              <div className="flex items-center space-x-2 text-gray-600 mt-2 sm:mt-0">
                <span  className="text-sm" >{props.bedroom} bedroom</span>
                <span>|</span>
                <span  className="text-sm" >{props.room} room</span>
                <span>|</span>
                <span  className="text-sm">{props.areaSize}sqft</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Page;
