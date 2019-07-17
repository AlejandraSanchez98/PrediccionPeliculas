import { Component, OnInit } from '@angular/core';

//CREACION DE INTERFACES
interface Ipeliculas {
idPelicula: number,
tituloPelicula: string,
generoPelicula: string,
fechaEstrenoPelicula: string,
resumenPelicula: string,
paisOrigenPelicula: string,
duracionPelicula: string,
calificacionPelicula: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //PROPIEDADES:
  public valoracionDirector:number;
  public valoracionGuionista:number;
  public valoracionActores:number;
  public valoracionProductor:number;
  public arregloPelicula:Ipeliculas[];

  constructor() {
    this.valoracionDirector = 5;
    this.valoracionGuionista = 5;
    this.valoracionActores = 10;
    this.valoracionProductor = 10;

    this.arregloPelicula = [];
  }
  //ESTE METODO PROMEDIA LAS VALORACIONES DE CADA UNO DE LOS ELEMENTOS INVOLUCRADOS
  public promediar(): number{
    let calificacionFinal: number = 0;

    calificacionFinal = ((this.valoracionDirector +  this.valoracionGuionista + this.valoracionActores + this.valoracionProductor) /4);

    return calificacionFinal;
  }//fin promediar

  //MUESTRA LOS DATOS DE LA PELICULA
  public MostrarPelicula(){
    let calificacionFinal: number = this.promediar()
    this.arregloPelicula.push({idPelicula:1, tituloPelicula:'DragonBall',generoPelicula:'anime',fechaEstrenoPelicula:"02-03-2020",resumenPelicula:"La mejor pelicula del mundo", paisOrigenPelicula:'Japon',duracionPelicula:'2hrs 29min', calificacionPelicula:calificacionFinal})
  }//fin MostrarPelicula

  ngOnInit() {
    this.MostrarPelicula();
  }

}
