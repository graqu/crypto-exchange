import { Component, OnInit, OnDestroy } from '@angular/core';
import { Button } from '@packages/ui';
import { ExchangeItemWrapper, DealValueField } from '@packages/ui';
import {
  calcExchangeRate,
  convertToken,
  TransationItem,
  provideDefaultValues,
  validateBuySellForm,
  CoinData,
} from '@packages/shared';
import { MarketDataService } from '@crypto-exchange/market-simulation';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-market',
  imports: [Button, ExchangeItemWrapper, DealValueField],
  templateUrl: './market.html',
  styleUrl: './market.css',
})
export class Market implements OnInit, OnDestroy {
  marketData: CoinData[] = [];
  private marketDataSubscription!: Subscription;
  firstItem: TransationItem = {
    coin: 'BTC',
    amount: 0,
    usdPrice: 0,
    btcPrice: 0,
  };
  secondItem: TransationItem = {
    coin: 'ETH',
    amount: 0,
    usdPrice: 0,
    btcPrice: 0,
  };
  exchangeRate = 1;
  lastActiveField: 'buy' | 'sell' = 'buy';
  isFormValid = false;

  constructor(private marketDataService: MarketDataService) {}
  ngOnInit(): void {
    // Service data streaming
    this.marketDataSubscription = this.marketDataService.marketData$.subscribe(
      (data) => {
        this.marketData = data;

        const itemToSellData = this.marketData.find(
          (coin) => coin.symbol === this.firstItem.coin
        );
        if (itemToSellData) {
          this.firstItem.usdPrice = itemToSellData.priceUsd;
          this.firstItem.btcPrice = itemToSellData.priceBtc;
        }

        const itemToBuyData = this.marketData.find(
          (coin) => coin.symbol === this.secondItem.coin
        );
        if (itemToBuyData) {
          this.secondItem.usdPrice = itemToBuyData.priceUsd;
          this.secondItem.btcPrice = itemToBuyData.priceBtc;
        }

        if (this.lastActiveField === 'sell') {
          this.updateAmounts(this.firstItem.amount, true);
        } else {
          this.updateAmounts(this.secondItem.amount, false);
        }
      }
    );
  }

  ngOnDestroy(): void {
    // Pamiętaj o wyczyszczeniu subskrypcji
    if (this.marketDataSubscription) {
      this.marketDataSubscription.unsubscribe();
    }
  }

  updateAmounts = (amount: number, isFirst: boolean) => {
    if (isFirst) {
      this.exchangeRate = calcExchangeRate(
        this.firstItem.usdPrice,
        this.secondItem.usdPrice
      );
      this.lastActiveField = 'sell';
      this.firstItem.amount = amount;
      this.secondItem.amount = convertToken(amount, this.exchangeRate);
    } else {
      this.exchangeRate = calcExchangeRate(
        this.secondItem.usdPrice,
        this.firstItem.usdPrice
      );
      this.lastActiveField = 'buy';
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
