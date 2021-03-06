import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginTitle:String="Area de Login"
  loginForm:FormGroup

  constructor(private fb:FormBuilder ) {
    this.loginForm=this.fb.group({
      email:["",[Validators.required]],
      password:["",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
    })
  }
  register(){
    console.log(this.loginForm.value)   
  }
  ngOnInit(): void {
  }

}
