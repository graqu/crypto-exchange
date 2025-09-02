import { Component } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'lib-exchange-item-wrapper',
  template: ` <div class="exchange-item-wrapper">
    <div>
      <label for="sell">Sell:</label>
      <input type="number" id="sell" name="sell" [value]="amount()" />
    </div>
    <div class="currency">{{ currency() }}</div>
  </div>`,
  styleUrl: './exchangeItemWrapper.css',
})
export class ExchangeItemWrapper {
  currency = input<string>('BTC');
  amount = input<number>(0);
}
