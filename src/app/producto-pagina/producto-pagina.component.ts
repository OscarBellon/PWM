import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { CargaScriptService } from '../carga-script.service';
import { ChangeDetectorRef } from '@angular/core';
import { param } from 'jquery';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { NgZone } from '@angular/core';

interface Producto{
  nombre: string;
  precio: number;
  disponibilidad:Boolean;
  rutaImagen: string;
  oferta:boolean;
  seccion:string;
  id:string;
  rutaImgUrl:String;
  detalle:string
}
@Component({
  selector: 'app-producto-pagina',
  templateUrl: './producto-pagina.component.html',
  styleUrls: ['./producto-pagina.component.scss']
})

export class ProductoPaginaComponent implements OnChanges, OnInit {
  product: Producto={nombre: "",precio:0,disponibilidad:true,rutaImagen:"",oferta:false,seccion:"",id:"",rutaImgUrl:"", detalle:""}
  imgurl: String = ""
  productsFiltered: Producto[]=[];
  besub: BehaviorSubject<Boolean> =new BehaviorSubject<Boolean>(true);
  obs:Observable<Boolean>= this.besub.asObservable();
  
  
  
  constructor(private _Activatedroute:ActivatedRoute,
    private storage: StorageService,
    private db: ProductsService,
    private _carga:CargaScriptService,
    private ref:ChangeDetectorRef ) {
    this._Activatedroute.params.subscribe((params)=>{
      this.product.precio=params["precio"];
      this.product.disponibilidad=params["disponibilidad"];
      this.product.rutaImagen=params["rutaImagen"];
      this.product.seccion=params["seccion"];
      this.product.detalle=params["detalle"];
      this.ref.detectChanges();
    });
    this.imageDownload();
    this.getRelatedProducts(this.product.seccion)

    //this._carga.Carga("assets/carrusel.js");
    //this._carga.Carga("https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js");
  }
  ngOnInit(): void {
    this._Activatedroute.params.subscribe((params)=>{
      this.product.nombre=params["nombre"];
      this.product.precio=params["precio"];
      this.product.disponibilidad=params["disponibilidad"];
      this.product.rutaImagen=params["rutaImagen"];
      this.product.seccion=params["seccion"];
      this.imageDownload();
      this.getRelatedProducts(this.product.seccion)
      if(params["disponibilidad"]=="true"){
        this.obs=new Observable(observer=>observer.next(true))
      }else{
        this.obs=new Observable(observer=>observer.next(false))
        console.log("a")
      }

    });

    
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    this._Activatedroute.params.subscribe((params)=>{
      this.product.nombre=params["nombre"];
      this.product.precio=params["precio"];
      this.product.disponibilidad=params["disponibilidad"];
      this.product.rutaImagen=params["rutaImagen"];
      this.product.seccion=params["seccion"];
      if(this.product.disponibilidad){
        this.obs=new Observable(observer=>observer.next(true))
        console.log("a")
      }else{
        this.obs=new Observable(observer=>observer.next(false))
        console.log("b")
      }

      this.imageDownload();
      this.getRelatedProducts(this.product.seccion)

    });

  }
  
  async imageDownload (){
    this.imgurl = await this.storage.getProductImageURL(this.product.rutaImagen)
  }
  

  async getRelatedProducts(section: String){
    this.productsFiltered = await this.db.getProductsBySection(section)
  }
  
  updatedisp(disp: Boolean){
    if(disp==true){
      this.obs=new Observable(observer=>observer.next(true))
      console.log(disp)
    }else{
      this.obs=new Observable(observer=>observer.next(false))
      console.log(disp)
    }
  }

  
}
