import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccederComponent } from './acceder/acceder.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RegistroComponent } from './registro/registro.component';
import { ProductoPaginaComponent } from './producto-pagina/producto-pagina.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'quienesSomos', component: QuienesSomosComponent},
  {path:'acceder', component: AccederComponent},
  {path:'registro', component: RegistroComponent},
  {path:'catalogo', component: CatalogoComponent},
  {path:'producto/:nombre/:disponibilidad/:oferta/:seccion/:rutaImagen/:precio/:id/:detalle', component: ProductoPaginaComponent},
  {path:'**', component: HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
