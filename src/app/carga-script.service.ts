import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargaScriptService {

  constructor() { }

  Carga(archivo:string){
    let script = document.createElement("script");
    script.src = archivo;
    let body = document.getElementsByTagName("body")[0];
    body.appendChild(script);
  }
}
