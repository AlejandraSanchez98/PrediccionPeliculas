import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {InformacionPeliculasComponent} from './informacion-peliculas/informacion-peliculas.component';
import {ScrapingComponent} from './scraping/scraping.component';
import {AgregarInformacionComponent} from './agregar-informacion/agregar-informacion.component';
import {LoginComponent} from './login/login.component';
import {AccesoScrapingGuard} from './acceso-scraping.guard';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'informacion-peliculas', component: InformacionPeliculasComponent},
  {path: 'scraping', component: ScrapingComponent, canActivate:[AccesoScrapingGuard]},
  {path: 'agregar-informacion', component: AgregarInformacionComponent, canActivate:[AccesoScrapingGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}, //redirige a home en caso de que el usuario invente una ruta.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
