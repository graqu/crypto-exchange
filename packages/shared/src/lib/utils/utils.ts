import { TransationItem } from '../types/utilTypes';
import { CoinData } from '../types/utilTypes';

export function formatCoinAmount(amount: number) {
  return parseFloat(amount.toFixed(4));
}

export function convertToken(amount: number, rate: number): number {
  return formatCoinAmount(amount * rate);
}

export function calcExchangeRate(sellItemPrice: number, buyItemPrice: number) {
  return sellItemPrice / buyItemPrice;
}

export function provideDefaultValues(marketData: CoinData[]) {
  return {
    firstItem: {
      coin: 'BTC',
      amount: 0,
      usdPrice: marketData.find((coin) => coin.symbol === 'BTC')?.priceUsd || 0,
      btcPrice: 1,
    },
    secondItem: {
      coin: 'ETH',
      amount: 0,
      usdPrice: marketData.find((coin) => coin.symbol === 'ETH')?.priceUsd || 0,
      btcPrice: 0.2,
    },
  };
}

export function validateBuySellForm(
  toSell: TransationItem,
  toBuy: TransationItem
) {
  return toSell.amount > 0 && toBuy.amount > 0 && !!toBuy.coin;
}
