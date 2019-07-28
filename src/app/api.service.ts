import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

export interface IInformacionPeliculas{
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


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public headers =  new HttpHeaders();
  public Id_peliculas:string;
  constructor(public route:ActivatedRoute, public http:HttpClient, public params:HttpParams) { }

  public mostrarPeliculas(){
    return this.http.get('http://localhost/apiPeliculas/peliculas/pelicula.php');
  }

  public mostrarxPelicula(){
    this.route.queryParams.subscribe((params: any) => {
      this.Id_peliculas = params['Id_peliculas'];
      alert(JSON.stringify(this.Id_peliculas));
      return this.http.get('http://localhost/apiPeliculas/peliculas/mostrarxPelicula.php?Id_peliculas='+this.Id_peliculas,{headers:this.headers}).subscribe(response=>{
         alert(JSON.stringify(response));
       }), error =>{
          alert("Tienes un error:"+ error.error);
        }
    });
  }
}
