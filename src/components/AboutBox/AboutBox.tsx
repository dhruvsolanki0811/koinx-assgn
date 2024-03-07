import React from "react";
import "./AboutBox.css";
import Image from "next/image";
import card1 from "@/assests/card1.jpg";
import card2 from "@/assests/card2.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { CryptoData } from "@/types/types";

function AboutBox({ crypto }: { crypto?: CryptoData }) {
  return (
    <>
      <div className="about-box cursor-default mt-8 shadow-box min-h-[max-content]  bg-white py-5 px-9 rounded-[10px]">
        <div className="overview-header text-[20px] font-semibold">
          About {crypto?.name}
        </div>
        <div className="question text-[17px] font-bold mt-4">
          What is {crypto?.name}?
        </div>
        <p className="answer  text-[14px] font-medium text-[#3E424A] mt-[10px] ">
          {crypto?.name}’s price today is US$16,951.82, with a 24-hour trading
          volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
          currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40%
          from its 7-day all-time low of $16,394.75. BTC has a circulating
          supply of 19.24 M BTC and a max supply of 21 M BTC.
        </p>
        <div className="bg-[#C9CFDD] h-[1px] mt-[10px]" />
        <div className="question text-[17px] font-bold mt-[10px]">
          Lorem ipsum dolor sit amet
        </div>
        <p className="answer  text-[14px] font-medium text-[#3E424A] mt-[10px] ">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.
        </p>
        <p className="answer  text-[14px] font-medium text-[#3E424A] mt-[10px] ">
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
          vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
          felis pellentesque interdum. Odio cursus phasellus velit in senectus
          enim dui. Turpis tristique placerat interdum sed volutpat. Id
          imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi
          nunc praesent massa turpis a. Integer dignissim augue viverra nulla et
          quis lobortis phasellus. Integer pellentesque enim convallis ultricies
          at.{" "}
        </p>
        <p className="answer  text-[14px] font-medium text-[#3E424A] mt-[10px] ">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui{" "}
        </p>
        <div className="bg-[#C9CFDD] h-[1px] mt-4" />
        <div className="section-two-container mt-[10px]">
          <div className="overview-header text-[20px] font-semibold">
            Already Holding {crypto?.name}?
          </div>
          <div className="cards-container grid max-sm:grid-cols-1 max-sm:grid-rows-2 lg:grid-cols-2  lg:h-[151px] max-md:grid-cols-2 gap-[16px] mt-[10px] ">
            <div className="card rounded-[10px] card1 flex   gap-2 ">
              <div className="img-container flex justify-center p-2 items-center overflow-none">
                <Image
                  src={card1}
                  alt=""
                  className="w-[128px] h-[128px] rounded-[12px] border-white border-[2px] border-solid"
                />
              </div>
              <div className="text-container flex flex-col justify-center">
                <div className="tag text-[20px] font-bold text-white">
                  Calculate Your Profits
                </div>
                <div className="btn-container cursor-pointer bg-white max-w-[max-content] text-black text-[12px] font-semibold p-2 px-2 rounded-[6px] flex items-center">
                  Check Now
                  <FaArrowRightLong className="ms-3 font-bold" />
                </div>
              </div>
            </div>
            <div className="card rounded-[10px] card2 flex gap-2 max-w-[40rem]">
              <div className="img-container flex justify-center p-2 items-center overflow-none">
                <Image
                  src={card2}
                  alt=""
                  className="w-[128px] h-[128px] rounded-[12px] border-white border-[2px] border-solid"
                />
              </div>
              <div className="text-container flex flex-col justify-center">
                <div className="tag text-[20px] font-bold text-white">
                  Calculate Your Profits
                </div>
                <div className="btn-container cursor-pointer bg-white max-w-[max-content] text-black text-[12px] font-semibold p-2 px-2 rounded-[6px] flex items-center">
                  Check Now
                  <FaArrowRightLong className="ms-3 font-bold" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#C9CFDD] h-[0.7px] mt-4" />
        </div>
      </div>
    </>
  );
}

export default AboutBox;
