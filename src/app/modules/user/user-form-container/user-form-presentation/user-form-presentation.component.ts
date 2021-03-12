import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';
import { UserFormPresenterService } from '../user-form-presenter/user-form-presenter.service';

@Component({
  selector: 'app-user-form-presentation',
  templateUrl: './user-form-presentation.component.html',
  styleUrls: ['./user-form-presentation.component.css']
})
export class UserFormPresentationComponent implements OnInit {

  user!: User;
  userForm: FormGroup;

  @Output() userData: EventEmitter<FormGroup> = new EventEmitter();

  constructor(private _userFormPresenterService: UserFormPresenterService) {
    this.userForm = this._userFormPresenterService.bindUserForm();
  }

  ngOnInit(): void {
  }

  public userFormSubmit() {
    this.userData.emit(this.userForm.value);
  }

}
