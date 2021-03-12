import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.css']
})
export class UserFormContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public getUserData(userData: FormGroup) {
    console.log(userData);
  }
}
