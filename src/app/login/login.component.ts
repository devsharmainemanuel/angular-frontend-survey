import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  updateDetailsForm: FormGroup;
   categories =  [{name: 'one'}, {name: 'two'}, {name: 'threeve'}];

  constructor(private formBuilder: FormBuilder) {
     this.initForm();
  }

  initForm() {
    console.log(this.categories);
    const allCategories: FormArray = new FormArray([]);
    for (let i = 0; i < this.categories.length; i++) {
      const fg = new FormGroup({});
      fg.addControl(this.categories[i].name, new FormControl(false));
      allCategories.push(fg);
    }

    console.log(allCategories);

    this.updateDetailsForm = this.formBuilder.group({
      'image' : [''],
      'categories': allCategories
    });
  }
}
