import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import {IInformacionPeliculas} from '../api.service';

interface IComentarios{
  idComentario:number;
  usuarioComentario:string;
  comentario:string;
}
@Component({
  selector: 'app-informacion-peliculas',
  templateUrl: './informacion-peliculas.component.html',
  styleUrls: ['./informacion-peliculas.component.scss']
})
export class InformacionPeliculasComponent implements OnInit {
  //PROPIEDADES:
  public headers =  new HttpHeaders();
  arregloPeliculas: IInformacionPeliculas[];
  arregloComentarios: IComentarios[];
  public valoracionDirector:number;
  public valoracionGuionista:number;
  public valoracionActores:number;
  public valoracionProductor:number;
  public Id_peliculas:number;

  constructor(public route:ActivatedRoute,public API:ApiService, public http: HttpClient) {
    this.valoracionDirector = 5;
    this.valoracionGuionista = 5;
    this.valoracionActores = 10;
    this.valoracionProductor = 10;
    this.arregloPeliculas = [];
    this.arregloComentarios= [];

  }

  //ESTE METODO PROMEDIA LAS VALORACIONES DE CADA UNO DE LOS ELEMENTOS INVOLUCRADOS
  public promediar(): number{
    let calificacionFinal: number = 0;

    calificacionFinal = ((this.valoracionDirector +  this.valoracionGuionista + this.valoracionActores + this.valoracionProductor) /4);

    return calificacionFinal;
  }


  public mostrarInformacion(){
    this.route.queryParams.subscribe((params: IInformacionPeliculas) => {
      this.Id_peliculas = params['idPelicula'];
      return this.API.mostrarxPelicula(this.Id_peliculas).subscribe(
        (success:any)=>{
          this.arregloPeliculas = success;
          console.log("Pelicula: "+ JSON.stringify(this.arregloPeliculas));
        },
        (error)=>{
          console.log("SIGUE INTENTANDO ANIMAL: "+ error);
        }
      );
    }
  );}


  public mostrarComentarios(){
    this.API.mostrarComentarios().subscribe(
      (success:any)=>{
        console.log("exito!: "+ success);
        this.arregloComentarios = success;
        console.log(JSON.stringify(this.arregloComentarios))
      },
      (error)=>{
        console.log(error);
        console.log("sigue intentado!!");
      }
    );}


  //MUESTRA LOS DATOS DE LA PELICULA
  /*public MostrarPelicula(){
  let calificacionFinal: number = this.promediar()
  this.arregloPelicula.push({idPelicula:1, tituloPelicula:'DragonBall',generoPelicula:'anime',fechaEstrenoPelicula:"02-03-2020",resumenPelicula:"La mejor pelicula del mundo", paisOrigenPelicula:'Japon',duracionPelicula:'2hrs 29min', calificacionPelicula:calificacionFinal})
}/*/

ngOnInit() {
  this.mostrarInformacion();
  this.mostrarComentarios();

  /*this.route.queryParams.subscribe((params: any) => {
  this.Id_peliculas = params['Id_peliculas'];
  alert(JSON.stringify(this.Id_peliculas));

});*/
}

}
