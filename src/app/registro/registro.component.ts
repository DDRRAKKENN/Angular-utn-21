import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  registerTitle:String="Area de registro"
  myForm:FormGroup

  constructor(private fb:FormBuilder ) {
    this.myForm=this.fb.group({
      name:["",[Validators.required]],
      apellido:["",[Validators.required]],
      telefono:[""],
      email:["",[Validators.required]],
      password:["",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
    })
  }
  register(){
    console.log(this.myForm.value)
  }
  ngOnInit(): void {
  }

}
