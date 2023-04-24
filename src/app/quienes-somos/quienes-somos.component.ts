import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.scss']
})
export class QuienesSomosComponent {

  constructor(private http: HttpClient) {}
  
  imagenes: any[] = [];

  ngOnInit() {
    this.http.get<any>('assets/marcas.json').subscribe(data=> {
      this.imagenes = data.imagenes;
    });
  }
}
