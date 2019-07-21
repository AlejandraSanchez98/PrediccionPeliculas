import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  public mostrarPeliculas(){
    //let headers = new HttpHeaders();
    return this.http.get('http://localhost/apiPeliculas/guionistas/guionista.php');
  }
}
