import { TestBed } from '@angular/core/testing';
import { toArray } from "rxjs/operators";

import { AppComponent } from './app.component';
import { constants } from './app.constants';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'FizzBuzz'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('FizzBuzz');
  });

  it('constants.multiplesOfThree should generate multiples of three in the range 1 ... 100', () => {

    const expected = [3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99];
    constants.multiplesOfThree.pipe(toArray()).subscribe((numbers: number[]) => {
      expect(numbers).toEqual(expected);
    });
  });

  it('constants.multiplesOfFive should generate multiples of five in the range 1 ... 100', () => {

    const expected = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
    constants.multiplesOfFive.pipe(toArray()).subscribe((numbers: number[]) => {
      expect(numbers).toEqual(expected);
    });
  });

  it ('constants.nonMultiplesOfThree should generate non multiples of three in the range 1 ... 100', () => {

    const multiplesOfThree = [3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99];
    constants.nonMultiplesOfThree.subscribe((number: number) => {
      expect(multiplesOfThree).not.toContain(number);
    });
  });

});
