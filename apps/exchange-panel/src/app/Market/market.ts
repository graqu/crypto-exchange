import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import {
  Button,
  CoinSwapButtonComponent,
  ExchangeItemWrapper,
  DealValueField,
  TransactionFieldsWrapperComponent,
  PriceInfoItemComponent,
} from '@packages/ui';
import {
  calcExchangeRate,
  convertToken,
  provideDefaultTokenValues,
  validateBuySellForm,
  CoinData,
  findToken,
} from '@packages/shared';
import { MarketDataService } from '@crypto-exchange/market-simulation';
import { ChooseTokenModalComponent } from '../components/chooseTokenModal/choose-token-modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-market',
  imports: [
    Button,
    ExchangeItemWrapper,
    DealValueField,
    ChooseTokenModalComponent,
    CoinSwapButtonComponent,
    TransactionFieldsWrapperComponent,
    PriceInfoItemComponent,
  ],
  templateUrl: './market.html',
  styleUrl: './market.css',
})
export class Market implements OnInit, OnDestroy {
  marketData: CoinData[] = [];
  private marketDataSubscription!: Subscription;

  firstItem = provideDefaultTokenValues().firstItem;
  secondItem = provideDefaultTokenValues().secondItem;
  exchangeRate = 1;
  lastActiveField: 'buy' | 'sell' = 'buy';
  isFormValid = false;

  private marketDataService = inject(MarketDataService);

  // Subscribe data from market
  ngOnInit(): void {
    this.marketDataSubscription = this.marketDataService.marketData$.subscribe(
      (data) => {
        this.marketData = data;

        const itemToSellData = findToken(this.marketData, this.firstItem.coin);
        if (itemToSellData) {
          this.firstItem.usdPrice = itemToSellData.priceUsd;
          this.firstItem.btcPrice = itemToSellData.priceBtc;
        }

        const itemToBuyData = findToken(this.marketData, this.secondItem.coin);
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
    if (this.marketDataSubscription) {
      this.marketDataSubscription.unsubscribe();
    }
  }

  //Update Amounts when user change input value
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
  };

  //change currencies in place
  swapCurrencies = () => {
    if (this.secondItem.coin === '') return;
    const newFirst = { ...this.secondItem };
    const newSecond = { ...this.firstItem };

    this.firstItem = newFirst;
    this.secondItem = newSecond;
  };

  //change token on choosen input
  changeCoinOnInput = (newCoin: string, isToSell = true) => {
    const newCoinData = findToken(this.marketData, newCoin);
    if (!newCoinData) return;
    if (isToSell) {
      this.firstItem = {
        coin: newCoinData.symbol,
        amount: 0,
        usdPrice: newCoinData.priceUsd,
        btcPrice: newCoinData.priceBtc,
      };
    } else {
      this.secondItem = {
        coin: newCoinData.symbol,
        amount: 0,
        usdPrice: newCoinData.priceUsd,
        btcPrice: newCoinData.priceBtc,
      };
    }
  };

  confirmTransaction = () => {
    alert(
      `Exchange completed — You have bought ${this.secondItem.amount} ${this.secondItem.coin} for ${this.firstItem.amount} ${this.firstItem.coin}`
    );

    this.resetTransactionForm();
  };

  resetTransactionForm() {
    this.firstItem = provideDefaultTokenValues().firstItem;
    this.secondItem = provideDefaultTokenValues().secondItem;
    this.isFormValid = false;
    this.exchangeRate = 1;
    this.lastActiveField = 'buy';
  }
}
