
export class FlowResult {

  number: number;
  stringResult: string = '';

  constructor(number: number, string = ''){
    this.number = number;
    this.stringResult+= string;
  }
}
