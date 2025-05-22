import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(age: Date): any {
    let todayDate = new Date();
    let birthDate = new Date(age);
    let ageInYears = todayDate.getFullYear() - birthDate.getFullYear();
    return ageInYears;

    
  }

}
