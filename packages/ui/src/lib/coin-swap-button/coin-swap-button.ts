import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-coin-swap-button',
  template: `
    <button [disabled]="disabled()" class="coin-swap-button" type="button">
      V
    </button>
  `,
  styles: `
  @import '@packages/theme';
    .coin-swap-button {
        position: absolute;
        padding: 0.5em 1em;
        min-width: 3.25rem;
        min-height: 3.25rem;
        background: none;
        background-color: var(--sub-background);
        border-radius: var(--rounded-sm);
        color: var(--text-mid);
        font-weight:bold;
        border: .25rem solid var(--background);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
    }
 `,
})
export class CoinSwapButtonComponent {
  disabled = input<boolean>(false);
}
