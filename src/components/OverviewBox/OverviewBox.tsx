import React from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import TradingChart from "../TradingChart/TradingChart";
import { CryptoData } from "@/types/types";
function OverviewBox({ crypto }: { crypto?: CryptoData }) {
  return (
    <>
      <div className="overview-box cursor-default	 shadow-box w-full min-h-[max-content]  bg-white py-5 px-9 rounded-[10px]">
        <div className="overview-header flex items-center flex-nowrap">
          <div className="coin-name-container flex flex-nowrap items-center gap-2">
            <div className="icon icon-btc h-12 w-12 ">
              {crypto?.image.large ? <img src={crypto?.image.large} /> : <></>}
            </div>
            <div className="coin-name text-[20px] font-bold">
              {crypto?.name}
            </div>
            <div className="coin-symbol text-[#768396] font-medium">
              {crypto?.symbol.toString().toUpperCase()}
            </div>
          </div>
          <div className="rank-container">
            {crypto?.market_cap_rank && (
              <div className="btn-container  bg-[#808A9D] min-w-[max-content] text-[13px] text-white p-[6px] rounded-[6px] ms-8 ">
                Rank #{crypto?.market_cap_rank}
              </div>
            )}
          </div>
        </div>
        <div className="pricetag-container w-full flex flex-nowrap items-center mt-8">
          {crypto && (
            <div className="price text-[27px] font-bold ">
              {crypto?.market_data.current_price["usd"].toLocaleString("en-US", {style:"currency", currency:"USD"})}
            </div>
          )}
          <div className="price-meta flex gap-3 flex-nowrap items-center">
            {crypto &&
              (crypto.market_data.price_change_percentage_24h > 0 ? (
                <div className="price-change bg-[#737b91] min-w-[max-content] text-[16px] font-bold text-[#0FBA83] bg-[#EBF9F4] p-[6px] rounded-[6px] ms-8 flex flex-nowrap items-center justify-center gap-1">
                  <TiArrowSortedUp className="text-[20px]"></TiArrowSortedUp>
                  {crypto.market_data.price_change_percentage_24h.toString()}%
                </div>
              ) : (
                <div className="price-change text-[#EB5B3C] bg-[#fee2e2] min-w-[max-content] text-[16px] font-bold p-[6px] rounded-[6px] ms-8 flex flex-nowrap items-center justify-center gap-1">
                  <TiArrowSortedDown className="text-[20px]"></TiArrowSortedDown>
                  {crypto.market_data.price_change_percentage_24h
                    .toString()
                    .slice(
                      1,
                      crypto.market_data.price_change_percentage_24h.toString()
                        .length
                    )}
                  %
                </div>
              ))}
            <div className="price-change-unit text-[13px] text-[#768396]">
              (24H)
            </div>
          </div>
        </div>
        <div className="inr-price-container text-[18px] font-medium mt-1">
          {crypto?.market_data.current_price["inr"]
            ?  crypto?.market_data.current_price["inr"].toLocaleString("en-US", {style:"currency", currency:"INR"})
            : ""}
        </div>
        <hr className="my-6 h-0 border-t-[#e1e4e8] border-t-[solid] border-t-[1px]   "></hr>

        <TradingChart
          symbol={crypto?.symbol.toString().toUpperCase()}
        ></TradingChart>
      </div>
    </>
  );
}

export default OverviewBox;
