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
import { ChevronDown, LucideAngularModule } from 'lucide-angular';

/** Displays dialog with list of tokens to choose **/
@Component({
  selector: 'app-choose-token-modal',
  imports: [Dialog, Button, CryptoListItem, Input, LucideAngularModule],
  templateUrl: './choose-token-modal.html',
  styleUrl: './choose-token-modal.css',
})
export class ChooseTokenModalComponent {
  @ViewChild('dialogRef') dialogRef!: Dialog;
  readonly ChevronDownIcon = ChevronDown;

  label = input<string>('');
  userChoiceHandler = output<string>();
  avoid = input<string>('');
  searchTerm = signal('');
  imagePath = signal('/btc-logo.png');

  //Handle Searchbar filtering + avoid token from second input
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

  handleSearch(value: string) {
    this.searchTerm.set(value);
  }

  //change image path when label is ready
  constructor() {
    effect(() => {
      const labelValue = this.label();
      if (labelValue) {
        this.imagePath.set(`/${labelValue.toLowerCase()}-logo.png`);
      }
    });
  }

  //provide default icon in case of error
  handleIconNotFound() {
    this.imagePath.set('/btc-logo.png');
  }

  closeDialog(chosenOption: string): void {
    this.userChoiceHandler.emit(chosenOption);
    this.dialogRef.closeDialog();
  }
}
