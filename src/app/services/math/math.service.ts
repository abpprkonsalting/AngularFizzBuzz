import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FlowResult } from 'src/app/infrastructure/model/flow.result';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  public filterMultipleThree(numbers: Observable<number>) : Observable<FlowResult> {
    return numbers.pipe(map((number) => number % 3 === 0 ? new FlowResult(number,"Fizz") : new FlowResult(number)));
  }
}
