import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs';

@Pipe({
  name: 'roman'
})
export class RomanPipe implements PipeTransform {

  transform(inputNum: number): string {
    if(inputNum<1 || inputNum>3999)
    {
      return 'Invalid Number';
    }
    const map = [
      { val: 1000, syb: 'M' },
      { val: 900, syb: 'CM' },
      { val: 500, syb: 'D' },
      { val: 400, syb: 'CD' },
      { val: 100, syb: 'C' },
      { val: 90, syb: 'XC' },
      { val: 50, syb: 'L' },
      { val: 40, syb: 'XL' },
      { val: 10, syb: 'X' },
      { val: 9, syb: 'IX' },
      { val: 5, syb: 'V' },
      { val: 4, syb: 'IV' },
      { val: 1, syb: 'I' }
    ];
    let romanNum = '';
    for (let i=0; i<map.length; i++)
    {
      while (inputNum >= map[i].val)
      {
        romanNum = romanNum + map[i].syb;
        inputNum = inputNum - map[i].val;
      }
    }
    return romanNum;
  }

}
