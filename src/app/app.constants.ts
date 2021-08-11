import { range, of } from "rxjs";
import { filter } from 'rxjs/operators';

export const constants = {
  numbers: range(1,100),
  multiplesOfThree: range(1,100).pipe(filter(number => number % 3 === 0)),
  multiplesOfFive: range(1,100).pipe(filter(number => number % 5 === 0))
};
