import { Component, ElementRef, ViewChild, output } from '@angular/core';
import { Button } from '@packages/ui';
import { marketData } from '@crypto-exchange/market-simulation';

@Component({
  selector: 'app-choose-token-modal',
  imports: [Button],
  template: `
    <lib-button type="button" (click)="openDialog()" label="test Me" />
    <dialog #dialogRef class="modal">
      <div class="modal-content">
        <h1>Choose one option</h1>
        @for(coin of coinsList; track coin.id){
        <button
          class="coin-option"
          type="button"
          (click)="closeDialog(coin.symbol)"
        >
          <p>{{ coin.name }}</p>
          <p>{{ coin.symbol }}</p>
        </button>
        }
      </div>
    </dialog>
  `,
  styles: `
  dialog{
    position: fixed;
    border: none;
    background-color: #333;
    width: min(max(270px, 40vw),1000px);
    height: max(200px, 80vh);
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
  .coin-option{
    margin-bottom: 5px;
    padding:1em;
    background-color: gold;
    text-align:center;
    cursor: pointer;
  }
  .coin-option:hover{
    background-color: #eedfaf;
  }
  `,
})
export class ChooseTokenModalComponent {
  @ViewChild('dialogRef') dialogRef!: ElementRef<HTMLDialogElement>;
  coinsList = marketData;
  userChoiceHandler = output<string>();

  openDialog(): void {
    this.dialogRef.nativeElement.showModal();
  }
  // This method closes the modal
  closeDialog(chosenOption: string): void {
    this.userChoiceHandler.emit(chosenOption);
    this.dialogRef.nativeElement.close();
  }
}
