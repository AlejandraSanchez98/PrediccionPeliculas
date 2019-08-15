import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import {IInformacionPeliculas} from '../api.service';

@Component({
  selector: 'app-agregar-informacion',
  templateUrl: './agregar-informacion.component.html',
  styleUrls: ['./agregar-informacion.component.scss']
})
export class AgregarInformacionComponent implements OnInit {
  public arregloPeliculas: IInformacionPeliculas[];
  public frmPeliculas: FormGroup;
  public formValid:Boolean=false;
  constructor( public formBuilder: FormBuilder, public router: Router, public API:ApiService) { 
    this.arregloPeliculas = [];

    this.frmPeliculas = this.formBuilder.group({
      tituloPelicula:["",Validators.required],
      generoPelicula:["",Validators.required],
      fechaEPelicula:["",Validators.required],
      resumenPelicula:["",Validators.required],
      imagenPelicula:["",Validators.required],
      paisPelicula:["",Validators.required],
      duracionPelicula:["",Validators.required],
      calificacionPelicula:["",Validators.required]
    });
  }

  /*public guardarPelicula(){
    let tituloPeliculaForm = this.frmPeliculas.get('tituloPelicula').value;
    let generoPeliculaForm = this.frmPeliculas.get('generoPelicula').value;
    let costoForm = this.frmViajes.get('costo_total').value;
    this.route.queryParams.subscribe((params: IInformacionPeliculas) => {
    return this.API.guardarPelicula(tituloPelicula, generoPelicula, fechaEPelicula, resumenPelicula, imagenPelicula,paisPelicula,duracionPelicula, calificacionPelicula).subscribe(
      (success:any)=>{
        this.arregloPeliculas = success;
        console.log("Pelicula: "+ JSON.stringify(this.arregloPeliculas));
      },
      (error)=>{
        console.log("SIGUE INTENTANDO ANIMAL: "+ error);
      }
    );
  }
);}*/

  ngOnInit() {
  }

}
