import { CoinData } from '../types/utilTypes';

export const marketData: CoinData[] = [
  { id: 1, symbol: 'BTC', name: 'Bitcoin', priceUsd: 110532, iconUrl: '' },
  { id: 2, symbol: 'ETH', name: 'Ethereum', priceUsd: 4290.67, iconUrl: '' },
  { id: 3, symbol: 'USDT', name: 'Tether', priceUsd: 1.0, iconUrl: '' },
  { id: 4, symbol: 'XRP', name: 'XRP', priceUsd: 2.8, iconUrl: '' },
  { id: 5, symbol: 'BNB', name: 'BNB', priceUsd: 849.68, iconUrl: '' },
  { id: 6, symbol: 'SOL', name: 'Solana', priceUsd: 204.13, iconUrl: '' },
  { id: 7, symbol: 'USDC', name: 'USD Coin', priceUsd: 0.9999, iconUrl: '' },
  {
    id: 8,
    symbol: 'STETH',
    name: 'Lido Staked Ether',
    priceUsd: 4282.82,
    iconUrl: '',
  },
  { id: 9, symbol: 'DOGE', name: 'Dogecoin', priceUsd: 0.2113, iconUrl: '' },
  { id: 10, symbol: 'TRX', name: 'TRON', priceUsd: 0.3373, iconUrl: '' },
];

export function convertToken(amount: number, rate: number): number {
  return amount * rate;
}

export function calcExchangeRate(sellItemPrice: number, buyItemPrice: number) {
  return parseFloat((sellItemPrice / buyItemPrice).toFixed(8));
}

export function provideDefaultValues() {
  return {
    firstItem: {
      coin: 'BTC',
      amount: 0,
      usdPrice: marketData.find((coin) => coin.symbol === 'BTC')?.priceUsd || 0,
    },
    secondItem: {
      coin: 'ETH',
      amount: 0,
      usdPrice: marketData.find((coin) => coin.symbol === 'ETH')?.priceUsd || 0,
    },
  };
}
