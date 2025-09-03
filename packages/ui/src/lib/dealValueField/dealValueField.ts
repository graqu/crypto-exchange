import { Component,input, output } from '@angular/core';

@Component({
  selector: 'lib-deal-value-field',
  template: `
    <div class="deal-value-field">
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
    </div>
  `,
  styleUrl: './dealValueField.css'
})
export class DealValueField {
  currency = input<string>('BTC');
  amount = input<number>(0);
  changeCallback = output<void>();

  runChangeEvent() {
    this.changeCallback.emit();
  }
}
