import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faTrash, faPen, faEye} from '@fortawesome/free-solid-svg-icons';
import Snackbar from 'awesome-snackbar';
import { EmployeeMessages } from '../constants/message_constants';
import  Swal from 'sweetalert2';


@Component({
  selector: 'app-employee-crud',
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCRUDComponent {
  employees = [
 {id: 1, name: 'John Doe', department: 'Software Engineer', salary: 60000},
 {id: 2, name: 'Jane Smith', department: 'Project Manager', salary: 80000},
  {id: 3, name: 'Alice Johnson', department: 'UX Designer', salary: 70000},
  {id: 4, name: 'Bob Brown', department: 'Data Analyst', salary: 65000},
];

//Assigning font awesome icons to variables

  faTrash = faTrash
  faPen = faPen
  faPlus = faPlus
  faEye = faEye


snackBarMessage() {
  new Snackbar(EmployeeMessages.EMPLOYEE_ADDED, { position: 'top-center', theme: 'light', timeout: 5000, actionText: '', }
    );
}
addEmployee()
{
 let id = Number(prompt('Enter employee ID: ') || 0);
 let name = prompt('Enter employee name: ') || '';
 let department = prompt('Enter employee department: ') || '';
 let salary = Number(prompt('Enter employee salary: ')|| 0); 
 if(this.employees.find(e => e.id === id))
 {
  Swal.fire('Error', EmployeeMessages.EMPLOYEE_EXISTS, 'error');
  return;
 }
  this.employees.push({id, name, department, salary});
  this.snackBarMessage();
};

deleteEmployee()
{
  let id = Number(prompt('Enter employee ID to delete: ') || 0);
  this.employees = this.employees.filter(employee => employee.id !== id);
  Swal.fire('Deleted', EmployeeMessages.EMPLOYEE_DELETED, 'success');
};

selectedEmployee: any = null;
viewEmployee(emp: any)
{
//   let id = Number(prompt('Enter employee ID to view:') || 0);
//   const emp = this.employees.find(e => e.id === id);

//   if (emp) {
//     alert(`Employee Id: ${emp.id}
// Employee Name: ${emp.name}
// Employee Department: ${emp.department}
// Employee Salary: ${emp.salary}`);
//   } else {
//     alert('Employee not found!');
//   }
this.selectedEmployee = emp;
};

editEmployee(emp: any)
{
  if(this.employees.find(e => e.id === emp.id))
  {
  let updatedName = prompt('Enter new name:', emp.name) || emp.name;
  let updatedDepartment = prompt('Enter new department:', emp.department) || emp.department;
  let updatedSalary = Number(prompt('Enter new salary:', emp.salary.toString()) || emp.salary);
  emp.name = updatedName;
  emp.department = updatedDepartment;
  emp.salary = updatedSalary;
  Swal.fire('Updated', EmployeeMessages.EMPLOYEE_UPDATED, 'success');
  }
};
}
