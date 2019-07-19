import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//CREACION DE INTERFACES
interface IInformacionPeliculas{
  idPelicula: number;
  tituloPelicula: string;
  imagenPelicula: string;
  generoPelicula: string;
  fechaEstrenoPelicula: string;
  resumenPelicula: string;
  paisOrigenPelicula: string;
  duracionPelicula: string;
  calificacionFinalPelicula: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //PROPIEDADES:
  public arregloPelicula: IInformacionPeliculas[];
  constructor(public router: Router) {

  }
  public navegarxPelicula(idPelicula:number): void
  {
    this.router.navigate(['/informacion-peliculas'],{queryParams:{idPelicula:idPelicula}});
  }


  ngOnInit() {
    /*PRACTICAMENTE SERIA AQUI UN SELECT * FROM DE PELICULAS, UNICAMENTE DEJANDO LA IMAGEN*/
  }

}
