import React from "react";
import person1 from "@/assests/person1.png";
import person2 from "@/assests/person2.png";
import person3 from "@/assests/person3.png";
import Image from "next/image";
function TeamBox() {
  return (
    <>
      <div className="overview-box mt-8 shadow-box w-full min-h-[max-content]   bg-white py-5 px-9 rounded-[10px]">
        <div className="overview-header text-[20px] font-semibold">Team</div>
        <p className="answer  text-[14px] font-medium text-[#3E424A] mt-[10px] ">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </p>
        <div className="about-member mt-4 w-full flex max-[600px]:flex-col    bg-[#E8F4FD]  rounded-[10px]">
          <div className="profile-wrapper flex  flex-col gap-2 items-center justify-center p-3 max-[600px]:py-[0px]  max-[600px]:pt-[0.5rem] max-[600px]:px-[0rem]">
            <div className="relative image-container w-[5.7rem] h-[5.7rem] ">
              <Image
                src={person1}
                alt=""
                className="rounded-[10px]"
                fill
              ></Image>
            </div>
            <div className="name text-[14px] font-medium">John Smith</div>
          </div>
          <div className="about-wrapper">
            <p className="answer  text-[12px] font-medium text-[#3E424A] mt-[10px] p-3 max-[600px]:py-0  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              minima ea, corporis aspernatur magnam ex doloremque accusantium
              quibusdam similique eius, architecto temporibus? Itaque delectus
              unde, voluptatem dolorum dignissimos, quis reprehenderit
              architecto tenetur saepe quidem facere?
            </p>
          </div>
        </div>
        <div className="about-member w-full flex bg-[#E8F4FD] mt-4 rounded-[10px] max-[600px]:flex-col ">
          <div className="profile-wrapper flex flex-col gap-2 items-center justify-center p-3 max-[600px]:py-[0px]  max-[600px]:pt-[0.5rem] max-[600px]:px-[0rem]">
            <div className="relative image-container w-[5.7rem] h-[5.7rem] ">
              <Image
                src={person2}
                alt=""
                className="rounded-[10px]"
                fill
              ></Image>
            </div>
            <div className="name text-[14px] font-medium">Elina Williams</div>
          </div>
          <div className="about-wrapper">
            <p className="answer  text-[12px] font-medium text-[#3E424A] mt-[10px] p-3 max-[600px]:py-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              minima ea, corporis aspernatur magnam ex doloremque accusantium
              quibusdam similique eius, architecto temporibus? Itaque delectus
              unde, voluptatem dolorum dignissimos, quis reprehenderit
              architecto tenetur saepe quidem facere?
            </p>
          </div>
        </div>
        <div className="about-member w-full flex bg-[#E8F4FD] mt-4 rounded-[10px] max-[600px]:flex-col ">
          <div className="profile-wrapper flex flex-col gap-2 items-center justify-center p-3 max-[600px]:py-[0px]  max-[600px]:pt-[0.5rem] max-[600px]:px-[0rem]">
            <div className="relative image-container w-[5.7rem] h-[5.7rem] ">
              <Image
                src={person3}
                alt=""
                className="rounded-[10px]"
                fill
              ></Image>
            </div>
            <div className="name text-[14px] font-medium">John Smith</div>
          </div>
          <div className="about-wrapper flex">
            <p className="answer  text-[12px] font-medium text-[#3E424A] mt-[10px] p-3 max-[600px]:py-0 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              minima ea, corporis aspernatur magnam ex doloremque accusantium
              quibusdam similique eius, architecto temporibus? Itaque delectus
              unde, voluptatem dolorum dignissimos, quis reprehenderit
              architecto tenetur saepe quidem facere?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamBox;
