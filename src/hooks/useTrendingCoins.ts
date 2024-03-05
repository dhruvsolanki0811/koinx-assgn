import { Coin } from "@/types/types";
import axios from "axios";
import useSWR from "swr";

export const useFetchTrendingCoin=()=>{
    const fetcher = () => axios.get<{coins:Coin[]}>('https://api.coingecko.com/api/v3/search/trending').then(res => res.data)
    const { data, isLoading,error } = useSWR('trending-coins',fetcher)
    return {
        data: data?.coins,
        isLoading,
        isError: error
      }
    
}