import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-table-child',
  imports: [CommonModule],
  templateUrl: './employee-table-child.component.html',
  styleUrl: './employee-table-child.component.css',
  inputs: ['employeeInfo'],
  outputs: ['deleteEmpFromParent']
})
export class EmployeeTableChildComponent {
  employeeInfo: any[] = [];
  deleteEmpFromParent = new EventEmitter();
  deleteEmp(eId: number) {
    this.deleteEmpFromParent.emit(eId);
  }


}
