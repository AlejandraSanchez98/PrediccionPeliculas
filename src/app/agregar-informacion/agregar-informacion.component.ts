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
  public numtotal:number;
  public PromedioD:number;
  public PromedioP:number;
  public PromedioA:number;
  public PromedioTotal:number;

  constructor( public formBuilder: FormBuilder, public router: Router, public API:ApiService) {
    this.arregloPeliculas = [];
    this.arregloActor = [];
    this.numtotal=9;
    this.PromedioD=0;
    this.PromedioP=0;
    this.PromedioA=0;
    this.PromedioTotal=0;


    this.frmPeliculas = this.formBuilder.group({
      tituloPelicula:["",Validators.required],
      generoPelicula:["",Validators.required],
      fechaEstrenoPelicula:["",Validators.required],
      resumenPelicula:["",Validators.required],
      imagen:["",Validators.required],
      paisOrigenPelicula:["",Validators.required],
      duracionPelicula:["",Validators.required],
      nombreActor:["",Validators.required],
      nombreDirector:["",Validators.required],
      nombreProductor:["",Validators.required],
      obraPreviaD1:["",Validators.required],
      obraPreviaD2:["",Validators.required],
      obraPreviaD3:["",Validators.required],
      obraPreviaP1:["",Validators.required],
      obraPreviaP2:["",Validators.required],
      obraPreviaP3:["",Validators.required],
      obraPreviaA1:["",Validators.required],
      obraPreviaA2:["",Validators.required],
      obraPreviaA3:["",Validators.required],
      nombreGuionista:["",Validators.required],
      calificacionFinalPelicula:[""]
    });
  }

  public guardarPelicula(){
    let tituloPeliculaForm = this.frmPeliculas.get('tituloPelicula').value;
    let generoPeliculaForm = this.frmPeliculas.get('generoPelicula').value;
    let fechaEstrenoPeliculaForm = this.frmPeliculas.get('fechaEstrenoPelicula').value;
    let resumenPeliculaForm = this.frmPeliculas.get('resumenPelicula').value;
    let imagenPeliculaForm = this.frmPeliculas.get('imagen').value;
    let paisOrigenPeliculaForm = this.frmPeliculas.get('paisOrigenPelicula').value;
    let duracionPeliculaForm = this.frmPeliculas.get('duracionPelicula').value;
    let calificacionFinalPeliculaForm = this.frmPeliculas.get('calificacionFinalPelicula').value;
    let idActor = this.frmPeliculas.get('nombreActor').value;
    let idDirector = this.frmPeliculas.get('nombreDirector').value;
    let idProductor = this.frmPeliculas.get('nombreProductor').value;
    let idGuionista = this.frmPeliculas.get('nombreGuionista').value;
    //aqui se hace el intercambio de nombre a ID
    this.API.guardarPelicula(idGuionista,idDirector,idProductor,idActor,tituloPeliculaForm, generoPeliculaForm, fechaEstrenoPeliculaForm, resumenPeliculaForm, imagenPeliculaForm,paisOrigenPeliculaForm,duracionPeliculaForm, calificacionFinalPeliculaForm).subscribe(
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


  public ObtenerPromedio(){
      let promedio = 0;
      let obraPreviaD1 = this.frmPeliculas.get('obraPreviaD1').value;
      let obraPreviaD2 = this.frmPeliculas.get('obraPreviaD2').value;
      let obraPreviaD3 = this.frmPeliculas.get('obraPreviaD3').value;
      let obraPreviaP1 = this.frmPeliculas.get('obraPreviaP1').value;
      let obraPreviaP2 = this.frmPeliculas.get('obraPreviaP2').value;
      let obraPreviaP3 = this.frmPeliculas.get('obraPreviaP3').value;
      let obraPreviaA1 = this.frmPeliculas.get('obraPreviaA1').value;
      let obraPreviaA2 = this.frmPeliculas.get('obraPreviaA2').value;
      let obraPreviaA3 = this.frmPeliculas.get('obraPreviaA3').value;
      this.PromedioD = obraPreviaD1+obraPreviaD2+obraPreviaD3;
      this.PromedioP = obraPreviaP1+obraPreviaP2+obraPreviaP3;
      this.PromedioA = obraPreviaA1+obraPreviaA2+obraPreviaA3;
      promedio = (this.PromedioD+this.PromedioP+this.PromedioA)/this.numtotal;
      this.PromedioTotal= parseFloat(promedio.toFixed(1));

  }

  ngOnInit() {
    this.mostrarActor();
    this.mostrarProductor();
    this.mostrarDirector();
    this.mostrarGuionista();
  }

}
