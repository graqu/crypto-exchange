import { Component } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `
    <button [type]="buttonType()" [disabled]="disabled()">
      @if(label()){
      {{ label() }}
      }@else {
      <ng-content />
      }
    </button>
  `,
  styles: `
  button{
        font-size: 1rem;
        padding:  0.5em 1em;
        background: none;
        background-color: gold;
        font-weight:bold;
        border-radius: 0;
        border: none;
        cursor: pointer;
  }
  button:disabled{
    background-color: #eedfaf;
  }
  `,
})
export class Button {
  label = input<string>();
  buttonType = input<string>('button');
  disabled = input<boolean>(false);
}
