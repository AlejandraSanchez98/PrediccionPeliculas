import { Injectable } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient, public params:HttpParams) { }

  public mostrarPeliculas(){
    return this.http.get('http://localhost/apiPeliculas/peliculas/pelicula.php');
  }

  public mostrarxPelicula(){
    return this.http.get('http://localhost/apiPeliculas/peliculas/mostrarxPelicula.php')
  }
}
