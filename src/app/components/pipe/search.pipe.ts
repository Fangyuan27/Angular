import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employees: any[], searchInput: string): any[] 
  {
    if(!searchInput)
    {
      return employees;
    }
    let s = searchInput.toLowerCase();
    return employees.filter(emp=>
      emp.name.toLowerCase().includes(s) ||
      emp.eId.toString().includes(s) ||
      emp.gender.toLowerCase().includes(s) ||
      emp.sal.toString().includes(s)

    );
    
  }

}
