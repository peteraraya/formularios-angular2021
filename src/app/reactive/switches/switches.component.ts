import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit   {

  // definimos nuestro formulario
  miFormulario : FormGroup = this.fb.group({
    genero: ['M', Validators.required ],
    notificaciones: [true , Validators.required ],
    condiciones: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  constructor( private fb: FormBuilder) { }

  ngOnInit(){
    // pondra todos los valores del objeto
    this.miFormulario.reset({
      ...this.persona,
      condiciones:true  // establecemos valores por defecto
    });

    // rxjs : extensiones reactivas
    // this.miFormulario.get('condiciones')?.valueChanges.subscribe( newValue =>{
    //   console.log( newValue );
    // });

    this.miFormulario.valueChanges.subscribe( ({concdiciones, ...rest}) =>{
      // extraemos la información que no los interesa
      // delete form.condiciones;
      this.persona = rest;
     });

  }


  guardar(){
    // creamos una copia de todo el formulario
    const formValue =  { ...this.miFormulario.value };
    console.log(formValue);
    // eliminamos una propiedad ( condiciones)
    delete formValue.condiciones;
    console.log(formValue);

    this.persona = formValue;
  }

}

/**
 * Para establecer valores en un formulario se recomienda utilizar
 * ngOnInit
 * 
 *  Validators.requiredTrue --> validator que nos permite decir que el campo
 * debe ser trur 
 */