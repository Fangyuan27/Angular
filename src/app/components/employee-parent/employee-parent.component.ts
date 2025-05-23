import { Component } from '@angular/core';
import { EmployeeTableChildComponent } from "../employee-table-child/employee-table-child.component";
import { EmployeeAddChildComponent } from "../employee-add-child/employee-add-child.component";
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-parent',
  imports: [EmployeeTableChildComponent, EmployeeAddChildComponent, ],
  templateUrl: './employee-parent.component.html',
  styleUrl: './employee-parent.component.css'
})
export class EmployeeParentComponent {
   employees = [
    { eId: 1, name: 'Sanjay', sal: 5000, gender: 'male' },
    { eId: 2, name: 'Geeta', sal: 8000, gender: 'female' },
    { eId: 3, name: 'Sameer', sal: 7000, gender: 'male' },
    { eId: 4, name: 'Sita', sal: 9000, gender: 'female' },
	{ eId: 5, name: 'Deepak', sal: 8000, gender: 'male' }
  ];

  deleteEmployee(eId: number)
  {
    
   this.employees =  this.employees.filter(emp=>emp.eId !== eId);

  };

  addEmployee(empData: any)
  {
    if(this.employees.find(emp=>emp.eId === empData.eId))
    {
      Swal.fire('Error', 'Employee with this ID already exists', 'error');
      return;

    }
    else{
      this.employees.push(empData);
       Swal.fire('Success', 'Employee added successfully!', 'success');
    }
  };


}
