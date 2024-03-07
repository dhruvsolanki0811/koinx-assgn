import { CryptoData } from "@/types/types";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";

function PerformanceBox({ crypto }: { crypto?: CryptoData }) {
  return (
    <>
      <div className="overview-box mt-8 shadow-box w-full min-h-[max-content]   bg-white py-5 px-9 rounded-[10px]">
        <div className="overview-header text-[20px] font-semibold">
          Performace
        </div>
        <div className="fundamental-header text-[17px] mt-4 font-medium flex items-center gap-2">
          Fundamentals
          <span>
            <FaInfoCircle className="text-[#a1a1a1]"></FaInfoCircle>
          </span>
        </div>
        <div className="insight-container w-full mt-4  grid grid-cols-2 max-sm:grid-cols-1 sm:gap-[2rem] ">
          <div className="container-1 grid grid-rows-5 h-[12.4rem]">
            <div className="insight-1  grid grid-cols-2 ">
              <div className="tag flex justify-start items-center border-b-[2px] items-end text-[#768396] text-[13px]">
                {crypto?.name} Price
              </div>
              <div className="tag flex justify-end items-center border-b-[2px] items-end text-[13px]">
                {crypto?.market_data.current_price["usd"]}
              </div>
            </div>
            <div className="insight-1  grid grid-cols-2 ">
              <div className="tag flex justify-start items-center items-center border-b-[2px] items-end  text-[#768396] text-[13px]">
                24h Low / 24h High
              </div>
              <div className="tag flex justify-end items-center border-b-[2px] items-end text-[13px]">
                {crypto?.market_data.low_24h["usd"].toString().slice(0, 6)} /{" "}
                {crypto?.market_data.high_24h["usd"].toString().slice(0, 6)}
              </div>
            </div>
            <div className="insight-1  grid grid-cols-2 ">
              <div className="tag flex justify-start items-center border-b-[2px] items-end  text-[#768396] text-[13px]">
                7d Low / 7d High
              </div>
              <div className="tag flex justify-end items-center border-b-[2px] items-end text-[13px]">
                {crypto?.market_data.low_24h["usd"].toString().slice(0, 6)} /{" "}
                {crypto?.market_data.high_24h["usd"].toString().slice(0, 6)}
              </div>
            </div>
            <div className="insight-1  grid grid-cols-2 ">
              <div className="tag flex justify-start items-center border-b-[2px] items-end text-[#768396] text-[13px]">
                Trading Volume
              </div>
              <div className="tag flex justify-end items-center border-b-[2px] items-end text-[13px]">
                {crypto?.market_data.total_volume["usd"]}
              </div>
            </div>
            <div className="insight-1  grid grid-cols-2 ">
              <div className="tag flex justify-start items-center border-b-[2px] items-end text-[#768396] text-[13px]">
                Market Cap Rank
              </div>
              <div className="tag flex justify-end items-center border-b-[2px] items-end text-[13px]">
                #{crypto?.market_cap_rank}
              </div>
            </div>
          </div>
          <div className="container-2 grid grid-rows-5  h-[12.4rem]">
            <div className="insight-2  grid grid-cols-2 ">
              <div className="tag flex justify-start items-center border-b-[2px] items-end text-[#768396] text-[13px]">
                Market Cap
              </div>
              <div className="tag flex justify-end items-center border-b-[2px] items-end text-[13px] ">
                {crypto?.market_data.market_cap["usd"]}
              </div>
            </div>
            <div className="insight-1  grid grid-cols-2 ">
              <div className="tag flex justify-start items-center border-b-[2px] items-end text-[#768396] text-[13px]">
                Market Cap Dominance
              </div>
              <div className="tag flex justify-end items-center border-b-[2px] items-end text-[13px] ">
                {crypto?.market_data.market_cap_change_24h}
              </div>
            </div>
            <div className="insight-1  grid grid-cols-2 ">
              <div className="tag flex justify-start items-center border-b-[2px] items-end text-[#768396] text-[13px]">
                Volume
              </div>
              <div className="tag flex justify-end items-center border-b-[2px] items-end text-[13px] ">
                {crypto?.market_data.total_volume["usd"]}
              </div>
            </div>
            <div className="insight-1  grid grid-cols-2 ">
              <div className="tag flex justify-start items-center border-b-[2px] items-end text-[#768396] text-[13px]">
                All-Time High
              </div>
              <div className="tag flex justify-end items-center border-b-[2px] items-end text-[13px]">
                {crypto?.market_data.ath["usd"]}
              </div>
            </div>
            <div className="insight-1  grid grid-cols-2 ">
              <div className="tag flex justify-start items-center border-b-[2px] items-end text-[#768396] text-[13px]">
                All-Time Low
              </div>
              <div className="tag flex justify-end items-center border-b-[2px] items-end text-[13px]">
                {crypto?.market_data.atl["usd"]}
              </div>
            </div>
          </div>
          {/* <div className="insight-1  grid grid-cols-2 ">
          </div> */}
        </div>
      </div>
    </>
  );
}

export default PerformanceBox;
