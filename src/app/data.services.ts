import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class DataServices{

    dbLink = 'https://electrodisuar-f7b14-default-rtdb.europe-west1.firebasedatabase.app/';

    constructor(private httpClient:HttpClient){}

    //test method
    dbTest(){
        this.httpClient.post(this.dbLink,"test").subscribe(

            response=>console.log("Acceso a la base de datos correcto: " + response),
            error=>console.log("Acceso a la base de datos incorrecto: " + error),
            
        );
    }

}