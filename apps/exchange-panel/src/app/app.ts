import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from '@packages/ui';

@Component({
  imports: [RouterModule, RouterOutlet, ContainerComponent],
  selector: 'app-root',
  template: `
    <main>
      <h1 aria-hidden="true" style="display:none">{{ title }}</h1>
      <lib-container>
        <div class="tab-menu">
          <a routerLink="/">Market</a>
          <a routerLink="/limit">Limit</a>
        </div>
        <router-outlet />
      </lib-container>
    </main>
  `,
  styleUrl: './app.css',
})
export class App {
  protected title = 'exchange-panel';
}
