import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  public serviceCounter = new BehaviorSubject(0);
  constructor() {}
}
