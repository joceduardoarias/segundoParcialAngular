import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});

  constructor(private auth:AuthService) { 
    console.log(localStorage.getItem("usuario"));
  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      
      contraseña:  new FormControl('',Validators.required),
      
      email:  new FormControl('',[Validators.required,Validators.email]),
      

    });
  }

  ingresar(){
    var contraseña = this.formLogin.get('contraseña')?.value;
    var usuario = this.formLogin.get('email')?.value;
    console.log(usuario,contraseña);
    
    this.auth.singIn(usuario,contraseña);
  }
}
