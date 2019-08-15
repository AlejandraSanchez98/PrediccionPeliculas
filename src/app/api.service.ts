import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

export interface IInformacionPeliculas{
  idPelicula: number;
  idActor:number;
  idDirector:number;
  idGuionista:number;
  idProductor:number;
  nombreActor:string;
  nombreDirector:string;
  nombreGuionista:string;
  nombreProductor:string;
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
  constructor(public route:ActivatedRoute, public http:HttpClient, public params:HttpParams) { }

  public mostrarPeliculas(){
    return this.http.get('http://localhost/apiPeliculas/peliculas/pelicula.php');
  }

  public mostrarxPelicula(id:number){
    return this.http.get('http://localhost/apiPeliculas/peliculas/tablasUnion.php?idPelicula='+id,{headers:this.headers});
  }

  public guardarPelicula(tituloPelicula:string, generoPelicula:string, fechaEstrenoPelicula:string, resumenPelicula:string, imagenPelicula:string,paisOrigenPelicula:string,duracionPelicula:string, calificacionFinalPelicula:number){
    return this.http.post('http://localhost/apiPeliculas/peliculas/guardarPelicula.php', {tituloPelicula,generoPelicula,fechaEstrenoPelicula,resumenPelicula,imagenPelicula,paisOrigenPelicula,duracionPelicula,calificacionFinalPelicula},{headers:this.headers});
  }

  public mostrarActor(){
    return this.http.get('http://localhost/apiPeliculas/actores/actor.php',{headers:this.headers});
  }

  public mostrarDirector(){
    return this.http.get('http://localhost/apiPeliculas/directores/director.php', {headers:this.headers});
  }

  public mostrarGuionista(){
    return this.http.get('http://localhost/apiPeliculas/guionistas/guionista.php', {headers:this.headers});
  }

  public mostrarProductor(){
    return this.http.get('http://localhost/apiPeliculas/Productores/productor.php', {headers:this.headers});
  }

  public webScraping(){
    return this.http.get('http://localhost/web_scraping/hey.php');
  }

  public mostrarComentarios(){
    return this.http.get('http://localhost/apiPeliculas/comentarios/comentario.php');
  }



}
