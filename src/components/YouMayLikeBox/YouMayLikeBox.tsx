import { useFetchTrendingCoin } from "@/hooks/useTrending";
import { Coin } from "@/types/types";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

function YouMayLikeBox() {
  const router = useRouter();
  const { data: coins } = useFetchTrendingCoin();
  const carouseloneRef = useRef<HTMLDivElement>(null);
  //   const showsRef = useRef<HTMLDivElement>(null);
  const scrollToDirectionCarouselOne = (direction: "left" | "right") => {
    if (!carouseloneRef.current) return;

    const { scrollLeft, clientWidth } = carouseloneRef.current;
    const offset =
      direction === "left"
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;

    carouseloneRef.current.scrollTo({ left: offset, behavior: "smooth" });

    if (scrollLeft === 0 && direction === "left") {
      carouseloneRef.current.scrollTo({
        left: carouseloneRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  };

  const carouseltwoRef = useRef<HTMLDivElement>(null);
  const scrollToDirectionCarouselTwo = (direction: "left" | "right") => {
    if (!carouseltwoRef.current) return;

    const { scrollLeft, clientWidth } = carouseltwoRef.current;
    const offset =
      direction === "left"
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;

    carouseltwoRef.current.scrollTo({ left: offset, behavior: "smooth" });

    if (scrollLeft === 0 && direction === "left") {
      carouseltwoRef.current.scrollTo({
        left: carouseltwoRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="recomm-box cursor-default w-full bg-white  py-10 px-[4rem] flex flex-col">
        <div className="fundamental-header text-[17px]  font-medium flex items-center gap-2">
          You May Also Like
        </div>
        <div className="nft-carousel">
          <div className="group relative   flex items-center">
            <div
              onClick={() => scrollToDirectionCarouselOne("left")}
              className="btn-scroll-right border-[2px] border-solid border-[#E3E3E3] mx-2 flex items-center justify-center rounded-full bg-white  cursor-pointer  font-bold text-xl h-[30px] w-[30px]  absolute z-[50] "
            >
              <FaChevronLeft className="text-[15px]"></FaChevronLeft>
            </div>

            <div
              onClick={() => scrollToDirectionCarouselOne("right")}
              className="btn-scroll-right mx-2 flex border-[2px] border-solid border-[#E3E3E3] items-center justify-center rounded-full bg-white  cursor-pointer  font-bold text-xl h-[30px] w-[30px]  absolute z-[50] right-0"
            >
              <FaChevronRight className="text-[15px]"></FaChevronRight>
            </div>

            <div
              ref={carouseloneRef}
              className="carousel-container  mt-4 flex gap-2 overflow-x-auto overflow-y-hidden no-scrollbar"
            >
              {coins &&
                coins.map((coin: Coin, i: number) => (
                  <div
                    key={i}
                    onClick={() => router.push(`/${coin.item.id}`)}
                    className={
                      "carousel-card-container cursor-pointer px-4 border-[1px] border-solid border-[#E3E3E3] py-3 max-w-[26rem] rounded-[10px] min-w-[250px] h-[160px] flex flex-col flex-nowrap gap-2 "
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
                        {coin &&
                          (coin.item.data.price_change_percentage_24h['usd'] >
                          0 ? (
                            <div className="price-change min-w-[max-content] text-[13px] font-bold text-[#0FBA83] bg-[#EBF9F4] p-[2px] rounded-[6px] ms-8 flex flex-nowrap items-center justify-center gap-1">
                              <TiArrowSortedUp className="text-[16px]"></TiArrowSortedUp>
                              {coin.item.data.price_change_percentage_24h['usd'].toString().slice(0,6)}
                              %
                            </div>
                          ) : (
                            <div className="price-change text-[#EB5B3C] bg-[#fee2e2] min-w-[max-content] text-[13px] font-bold text-[#0FBA83] bg-[#EBF9F4] p-[2px] rounded-[6px] ms-8 flex flex-nowrap items-center justify-center gap-1">
                              <TiArrowSortedDown className="text-[16px]"></TiArrowSortedDown>
                              {coin.item.data.price_change_percentage_24h['usd']
                                .toString()
                                .slice(
                                  1,7)}
                              %
                            </div>
                          ))}
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
              onClick={() => scrollToDirectionCarouselTwo("left")}
              className="btn-scroll-right border-[2px] border-solid border-[#E3E3E3] mx-2 flex items-center justify-center rounded-full bg-white  cursor-pointer  font-bold text-xl h-[30px] w-[30px]  absolute z-[50] "
            >
              <FaChevronLeft className="text-[15px]"></FaChevronLeft>
            </div>

            <div
              onClick={() => scrollToDirectionCarouselTwo("right")}
              className="btn-scroll-right mx-2 flex border-[2px] border-solid border-[#E3E3E3] items-center justify-center rounded-full bg-white  cursor-pointer  font-bold text-xl h-[30px] w-[30px]  absolute z-[50] right-0"
            >
              <FaChevronRight className="text-[15px]"></FaChevronRight>
            </div>

            <div
              ref={carouseltwoRef}
              className="carousel-container  mt-4 flex gap-2 overflow-x-auto overflow-y-hidden no-scrollbar"
            >
              {coins &&
                coins.map((coin: Coin, i: number) => (
                  <div
                    key={i}
                    onClick={() => router.push(`/${coin.item.id}`)}
                    className={
                      "carousel-card-container cursor-pointer  px-4 border-[1px] border-solid border-[#E3E3E3] py-3 max-w-[26rem] rounded-[10px] min-w-[250px] h-[160px] flex flex-col flex-nowrap gap-2 "
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
                        {coin &&
                          (coin.item.data.price_change_percentage_24h['usd'] >
                          0 ? (
                            <div className="price-change text-[#0FBA83] bg-[#EBF9F4] min-w-[max-content] text-[13px] font-bold p-[2px] rounded-[6px] ms-8 flex flex-nowrap items-center justify-center gap-1">
                              <TiArrowSortedUp className="text-[16px]"></TiArrowSortedUp>
                              {coin.item.data.price_change_percentage_24h['usd'].toString().slice(0,6)}
                              %
                            </div>
                          ) : (
                            <div className="price-change text-[#EB5B3C] bg-[#fee2e2] min-w-[max-content] text-[13px] font-bold  p-[2px] rounded-[6px] ms-8 flex flex-nowrap items-center justify-center gap-1">
                              <TiArrowSortedDown className="text-[16px]"></TiArrowSortedDown>
                              {coin.item.data.price_change_percentage_24h['usd']
                                .toString()
                                .slice(
                                  1,7)}
                              %
                            </div>
                          ))}
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
