import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add-child',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-add-child.component.html',
  styleUrl: './employee-add-child.component.css',
  outputs: ['addEmpToParent']
})
export class EmployeeAddChildComponent 
{
  eId!: number;
  name!: string;
  sal!: number;
  gender!: string;

  addEmpToParent = new EventEmitter();

  addEmployee()
  {
    if(this.eId && this.name && this.sal>0 && this.gender)
    {
      let empData = {
        eId: Number(this.eId),
        name: this.name,
        sal: Number(this.sal),
        gender: this.gender
      };
      this.addEmpToParent.emit(empData);
      //Reset Form
      this.eId = 0;
      this.name = '';
      this.sal = 0;
      this.gender = '';

    }

  }
   
}
