import { Component } from '@angular/core';
import UserService from '../services/user.services';
import { User } from 'firebase/auth';
import { OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth } from 'firebase/auth';
import { Observable, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dataUser: any;
  state: any;
  states: string[] = [];
  @Input() avs:any;


  constructor(private service: UserService){}
  ngOnInit(){
    console.log(this.state);
    this.service.loggedIn.subscribe(value => {
      this.state = this.service.loggedIn.getValue();
      this.dataUser = this.service.currentUser;
    });
    console.log(this.state);
    //this.state = this.service.activo;
    /*this.isLoggedIn$=this.service.isLoggedIn;
    console.log(this.isLoggedIn$);
    this.dataUser = this.service.currentUser;*/
    /*this.state = this.service.state;
    this.auth.currentUser.then(user => {
      if(user){
        this.dataUser = user;
      }
    })
    console.log("fe");*/
  }
  /*ngOnChanges(changes: SimpleChanges){
      if(changes[this.avs] !== this.service.avs){
        this.state != this.state; 
        this.dataUser = this.service.currentUser;
        console.log("Cambiee");
      }
  }*/
  
  logOut(){
    this.service.logOut();
  }
}

