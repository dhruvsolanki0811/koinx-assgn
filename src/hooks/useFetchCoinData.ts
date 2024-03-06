import { CryptoData } from "@/types/types";
import axios from "axios";
import useSWR from "swr";

export const useFetchCoin = () => {
    const fetcher = async () => 
    {
      return  await axios.get<CryptoData>(`https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true`);
}
const { data, isLoading, error } = useSWR('coin', fetcher);
    return {
        data: data,
        isLoading,
        isError: Boolean(error)  // 
    };
};
