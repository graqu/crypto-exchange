import { Component } from '@angular/core';
import { input, output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'lib-exchange-item-wrapper',
  imports: [NgClass],
  template: ` <div
    class="exchange-item-wrapper"
    [ngClass]="{ 'focus-sensitive': detectFocus() }"
  >
    <div>
      <label for="sell">Sell:</label>
      <input
        type="number"
        id="sell"
        name="sell"
        [value]="amount()"
        (input)="runChangeEvent()"
      />
    </div>
    <div class="currency">{{ currency() }}</div>
  </div>`,
  styleUrl: './exchangeItemWrapper.css',
})
export class ExchangeItemWrapper {
  detectFocus = input<boolean>(false);
  currency = input<string>('BTC');
  amount = input<number>(0);
  changeCallback = output<void>();

  runChangeEvent() {
    this.changeCallback.emit();
  }
}
