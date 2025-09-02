import { Component } from '@angular/core';
import { Button } from '@packages/ui';
import { convertToken } from '@packages/shared';

@Component({
  selector: 'app-market',
  imports: [Button],
  template: `
    <div class="market">
      <h1>Market Component</h1>
      <p>Po standardowym kursie 2 jednostki dadzą nam {{ calcPrice(2) }} $</p>
      <p>Po kursie =5, 2 jednostki dadzą nam {{ calcPrice(2, 5) }} $</p>
      <lib-button />
    </div>
  `,
})
export class Market {
  calcPrice = convertToken;
  // Component logic goes here
}
