export const marketData = [
  { id: 1, symbol: 'BTC', name: 'Bitcoin', priceUsd: 110532 },
  { id: 2, symbol: 'ETH', name: 'Ethereum', priceUsd: 4290.67 },
  { id: 3, symbol: 'USDT', name: 'Tether', priceUsd: 1.0 },
  { id: 4, symbol: 'XRP', name: 'XRP', priceUsd: 2.8 },
  { id: 5, symbol: 'BNB', name: 'BNB', priceUsd: 849.68 },
  { id: 6, symbol: 'SOL', name: 'Solana', priceUsd: 204.13 },
  { id: 7, symbol: 'USDC', name: 'USD Coin', priceUsd: 0.9999 },
  { id: 8, symbol: 'STETH', name: 'Lido Staked Ether', priceUsd: 4282.82 },
  { id: 9, symbol: 'DOGE', name: 'Dogecoin', priceUsd: 0.2113 },
  { id: 10, symbol: 'TRX', name: 'TRON', priceUsd: 0.3373 },
];

export function convertToken(
  amount: number,
  rate: number | undefined = 4
): number {
  return amount * rate;
}
