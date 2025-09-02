import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Button } from '@packages/ui';
import { convertToken } from '@packages/shared';

@Component({
  imports: [RouterModule, Button],
  selector: 'app-root',
  template: `
    <h1>Siema</h1>
    <lib-button />
    <p>Po standardowym kursie 2 jednostki dadzą nam {{ calcPrice(2) }} $</p>
    <p>Po kursie =5, 2 jednostki dadzą nam {{ calcPrice(2, 5) }} $</p>
  `,
})
export class App {
  protected title = 'exchange-panel';
  calcPrice = convertToken;
}
