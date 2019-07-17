import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {InformacionPeliculasComponent} from './informacion-peliculas/informacion-peliculas.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'informacion-peliculas', component: InformacionPeliculasComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
