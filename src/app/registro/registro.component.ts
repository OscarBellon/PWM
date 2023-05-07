import { Component, Inject, OnInit } from '@angular/core';
import UserService from '../services/user.services';
import { FormGroup, FormBuilder, FormControl, ValidatorFn, AbstractControl, Validators } from '@angular/forms';
//import { CustomValidators } from './CustomValidators';
import { validarQueSeanIguales } from './CustomValidators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit{
  formReg: FormGroup;

  constructor(@Inject(UserService)
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {this.formReg = this.fb.group({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-ZáãäéëêíîóöúüñÑçÁÉÍÓÚ ]*')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [ 
      Validators.required,
      Validators.minLength(6),
    ]),
    passwordconfirm: new FormControl('', [Validators.required])
  }, {
    validators: validarQueSeanIguales
  });}
    

  ngOnInit(): void{
  }
  onSubmit(){
    if (this.formReg.invalid) {
      console.log('Formulario inválido');
      return;
    }
    this.userService.register(this.formReg.value)
      .then(response => {
        alert("Registro completado");
        this.router.navigate(['/acceder']);
      })
      .catch((error: Error) => console.log(error));
  }
}