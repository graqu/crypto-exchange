import {
  Component,
  effect,
  input,
  output,
  signal,
  ViewChild,
} from '@angular/core';
import { Button, Dialog, CryptoListItem } from '@packages/ui';
import { marketData } from '@crypto-exchange/market-simulation';

@Component({
  selector: 'app-choose-token-modal',
  imports: [Dialog, Button, CryptoListItem],
  templateUrl: './choose-token-modal.html',
  styleUrl: './choose-token-modal.css',
})
export class ChooseTokenModalComponent {
  @ViewChild('dialogRef') dialogRef!: Dialog;
  coinsList = marketData
  label = input<string>('');
  userChoiceHandler = output<string>();
  avoid = input<string>('');

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
}
