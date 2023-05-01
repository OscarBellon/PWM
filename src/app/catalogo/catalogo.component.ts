import { Component } from '@angular/core';

interface product {

}
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})


export class CatalogoComponent {
  productList: product[] =[];
}
