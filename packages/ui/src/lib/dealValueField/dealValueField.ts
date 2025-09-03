import { Component } from '@angular/core';
import { input, output } from '@angular/core';

@Component({
  selector: 'lib-exchange-item-wrapper',
  template: `
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
  `,
})
export class DealValueField {
  currency = input<string>('BTC');
  amount = input<number>(0);
  changeCallback = output<void>();

  runChangeEvent() {
    this.changeCallback.emit();
  }
}
