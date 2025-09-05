import {
  Component,
  computed,
  effect,
  input,
  output,
  signal,
  ViewChild,
} from '@angular/core';
import { Button, Dialog, CryptoListItem, Input } from '@packages/ui';
import { marketData } from '@crypto-exchange/market-simulation';

@Component({
  selector: 'app-choose-token-modal',
  imports: [Dialog, Button, CryptoListItem, Input],
  templateUrl: './choose-token-modal.html',
  styleUrl: './choose-token-modal.css',
})
export class ChooseTokenModalComponent {
  @ViewChild('dialogRef') dialogRef!: Dialog;
  label = input<string>('');
  userChoiceHandler = output<string>();
  avoid = input<string>('');
  searchTerm = signal('');

  coinsList = computed(() => {
    const avoidValue = this.avoid()?.toLowerCase();
    const searchValue = this.searchTerm().toLowerCase();

    const filteredMarketData = marketData.filter(
      (coin) => coin.symbol.toLowerCase() !== avoidValue
    );

    return filteredMarketData.filter(
      (coin) =>
        coin.symbol.toLowerCase().includes(searchValue) ||
        coin.name.toLowerCase().includes(searchValue)
    );
  });

  imagePath = signal('/btc-logo.png');

  constructor() {
    effect(() => {
      const labelValue = this.label();
      if (labelValue) {
        this.imagePath.set(`/${labelValue.toLowerCase()}-logo.png`);
      }
    });
  }

  handleIconNotFound() {
    this.imagePath.set('/btc-logo.png');
  }

  closeDialog(chosenOption: string): void {
    this.userChoiceHandler.emit(chosenOption);
    this.dialogRef.closeDialog();
  }

  handleSearch(value: string) {
    this.searchTerm.set(value);
  }
}
