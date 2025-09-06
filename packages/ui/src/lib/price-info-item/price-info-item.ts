import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-price-info-item',
  template: ` <p>
    <ng-content /> @if(usdPrice()){<span>
      ( {{ '$' + usdPrice()?.toFixed(3) }})</span
    >}
  </p>`,
  styleUrl: './price-info-item.css',
})
export class PriceInfoItemComponent {
  usdPrice = input<number>();
}
