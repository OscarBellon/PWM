import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductoComponent } from './producto/producto.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { HomeComponent } from './home/home.component';

//servicios
import { CargaScriptService } from './carga-script.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductoPaginaComponent } from './producto-pagina/producto-pagina.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AccederComponent } from './acceder/acceder.component';
import { RegistroComponent } from './registro/registro.component';
import { DataServices } from './data.services';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductoComponent,
    CarruselComponent,
    QuienesSomosComponent,
    HomeComponent,
    ProductoPaginaComponent,
    CatalogoComponent,
    AccederComponent,
    RegistroComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [
    CargaScriptService,
    DataServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
