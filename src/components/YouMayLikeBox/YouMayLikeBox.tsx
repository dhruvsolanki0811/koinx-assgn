import { useFetchTrendingCoin } from "@/hooks/useTrending";
import { Coin } from "@/types/types";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

function YouMayLikeBox() {
  const { data: coins, isError, isLoading } = useFetchTrendingCoin();
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
      <div className="recomm-box   w-full bg-white  py-10 px-[4rem] flex flex-col">
        <div className="fundamental-header text-[17px]  font-medium flex items-center gap-2">
          You May Also Like
        </div>
        <div className="nft-carousel">
          <div className="group relative   flex items-center">
            <div
              onClick={() => scrollToDirection("left")}
              className="btn-scroll-right border-[2px] border-solid border-[#E3E3E3] mx-2 flex items-center justify-center rounded-full bg-white  cursor-pointer  font-bold text-xl h-[30px] w-[30px]  absolute z-[50] "
            >
              <FaChevronLeft className="text-[15px]"></FaChevronLeft>
            </div>

            <div
              onClick={() => scrollToDirection("right")}
              className="btn-scroll-right mx-2 flex border-[2px] border-solid border-[#E3E3E3] items-center justify-center rounded-full bg-white  cursor-pointer  font-bold text-xl h-[30px] w-[30px]  absolute z-[50] right-0"
            >
              <FaChevronRight className="text-[15px]"></FaChevronRight>
            </div>

            <div
              ref={showsRef}
              className="carousel-container  mt-4 flex gap-2 overflow-x-auto overflow-y-hidden no-scrollbar"
            >
              {coins &&
                coins.map((coin: Coin, i: number) => (
                  <div
                    key={i}
                    className={
                      "carousel-card-container px-4 border-[1px] border-solid border-[#E3E3E3] py-3 max-w-[26rem] rounded-[10px] min-w-[250px] h-[160px] flex flex-col flex-nowrap gap-2 "
                    }
                  >
                    <div className="icon-container ">
                      <div
                        className={
                          "icon-wrapper flex gap-2 items-center rounded-full p-2 "
                        }
                      >
                        <div className="icon icon-btc h-8 w-8 ">
                          <img src={coin.item.large}></img>
                        </div>
                        <div className="coin-symbol text-[#768396] font-medium">
                          {coin.item.symbol.toLocaleUpperCase()}
                        </div>
                      </div>
                    </div>

                    <div className="content-text text-[13px] flex justify-center  h-[40%] w-full ">
                      <img
                        src={coin.item.data.sparkline}
                        className="w-[80%] h-full"
                        alt=""
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="fundamental-header text-[17px] mt-4 font-medium flex items-center gap-2">
          Trending Coins
        </div>
        <div className="nft-carousel">
          <div className="group relative   flex items-center">
            <div
              onClick={() => scrollToDirection("left")}
              className="btn-scroll-right border-[2px] border-solid border-[#E3E3E3] mx-2 flex items-center justify-center rounded-full bg-white  cursor-pointer  font-bold text-xl h-[30px] w-[30px]  absolute z-[50] "
            >
              <FaChevronLeft className="text-[15px]"></FaChevronLeft>
            </div>

            <div
              onClick={() => scrollToDirection("right")}
              className="btn-scroll-right mx-2 flex border-[2px] border-solid border-[#E3E3E3] items-center justify-center rounded-full bg-white  cursor-pointer  font-bold text-xl h-[30px] w-[30px]  absolute z-[50] right-0"
            >
              <FaChevronRight className="text-[15px]"></FaChevronRight>
            </div>

            <div
              ref={showsRef}
              className="carousel-container  mt-4 flex gap-2 overflow-x-auto overflow-y-hidden no-scrollbar"
            >
              {coins &&
                coins.map((coin: Coin, i: number) => (
                  <div
                    key={i}
                    className={
                      "carousel-card-container px-4 border-[1px] border-solid border-[#E3E3E3] py-3 max-w-[26rem] rounded-[10px] min-w-[250px] h-[160px] flex flex-col flex-nowrap gap-2 "
                    }
                  >
                    <div className="icon-container ">
                      <div
                        className={
                          "icon-wrapper flex gap-2 items-center rounded-full p-2 "
                        }
                      >
                        <div className="icon icon-btc h-8 w-8 ">
                          <img src={coin.item.large}></img>
                        </div>
                        <div className="coin-symbol text-[#768396] font-medium">
                          {coin.item.symbol.toLocaleUpperCase()}
                        </div>
                      </div>
                    </div>

                    <div className="content-text flex justify-center text-[13px] text-left h-[40%] w-full ">
                      <img
                        src={coin.item.data.sparkline}
                        className="w-[80%] h-full"
                        alt=""
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YouMayLikeBox;
