import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductsService } from '../services/products.service';
interface Producto{
  nombre: string;
  precio: number;
  disponibilidad:Boolean;
  rutaImagen: string;
  oferta:boolean;
  seccion:string;
  id:string;
  detalle: string;

}
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})


export class CatalogoComponent implements OnInit,OnChanges {
  clickedVal: boolean=false;
  productList: Producto[] =[];
  constructor(private service:ProductsService){
    this.clickedVal=false;
    this.getProducts();
  }
  async getProducts(){
    this.productList=await this.service.getAllProducts();
    console.log(this.productList);
  }
  async getFilteredProducts(seccion:String){
    this.productList=await this.service.getProductsBySection(seccion)
  }
  ngOnInit(): void {
    this.clickedVal=false;
    this.getProducts();
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.clickedVal=false;
    this.getProducts();
  }

  filter(seccion:String){
    this.getFilteredProducts(seccion);
  }

}
