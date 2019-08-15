import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import {IInformacionPeliculas} from '../api.service';

interface IActor{
  nombreActor: string;
  paisActor: string;
  obrasPrevias: string;
}



@Component({
  selector: 'app-agregar-informacion',
  templateUrl: './agregar-informacion.component.html',
  styleUrls: ['./agregar-informacion.component.scss']
})
export class AgregarInformacionComponent implements OnInit {
  public arregloPeliculas: IInformacionPeliculas[];
  public arregloActor: IActor[];
  public frmPeliculas: FormGroup;
  public formValid:Boolean=false;
  constructor( public formBuilder: FormBuilder, public router: Router, public API:ApiService) { 
    this.arregloPeliculas = [];

    this.frmPeliculas = this.formBuilder.group({
      tituloPelicula:["",Validators.required],
      generoPelicula:["",Validators.required],
      fechaEstrenoPelicula:["",Validators.required],
      resumenPelicula:["",Validators.required],
      imagenPelicula:["",Validators.required],
      paisOrigenPelicula:["",Validators.required],
      duracionPelicula:["",Validators.required],
      calificacionFinalPelicula:["",Validators.required]
    });
  }

  public guardarPelicula(){
    let tituloPeliculaForm = this.frmPeliculas.get('tituloPelicula').value;
    let generoPeliculaForm = this.frmPeliculas.get('generoPelicula').value;
    let fechaEstrenoPeliculaForm = this.frmPeliculas.get('fechaEstrenoPelicula').value;
    let resumenPeliculaForm = this.frmPeliculas.get('resumenPelicula').value;
    let imagenPeliculaForm = this.frmPeliculas.get(' imagenPelicula').value;
    let paisOrigenPeliculaForm = this.frmPeliculas.get('paisOrigenPelicula').value;
    let duracionPeliculaForm = this.frmPeliculas.get(' duracionPelicula').value;
    let calificacionFinalPeliculaForm = this.frmPeliculas.get('calificacionFinalPelicula').value;
    this.API.guardarPelicula(tituloPeliculaForm, generoPeliculaForm, fechaEstrenoPeliculaForm, resumenPeliculaForm, imagenPeliculaForm,paisOrigenPeliculaForm,duracionPeliculaForm, calificacionFinalPeliculaForm).subscribe(
      (success:any)=>{
        console.log("exito!: "+ success);
        this.arregloPeliculas = success;
        console.log(JSON.stringify(this.arregloPeliculas))
      },
      (error)=>{
        console.log(error);
        console.log("sigue intentado!!");
      }
    );
  }

 
  public mostrarPeliculas(): void {
    this.API.mostrarPeliculas().subscribe(
      (success:any)=>{
        console.log("exito!: "+ success);
        this.arregloPeliculas = success;
        console.log(JSON.stringify(this.arregloPeliculas))
      },
      (error)=>{
        console.log(error);
        console.log("sigue intentado!!");
      }
    );
  }

  public mostrarActor(): void {
    this.API.mostrarActor().subscribe(
      (success:any)=>{
        console.log("exito!: "+ success);
        this.arregloActor = success;
        console.log(JSON.stringify(this.arregloActor))
      },
      (error)=>{
        console.log(error);
        console.log("sigue intentado!!");
      }
    );
  }
  
  public mostrarDirector(): void {
    this.API.mostrarDirector().subscribe(
      (success:any)=>{
        console.log("exito!: "+ success);
        this.arregloPeliculas = success;
        console.log(JSON.stringify(this.arregloPeliculas))
      },
      (error)=>{
        console.log(error);
        console.log("sigue intentado!!");
      }
    );
  }

  public mostrarGuionista(): void {
    this.API.mostrarGuionista().subscribe(
      (success:any)=>{
        console.log("exito!: "+ success);
        this.arregloPeliculas = success;
        console.log(JSON.stringify(this.arregloPeliculas))
      },
      (error)=>{
        console.log(error);
        console.log("sigue intentado!!");
      }
    );
  }

  public mostrarProductor(): void {
    this.API.mostrarProductor().subscribe(
      (success:any)=>{
        console.log("exito!: "+ success);
        this.arregloPeliculas = success;
        console.log(JSON.stringify(this.arregloPeliculas))
      },
      (error)=>{
        console.log(error);
        console.log("sigue intentado!!");
      }
    );
  }


  ngOnInit() {
    this.mostrarActor();
  }

}
