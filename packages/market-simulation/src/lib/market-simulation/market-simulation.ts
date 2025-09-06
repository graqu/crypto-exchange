import { CoinData } from '@packages/shared';
import { INITIAL_MARKET_DATA } from '../initial-pricing-data/initial-pricing-data';

export let marketData = [...INITIAL_MARKET_DATA];

const priceFluctuations = 1; //descibes how many [%] down or up can price change in defined time period
const initialPriceData = marketData.map((coin) => ({
  ...coin,
})) satisfies CoinData[];

/** Replaces market data with new array */
export function updateMarketData() {
  const btcData = marketData.find((coin) => (coin.symbol = 'BTC'));
  if (!btcData) return;

  const newBtcData = updateCoinData(btcData, 1);

  const newMarketData = [...marketData].map((coin) => {
    if (coin.symbol === 'BTC') return newBtcData;
    return updateCoinData(coin, newBtcData.priceUsd);
  });

  marketData = newMarketData;
}

/**limitMaxPriceChange - prevents prices to reach unrealistic values */
function limitMaxPriceChange(price: number, referencePrice: number) {
  return Math.min(
    Math.max(price, referencePrice * (1 - priceFluctuations / 100)),
    referencePrice * (1 + priceFluctuations / 100)
  );
}

/**generateNewPrice - takes single price an provides new value with random fluctuation */
function generateNewPrice(price: number, referencePrice: number) {
  const change =
    Math.random() * (priceFluctuations * 2) - priceFluctuations / 2;

  return limitMaxPriceChange(price + (price * change) / 100, referencePrice);
}

/**updateCoinData - takes single coin from market data and provides copy with new pricing */
export function updateCoinData(coin: CoinData, btcToUsd: number) {
  const referencePrice = initialPriceData.find(
    (item) => item.name === coin.name
  )?.priceUsd;
  if (!referencePrice) return coin;

  const newPrice = generateNewPrice(coin.priceUsd, referencePrice);

  return {
    ...coin,
    priceUsd: newPrice,
    btcPrice: newPrice / btcToUsd,
  };
}

