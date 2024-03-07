"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {
  const navigate = useRouter();
  const [counter, setCounter] = useState(10);
  useEffect(() => {
    const timer =
      counter > 0 && setTimeout(() => setCounter((count) => count - 1), 1000);
    if (counter === 0) {
      navigate.push("/bitcoin");
    }
    return () => clearTimeout(timer);
  }, [counter]);

  return (
    <>
      <section className="flex flex-col items-center justify-center home-page w-full h-[50vh]">
        <div className="flex flex-col items-center justify-center home-content ">
          <h1 className="home-letter text-[20px] font-bold text-blue">
            This is Page will navigate to the Bitcoin page
          </h1>
          <div className="txt-md lt-bold count-txt font-semibold">
            Back in {counter}
          </div>
          <button
            onClick={() => navigate.push("/bitcoin")}
            className="btn btn-container bg-[#2870ea] text-white p-[6px] rounded-[6px] "
          >
            Bitcoin
          </button>
        </div>
      </section>
    </>
  );
}

export default Page;
