import { Component } from '@angular/core';
import { input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'lib-exchange-item-wrapper',
  imports: [NgClass],
  templateUrl: './exchange-item-wrapper.html',
  styleUrl: './exchange-item-wrapper.css',
})
export class ExchangeItemWrapper {
  detectFocus = input<boolean>(false);
  class = input<string>('');
}
