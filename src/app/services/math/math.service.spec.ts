import { TestBed } from '@angular/core/testing';
import { map } from "rxjs/operators";
import { from } from "rxjs";

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

  it('math.service.filterNonMultiples should return the number as string for non multiples of neither three or five', () => {
    constants.nonMultiplesOfNeitherThreeAndFive.pipe(map((number: number) => new FlowResult (number)))
              .pipe(service.filterNonMultiples).subscribe((result: FlowResult) => {
              expect(result.stringResult).toEqual(result.number.toString());
            });
  });

  it('math.service.filterMultipleThree => math.service.filterMultipleFive => math.service.filterNonMultiples should not return "" for multiples of either three or five', () => {
    const multiplesOfThree = [3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99];
    const multiplesOfFive = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
    const multiplesOfBoth = [...new Set([...multiplesOfThree, ...multiplesOfFive])];
    service.filterMultipleThree(from(multiplesOfBoth)).pipe(service.filterMultipleFive)
            .pipe(service.filterNonMultiples).subscribe((result: FlowResult) => {
              expect(result.stringResult).not.toEqual("");
            });
  });

});
