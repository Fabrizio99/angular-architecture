import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserPageComponent } from './pages/user-page/user-page.component';



@NgModule({
  declarations: [
    UserPageComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
