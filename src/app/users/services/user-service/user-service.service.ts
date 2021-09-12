import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get<User[]>(this.getUrl())
  }

  createUser(user: User) {
    return this.http.post(this.getUrl(), user)
  }

  updateUser(user: User) {
    return this.http.put(`${this.getUrl()}/${user.id}`, user)
  }

  deleteUser(user: User) {
    return this.http.delete(`${this.getUrl()}/${user.id}`)
  }


  private getUrl() {
    return `http://localhost:3000/users`
  }
}
