import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CargaScriptService } from '../carga-script.service';
import "bootstrap";

interface Producto{
  nombre: string;
  precio: number;
  disponibilidad:Boolean;
  rutaImagen: string;
  oferta:boolean;
  seccion:string;
  id: string;
}
@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss'],
  
})


export class CarruselComponent implements OnChanges, OnInit {

  
  @Input() productsFiltered: Producto[]=[];
  constructor(private _carga:CargaScriptService){
    //_carga.Carga("assets/carrusel.js");
    //_carga.Carga("https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js");
  }

  ngOnInit(): void {
    //this._carga.Carga("assets/carrusel.js");
    //this._carga.Carga("https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js");
  }
  ngOnChanges(changes: SimpleChanges): void {
    //this._carga.Carga("assets/carrusel.js");
    //this._carga.Carga("https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js");
  }
}
