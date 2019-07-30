import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import {IInformacionPeliculas} from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
//FRANCIS ES NUESTRO AMO Y SEÑOR HIJOS DEL PENE!
  //PROPIEDADES:
  public arregloPeliculas: IInformacionPeliculas[];
  constructor(public router: Router, public API:ApiService) {
    this.arregloPeliculas = [];
  }

  //FILTRA SOLO LA INFORMACION DE LA PELICULA SELECCIONADA
  public navegarxPelicula(Id_peliculas:number): void{
    this.router.navigate(['/informacion-peliculas'],{queryParams:{Id_peliculas:Id_peliculas}});
  }

  //MUESTRA TODO EL CATALOGO DE PELICULAS
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


  ngOnInit() {
    /*PRACTICAMENTE SERIA AQUI UN SELECT * FROM DE PELICULAS, UNICAMENTE DEJANDO LA IMAGEN*/
    this.mostrarPeliculas();
  }

}
