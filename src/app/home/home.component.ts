import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


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
  constructor(public router: Router, public API:ApiService) {
    this.arregloPelicula = [];
  }

  //FILTRA SOLO LA INFORMACION DE LA PELICULA SELECCIONADA
  public navegarxPelicula(idPelicula:number): void{
    this.router.navigate(['/informacion-peliculas'],{queryParams:{idPelicula:idPelicula}});
  }

  //MUESTRA TODO EL CATALOGO DE PELICULAS
  public mostrarPeliculas(): void {
    this.API.mostrarPeliculas().subscribe(
      (success:any)=>{
        console.log("exito!: "+ success);
        this.arregloPelicula = success.respuesta;
      },
      (error)=>{
        console.log(error);
        console.log("sigue intentado!!");
      }
    );
  }


  ngOnInit() {
    /*PRACTICAMENTE SERIA AQUI UN SELECT * FROM DE PELICULAS, UNICAMENTE DEJANDO LA IMAGEN*/
  }

}
