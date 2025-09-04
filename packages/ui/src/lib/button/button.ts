import { Component } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `
    <button [type]="buttonType()" [disabled]="disabled()" ngClass="class()">
      @if(label()){
      {{ label() }}
      }@else {
      <ng-content />
      }
    </button>
  `,
  styleUrl: './button.css',
})
export class Button {
  label = input<string>();
  buttonType = input<string>('button');
  disabled = input<boolean>(false);
  class = input<string>('');
}
