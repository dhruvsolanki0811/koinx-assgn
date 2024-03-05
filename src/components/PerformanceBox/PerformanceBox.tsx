import React from "react";
import { FaInfoCircle } from "react-icons/fa";

function PerformanceBox() {
  return (
    <>
      <div className="overview-box mt-8 shadow-box min-h-[max-content] w-full  bg-white py-5 px-9 rounded-[10px]">
            <div className="overview-header text-[20px] font-semibold">Performace</div>
            <div className="fundamental-header text-[17px] mt-3 font-medium flex items-center gap-2">Fundamentals 
            <span><FaInfoCircle className="text-[#a1a1a1]"></FaInfoCircle></span></div> 
            <div className="insight-container w-full mt-3 grid grid-cols-2 gap-[6rem]">
                <div className="insight-1  h-[10rem] grid grid-cols-2 grid-rows-4">
                    <div className="tag flex justify-start border-b-[2px] items-end text-[#5a5a5a]">Okay</div>
                    <div className="tag flex justify-end border-b-[2px] items-end">Okay</div>
                    <div className="tag flex justify-start border-b-[2px] items-end text-[#5a5a5a]">Okay</div>
                    <div className="tag flex justify-end border-b-[2px] items-end">Okay</div>
                    <div className="tag flex justify-start border-b-[2px] items-end text-[#5a5a5a]">Okay</div>
                    <div className="tag flex justify-end border-b-[2px] items-end">Okay</div>
                    <div className="tag flex justify-start border-b-[2px] items-end text-[#5a5a5a]">Okay</div>
                    <div className="tag flex justify-end border-b-[2px] items-end">Okay</div>
                </div>
                <div className="insight-2  h-[10rem] grid grid-cols-2 grid-rows-4">
                <div className="tag flex justify-start border-b-[2px] items-end text-[#5a5a5a]">Okay</div>
                    <div className="tag flex justify-end border-b-[2px] items-end ">Okay</div>
                    <div className="tag flex justify-start border-b-[2px] items-end text-[#5a5a5a]">Okay</div>
                    <div className="tag flex justify-end border-b-[2px] items-end ">Okay</div>
                    <div className="tag flex justify-start border-b-[2px] items-end text-[#5a5a5a]">Okay</div>
                    <div className="tag flex justify-end border-b-[2px] items-end">Okay</div>
                    <div className="tag flex justify-start border-b-[2px] items-end text-[#5a5a5a]">Okay</div>
                    <div className="tag flex justify-end border-b-[2px] items-end">Okay</div>

                </div>
            </div>
      </div>
    </>
  );
}

export default PerformanceBox;
