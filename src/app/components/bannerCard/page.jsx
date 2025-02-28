"use client";

import Image from "next/image";
import React from "react";

const bannerCardPage = (props) => {
  return (
    <div>
      <div className="w-full">
        <div className="w-full flex flex-col border rounded-lg border-gray-300 overflow-hidden hover:shadow-lg">
          <div className="w-full max-h-32">
            <img
              src={props.image}
              className="w-full
              max-h-24
                 object-cover"
            />
          </div>
          <div className="w-[calc(100% - 30px)] max-h-32 p-7">
            <div className="text-2xl">{props.name}</div>
            <div className="text-base">{props.direction}</div>
            <div className="text-base">{props.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bannerCardPage;
