"use client";
import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

function TradingChart({ symbol }: { symbol?: string }) {
  const [graphInterval, setGraphInterval] = useState("24H");

  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (container.current && symbol) {
      console.log(symbol);
      const existingScript = container.current.querySelector("script");
      if (existingScript) {
        existingScript.remove();
      }
    }

    // Create and append the new script element
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "${symbol}USD",
          "interval": "${graphInterval}",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "hide_legend": true,
          "allow_symbol_change": true,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    if (symbol) {
      container.current?.appendChild(script);
    }
    // Clean up function to remove the script when the component unmounts
    return () => {
      script.remove();
      if (container.current) {
        container.current.innerHTML = "";
      }
    };
  }, [graphInterval, symbol]);

  return (
    <>
      <div className="change-btn-container w-full flex justify-between flex-nowrap">
        <div className="chart-tag text-[16px] font-bold">
          Bitcoin Price Chart (USD)
        </div>
        <div className="unit-times-duration flex text-[13px] text-[#768396] font-medium gap-3">
          {["1H", "24H", "7D", "1M", "3M", "6M", "1Y"].map((unit, key) => (
            <div
              key={key}
              onClick={() => setGraphInterval(unit)}
              className={twMerge(
                `time-duration cursor-pointer`,
                graphInterval == unit && ` text-[#2870ea]`
              )}
            >
              {unit}
            </div>
          ))}
        </div>
      </div>
      <div className="trading-container h-[19rem] w-full mt-10">
        <div className="tradingview-widget-container " ref={container}></div>
      </div>
    </>
  );
}

export default TradingChart;
