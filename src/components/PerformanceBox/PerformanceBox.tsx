import { CryptoData } from "@/types/types";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { TiArrowSortedUp } from "react-icons/ti";

function PerformanceBox({ crypto }: { crypto?: CryptoData }) {
  const percentageCal = () => {
    if (!crypto) {
      return "";
    }
    if (crypto) {
      const range =
        crypto.market_data.high_24h["usd"] - crypto.market_data.low_24h["usd"];
      const value =
        crypto.market_data.current_price["usd"] -
        crypto.market_data.low_24h["usd"];
      const percentage = (value / range) * 100;
      if (percentage > 100) {
        return 100;
      }
      if (percentage < 0) {
        return 0;
      }
      return percentage;
    }
  };
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      date
    );
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  return (
    <>
      <div className="overview-box cursor-default mt-8 cursor-default shadow-box w-full min-h-[max-content]   bg-white py-5 px-9 rounded-[10px]">
        <div className="overview-header text-[20px] font-semibold">
          Performace
        </div>
        <div className="grid grid-cols-10 gap-4 w-full mt-6">
        <div className="col-span-2 flex justify-center">
          <div className="space-y-2">
            <p className="text-sm text-[#44475B]">Today’s Low</p>
            <p className="font-medium">${crypto?.market_data.low_24h['usd']}</p>
          </div>
        </div>
        <div className="col-span-6 w-full mt-3">
          <div className="w-full h-[7px] bg-gradient-to-r from-red-500 via-orange-500 to-green-500 rounded-full"></div>
          <div className="flex">
            <div style={{ width: `${percentageCal()}%` }}></div>
            <div className="flex flex-col items-center">
              <TiArrowSortedUp />
              <p className="text-[#44475B] text-sm">
                ${crypto?.market_data.current_price['usd']}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex justify-center">
          <div className="space-y-2">
            <p className="text-sm text-[#44475B]">Today’s High</p>
            <p className="font-medium">${crypto?.market_data.high_24h['usd']}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-4 w-full">
        <div className="col-span-2 flex justify-center">
          <div className="space-y-2">
            <p className="text-sm text-[#44475B]">52W Low</p>
            <p className="font-medium">${crypto?.market_data.atl['usd']}</p>
          </div>
        </div>
        <div className="col-span-6 w-full mt-3">
          <div className="w-full h-[7px] bg-gradient-to-r from-red-500 via-orange-500 to-green-500 rounded-full"></div>
        </div>
        <div className="col-span-2 flex justify-center">
          <div className="space-y-2">
            <p className="text-sm text-[#44475B]">52W High</p>
            <p className="font-medium">${crypto?.market_data.ath['usd']}</p>
          </div>
        </div>
      </div>
        <div className="fundamental-header text-[17px] mt-6 font-medium flex items-center gap-2">
          Fundamentals
          <span>
            <FaInfoCircle className="text-[#a1a1a1]"></FaInfoCircle>
          </span>
        </div>
        <div className="insight-container w-full mt-4  grid grid-cols-2 max-lg:grid-cols-1  max-lg:gap-[0rem] lg:gap-[2rem] ">
          <div className="container-1 grid grid-rows-5 h-[14rem]">
            <div className="insight-1  grid grid-cols-2 ">
              <div className="tag flex justify-start items-center border-b-[2px] items-end text-[#768396] text-[13px]">
                {crypto?.name} Price
              </div>
              <div className="tag flex justify-end items-center border-b-[2px] items-end text-[13px]">
                {crypto?.market_data.current_price["usd"].toLocaleString(
                  "en-US",
                  { style: "currency", currency: "USD" }
                )}
              </div>
            </div>
            <div className="insight-1  grid grid-cols-2 ">
              <div className="tag flex justify-start items-center items-center border-b-[2px] items-end  text-[#768396] text-[13px]">
                24h Low / 24h High
              </div>
              <div className="tag flex justify-end items-center border-b-[2px] items-end text-[13px]">
                {crypto?.market_data.low_24h["usd"]
                  .toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })
                  .toString()
                  .slice(0, 6)}{" "}
                /{" "}
                {crypto?.market_data.high_24h["usd"]
                  .toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })
                  .toString()
                  .slice(0, 6)}
              </div>
            </div>
            <div className="insight-1  grid grid-cols-2 ">
              <div className="tag flex justify-start items-center border-b-[2px] items-end  text-[#768396] text-[13px]">
                7d Low / 7d High
              </div>
              <div className="tag flex justify-end items-center border-b-[2px] items-end text-[13px]">
                {crypto?.market_data.low_24h["usd"]
                  .toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })
                  .toString()
                  .slice(0, 6)}{" "}
                /{" "}
                {crypto?.market_data.high_24h["usd"]
                  .toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })
                  .toString()
                  .slice(0, 6)}
              </div>
            </div>
            <div className="insight-1  grid grid-cols-2 ">
              <div className="tag flex justify-start items-center border-b-[2px] items-end text-[#768396] text-[13px]">
                Trading Volume
              </div>
              <div className="tag flex justify-end items-center border-b-[2px] items-end text-[13px]">
                {crypto?.market_data.total_volume["usd"].toLocaleString(
                  "en-US",
                  { style: "currency", currency: "USD" }
                )}
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
          <div className="container-2 grid grid-rows-5  h-[14rem]">
            <div className="insight-2  grid grid-cols-2 ">
              <div className="tag flex justify-start items-center border-b-[2px] items-end text-[#768396] text-[13px]">
                Market Cap
              </div>
              <div className="tag flex justify-end items-center border-b-[2px] items-end text-[13px] ">
                {crypto?.market_data.market_cap["usd"].toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </div>
            <div className="insight-1  grid grid-cols-2 ">
              <div className="tag flex justify-start items-center border-b-[2px] items-end text-[#768396] text-[13px]">
                Market Cap Dominance
              </div>
              <div className="tag flex justify-end items-center border-b-[2px] items-end text-[13px] ">
                {crypto?.market_data.market_cap_change_24h_in_currency[
                  "usd"
                ].toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </div>
            <div className="insight-1  grid grid-cols-2 ">
              <div className="tag flex justify-start items-center border-b-[2px] items-end text-[#768396] text-[13px]">
                Volume
              </div>
              <div className="tag flex justify-end items-center border-b-[2px] items-end text-[13px] ">
                {crypto?.market_data.total_volume["usd"].toLocaleString(
                  "en-US",
                  { style: "currency", currency: "USD" }
                )}
              </div>
            </div>
            <div className="insight-1  grid grid-cols-2 ">
              <div className="tag flex justify-start items-center border-b-[2px] items-end text-[#768396] text-[13px]">
                All-Time High
              </div>
              <div className="tag flex flex-col  items-end border-b-[2px] items-end text-[13px]">
                {crypto && (
                  <div className="flex gap-2">
                    {crypto?.market_data.ath["usd"].toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}{" "}
                    <span
                      className={
                        crypto?.market_data.ath_change_percentage["usd"] < 0
                          ? `text-[#eb5b3c]`
                          : `text-[#0fba83]`
                      }
                    >
                      {crypto?.market_data.ath_change_percentage["usd"]
                        .toString()
                        .slice(0, 2) + "%"}
                    </span>
                  </div>
                )}{" "}
                {crypto && (
                  <div className="">
                    {formatDate(crypto.market_data.ath_date["usd"])}
                  </div>
                )}
              </div>
            </div>
            <div className="insight-1  grid grid-cols-2 ">
              <div className="tag flex justify-start items-center border-b-[2px] items-end text-[#768396] text-[13px]">
                All-Time Low
              </div>
              <div className="tag flex flex-col items-end border-b-[2px] items-end text-[13px]">
                {crypto && (
                  <div className="flex gap-2">
                    {crypto?.market_data.atl["usd"].toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}{" "}
                    <span
                      className={
                        crypto?.market_data.atl_change_percentage["usd"] < 0
                          ? `text-[#eb5b3c]`
                          : `text-[#0fba83]`
                      }
                    >
                      {crypto?.market_data.atl_change_percentage["usd"]
                        .toString()
                        .slice(0, 2) + "%"}
                    </span>
                  </div>
                )}{" "}
                {crypto && (
                  <div className="">
                    {formatDate(crypto.market_data.atl_date["usd"])}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PerformanceBox;
