import { Component } from '@angular/core';
import { DatabindingComponent } from "../databinding/databinding.component";
import { DirectivesComponent } from "../directives/directives.component";
import { UsersComponent } from '../users/users.component';
import { ProductsComponent } from '../products/products.component';
import { EmployeeCRUDComponent } from '../employee-crud/employee-crud.component';
import { FooterComponent } from '../footer/footer.component';
import { pipe } from 'rxjs';
import { PipesComponent } from '../pipes/pipes.component';
import { EmployeeParentComponent } from '../employee-parent/employee-parent.component';
import { EmployeeComponent } from "../employee/employee.component";
import { HttpDemo1Component } from '../http-demo1/http-demo1.component';
import { UsersHttpComponent } from "../users-http/users-http.component";

@Component({
  selector: 'app-body',
  imports: [
    // DatabindingComponent,
    //DirectivesComponent
    // UsersComponent
    //ProductsComponent
    //EmployeeCRUDComponent,
    // FooterComponent
    //PipesComponent,
    // EmployeeParentComponent,
    // 
    // HttpDemo1Component,
    UsersHttpComponent
],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
