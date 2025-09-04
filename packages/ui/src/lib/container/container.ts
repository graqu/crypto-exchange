import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-container',
  template: `<div ngClass="class()"><ng-content></ng-content></div>`,
  styles: [
    `
      div {
        box-sizing: border-box;
        width: min(90vw, 27rem);
        margin: 0 auto;
        padding: 0;
      }
    `,
  ],
})
export class ContainerComponent {
  class = input<string>('');
}
