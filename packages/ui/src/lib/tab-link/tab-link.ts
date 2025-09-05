import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export type LinkItemProps = {
  label: string;
  href: string;
  isActive: boolean;
};

@Component({
  selector: 'lib-tab-link',
  template: ` <a
    routerLink="{{ link().href }}"
    routerLinkActive="active"
    [routerLinkActiveOptions]="{ exact: true }"
    >{{ link().label }}</a
  >`,
  styleUrl: './tab-link.css',
  imports: [RouterLink, RouterLinkActive],
})
export class TabLink {
  link = input.required<LinkItemProps>();
}
