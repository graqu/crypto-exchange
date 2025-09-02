import { Component } from '@angular/core';
import { Button } from '@packages/ui';
import { ExchangeItemWrapper } from '@packages/ui';

@Component({
  selector: 'app-market',
  imports: [Button, ExchangeItemWrapper],
  template: `
    <div class="market">
      <form class="form">
        <lib-exchange-item-wrapper [amount]="ammountA" currency="BTC" />
        <button type="button">⇅</button>
        <lib-exchange-item-wrapper [amount]="ammountB" currency="ETH" />
        <lib-button />
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
  ammountA = 1;
  ammountB = 2;
}
