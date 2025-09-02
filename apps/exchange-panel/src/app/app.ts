import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterModule, RouterOutlet],
  selector: 'app-root',
  template: `
    <main>
      <div>
        <div class="tab-menu">
          <a routerLink="/">Market</a>
          <a routerLink="/limit">Limit</a>
        </div>
        <router-outlet />
      </div>
    </main>
  `,
  styleUrl: './app.css',
})
export class App {
  protected title = 'exchange-panel';
}
