import { Component, input, output } from '@angular/core';
@Component({
  selector: 'lib-deal-value-field',
  template: `
    <div class="deal-value-field">
      <div>
        <label [for]="inputName()">{{ inputName() }}:</label>
        <input
          type="number"
          [id]="inputName()"
          [name]="inputName()"
          [value]="amount()"
          (input)="runChangeEvent($event)"
        />
      </div>
      <div class="currency">{{ currency() }}</div>
    </div>
  `,
  styleUrl: './dealValueField.css',
})
export class DealValueField {
  inputName = input<'sell' | 'buy'>('sell');
  currency = input<string>('BTC');
  amount = input<number>(0);
  changeCallback = output<number>();

  runChangeEvent(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = parseFloat(inputElement.value);

    if (!isNaN(value)) {
      this.changeCallback.emit(value);
    }
  }
}
