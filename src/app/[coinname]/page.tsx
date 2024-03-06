import OverviewBox from "@/components/OverviewBox/OverviewBox";
import logo from "@/assests/blue-card.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import TrendingCoinCard from "@/components/TrendingCoinCard/TrendingCoinCard";
import PerformanceBox from "@/components/PerformanceBox/PerformanceBox";
import SentimentBox from "@/components/SentimentBox/SentimentBox";
import AboutBox from "@/components/AboutBox/AboutBox";

export default function Home() {
  return (
    <>
      <div className="main-container w-full ">
        <div className="main-content bg-[var(--greyish-bg)] w-full   ps-10 pe-10 pt-4 pb-4">
          <div className="cytpo-tag text-[14px] flex flex-nowrap gap-2 ">
            <span className="text-[#5E5E5E]">Cryptocurrencies ≫</span>
            Bitcoin
          </div>
          <div className="content-section  flex mt-3">
            <div className="container-box-one h-full  w-[65vw] min-w-[max-content] pe-3">
              <OverviewBox></OverviewBox>
              <div className="tabs-section flex  flex-nowrap items-center gap-3 text-[15px] text-[#a1a1a1] mt-8">
                <div className="tab text-[#2870ea] border-b-[2px] border-b-solid border-b-[#2870ea]">Overview</div>
                <div className="tab">Fundamentals</div>
                <div className="tab">New Insights</div>
                <div className="tab">Sentiments</div>
                <div className="tab">Team</div>
                <div className="tab">Technicals</div>
                <div className="tab">Tokenomics</div>
              </div>
              <PerformanceBox></PerformanceBox>
              <SentimentBox></SentimentBox>
              <AboutBox></AboutBox>
            </div>
            <div className="container-box-two w-[35vw]  ps-3">
              <div className="blue-box shadow-box rounded-[10px] flex flex-col items-center py-6 px-9 gap-3 justify-center  min-h-[max-content] ">
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
                <div className="btn-container bg-white text-black text-[15px] font-semibold p-[9px] px-[23px] rounded-[6px] flex  items-center ">
                  Get Started for Free
                  <FaArrowRightLong className="ms-3 font-bold"></FaArrowRightLong>
                </div>
              </div>
              <TrendingCoinCard></TrendingCoinCard>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
