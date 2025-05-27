import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService 
{
  user_url = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) { }

  getUsersData()
  {
    return this.httpClient.get(this.user_url);
  }

  addUsersData(user: any)
  {
    return this.httpClient.post(this.user_url, user);
  }

  deleteUsersData(id:number)
  {
    return this.httpClient.delete(`${this.user_url}/${id}`);
  }

  updateUsersData(id: number, user: any)
  {
    return this.httpClient.patch(`${this.user_url}/${id}`, user);
  }
}
