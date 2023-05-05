import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import UserService from '../services/user.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceder',
  templateUrl: './acceder.component.html',
  styleUrls: ['./acceder.component.scss']
})
export class AccederComponent implements OnInit{
  formLogin: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ){
    this.formLogin = this.fb.group({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)])
    })
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.userService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
        alert("Acceso completado");
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
    console.log(this.formLogin.value);

  }
}
