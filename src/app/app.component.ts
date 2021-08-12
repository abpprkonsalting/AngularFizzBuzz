import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { toArray } from 'rxjs/operators';

import { FlowResult } from './infrastructure/model/flow.result';
import { constants } from './app.constants';
import { MathService } from './services/math/math.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'FizzBuzz';
  numbers$ : Observable<Array<FlowResult>>;

  constructor(mathService: MathService){
    this.numbers$ = constants.numbers.pipe(mathService.filterMultipleThree)
                                      .pipe(mathService.filterMultipleFive)
                                      .pipe(mathService.filterNonMultiples).pipe(toArray());
  }
}
