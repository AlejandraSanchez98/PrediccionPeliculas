import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-scraping',
  templateUrl: './scraping.component.html',
  styleUrls: ['./scraping.component.scss']
})
export class ScrapingComponent implements OnInit {
  public arregloScraping: string[];
  constructor(public API: ApiService) {
    this.arregloScraping = [];
  }
  public mostrarRegistrosScraping(): void {
    this.API.mostrarPeliculas().subscribe(
      (success:any)=>{
        console.log("exito!: "+ success);
        this.arregloScraping = success;
        console.log(JSON.stringify(this.arregloScraping))
      },
      (error)=>{
        console.log(error);
        console.log("sigue intentado!!");
      }
    );
  }

  ngOnInit() {
    this.mostrarRegistrosScraping();
  }

}
