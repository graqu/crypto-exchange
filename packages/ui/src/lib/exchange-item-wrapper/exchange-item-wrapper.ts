import { Component } from '@angular/core';
import { input, output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'lib-exchange-item-wrapper',
  imports: [NgClass],
  template: ` <div
    class="exchange-item-wrapper {{ class() }}"
    [ngClass]="{ 'focus-sensitive': detectFocus() }"
  >
    <ng-content />
  </div>`,
  styleUrl: './exchange-item-wrapper.css',
})
export class ExchangeItemWrapper {
  detectFocus = input<boolean>(false);
  class = input<string>('');
}
