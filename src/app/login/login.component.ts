import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public frmLogin: FormGroup
  public formValid:Boolean=false;

  constructor(public router:Router,public formBuilder: FormBuilder) {
    this.frmLogin = this.formBuilder.group({
      usuario:["",Validators.required],
      contrasenia:["",Validators.required],
    });
  }

  public acceder(){

  }
  
  public vistaMenu(){
    document.getElementById('idHeader').style.display = "none";
    document.getElementById('idSideMenu').style.display = "none";
    document.getElementById('idContenido').style.display = "block";//mantiene el contenido en su posicion original a pesar del none de sus compañeros
    document.getElementById('idFooter').style.display = "none";//mantiene el contenido en su posicion original a pesar del none de sus compañeros
  }

  ngOnInit() {
    this.vistaMenu();
  }

}
