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
    let user = this.frmLogin.get('usuario').value; //es como un getelementebyid pero en un formBuilder xD
    let pass = this.frmLogin.get('contrasenia').value;
    if (user == "admin" && pass == "1234") {
      this.router.navigate(['/scraping']);
      window.localStorage.setItem('user', user);
    }
    else{
      alert("Verifica los campos");
    }


  }

  public vistaMenu(){
    document.getElementById('idHeader').style.display = "none";
    document.getElementById('idSideMenu').style.display = "none";
    document.getElementById('idContenido').style.display = "block";//mantiene el contenido en su posicion original a pesar del none de sus compañeros
    document.getElementById('idFooter').style.display = "block";//mantiene el contenido en su posicion original a pesar del none de sus compañeros
  }

  ngOnInit() {
    this.vistaMenu();
  }

}
