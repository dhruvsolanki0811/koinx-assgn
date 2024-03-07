import React from "react";
import chart from "@/assests/d.svg";
import Image from "next/image";
function TokenomicBox() {
  return (
    <>
      <div className="overview-box mt-8 shadow-box w-full min-h-[max-content]   bg-white py-5 px-9 rounded-[10px]">
        <div className="overview-header text-[20px] font-semibold">
          Tokenomics
        </div>

        <div className="fundamental-header text-[17px] mt-3 font-medium flex items-center gap-2">
          Initial Distribution
        </div>
        <div className="chart-container">
          <div className="flex  items-center w-full mt-4 gap-10">
            <div className="img w-[6.5rem] h-[6.5rem] ">
              <Image src={chart} alt=""></Image>
            </div>
            <div className="tag h-full flex flex-col justify-center gap-2">
              <div className="crowdsale text-[15px] flex items-center gap-2   ">
                <span className="h-[8px] w-[8px] bg-[#0082FF]"></span> Crowdsale
                investors: 80%
              </div>
              <div className="crowdsale text-[15px] flex items-center gap-2">
                {" "}
                <span className="h-[8px] w-[8px] bg-[#FAA002]"></span>
                Foundation: 20%
              </div>
            </div>
          </div>
          <p className="answer  text-[14px] font-medium text-[#3E424A] mt-4 ">
            Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique
            ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur
            bibendum amet enim sit eget leo amet. At metus orci augue fusce
            eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales
            massa habitasse urna felis augue. Gravida aliquam fermentum augue
            eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio
            rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae.
            Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio
            nisi eu ac risus.
          </p>
        </div>
      </div>
    </>
  );
}

export default TokenomicBox;
