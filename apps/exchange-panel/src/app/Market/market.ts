import { Component } from '@angular/core';
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

@Component({
  selector: 'app-market',
  imports: [Button, ExchangeItemWrapper, DealValueField],
  template: `
    <div class="market">
      <form class="form">
        <lib-exchange-item-wrapper [detectFocus]="true">
          <lib-deal-value-field
            [amount]="firstItem.amount"
            [currency]="firstItem.coin"
            (changeCallback)="updateAmounts($event, true)"
          />
        </lib-exchange-item-wrapper>
        <button type="button" (click)="swapCurrencies()">⇅</button>
        <lib-exchange-item-wrapper [detectFocus]="true">
          <lib-deal-value-field
            inputName="buy"
            [amount]="secondItem.amount"
            [currency]="secondItem.coin"
            (changeCallback)="updateAmounts($event, false)"
          />
        </lib-exchange-item-wrapper>
        <lib-button
          [disabled]="!isFormValid"
          (click)="confirmTransaction()"
          label="Sell {{ firstItem.coin }}"
        />
      </form>
    </div>
  `,
  styles: `
  .form{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:1em;
  }
  `,
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
