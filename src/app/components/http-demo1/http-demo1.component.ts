import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css'
})
export class HttpDemo1Component {
  user_url = 'https://jsonplaceholder.typicode.com/users';


  constructor(private httpClient: HttpClient) {
   }
   ngOnInit() {
    this.fetchUserData_Angular();
}
fetchUserData_Angular() {
  this.httpClient.get(this.user_url).subscribe(response=>{
    console.log(response);
  });
}

}
