import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public headers =  new HttpHeaders();
  constructor(public route:ActivatedRoute, public http:HttpClient, public params:HttpParams) { }

  public mostrarPeliculas(){
    return this.http.get('http://localhost/apiPeliculas/peliculas/pelicula.php');
  }

  public mostrarxPelicula(id:number){
    return this.http.get('http://localhost/apiPeliculas/peliculas/mostrarxPelicula.php?Id_peliculas='+id,{headers:this.headers});
}
}
