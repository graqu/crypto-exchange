import { Component, input, output } from '@angular/core';
@Component({
  selector: 'lib-deal-value-field',
  templateUrl: 'deal-value-field.html',
  styleUrl: './deal-value-field.css',
})
export class DealValueField {
  inputName = input<'sell' | 'buy'>('sell');
  currency = input<string>('BTC');
  amount = input<number>(0);
  isCustomElement = input<boolean>(false);
  changeCallback = output<number>();

  runChangeEvent(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = parseFloat(inputElement.value);

    if (!isNaN(value)) {
      this.changeCallback.emit(value);
    } else {
      this.changeCallback.emit(0);
    }
  }
}
