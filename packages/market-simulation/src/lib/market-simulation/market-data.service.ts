import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { marketData, updateMarketData } from './market-simulation'; // Zaimportuj swoje funkcje i dane
import { CoinData } from './market-simulation';


const updateTimePeriod = 500; // interval length in [ms] when prices will update

@Injectable({
  providedIn: 'root',
})
export class MarketDataService {
  private readonly _marketData$ = new BehaviorSubject<CoinData[]>(marketData);

  public readonly marketData$ = this._marketData$.asObservable();

  constructor() {
    interval(updateTimePeriod).subscribe(() => {
      updateMarketData();
      this._marketData$.next(marketData);
    });
  }
}
