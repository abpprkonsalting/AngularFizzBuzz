import { range, of } from "rxjs";
import { filter } from 'rxjs/operators';

export const constants = {
  numbers: range(1,100),
  multiplesOfThree: range(1,100).pipe(filter(number => number % 3 === 0)),
  nonMultiplesOfThree: range(1,100).pipe(filter(number => number % 3 !== 0)),
  multiplesOfFive: range(1,100).pipe(filter(number => number % 5 === 0)),
  nonMultiplesOfFive: range(1,100).pipe(filter(number => number % 5 !== 0)),
  multiplesOfThreeAndFive: range(1,100).pipe(filter(number => number % 3 === 0 && number % 5 === 0)),
  nonMultiplesOfNeitherThreeAndFive: range(1,100).pipe(filter(number => number % 3 !== 0 && number % 5 !== 0))
};
