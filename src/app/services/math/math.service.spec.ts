import { TestBed } from '@angular/core/testing';

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

});
