import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../../interfaces/user.interface';
import { UserService } from '../user-service/user-service.service';

const emptyUser: User = {
  name: '',
  lastName: '',
  age: 0,
  active: true
}
@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  private selectedUser: BehaviorSubject<User> = new BehaviorSubject<User>(emptyUser);
  private mutations: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  users$ = this.users.asObservable();
  selectedUser$ = this.selectedUser.asObservable()
  mutations$ = this.mutations.asObservable()

  constructor(private userService: UserService) { }

  loadUsers() {
    this.userService.all().subscribe(userList => this.users.next(userList))
  }

  selectUser(user: User) {
    this.selectedUser.next({...user})
  }

  createUser(user: User) {
    this.userService.createUser(user).subscribe(_ => this.mutations.next(true))
  }

  updateUser(user: User) {
    this.userService.updateUser(user).subscribe(_ => this.mutations.next(true))
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user).subscribe(_ => this.mutations.next(true))
  }
}
