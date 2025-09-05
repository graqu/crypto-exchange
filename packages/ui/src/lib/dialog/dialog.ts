import { Component, ElementRef, input, ViewChild } from '@angular/core';
import { Button } from '../button/button';

/**DIALOG Component */
/**Dialog is universal component to put any content inside */
/**By default Dialog has a trigger but You can design a custom one as well you can close it from parent level. to do it define ref in parent component */

@Component({
  selector: 'lib-dialog',
  imports: [Button],
  templateUrl: './dialog.html',
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
