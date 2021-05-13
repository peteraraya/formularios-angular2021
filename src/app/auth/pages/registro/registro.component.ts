import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { nombreApellidoPattern, emailPattern, noPuedeSerStrider } from '../../../shared/validators/validaciones';
import { ValidatorService } from '../../../shared/validators/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre    : ['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern) ] ],
    email     : ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailValidator]],
    username  : ['', [Validators.required, this.vs.noPuedeSerStrider ]],
    password  : ['', [Validators.required, Validators.minLength(6) ]],
    password2 : ['', [Validators.required,  ]],
  },{
    // este otro objeto son opciones que le podemos enviar al formGroup
    validators: [ this.vs.camposIguales('password','password2') ]
  }) 

  constructor(
              private fb:FormBuilder,
              private vs:ValidatorService,
              private emailValidator:EmailValidatorService,
    ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Pedro Araya',
      email:'test1@test.com',
      username:'peternt',
      password:'123456',
      password2:'123456',
    });
  };
  
  //Getters : se ejecuta siempre que angular detecte un cambio en el componente

 // Mensaje de error
  get emailErrorMsg():string{
    // si tengo un error con el email
    const errors = this.miFormulario.get('email')?.errors;
  
    if ( errors?.required ) {
        return 'El email es obligatorio'
    }
    else if ( errors?.pattern ) {
        return 'El valor ingresado no tiene formato de correo'
    }
    else if ( errors?.emailTomado ) {
        return 'El email ya está siendo utilizado'
    }
    
    return '';

  }



  // Mostramos mensaje de error de forma condicional
  campoNoValido( campo:string ){
    return this.miFormulario.get(campo)?.invalid
          && this.miFormulario.get(campo)?.touched;
  }

  // Otra Forma
  // emailRequired(){
  //   // cuando tenga error.required va mostrar este error
  //   return this.miFormulario.get('email')?.errors?.required
  //          && this.miFormulario.get('email')?.touched;
  // }

  // emailFormato(){
  //   return this.miFormulario.get('email')?.errors?.pattern
  //     && this.miFormulario.get('email')?.touched;
  // }

  // emailTomado(){
  //   return this.miFormulario.get('email')?.errors?.emailTomado
  //     && this.miFormulario.get('email')?.touched;
  // }


  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}


/**
 * Utilizaremos 
 */