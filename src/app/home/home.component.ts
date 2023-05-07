import { Component, OnInit} from '@angular/core';
import { ProductsService } from '../services/products.service';

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{

  todos: Producto[] = [];
  filtrados: Producto[] = [];

  constructor(private db: ProductsService) { }

  ngOnInit(): void {
    this.getOferts();
    this.getAll();

  }

  async getAll (){
    this.todos = await this.db.getAllProducts();
  }
  

  async getOferts(){
    this.filtrados = await this.db.getProductsByOferta();
  }

}
