import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  currentUser!: User;
  @Input() set user(value: any){
    this.currentUser = value;
  }
  @Output() save = new EventEmitter()
  @Output() cancel = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
