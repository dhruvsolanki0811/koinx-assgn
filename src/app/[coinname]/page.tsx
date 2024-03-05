import OverviewBox from "@/components/OverviewBox/OverviewBox";
import logo from "@/assests/blue-card.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import TrendingCoinCard from "@/components/TrendingCoinCard/TrendingCoinCard";

export default function Home() {
  return (
    <>
      <div className="main-container w-full ">
        <div className="main-content bg-[var(--greyish-bg)] w-full   ps-10 pe-10 pt-4 pb-4">
          <div className="cytpo-tag text-[13px] flex flex-nowrap gap-2 ">
            <span className="text-[#5E5E5E]">Cryptocurrencies ≫</span>
            Bitcoin
          </div>
          <div className="content-section  flex mt-3">
            <div className="container-box-one h-full  w-[65%] min-w-[max-content] pe-3">
              <OverviewBox></OverviewBox>
            
            </div>
            <div className="container-box-two w-[35%]  ps-3">
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
