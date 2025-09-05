import { Component, input} from '@angular/core';
import { LinkItemProps, TabLink } from '../tab-link/tab-link';

@Component({
  selector: 'lib-tab-menu',
  template: ` <div class="tab-menu">
    @for(tab of tabs(); track tab.href){
    <lib-tab-link [link]="tab" />
    }
  </div>`,
  styles: `
  .tab-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  padding: 1rem;
}
  `,
  imports: [TabLink],
})
export class TabMenu {
  tabs = input<LinkItemProps[]>([]);
}
