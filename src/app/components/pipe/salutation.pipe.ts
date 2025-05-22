import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(gender: string ): string 
  {
   
   if(gender == 'female')
   {
      return 'Ms.';
   }
   else
    {
        return 'Mr.';
    }
  }
   
  }
