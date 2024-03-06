import React from "react";
import logo from "@/assests/logo.svg";
import Image from "next/image";
import "@/components/Navbar/Navbar.css"
function Navbar() {
  return (
    <>
      <div className="nav sticky top-0 z-[100] w-full ps-10 pe-10 bg-white flex justify-between items-center ">
        <div className="relative logo-container w-[4rem] h-[4rem] ">
          <Image src={logo} alt="" fill></Image>
        </div>
        <div className="nav-items-container flex gap-4 font-bold text-[14px]">
          <div className="nav-item flex items-center">Crypto Taxes</div>
          <div className="nav-item flex items-center">Free Tools</div>
          <div className="nav-item flex items-center">Resource Center</div>
          <div className="nav-item flex items-center">
            <div className="btn-container blue-box text-white p-[6px] rounded-[6px]">Get Started</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
