import OverviewBox from "@/components/OverviewBox/OverviewBox";

export default function Home() {
  return (
    <>
      <div className="main-container w-full ">
        <div className="main-content bg-[var(--greyish-bg)] w-full h-[100vh]  ps-10 pe-10 pt-4">
          <div className="cytpo-tag text-[13px] flex flex-nowrap gap-2 ">
            <span className="text-[#5E5E5E]">Cryptocurrencies ≫</span>
            Bitcoin
          </div>
          <div className="content-section  flex mt-3">
            <div className="container-box-one h-full  w-[70%] min-w-[max-content] pe-3">
              <OverviewBox></OverviewBox>
            </div>
            <div className="container-box-two  bg-[pink] w-[30%]  ps-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}
