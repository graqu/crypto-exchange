import { Component } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: ` <button>Click Me !</button> `,
  styles: `button{
        font-size: 1rem;
        padding:  0.5em 1em;
        background: none;
        background-color: gold;
        font-weight:bold;
        border-radius: 0;
        border: none;
        cursor: pointer;
  }`,
})
export class Button {
  label: string = 'Proceed';
}
