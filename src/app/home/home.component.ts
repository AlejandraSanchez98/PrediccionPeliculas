import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import {IInformacionPeliculas} from '../api.service';

/* const para WebScraping
const cheerio = require ('cheerio');
const request = require('request');
const fs = require('fs');
const arrayPuntuaje = [];
const arrayTitulo = [];
const arrayImg = [];
*/

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
  public navegarxPelicula(Id_pelis:number): void{
    this.router.navigate(['/informacion-peliculas'],{queryParams:{Id_pelis:Id_pelis}});
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

  /*public webScraping():void
  {
    var url = 'https://www.filmaffinity.com/mx/rdcat.php?id=upc_th_mx';
    request(url,function (error, response, html) { // solo es un callback
      if(!error && response.statusCode == 200)
      {
          var $ = cheerio.load(html); // carga todo el cuerpo o body de la Pagina a buscar
          $('div.avg-rating').each(function(i,element) { // seleccion de etiquetas de interes en esta pagina fue esta
              var puntuaje =$(element).text(); //variable para almacenar los elementos buscados en este caso El Puntuaje de la Pelicula
              if(puntuaje!='')
                  console.log((i + 1) + ' .- ' + puntuaje); // Muestra todos los valores encontrdos bajo esas etiquetas "span.note"
                  arrayPuntuaje.push(puntuaje); // arreglo para almacenar los puntuaje de las peliculas
          });

      }

      //Esta parte la puedes meter dentro de un ciclo para que relacione el puntuaje con su respesctivo Nombre de Pelicula
      console.log(arrayImg);
      console.log(arrayTitulo[0]+arrayPuntuaje[0]+arrayImg[0]);
  });

}*/


  ngOnInit() {
    /*PRACTICAMENTE SERIA AQUI UN SELECT * FROM DE PELICULAS, UNICAMENTE DEJANDO LA IMAGEN*/
    this.mostrarPeliculas();
  }

}
