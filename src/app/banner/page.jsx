"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Header from "../components/header/page";
import { Footer } from "../components/footer/page";
import axios from "axios";
import Banner from "../components/bannerCard/page";

const BannerPage = () => {
  const [bannerData, setBannerData] = useState([]);
  async function fetdatabanner() {
    try {
      let copyData = await axios.get(
        "http://localhost:3000/banner"
      );
      console.log(copyData.data.data);
      setBannerData(copyData.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetdatabanner();
  }, []);
  return (
    <div>
      <Header />
      <div className="w-full">
        <section className="relative h-[50vh] min-h-[400px]">
          <Image
            src="https://res.cloudinary.com/dttftmu4m/image/upload/v1740141110/city_by_the_bay_1232_iwxx10.webp"
            alt="Real Estate Office"
            fill
            className="w-full object-cover "
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              About Our Real Estate Agency
            </h1>
          </div>
        </section>

        <div className="container mx-auto px-8 py-10">
          <div className="w-full">
            <div class="grid grid-cols-12 gap-4">
              {bannerData.map((el, i) => {
                return (
                  <div className="col-span-12 sm:col-span-6 md:col-span-4" key={i}>
                    <Banner image={el.image} name={el.name}  direction={el.direction} date={el.date} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BannerPage;
