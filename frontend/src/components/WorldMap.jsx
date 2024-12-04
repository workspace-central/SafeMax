/* eslint-disable no-unused-vars */
import React from "react";

const WorldMap = () => {
  return (
    <div className="flex flex-col items-center bg-[#2E2F2E] text-white w-full p-10 rounded-[30px]">
      {/* Text Section */}
      <div className="flex flex-col items-center text-center w-full px-4 md:px-8">
        <h1 className="font-montserrat text-[36px] md:text-[48px] lg:text-[60px] font-bold leading-[40px] md:leading-[60px] lg:leading-[73px] text-white">
          Trusted <span className="text-[#FF6812]">Worldwide</span>
        </h1>
        <p className="font-nunito text-[14px] md:text-[16px] lg:text-[18px] font-semibold leading-[24px] md:leading-[28px] lg:leading-[33px] mx-4 sm:mx-10 lg:mx-28 my-8  text-[#FCF7F0]">
          With a presence in over 12 countries, we have rapidly expanded to
          protect digital assets for Fortune 500 companies and government
          organizations, securing over 1 million endpoints globally. With over
          200 international clients across 5 continents and a valuation of $400
          million in 2024, our presence spans 12 countries with remote
          headquarters in the US, UK, and Singapore.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full flex justify-center items-center mt-8 md:mt-12 px-4">
        <img
          src="wordmap.png" 
          alt="World Map"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default WorldMap;