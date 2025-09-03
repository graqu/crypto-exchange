import { describe, it, expect } from '@jest/globals';
import {
  generateNewPrice,
  updateMarketData,
  marketData,
} from './market-simulation';

// describe('generateNewPrice', () => {
//   it('should return a price within ±2% of the original price', () => {
//     const price = 100;
//     const min = price * 0.98;
//     const max = price * 1.02;

//     for (let i = 0; i < 15; i++) {
//       const newPrice = generateNewPrice(price);
//       const percentChange = ((newPrice - price) / price) * 100;
//       console.log(
//         `Test case ${i + 1}: original=${price}, new=${newPrice.toFixed(
//           4
//         )}, change=${percentChange.toFixed(2)}%`
//       );
//       expect(newPrice).toBeGreaterThanOrEqual(min);
//       expect(newPrice).toBeLessThanOrEqual(max);
//     }
//   });
// });

describe('updateMarketData', () => {
  it('should return an array of the same length as marketData', () => {
    const updated = updateMarketData();
    expect(Array.isArray(updated)).toBe(true);
    expect(updated.length).toBe(marketData.length);
  });

  it('should return coins with priceUsd within ±2% of original', () => {
    const original = marketData.map((coin) => ({ ...coin }));
    const updated = updateMarketData();

    for (let i = 0; i < original.length; i++) {
      const origPrice = original[i].priceUsd;
      const newPrice = updated[i].priceUsd;
      const min = origPrice * 0.98;
      const max = origPrice * 1.02;
      const percentChange = ((newPrice - origPrice) / origPrice) * 100;
      console.log(
        `Coin: ${
          original[i].symbol
        }, original=${origPrice}, new=${newPrice.toFixed(
          4
        )}, change=${percentChange.toFixed(2)}%`
      );
      expect(newPrice).toBeGreaterThanOrEqual(min);
      expect(newPrice).toBeLessThanOrEqual(max);
    }
  });
});
