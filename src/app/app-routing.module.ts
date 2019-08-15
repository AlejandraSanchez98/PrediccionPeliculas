import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {InformacionPeliculasComponent} from './informacion-peliculas/informacion-peliculas.component';
import {ScrapingComponent} from './scraping/scraping.component';
import {AgregarInformacionComponent} from './agregar-informacion/agregar-informacion.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'informacion-peliculas', component: InformacionPeliculasComponent},
  {path: 'scraping', component: ScrapingComponent},
  {path: 'agregar-informacion', component: AgregarInformacionComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
