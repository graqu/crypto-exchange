import { CoinData } from '@packages/shared';

export let marketData: CoinData[] = [
  {
    id: 1,
    symbol: 'BTC',
    name: 'Bitcoin',
    priceUsd: 110532,
    priceBtc: 1,
    iconUrl: '',
  },
  {
    id: 2,
    symbol: 'ETH',
    name: 'Ethereum',
    priceUsd: 4290.67,
    priceBtc: 0.03881,
    iconUrl: '',
  },
  {
    id: 3,
    symbol: 'USDT',
    name: 'Tether',
    priceUsd: 1.0,
    priceBtc: 0.000009,
    iconUrl: '',
  },
  {
    id: 4,
    symbol: 'XRP',
    name: 'XRP',
    priceUsd: 2.8,
    priceBtc: 0.000025,
    iconUrl: '',
  },
  {
    id: 5,
    symbol: 'BNB',
    name: 'BNB',
    priceUsd: 849.68,
    priceBtc: 0.007687,
    iconUrl: '',
  },
  {
    id: 6,
    symbol: 'SOL',
    name: 'Solana',
    priceUsd: 204.13,
    priceBtc: 0.001847,
    iconUrl: '',
  },
  {
    id: 7,
    symbol: 'USDC',
    name: 'USD Coin',
    priceUsd: 0.9999,
    priceBtc: 0.000009,
    iconUrl: '',
  },
  {
    id: 8,
    symbol: 'STETH',
    name: 'Lido Staked Ether',
    priceUsd: 4282.82,
    priceBtc: 0.03874,
    iconUrl: '',
  },
  {
    id: 9,
    symbol: 'DOGE',
    name: 'Dogecoin',
    priceUsd: 0.2113,
    priceBtc: 0.000002,
    iconUrl: '',
  },
  {
    id: 10,
    symbol: 'TRX',
    name: 'TRON',
    priceUsd: 0.3373,
    priceBtc: 0.000003,
    iconUrl: '',
  },
];

const priceFluctuations = 2; //descibes how many [%] down or up can price change in defined time period
const updateTimePeriod = 500; // interval length in [ms] when prices will update

export function generateNewPrice(price: number) {
  const change = Math.random() * (priceFluctuations * 2) - 2;

  return price + (price * change) / 100;
}
export function updateCoinData(coin: CoinData, btcToUsd: number) {
  const newPrice = generateNewPrice(coin.priceUsd);
  return {
    ...coin,
    priceUsd: newPrice,
    btcPrice: coin.priceUsd / btcToUsd,
  };
}

export function updateMarketData() {
  const btcData = marketData.find((coin) => (coin.name = 'BTC'));
  if (!btcData) return;

  const newBtcData = updateCoinData(btcData, 1);

  const newMarketData = [...marketData].map((coin) => {
    if (coin.name === 'BTC') return newBtcData;
    return updateCoinData(coin, newBtcData.priceUsd);
  });

  marketData = newMarketData;
}
