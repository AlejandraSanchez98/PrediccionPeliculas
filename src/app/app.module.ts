import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ApiService} from './api.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InformacionPeliculasComponent } from './informacion-peliculas/informacion-peliculas.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient} from '@angular/common/http';
import {HttpParams} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrapingComponent } from './scraping/scraping.component';
import { AgregarInformacionComponent } from './agregar-informacion/agregar-informacion.component';
import { CalificacionComponent } from './calificacion/calificacion.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformacionPeliculasComponent,
    LoginComponent,
    ScrapingComponent,
    AgregarInformacionComponent,
    CalificacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    ApiService,
    HttpClient,
    HttpParams
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
