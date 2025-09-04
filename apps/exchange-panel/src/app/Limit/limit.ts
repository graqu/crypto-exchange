import { Component } from '@angular/core';
import { Dialog } from '@packages/ui';

@Component({
  selector: 'app-limit',
  template: `
    <div class="limit">
      <h1>Not available yet</h1>
      <p>Sorry, Feature "Limit Sell" is currently under construction.</p>
      <lib-dialog
        [customTrigger]="true"
        #dialogRef
        [heading]="'Select token'"
        triggerLabel="check It ∨"
        >Tu nic nie ma... jeszcze
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          officiis sint, reiciendis, amet alias labore rerum provident, ullam
          quos nesciunt deleniti dignissimos nulla quisquam vero quidem ab nobis
          pariatur est.
        </p>
        <button (click)="dialogRef.closeDialog()">kliknij aby zamknąć</button>
      </lib-dialog>
      <button (click)="dialogRef.openDialog()">kliknij aby otworzyć</button>
    </div>
  `,
  styles: `
  @import '@packages/theme';
    .limit{
      padding: 1rem;
      text-align:center;
      min-height:320px;
    }
    h1{
      margin-bottom: .5em;
      font-weight: normal;
    }
    p{
      color: var(--text-mid)
    }
  `,
  imports: [Dialog],
})
export class Limit {
  // Component logic goes here
}
