export type transationItem = {
  coin: string;
  amount: number;
  usdPrice: number;
};

export type CoinData = {
  id: number;
  symbol: string;
  name: string;
  priceUsd: number;
  iconUrl: string;
};
