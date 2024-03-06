"use client";
import React, { useRef, useState } from "react";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaInfoCircle,
} from "react-icons/fa";
import "./SentimentBox.css";
import { FaArrowTrendUp, FaChevronLeft, FaChevronRight, FaNewspaper } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
function SentimentBox() {
  const showsRef = useRef<HTMLDivElement>(null);
  const scrollToDirection = (direction: "left" | "right") => {
    if (!showsRef.current) return;

    const { scrollLeft, clientWidth } = showsRef.current;
    const offset =
      direction === "left"
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;

    showsRef.current.scrollTo({ left: offset, behavior: "smooth" });

    if (scrollLeft === 0 && direction === "left") {
      showsRef.current.scrollTo({
        left: showsRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
    
  };
  return (
    <>
      <div className="overview-box mt-8 shadow-box min-h-[max-content] w-full  bg-white py-5 px-9 rounded-[10px]">
        <div className="overview-header text-[20px] font-semibold">
          Sentiments
        </div>
        <div className="fundamental-header text-[17px] mt-3 font-medium flex items-center gap-2">
          Key Events
          <span>
            <FaInfoCircle className="text-[#a1a1a1]"></FaInfoCircle>
          </span>
        </div>
        <div className="group relative   flex items-center">
          <div
            onClick={() => scrollToDirection("left")}
            className="btn-scroll-right mx-2 flex items-center justify-center rounded-full bg-white  cursor-pointer  font-bold text-xl h-[30px] w-[30px]  absolute z-[50] "
          >
            <FaChevronLeft className="text-[15px]"></FaChevronLeft>
          </div>

          <div
            onClick={() => scrollToDirection("right")}
            className="btn-scroll-right mx-2 flex items-center justify-center rounded-full bg-white  cursor-pointer  font-bold text-xl h-[30px] w-[30px]  absolute z-[50] right-0"
          >
            <FaChevronRight className="text-[15px]"></FaChevronRight>
          </div>

          <div
            ref={showsRef}
            className="carousel-container w-[55vw] mt-4 flex gap-2 overflow-x-auto overflow-y-hidden no-scrollbar"
          >
            {[1, 2, 3, 4, 5].map((_,i) => (
                  <div key={i} className={twMerge("carousel-card-container px-4  py-3 max-w-[26rem] rounded-[10px] min-w-[26rem] h-[10rem] flex flex-nowrap gap-2 ",(i%2==0)?"bg-[#E8F4FD]":"bg-[#EBF9F4]")}>
                    <div className="icon-container ">
                        <div className={twMerge("icon-wrapper flex justify-center items-center rounded-full p-2 ",i%2==0?"bg-[#0082FF]":"bg-[#0FBA83]")}>
                          {i%2==0?<FaNewspaper className="text-white text-[16px]"></FaNewspaper>
                          :
                          <FaArrowTrendUp className="text-white text-[16px]"></FaArrowTrendUp>}</div>
                    </div>
                    <div className="text-container flex flex-col flex-nowrap">
                      <div className="header-text text-[13px] font-medium text-left">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</div>
                      <div className="content-text text-[13px] text-left">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</div>
                    </div>
                  </div>

            ))}
          </div>
        </div>

        <div className="fundamental-header text-[17px] mt-3 font-medium flex items-center gap-2">
          Analyst Estimates
          <span>
            <FaInfoCircle className="text-[#a1a1a1]"></FaInfoCircle>
          </span>
        </div>
        <div className="fundamentals-content flex flex-nowrap mt-4 gap-[40px]">
          <div className="percentage-container flex justify-center items-center bg-[#EBF9F4] text-[30px] text-[#0FBA83] rounded-full  h-[120px] w-[120px]">76%</div>
          <div className="progressbar-container grid grid-rows-3 gap-3 text-[#7C7E8C] text-[15px]">
            <div className="flex h-[38px] items-center gap-4">
              <div className="type">Buy</div>
              <div className="progressline-container flex items-center gap-[10px] flex-nowrap" >
                <div className="progress-line max-w-[459.3421px] w-[349.14px] bg-[#00B386] h-[8px]"></div>
                <div className="progress-text">76%</div>
              </div>
            </div>
            <div className="flex h-[38px] items-center gap-4">
              <div className="type">Hold</div>
              <div className="progressline-container flex items-center gap-[10px] flex-nowrap" >
                <div className="progress-line max-w-[459.3421px] w-[36.72px] bg-[#C7C8CE] h-[8px]"></div>
                <div className="progress-text">8%</div>
              </div>
            </div>
            <div className="flex h-[38px] items-center gap-4">
              <div className="type">Sell</div>
              <div className="progressline-container flex items-center gap-[10px] flex-nowrap" >
                <div className="progress-line max-w-[459.3421px] w-[73.44px] bg-[#F7324C] h-[8px]"></div>
                <div className="progress-text">16%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default SentimentBox;
