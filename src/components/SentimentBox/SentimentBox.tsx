"use client";
import React, { useRef, useState } from "react";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaInfoCircle,
} from "react-icons/fa";
import "./SentimentBox.css";
import {
  FaArrowTrendUp,
  FaChevronLeft,
  FaChevronRight,
  FaNewspaper,
} from "react-icons/fa6";
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
      <div className="overview-box cursor-default mt-8 shadow-box w-full min-h-[max-content]  bg-white py-5 px-9 rounded-[10px]">
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
            className="carousel-container  mt-4 flex gap-2 overflow-x-auto overflow-y-hidden no-scrollbar"
          >
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div
                key={i}
                className={twMerge(
                  "carousel-card-container px-4  py-3 max-w-[26rem] rounded-[10px] min-w-[26rem] h-[10rem] flex flex-nowrap gap-2 ",
                  i % 2 == 0 ? "bg-[#E8F4FD]" : "bg-[#EBF9F4]"
                )}
              >
                <div className="icon-container ">
                  <div
                    className={twMerge(
                      "icon-wrapper flex justify-center items-center rounded-full p-2 ",
                      i % 2 == 0 ? "bg-[#0082FF]" : "bg-[#0FBA83]"
                    )}
                  >
                    {i % 2 == 0 ? (
                      <FaNewspaper className="text-white text-[16px]"></FaNewspaper>
                    ) : (
                      <FaArrowTrendUp className="text-white text-[16px]"></FaArrowTrendUp>
                    )}
                  </div>
                </div>
                <div className="text-container flex flex-col flex-nowrap">
                  <div className="header-text text-[13px] font-medium text-left">
                    Lorem ipsum dolor sit amet consectetur. Dui vel quis
                    dignissim mattis enim tincidunt.
                  </div>
                  <div className="content-text text-[13px] text-left">
                    Lorem ipsum dolor sit amet consectetur. Ac phasellus risus
                    est faucibus metus quis. Amet sapien quam viverra adipiscing
                    condimentum. Ac consectetur et pretium in a bibendum in. Sed
                    vitae sit nisi viverra natoque lacinia libero enim.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fundamental-header text-[17px] mt-4 font-medium flex items-center gap-2">
          Analyst Estimates
          <span>
            <FaInfoCircle className="text-[#a1a1a1]"></FaInfoCircle>
          </span>
        </div>
        <div className="grid grid-cols-10 gap-10 mt-3 md:gap-5  h-[8rem] items-center overflow-hidden">
          <div className="col-span-3 h-[8rem] md:h-[8rem]  md:col-span-2  flex items-center justify-center bg-[#EBF9F4] rounded-full w-full text-[#0FBA83] text-3xl">
            76%
          </div>
          <div className="col-span-6 md:col-span-7  h-[5rem] md:h-[8rem] flex flex-col justify-center gap-5">
            <div className="grid grid-cols-10 ">
              <div className="col-span-2 flex justify-end">
                <div className="mr-2 text-[#7C7E8C]">Buy</div>
              </div>
              <div className="col-span-8 flex gap-1">
                <div className="w-[76%] mt-2 h-2 bg-[#00B386]"></div>
                <div>76%</div>
              </div>
            </div>
            <div className="grid grid-cols-10 items-center">
              <div className="col-span-2 flex justify-end">
                <div className="mr-2 text-[#7C7E8C]">Hold</div>
              </div>
              <div className="col-span-8 flex gap-1">
                <div className="w-[8%] mt-2 h-2 bg-[#C7C8CE]"></div>
                <div>8%</div>
              </div>
            </div>
            <div className="grid grid-cols-10 items-center">
              <div className="col-span-2 flex justify-end">
                <div className="mr-2 text-[#7C7E8C]">Sell</div>
              </div>
              <div className="col-span-8 flex gap-1">
                <div className="w-[16%] mt-2 h-2 bg-[#F7324C]"></div>
                <div>16%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SentimentBox;
