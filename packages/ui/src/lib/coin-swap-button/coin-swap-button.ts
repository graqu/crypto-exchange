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
  styleUrl: './coin-swap-button.css',
})
export class CoinSwapButtonComponent {
  readonly ArrowDownIcon = ArrowDown;
  disabled = input<boolean>(false);
}
