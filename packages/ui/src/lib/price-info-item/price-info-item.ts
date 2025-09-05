import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-price-info-item',
  template: ` <p>
    <ng-content /> @if(usdPrice()){<span>
      ( {{ '$' + usdPrice()?.toFixed(3) }})</span
    >}
  </p>`,
  styles: `
  @import '@packages/theme';
  
  p{
    text-align: center;
    font-size: 1rem;
    line-height: 1.25em
    color: var(--text-light);
  }
  p span{
    color: var(--text-mid)
  }

  `,
})
export class PriceInfoItemComponent {
  usdPrice = input<number>();
}
