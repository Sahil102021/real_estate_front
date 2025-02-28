"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProductCard from "./productCard/page.jsx";
import { Footer } from "../components/footer/page.jsx";
import HeaderPage from "../components/header/page.jsx";

const ProductListpage = () => {
  let [productList, setProductlist] = useState([]);

  const productListFetch = async () => {
    try {
      let response = await axios.get(
        "https://real-estate-api-j2gt.onrender.com/propertyDetail/read"
      );
      console.log(response.data.data);
      setProductlist(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    productListFetch();
  }, []);

  return (
    <div>
      <div className="w-full">
                    <HeaderPage />
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
                <Image
                      src="https://res.cloudinary.com/dttftmu4m/image/upload/v1740141110/city_by_the_bay_1232_iwxx10.webp"
                      alt="Real Estate Office"
                      fill
                      className="object-cover "
                    />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              About Our Real Estate Agency
            </h1>
            </div>
        </section>

            <div className="h-3 bg-slate-800"></div>
       
            <div className="container mx-auto px-6">

          <div className="grid grid-cols-12 gap-4 my-20">
            {productList.map((el, i) => {
              return (
                <div key={i} className="xl:col-span-4 md:col-span-4 sm:col-span-6 col-span-12">
                  <ProductCard id={i} photos={el.photos} name={el.name} status={el.status}  location={el.location}  price={el.price}  bedroom={el.bedroom}  room={el.room}  areaSize={el.areaSize} />
                </div>
              );
            })}
          </div>
                <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProductListpage;

// amathi je data male tene product componate aupyog thi show karavano  javadevano  and click kare atle productdetail batave
