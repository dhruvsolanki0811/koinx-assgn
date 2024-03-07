"use client";
import React, { useState } from "react";
import logo from "@/assests/logo.svg";
import Image from "next/image";
import "@/components/Navbar/Navbar.css";
import { RiFilePaper2Fill } from "react-icons/ri";
import { GoTools } from "react-icons/go";
import { LiaPaperclipSolid } from "react-icons/lia";
import { BsRocketTakeoff } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { useRouter } from "next/navigation";
function Navbar() {
  const router=useRouter()
  const [dialogBoxOpen, setDialogBoxOpen] = useState(false);
  return (
    <>
      <div className="nav sticky top-0 z-[100] w-full max-[500px]:px-[0.8rem] ps-10 pe-10 bg-white flex justify-between items-center ">
        <div onClick={()=>router.push('.bitcoin')} className="relative logo-container w-[4rem] cursor-pointer h-[4rem] ">
          <Image src={logo} alt="" fill></Image>
        </div>
        <div className="nav-items-container flex gap-4 font-bold text-[14px] max-sm:hidden">
          <div className="nav-item flex items-center cursor-pointer">Crypto Taxes</div>
          <div className="nav-item flex items-center cursor-pointer">Free Tools</div>
          <div className="nav-item flex items-center cursor-pointer">Resource Center</div>
          <div className="nav-item flex items-center cursor-pointer">
            <div className="btn-container blue-box cursor-pointer text-white p-[6px] rounded-[6px]">
              Get Started
            </div>
          </div>
        </div>
        <div className="nav-items-container flex gap-4 font-bold text-[14px] hidden max-sm:block ">
          {dialogBoxOpen && (
            <div className="dialog-box absolute bg-white rounded-[10px] shadow-box border-[2px] border-solid border-[#E5E5E5] px-3 py-3 flex flex-col gap-2 flex-nowrap w-[12rem] z-[500] top-12 right-3">
              {/* Content for the dialogue box */}
              <div className="nav-item cursor-pointer gap-2 flex items-center">
                <LiaPaperclipSolid />
                Crypto Taxes
              </div>
              <div className="nav-item flex items-center gap-2 cursor-pointer">
                <GoTools />
                Free Tools
              </div>
              <div className="nav-item flex items-center gap-2 cursor-pointer">
                <FaTools />
                Resource Center
              </div>
              <div className="nav-item flex items-center gap-2 cursor-pointer">
                <BsRocketTakeoff />
                Get Started
              </div>
            </div>
          )}
          <button
            className="hamburger  flex flex-col gap-[3px] justify-between w-[20px] h-[15px] bg-transparent border-none cursor-pointer"
            onClick={() => setDialogBoxOpen(!dialogBoxOpen)}
          >
            <div className={`line ${dialogBoxOpen ? "line1-cross" : ""}`} />
            <div className={`line ${dialogBoxOpen ? "line2-cross" : ""}`} />
            <div className={`line ${dialogBoxOpen ? "line3-cross" : ""}`} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
