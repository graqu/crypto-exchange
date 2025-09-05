import { Component } from '@angular/core';
import { input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'lib-button',
  template: `
    <button
      [type]="buttonType()"
      [disabled]="disabled()"
      [ngClass]="customClass()"
    >
      @if(label()){
      {{ label() }}
      }@else {
      <ng-content />
      }
    </button>
  `,
  styleUrl: './button.css',
  imports: [NgClass],
})
export class Button {
  label = input<string>();
  buttonType = input<string>('button');
  disabled = input<boolean>(false);
  customClass = input<string>('');
}
