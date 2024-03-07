import { CryptoData } from "@/types/types";
import axios from "axios";
import useSWR from "swr";

export const useFetchCoin = (symbol: string) => {
  const fetcher = async () => {
    const response = await axios.get<CryptoData>(
      `https://api.coingecko.com/api/v3/coins/${symbol}?tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true`
    );
    const crypto = await response.data;
    return crypto as CryptoData;
  };

  const { data, isLoading, error } = useSWR(symbol, fetcher);
  return {
    data: data,
    isLoading,
    isError: Boolean(error), //
  };
};
