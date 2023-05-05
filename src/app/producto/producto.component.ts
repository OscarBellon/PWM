import { Component, Input,OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { CargaScriptService } from '../carga-script.service';

interface Producto{
  nombre: string;
  precio: number;
  disponibilidad:Boolean;
  rutaImagen: string;
  oferta:boolean;
  seccion:string;
  id: string;
  detalle:string;
}
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnChanges,OnInit{
  @Input() product!: Producto;
  
  rutaImg!: string;
  constructor(private storage: StorageService,private _carga: CargaScriptService){
    console.log();
    this.image();
  }


  
  ngOnChanges(changes: SimpleChanges): void {
      this.image()
      this._carga.Carga("assets/carrusel.js")
      this._carga.Carga("https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js")
  }
  
  ngOnInit(): void {
      this.image();
  }
  async image(){
    this.rutaImg=await this.storage.getProductImageURL(this.product.rutaImagen);
    this._carga.Carga("assets/carrusel.js")
      this._carga.Carga("https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js")
  }
}
