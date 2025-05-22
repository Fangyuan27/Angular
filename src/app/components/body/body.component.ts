import { Component } from '@angular/core';
import { DatabindingComponent } from "../databinding/databinding.component";
import { DirectivesComponent } from "../directives/directives.component";
import { UsersComponent } from '../users/users.component';
import { ProductsComponent } from '../products/products.component';
import { EmployeeCRUDComponent } from '../employee-crud/employee-crud.component';
import { FooterComponent } from '../footer/footer.component';
import { pipe } from 'rxjs';
import { PipesComponent } from '../pipes/pipes.component';

@Component({
  selector: 'app-body',
  imports: [
    // DatabindingComponent,
    //DirectivesComponent
    // UsersComponent
    //ProductsComponent
    //EmployeeCRUDComponent,
    // FooterComponent
    PipesComponent
],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
