import { Component, OnInit, OnDestroy } from '@angular/core';
import { Button } from '@packages/ui';
import { ExchangeItemWrapper, DealValueField } from '@packages/ui';
import {
  marketData,
  calcExchangeRate,
  convertToken,
  transationItem,
  provideDefaultValues,
  validateBuySellForm,
} from '@packages/shared';
import { MarketDataService } from '@crypto-exchange/market-simulation';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-market',
  imports: [Button, ExchangeItemWrapper, DealValueField],
  templateUrl: './market.html',
  styleUrl: './market.css',
})
export class Market {
  firstItem: transationItem = {
    coin: 'BTC',
    amount: 0,
    usdPrice: marketData.find((coin) => coin.symbol === 'BTC')?.priceUsd || 0,
  };
  secondItem: transationItem = {
    coin: 'ETH',
    amount: 0,
    usdPrice: marketData.find((coin) => coin.symbol === 'ETH')?.priceUsd || 0,
  };
  exchangeRate = 1;
  isFormValid = false;
  

  updateAmounts = (amount: number, isFirst: boolean) => {
    if (isFirst) {
      this.exchangeRate = calcExchangeRate(
        this.firstItem.usdPrice,
        this.secondItem.usdPrice
      );
      this.firstItem.amount = amount;
      this.secondItem.amount = convertToken(amount, this.exchangeRate);
    } else {
      this.exchangeRate = calcExchangeRate(
        this.secondItem.usdPrice,
        this.firstItem.usdPrice
      );
      this.firstItem.amount = convertToken(amount, this.exchangeRate);
      this.secondItem.amount = amount;
    }
    this.isFormValid = validateBuySellForm(this.firstItem, this.secondItem);
    console.log(
      'Amount changed:',
      amount,
      isFirst ? 'na pierwszym polu' : 'na drugim'
    );
  };
  swapCurrencies = () => {
    const newFirst = { ...this.secondItem };
    const newSecond = { ...this.firstItem };

    this.firstItem = newFirst;
    this.secondItem = newSecond;
  };
  confirmTransaction = () => {
    alert(
      `Exchange completed — You have bought ${this.secondItem.amount} ${this.secondItem.coin} for ${this.firstItem.amount} ${this.firstItem.coin}`
    );
    this.firstItem = provideDefaultValues().firstItem;
    this.secondItem = provideDefaultValues().secondItem;
    this.isFormValid = false;
  };
}
