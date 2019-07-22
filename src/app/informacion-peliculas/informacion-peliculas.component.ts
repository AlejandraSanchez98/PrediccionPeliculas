import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


interface IInformacionPeliculas{
  Id_peliculas: number;
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
  selector: 'app-informacion-peliculas',
  templateUrl: './informacion-peliculas.component.html',
  styleUrls: ['./informacion-peliculas.component.scss']
})
export class InformacionPeliculasComponent implements OnInit {
  //PROPIEDADES:
  public headers =  new HttpHeaders();
  arregloPeliculas: IInformacionPeliculas[];
  public valoracionDirector:number;
  public valoracionGuionista:number;
  public valoracionActores:number;
  public valoracionProductor:number;
  public Id_peliculas:string;
  constructor(public route:ActivatedRoute,public API:ApiService, public http: HttpClient) {
    this.valoracionDirector = 5;
    this.valoracionGuionista = 5;
    this.valoracionActores = 10;
    this.valoracionProductor = 10;
    this.arregloPeliculas = [];

  }

  //ESTE METODO PROMEDIA LAS VALORACIONES DE CADA UNO DE LOS ELEMENTOS INVOLUCRADOS
  public promediar(): number{
    let calificacionFinal: number = 0;

    calificacionFinal = ((this.valoracionDirector +  this.valoracionGuionista + this.valoracionActores + this.valoracionProductor) /4);

    return calificacionFinal;
  }


  public mostrarInformacion(){
    this.route.queryParams.subscribe((params: any) => {
      this.Id_peliculas = params['Id_peliculas'];
      alert(JSON.stringify(this.Id_peliculas));
      return this.http.post('http://localhost/apiPeliculas/peliculas/mostrarxPelicula.php',{Id_peliculas:this.Id_peliculas},{headers:this.headers}).subscribe(response=>{
         alert(JSON.stringify(response));
       }), error =>{
          alert("Tienes un error:"+ error.error);
        }
    });
  }



    //MUESTRA LOS DATOS DE LA PELICULA
    /*public MostrarPelicula(){
      let calificacionFinal: number = this.promediar()
      this.arregloPelicula.push({idPelicula:1, tituloPelicula:'DragonBall',generoPelicula:'anime',fechaEstrenoPelicula:"02-03-2020",resumenPelicula:"La mejor pelicula del mundo", paisOrigenPelicula:'Japon',duracionPelicula:'2hrs 29min', calificacionPelicula:calificacionFinal})
    }/*/

  ngOnInit() {
    this.mostrarInformacion();

    /*this.route.queryParams.subscribe((params: any) => {
      this.Id_peliculas = params['Id_peliculas'];
      alert(JSON.stringify(this.Id_peliculas));

    });*/
  }

}
