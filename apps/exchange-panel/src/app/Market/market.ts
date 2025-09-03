import { Component } from '@angular/core';
import { Button } from '@packages/ui';
import { ExchangeItemWrapper, DealValueField } from '@packages/ui';
import { marketData } from '@packages/shared';

@Component({
  selector: 'app-market',
  imports: [Button, ExchangeItemWrapper, DealValueField],
  template: `
    <div class="market">
      <form class="form">
        <lib-exchange-item-wrapper [detectFocus]="true">
          <lib-deal-value-field
            [amount]="secondItem.amount"
            [currency]="secondItem.coin"
            (changeCallback)="updateAmounts($event)"
          />
        </lib-exchange-item-wrapper>
        <button type="button" (click)="swapCurrencies()">⇅</button>
        <lib-exchange-item-wrapper [detectFocus]="true">
          <lib-deal-value-field
            [amount]="firstItem.amount"
            [currency]="firstItem.coin"
            (changeCallback)="updateAmounts($event)"
          />
        </lib-exchange-item-wrapper>
        <lib-button
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
  firstItem = {
    coin: 'BTC',
    amount: 0,
    usdPrice: marketData.find((coin) => coin.symbol === 'BTC'),
  };
  secondItem = {
    coin: 'ETH',
    amount: 0,
    usdPrice: marketData.find((coin) => coin.symbol === 'ETH'),
  };
  updateAmounts = (event: any) => {
    this.firstItem.amount = 2;
    this.secondItem.amount = 4;
    console.log('Amount changed:', event);
  };
  swapCurrencies = () => {
    const newFirst = { ...this.secondItem };
    const newSecond = { ...this.firstItem };

    this.firstItem = newFirst;
    this.secondItem = newSecond;
  };
  confirmTransaction = () => {
    alert('Exchange completed — your tokens have been swapped successfully.');
  };
}
