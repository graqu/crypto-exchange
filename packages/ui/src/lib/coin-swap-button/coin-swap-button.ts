import { Component, input } from '@angular/core';
import { LucideAngularModule, ArrowDown } from 'lucide-angular';

@Component({
  selector: 'lib-coin-swap-button',
  imports: [LucideAngularModule],
  template: `
    <button [disabled]="disabled()" class="coin-swap-button" type="button">
      <lucide-icon [img]="ArrowDownIcon" size="14"></lucide-icon>
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
    .coin-swap-button:hover {
        background-color: var(--selected-sub-background);
       transition: background-color .3;
    }
 `,
})
export class CoinSwapButtonComponent {
  readonly ArrowDownIcon = ArrowDown;
  disabled = input<boolean>(false);
}
