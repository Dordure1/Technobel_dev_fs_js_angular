import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { generateMyForm } from './forms/myForm.form';

@Component({
  selector: 'app-reactiveform21',
  templateUrl: './reactiveform21.component.html'
})
export class Reactiveform21Component implements OnInit {

  myForm: FormGroup = generateMyForm(this.fb)

  myFormValue!: {name: string, email: string, password: string, confirmPwd: string}

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  log(){
    console.log(this.myForm)
  }
  
  sendForm() {
    if (this.myForm.valid){


      this.myFormValue = {
        name: this.myForm.controls['name'].value,
        email: this.myForm.controls['email'].value,
        password: this.myForm.controls['password'].value,
        confirmPwd: this.myForm.controls['confirmPwd'].value,
      }
      
      //console.log(this.myFormValue)
    }
  }
}

