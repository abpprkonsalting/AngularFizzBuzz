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

  public filterMultipleFive(input: Observable<FlowResult>) : Observable<FlowResult> {
    return input.pipe(map((filtered) => filtered.number % 5 === 0 ?
                                          new FlowResult(filtered.number,filtered.stringResult+"Buzz") :
                                          filtered));
  }

  public filterNonMultiples(filtered: Observable<FlowResult>) : Observable<FlowResult> {
    return filtered.pipe(map((filtered) => filtered.stringResult  !== '' ? filtered :
                                            new FlowResult(filtered.number,filtered.number.toString())));
  }
}
