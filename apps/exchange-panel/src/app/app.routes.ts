import { Routes } from '@angular/router';
import { Market } from './Market/market';
import { Limit } from './Limit/limit';

export const appRoutes: Routes = [
  {
    path: '',
    component: Market,
    title: 'Market Sell',
  },
  {
    path: 'limit',
    component: Limit,
    title: 'Limit Sell',
  },
];
