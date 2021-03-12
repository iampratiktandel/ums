import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserFormPresenterService {

  constructor() { }

  public bindUserForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      mobile: new FormControl(),
      city: new FormControl(),
      gender: new FormControl(),
      department: new FormControl(),
      hireDate: new FormControl(),
      permanent: new FormControl()
    })
  }
}
