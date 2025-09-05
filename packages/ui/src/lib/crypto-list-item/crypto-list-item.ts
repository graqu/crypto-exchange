import { Component, input} from '@angular/core';
import { CoinData } from '@packages/shared';

@Component({
  selector: 'lib-crypto-list-item',
  templateUrl: './crypto-list-item.html',
  styleUrl: './crypto-list-item.css',
})
export class CryptoListItem {
  coin = input<CoinData>();
  image = input<string>('/btc-logo.png');

   handleIconNotFound(event: Event) {
    const imageElement = event.target as HTMLImageElement
    imageElement.src = '/btc-logo.png'
  }
}
