import { Component, ElementRef, input, output, ViewChild } from '@angular/core';
import { Button } from '@packages/ui';

/**DIALOG Component */
/**Dialog is universal component to put any content inside */
/**By default Dialog has a trigger but You can design a custom one as well you can close it from parent level. to do it define ref in parent component */

@Component({
  selector: 'lib-dialog',
  imports: [Button],
  template: `
    @if (!customTrigger()) {
    <lib-button type="button" (click)="openDialog()">
      {{ triggerLabel() }}
    </lib-button>
    }
    <dialog #dialogRef>
      <div class="dialog-header">
        <h1>{{ heading() }}</h1>
        <button type="button" class="close-icon" (click)="closeDialog()">
          ×
        </button>
      </div>
      <div class="dialog-content">
        <ng-content></ng-content>
      </div>
    </dialog>
  `,
  styleUrl: './dialog.css',
})
export class Dialog {
  @ViewChild('dialogRef') dialogRef!: ElementRef<HTMLDialogElement>;
  heading = input.required<string>();
  triggerLabel = input<string>('open');
  customTrigger = input<boolean>(false);

  openDialog(): void {
    this.dialogRef.nativeElement.showModal();
  }
  closeDialog(): void {
    this.dialogRef.nativeElement.close();
  }
}
