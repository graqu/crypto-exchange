import { Component, input } from '@angular/core';
import { LinkItemProps, TabLink } from '../tab-link/tab-link';

@Component({
  selector: 'lib-tab-menu',
  template: ` <div class="tab-menu">
    @for(tab of tabs(); track tab.href){
    <lib-tab-link [link]="tab" />
    }
  </div>`,
  styleUrl: './tab-menu.css',
  imports: [TabLink],
})
export class TabMenu {
  tabs = input<LinkItemProps[]>([]);
}
