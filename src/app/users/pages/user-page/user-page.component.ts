import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../interfaces/user.interface';
import { UserStoreService } from '../../services/user-store/user-store.service';

const emptyUser: User = {
  name: '',
  lastName: '',
  age: 0,
  active: true
}
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit{

  userList$: Observable<User[]> = this.userStore.users$;
  selectedUser$: Observable<User> = this.userStore.selectedUser$;
  mutations$: Observable<boolean> = this.userStore.mutations$;

  constructor(private userStore: UserStoreService){}

  ngOnInit(): void {
    this.mutations$.subscribe(_ => {
      this.loadUsers()
      this.selectUser(emptyUser)
    })
  }

  loadUsers() {
    this.userStore.loadUsers()
  }
  
  saveUser(user: User){
    if(user.id){
      this.userStore.updateUser(user)
    }else{
      this.userStore.createUser(user)
    }
  }

  selectUser(user: User){
    this.userStore.selectUser(user)
  }

  resetForm() {
    this.selectUser(emptyUser)
  }

  deleteUser(user: User) {
    this.userStore.deleteUser(user)
  }
}
