"use client";
import { useFetchTrendingCoin } from "@/hooks/useTrendingCoins";
import React from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { twMerge } from "tailwind-merge";

function TrendingCoinCard() {
  const { data: coins, isError, isLoading } = useFetchTrendingCoin();
  // console.log(data)
  return (
    <>
      <div className={twMerge(`trendingcoins-card max-w-[max-content] min-w-[min-content] rounded-[10px] shadow-box   bg-white mt-8 px-5 py-4`,isLoading?'h-[13rem]':"min-h-[max-content]")}>
        <div className="trending-header text-[20px] font-semibold">
          Trending Coins (24H)
        </div>
        <div className="coins flex flex-col gap-4 mt-3 flex-nowrap">
          {coins ? (
            coins.slice(0, 3).map((coin) => (
              <div className="coin-container  grid  grid-cols-6">
                <div className="coins-name-container text-[14px] flex gap-[6px] items-center col-span-5	">
                  <div className="icon-logo w-[2.3rem] h-[2rem] rounded-[100%] overflow-hidden ">
                    <img
                      className="h-full w-full object-contain"
                      src={coin.item.small}
                      alt=""
                    />
                  </div>
                  <div className="coin-name text-elipsis font-medium  overflow-hidden truncate">
                    {coin.item.name + "(" + coin.item.symbol + ")"}
                  </div>
                </div>
                <div className="coin-name">
                  {coin.item.data.price_change_percentage_24h["usd"] > 0 ? (
                    <div className="price-change  bg-[#737b91] min-w-[max-content]  text-[13px]  text-[#00b386] bg-[#ebf9f5] p-[6px] rounded-[6px]  flex flex-nowrap items-center justify-center gap-1">
                      <TiArrowSortedUp className="text-[20px]"></TiArrowSortedUp>
                      {coin.item.data.price_change_percentage_24h["usd"]
                        .toString()
                        .slice(0, 4)}
                      %
                    </div>
                  ) : (
                    <div className="price-change bg-red-100	 min-w-[max-content] text-[13px]  text-[#EB5B3C] bg-[#ebf9f5] p-[6px] rounded-[6px]  flex flex-nowrap items-center justify-center gap-1">
                      <TiArrowSortedDown className="text-[20px]"></TiArrowSortedDown>
                      {coin.item.data.price_change_percentage_24h["usd"]
                        .toString()
                        .slice(1, 5)}
                      %
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default TrendingCoinCard;
