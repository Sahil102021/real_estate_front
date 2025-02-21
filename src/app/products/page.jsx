"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProductCard from "./productCard/page.jsx";
import { Footer } from "../components/footer/page.jsx";

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
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img
            src="https://www.ljhooker.com.au/hubfs/Residential/Sell/Articles/shutterstock_1315572356_Article.jpg"
            alt="Real Estate Office"
            style={{backgroundPosition:'center' , objectFit:'cover' , width:'100%'}}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              About Our Real Estate Agency
            </h1>
          </div>
        </section>
        <div className="container mx-auto px-6 mt-6">
          <div className="grid grid-cols-3 gap-4 ">
            {productList.map((el, i) => {
              return (
                <div key={i}>
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
