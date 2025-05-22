import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { OrdinalPipe } from '../pipe/ordinal.pipe';
import { FormsModule } from '@angular/forms';
import { RomanPipe } from '../pipe/roman.pipe';
import { AgePipe } from '../pipe/age.pipe';
import { SalutationPipe } from '../pipe/salutation.pipe';
import { SearchPipe } from '../pipe/search.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, OrdinalPipe, FormsModule, RomanPipe, AgePipe, SalutationPipe, SearchPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  userName: string = 'Prabhas';
  Salary: number = 1000;
  numbers = [1, 2, 3, 4, 11, 21, 22, 23, 101, 112];
  numbers2 = [1, 2, 3, 4, 11, 21, 22, 23, 101, 112];
  inputNumber: number | null = null;
  numArr: number[] = [];
  ordinalArr: number[] = [];
  addNumber()
  {
    if(this.inputNumber !== null)
    {
      this.numArr.push(this.inputNumber);
      
    }
    this.inputNumber = null;
  }
  convertToOrdinal()
  {
    this.ordinalArr = this.numArr.map(num => num);
    
  };

  romanInputNumber: number | null = null;
  num1Arr: number[] = [];
  romanArr: number[] = [];
  addRomanNumber()
  {
    if(this.romanInputNumber !== null)
    {
      this.num1Arr.push(this.romanInputNumber);
      
    }
    this.romanInputNumber = null;
  }
  convertToRoman()
  {
    this.romanArr = this.num1Arr.map(num=> num);
    
  };

  birthDate: Date = new Date();

   employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];
  
  searchInput: string = '';


}
