import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent, TabMenu, LinkItemProps } from '@packages/ui';

@Component({
  imports: [RouterModule, RouterOutlet, ContainerComponent, TabMenu],
  selector: 'app-root',
  template: `
    <main>
      <h1 aria-hidden="true" style="display:none">{{ title }}</h1>
      <lib-container>
        <lib-tab-menu [tabs]="menuItems" />
        <router-outlet />
      </lib-container>
    </main>
  `,
  styleUrl: './app.css',
})
export class App {
  protected title = 'exchange-panel';
  menuItems: LinkItemProps[] = [
    {
      label: 'market',
      href: '/',
      isActive: false,
    },
    {
      label: 'limit',
      href: '/limit',
      isActive: false,
    },
  ];
}
