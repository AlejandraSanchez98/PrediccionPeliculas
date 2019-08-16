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
interface IGuionista{
  nombreGuionista: string;
  paisGuionista: string;
  obrasPrevias: string;
}
interface IDirector{
  nombreDirector: string;
  paisDirector: string;
  obrasPrevias: string;
}
interface IProductor{
  nombreProductor: string;
  paisProductor: string;
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
  public arregloProductor: IProductor[];
  public arregloDirector: IDirector[];
  public arregloGuionista: IGuionista[];
  public frmPeliculas: FormGroup;
  public formValid:Boolean=false;
  constructor( public formBuilder: FormBuilder, public router: Router, public API:ApiService) {
    this.arregloPeliculas = [];
    this.arregloActor = [];

    this.frmPeliculas = this.formBuilder.group({
      tituloPelicula:["",Validators.required],
      generoPelicula:["",Validators.required],
      fechaEstrenoPelicula:["",Validators.required],
      resumenPelicula:["",Validators.required],
      imagenPelicula:["",Validators.required],
      paisOrigenPelicula:["",Validators.required],
      duracionPelicula:["",Validators.required],
      nombreActor:["",Validators.required],
      nombreDirector:["",Validators.required],
      nombreProductor:["",Validators.required],
      nombreGuionista:["",Validators.required],
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
    let nombreActorForm = this.frmPeliculas.get('nombreActor').value;
    let nombreDirectorForm = this.frmPeliculas.get('nombreDirector').value;
    let nombreProductorForm = this.frmPeliculas.get('nombreProductor').value;
    let nombreGuionistaForm = this.frmPeliculas.get('nombreGuionista').value;
    //aqui se hace el intercambio de nombre a ID
    let idActor:number, idGuionista:number, idDirector:number, idProductor:number;

    this.API.mostrarIDActor(nombreActorForm).subscribe(
      (success:any)=>{
        console.log("exito!: "+ success);
        idActor = success;
      },
      (error)=>{
        console.log("sigue intentando :'( " + error);
      }
    );

    this.API.mostrarIDGuionista(nombreGuionistaForm).subscribe(
      (success:any)=>{
        console.log("exito!: "+ success);
        idGuionista = success;
      },
      (error)=>{
        console.log("sigue intentando :'( " + error);
      }
    );

    this.API.mostrarIDDirector(nombreDirectorForm).subscribe(
      (success:any)=>{
        console.log("exito!: "+ success);
        idDirector = success;
      },
      (error)=>{
        console.log("sigue intentando :'( " + error);
      }
    );

    this.API.mostrarIDProductor(nombreProductorForm).subscribe(
      (success:any)=>{
        console.log("exito!: "+ success);
        idProductor = success;
      },
      (error)=>{
        console.log("sigue intentando :'( " + error);
      }
    );



    this.API.guardarPelicula(idActor, idGuionista, idDirector, idProductor,tituloPeliculaForm, generoPeliculaForm, fechaEstrenoPeliculaForm, resumenPeliculaForm, imagenPeliculaForm,paisOrigenPeliculaForm,duracionPeliculaForm, calificacionFinalPeliculaForm).subscribe(
      (success:any)=>{
        this.arregloPeliculas = success;
        alert("Pelicula Agregada")
        console.log(JSON.stringify(this.arregloPeliculas))
      },
      (error)=>{
        console.log(error);
        alert("...Hubo un Problema...");
      }
    );
  }


  public mostrarPeliculas(): void {
    this.API.mostrarPeliculas().subscribe(
      (success:IInformacionPeliculas[])=>{
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
      (success:IActor[])=>{
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
      (success:IDirector[])=>{
        console.log("exito!: "+ success);
        this.arregloDirector = success;
        console.log(JSON.stringify(this.arregloDirector))
      },
      (error)=>{
        console.log(error);
        console.log("sigue intentado!!");
      }
    );
  }

  public mostrarGuionista(): void {
    this.API.mostrarGuionista().subscribe(
      (success:IGuionista[])=>{
        console.log("exito!: "+ success);
        this.arregloGuionista = success;
        console.log(JSON.stringify(this.arregloGuionista))
      },
      (error)=>{
        console.log(error);
        console.log("sigue intentado!!");
      }
    );
  }

  public mostrarProductor(): void {
    this.API.mostrarProductor().subscribe(
      (success:IProductor[])=>{
        console.log("exito!: "+ success);
        this.arregloProductor = success;
        console.log(JSON.stringify(this.arregloProductor))
      },
      (error)=>{
        console.log(error);
        console.log("sigue intentado!!");
      }
    );
  }


  ngOnInit() {
    this.mostrarActor();
    this.mostrarProductor();
    this.mostrarDirector();
    this.mostrarGuionista();
  }

}
