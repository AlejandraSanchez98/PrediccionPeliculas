import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
interface IScraping{
  reparto: string;
}
@Component({
  selector: 'app-scraping',
  templateUrl: './scraping.component.html',
  styleUrls: ['./scraping.component.scss']
})
export class ScrapingComponent implements OnInit {
  public arregloScraping: IScraping[];
  constructor(public API: ApiService) {
    this.arregloScraping = [];
  }
  public mostrarRegistrosScraping(): void {
    this.API.webScraping().subscribe(
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
    document.getElementById('idHeader').style.display = "block";
    document.getElementById('idSideMenu').style.display = "block";
    document.getElementById('idContenido').style.display = "block";
  }

}
