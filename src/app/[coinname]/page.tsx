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
import { useRef } from "react";

export default function Home() {
  const { coinname } = useParams();
  const name = Array.isArray(coinname) ? coinname[0] : coinname ? coinname : "";
  const { data: crypto, isLoading } = useFetchCoin(name);

  const overviewBox = useRef<HTMLDivElement>(null);
  const performanceBoxRef = useRef<HTMLDivElement>(null);
  const sentimemntBoxRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const tokenomicsRef = useRef<HTMLDivElement>(null);
  const AboutRef = useRef<HTMLDivElement>(null);
  const handleClickTab = (tab: string) => {
    if (tab == "overview" && overviewBox.current) {
      console.log(tab);
      overviewBox.current.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
    if (tab == "performance" && performanceBoxRef.current) {
      performanceBoxRef.current.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
    if (tab == "sentiment" && sentimemntBoxRef.current) {
      sentimemntBoxRef.current.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }

    if (tab == "team" && teamRef.current) {
      teamRef.current.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
    if (tab == "technicals" && AboutRef.current) {
      AboutRef.current.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
    if (tab == "tokenomics" && tokenomicsRef.current) {
      tokenomicsRef.current.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="main-container w-full ">
        <div className="main-content bg-[var(--greyish-bg)] w-full  max-[500px]:px-[0.8rem] ps-10 pe-10 pt-4 pb-4">
          <div className="cytpo-tag text-[14px] flex flex-nowrap gap-2 cursor-pointer">
            <span className="text-[#5E5E5E] ">Cryptocurrencies ≫</span>
            {crypto?.name}
          </div>
          <div className="main-content-section grid grid-cols-1 md:grid-cols-6  gap-6 mt-3">
            <div className="container-box-one h-full col-span-1 md:col-span-4">
              <div className="Overview-box-container " ref={overviewBox}>
                {isLoading ? (
                  <OverviewBox></OverviewBox>
                ) : (
                  <OverviewBox crypto={crypto}></OverviewBox>
                )}
              </div>
              <div className="tabs-section overflow-hidden flex  no-  scrollbar flex-nowrap items-center gap-3 text-[15px] text-[#a1a1a1] mt-8">
                <div
                  onClick={() => handleClickTab("overview")}
                  className="tab cursor-pointer text-[#2870ea] border-b-[2px] border-b-solid border-b-[#2870ea]"
                >
                  Overview
                </div>
                <div
                  onClick={() => handleClickTab("performance")}
                  className="tab cursor-pointer"
                >
                  Fundamentals
                </div>
                <div
                  onClick={() => handleClickTab("sentiment")}
                  className="tab cursor-pointer"
                >
                  Sentiments
                </div>
                <div
                  onClick={() => handleClickTab("team")}
                  className="tab cursor-pointer"
                >
                  Team
                </div>
                <div
                  onClick={() => handleClickTab("technicals")}
                  className="tab cursor-pointer"
                >
                  Technicals
                </div>
                <div
                  onClick={() => handleClickTab("tokenomics")}
                  className="tab cursor-pointer"
                >
                  Tokenomics
                </div>
              </div>
              <div ref={performanceBoxRef} className="performanceBox">
                {" "}
                {isLoading ? (
                  <PerformanceBox></PerformanceBox>
                ) : (
                  <PerformanceBox crypto={crypto}></PerformanceBox>
                )}
              </div>
              <div className="sentiment-container" ref={sentimemntBoxRef}>
                <SentimentBox></SentimentBox>
              </div>
              <div className="about-container" ref={AboutRef}>
                {isLoading ? (
                  <AboutBox></AboutBox>
                ) : (
                  <AboutBox crypto={crypto}></AboutBox>
                )}
              </div>
              <div className="token-container" ref={tokenomicsRef}>
                <TokenomicBox></TokenomicBox>
              </div>
              <div className="team-container" ref={teamRef}>
                <TeamBox></TeamBox>
              </div>
            </div>
            <div className="container-box-two  col-span-1 md:col-span-2">
              <div className="blue-box shadow-box cursor-default   rounded-[10px] flex flex-col items-center py-6 px-9 gap-3 justify-center  min-h-[max-content] ">
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
                <div className="btn-container cursor-pointer bg-white text-black text-[15px] font-semibold p-[9px] px-[23px] rounded-[6px] flex md:flex-col md:text-center items-center ">
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
