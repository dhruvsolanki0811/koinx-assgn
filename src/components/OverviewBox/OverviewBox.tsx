'use client'
import React, { useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import TradingChart from "../TradingChart/TradingChart";
import { twMerge } from "tailwind-merge";

function OverviewBox() {
  return (
    <>
      <div className="overview-box min-h-[max-content] w-full  bg-white py-5 px-9">
        <div className="overview-header flex items-center flex-nowrap">
          <div className="coin-name-container flex flex-nowrap items-center gap-2">
            <div className="icon icon-btc h-10 w-10 ">
              <img
                src={
                  "https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
                }
              ></img>
            </div>
            <div className="coin-name text-[20px] font-bold">Bitcoin</div>
            <div className="coin-symbol text-[#5A5A5A] font-medium">BTC</div>
          </div>
          <div className="rank-container">
            <div className="btn-container  bg-[#737b91] min-w-[max-content] text-[13px] text-white p-[6px] rounded-[6px] ms-8 ">
              Rank #1
            </div>
          </div>
        </div>
        <div className="pricetag-container w-full flex flex-nowrap items-center mt-8">
          <div className="price text-[27px] font-bold ">$46,953.04</div>
          <div className="price-meta flex gap-3 flex-nowrap items-center">
            <div className="price-change bg-[#737b91] min-w-[max-content] text-[16px] font-bold text-[#00b386] bg-[#ebf9f5] p-[6px] rounded-[6px] ms-8 flex flex-nowrap items-center justify-center gap-1">
              <TiArrowSortedUp className="text-[20px]"></TiArrowSortedUp>
              2.51%
            </div>
            <div className="price-change-unit text-[13px] text-[#5A5A5A]">(24H)</div>
          </div>
        </div>
        <div className="inr-price-container text-[18px] font-medium mt-1">
          ₹39,42,343
        </div>
        <hr className="my-6 h-0 border-t-[#e1e4e8] border-t-[solid] border-t-[1px]   "></hr>
        
        <TradingChart  ></TradingChart>
      </div>
    </>
  );
}

export default OverviewBox;
