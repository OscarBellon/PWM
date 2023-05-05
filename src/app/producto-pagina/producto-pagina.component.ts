import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { CargaScriptService } from '../carga-script.service';
interface Producto{
  nombre: string;
  precio: number;
  disponibilidad:Boolean;
  rutaImagen: string;
  oferta:boolean;
  seccion:string;
  id:string;
  rutaImgUrl:String;
}
@Component({
  selector: 'app-producto-pagina',
  templateUrl: './producto-pagina.component.html',
  styleUrls: ['./producto-pagina.component.scss']
})
export class ProductoPaginaComponent implements OnChanges {
  product: Producto={nombre: "",precio:0,disponibilidad:true,rutaImagen:"",oferta:false,seccion:"",id:"",rutaImgUrl:""}
  imgurl: String = ""
  productsFiltered: Producto[]=[];
  constructor(private _Activatedroute:ActivatedRoute,private storage: StorageService, private db: ProductsService, private _carga:CargaScriptService ) {
    this.product.nombre=this._Activatedroute.snapshot.params["nombre"];
    this.product.precio=this._Activatedroute.snapshot.params["precio"];
    this.product.disponibilidad=_Activatedroute.snapshot.params["disponibilidad"];
    this.product.rutaImagen=_Activatedroute.snapshot.params["rutaImagen"];
    this.product.seccion=_Activatedroute.snapshot.params["seccion"];
    this.imageDownload();
    this.getRelatedProducts(this.product.seccion)
    //this._carga.Carga("assets/carrusel.js");
    //this._carga.Carga("https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js");
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.imageDownload();
    this.getRelatedProducts(this.product.seccion)
    this.productsFiltered.forEach(product => {
      
    });
  }
  
  async imageDownload (){
    this.imgurl = await this.storage.getProductImageURL(this.product.rutaImagen)
  }
  

  async getRelatedProducts(section: String){
    this.productsFiltered = await this.db.getProductsBySection(section)
  }
  
    
}
