import { Component } from '@angular/core';
import { Dialog } from '@packages/ui';

@Component({
  selector: 'app-limit',
  template: `
    <div class="limit">
      <h1>Not available yet</h1>
      <p>Sorry, Feature "Limit Sell" is currently under construction.</p>
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
})
export class Limit {
}
