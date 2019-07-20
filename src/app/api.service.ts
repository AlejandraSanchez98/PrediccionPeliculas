import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  public mostrarPeliculas(){
    return this.http.get('http://localhost/apiPeliculas/peliculas/pelicula.php')
  }
}
