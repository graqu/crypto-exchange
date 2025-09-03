export type TransationItem = {
  coin: string;
  amount: number;
  usdPrice: number;
  btcPrice: number;
};

export type CoinData = {
  id: number;
  symbol: string;
  name: string;
  priceUsd: number;
  priceBtc: number;
  iconUrl: string;
};
