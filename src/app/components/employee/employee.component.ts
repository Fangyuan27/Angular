import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  displayedEmployees: { eId: number; name: string; sal: number; gender: string }[] = [];
  selectedType: string = '';

constructor(private employeeService: EmployeeService) {}

ngOnInit() {
  this.onTypeChange();
}

onTypeChange() {
  if (this.selectedType === 'male') {
    this.displayedEmployees = this.employeeService.getMaleEmployees();
  } else if (this.selectedType === 'female') {
    this.displayedEmployees = this.employeeService.getFemaleEmployees();
  } else {
    this.displayedEmployees = this.employeeService.getAllEmployees();
  }
}

}
