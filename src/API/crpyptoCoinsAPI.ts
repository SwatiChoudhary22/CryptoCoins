import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Coin {
  "24hVolume": string;
  btcPrice: number;
  change: number;
  coinrankingUrl: string;
  color: string;
  iconUrl: string;
  listedAt: number;
  lowVolume: boolean;
  marketCap: number;
  name: string;
  price: number;
  rank: number;
  uuid?: string;
  symbol: string;
  id: string;
  description: string;
}

interface CoinsResponse {
  data: {
    coins: Coin[];
  };
  error?: string;
}
interface CoinResponse {
  data: {
    coin: Coin;
  };
  error?: string;
}

export const cryptoCoinsAPI = createApi({
  reducerPath: "cryptoCoinsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", "e5875a935amshe6fe1def0895a43p1769d7jsnd26878af856e");
      headers.set("X-RapidAPI-Host", "coinranking1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCoins: builder.query<CoinsResponse, void>({
      query: () => "/coins",
    }),
    getCoin: builder.query<CoinResponse, string>({
      query: (uuid: string) => `/coin/${uuid}`,
    }),
  }),
});

export const { useGetCoinsQuery, useGetCoinQuery } = cryptoCoinsAPI;
