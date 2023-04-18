import { Component } from '@angular/core';
import { CargaScriptService } from '../carga-script.service';
import "bootstrap";
@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss'],
  
})

export class CarruselComponent {
  constructor(private _carga:CargaScriptService){
    _carga.Carga("assets/carrusel.js");
    _carga.Carga("https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js");
  }
}
