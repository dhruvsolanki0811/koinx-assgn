"use client";
import OverviewBox from "@/components/OverviewBox/OverviewBox";
import logo from "@/assests/blue-card.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import TrendingCoinCard from "@/components/TrendingCoinCard/TrendingCoinCard";
import PerformanceBox from "@/components/PerformanceBox/PerformanceBox";
import SentimentBox from "@/components/SentimentBox/SentimentBox";
import AboutBox from "@/components/AboutBox/AboutBox";
import TokenomicBox from "@/components/TokenomicsBox/TokenomicBox";
import { useFetchCoin } from "@/hooks/useFetchCoinData";
import TeamBox from "@/components/TeamBox/TeamBox";
import YouMayLikeBox from "@/components/YouMayLikeBox/YouMayLikeBox";
import { useParams } from "next/navigation";

export default function Home() {
  const { coinname } = useParams();
  const name = (Array.isArray(coinname) ? coinname[0] : coinname? coinname: "");
  const { data:crypto,isLoading } = useFetchCoin(name);
  return (
    <>
      <div className="main-container w-full ">
        <div className="main-content bg-[var(--greyish-bg)] w-full  max-[500px]:px-[0.8rem] ps-10 pe-10 pt-4 pb-4">
          <div className="cytpo-tag text-[14px] flex flex-nowrap gap-2 ">
            <span className="text-[#5E5E5E]">Cryptocurrencies ≫</span>
            {crypto?.name}
          </div>
          <div className="main-content-section grid grid-cols-1 md:grid-cols-6  gap-6 mt-3">
            <div className="container-box-one h-full col-span-1 md:col-span-4">
              {isLoading?
              <OverviewBox></OverviewBox>
              :<OverviewBox crypto={crypto} ></OverviewBox>}
              <div className="tabs-section overflow-hidden flex  flex-nowrap items-center gap-3 text-[15px] text-[#a1a1a1] mt-8">
                <div className="tab text-[#2870ea] border-b-[2px] border-b-solid border-b-[#2870ea]">
                  Overview
                </div>
                <div className="tab">Fundamentals</div>
                <div className="tab">New Insights</div>
                <div className="tab">Sentiments</div>
                <div className="tab">Team</div>
                <div className="tab">Technicals</div>
                <div className="tab">Tokenomics</div>
              </div>
              {isLoading?
              <PerformanceBox></PerformanceBox>
              :<PerformanceBox crypto={crypto} ></PerformanceBox>}
              <SentimentBox></SentimentBox>
              {isLoading?<AboutBox></AboutBox>:<AboutBox crypto={crypto}></AboutBox>}
              <TokenomicBox></TokenomicBox>
              <TeamBox></TeamBox>
              {/* <YouMayLikeBox ></YouMayLikeBox> */}

            </div>
            <div className="container-box-two  col-span-1 md:col-span-2">
              <div className="blue-box shadow-box   rounded-[10px] flex flex-col items-center py-6 px-9 gap-3 justify-center  min-h-[max-content] ">
                <div className="offer text-[23px] text-white font-semibold   text-center	">
                  Get Started With KoinX for Free
                </div>
                <div className="offer-desc text-white font-medium text-center mt-3">
                  With our range of features that you can equip for Tree, Koinx
                  allows you to be more educated and aware of your tax reports.
                </div>
                <div className="img-container  h-[15rem] min-w-[12rem]">
                  <Image alt="" src={logo} className="w-full h-full  "></Image>
                </div>
                <div className="btn-container bg-white text-black text-[15px] font-semibold p-[9px] px-[23px] rounded-[6px] flex md:flex-col md:text-center items-center ">
                  Get Started for Free
                  <FaArrowRightLong className="ms-3 font-bold"></FaArrowRightLong>
                </div>
              </div>
              <TrendingCoinCard></TrendingCoinCard>
            </div>
          </div>
        </div>
        <YouMayLikeBox></YouMayLikeBox>
      </div>
    </>
  );
}
