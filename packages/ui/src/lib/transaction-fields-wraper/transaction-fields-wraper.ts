import { Component } from '@angular/core';

@Component({
  selector: 'lib-transaction-fields-wrapper',
  template: `
    <div class="transaction-fields-wrapper">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .transaction-fields-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.125rem;
      }
    `,
  ],
})
export class TransactionFieldsWrapperComponent {}
