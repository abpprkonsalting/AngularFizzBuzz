import { TestBed } from '@angular/core/testing';
import { map } from "rxjs/operators";

import { MathService } from './math.service';
import { constants } from '../../app.constants';
import { FlowResult } from '../../infrastructure/model/flow.result';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('math.service.filterMultipleThree should return "Fizz" for all multiples of three in the range', () => {
    service.filterMultipleThree(constants.multiplesOfThree).subscribe((result: FlowResult) => {
      expect(result.stringResult).toEqual("Fizz");
    })
  });

  it('math.service.filterMultipleThree should return "" for all non multiples of three in the range', () => {
    service.filterMultipleThree(constants.nonMultiplesOfThree).subscribe((result: FlowResult) => {
      expect(result.stringResult).toEqual("");
    })
  });

  it ('math.service.filterMultipleFive should return "Buzz" for multiples of five in the range', () => {
    constants.multiplesOfFive.pipe(map((number: number) => new FlowResult (number)))
              .pipe(service.filterMultipleFive).subscribe((result: FlowResult) => {
              expect(result.stringResult).toEqual("Buzz");
            });
  });

  it ('math.service.filterMultipleFive should return "" for non multiples of five in the range', () => {
    constants.nonMultiplesOfFive.pipe(map((number: number) => new FlowResult (number)))
              .pipe(service.filterMultipleFive).subscribe((result: FlowResult) => {
              expect(result.stringResult).toEqual("");
            });
  });


  it('math.service.filterMultipleThree => math.service.filterMultipleFive should return "FizzBuzz" for all multiples of three & five in the range', () => {
    service.filterMultipleThree(constants.multiplesOfThreeAndFive)
            .pipe(service.filterMultipleFive).subscribe((result: FlowResult) => {
              expect(result.stringResult).toEqual("FizzBuzz");
            });
  });

  it('math.service.filterMultipleThree => math.service.filterMultipleFive should return "" for all non multiples of neither three nor five in the range', () => {
    service.filterMultipleThree(constants.nonMultiplesOfNeitherThreeAndFive)
            .pipe(service.filterMultipleFive).subscribe((result: FlowResult) => {
              expect(result.stringResult).toEqual("");
            });
  });
});
