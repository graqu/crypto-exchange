import { TransationItem } from '../types/utilTypes';
import { CoinData } from '../types/utilTypes';

/** Reusable methods to format and calculate transactionValues */

export function provideDefaultTokenValues() {
  return {
    firstItem: {
      coin: 'BTC',
      amount: 0,
      usdPrice: 0,
      btcPrice: 0,
    },
    secondItem: {
      coin: '',
      amount: 0,
      usdPrice: 0,
      btcPrice: 0,
    },
  };
}

function formatCoinAmount(amount: number) {
  return parseFloat(amount.toFixed(4));
}

export function convertToken(amount: number, rate: number): number {
  if (!isFinite(rate)) return 0;

  return formatCoinAmount(amount * rate);
}

export function calcExchangeRate(sellItemPrice: number, buyItemPrice: number) {
  return sellItemPrice / buyItemPrice;
}

export function validateBuySellForm(
  toSell: TransationItem,
  toBuy: TransationItem
) {
  return toSell.amount > 0 && toBuy.amount > 0 && !!toBuy.coin;
}

export function findToken(listOfTokens: CoinData[], coinSymbol: string) {
  return listOfTokens.find(
    (token) => token.symbol.toLowerCase() === coinSymbol.toLowerCase()
  );
}
