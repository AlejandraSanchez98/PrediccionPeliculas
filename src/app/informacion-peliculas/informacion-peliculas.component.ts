import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ApiService } from '../api.service';
interface IInformacionPeliculas{
  Id_pelicula: number;
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
  arregloPeliculas: IInformacionPeliculas[];
  public valoracionDirector:number;
  public valoracionGuionista:number;
  public valoracionActores:number;
  public valoracionProductor:number;
  constructor(public API:ApiService, public http: HttpClient) {
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
    this.API.mostrarPeliculas().subscribe(
        (success:any)=>{
          console.log(success);
          alert(JSON.stringify(success));
          this.arregloPeliculas = success.respuesta;
        },
        (error)=>{
          console.log(error);
          console.log("NO ENTRO!!");
        }
      );
  }



    //MUESTRA LOS DATOS DE LA PELICULA
    /*public MostrarPelicula(){
      let calificacionFinal: number = this.promediar()
      this.arregloPelicula.push({idPelicula:1, tituloPelicula:'DragonBall',generoPelicula:'anime',fechaEstrenoPelicula:"02-03-2020",resumenPelicula:"La mejor pelicula del mundo", paisOrigenPelicula:'Japon',duracionPelicula:'2hrs 29min', calificacionPelicula:calificacionFinal})
    }/*/

  ngOnInit() {
    this.mostrarInformacion();
  }

}
