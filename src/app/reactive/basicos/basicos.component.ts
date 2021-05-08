import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  
  // Estableciendo controles forma normal
  // miFormulario: FormGroup = new FormGroup({
  //   nombre     : new FormControl('RTX 4080ti'),
  //   precio     : new FormControl(1500),
  //   existencias: new FormControl(5),
  // });


  // Estableciendo controles con FormBuilder
  miFormulario:FormGroup = this.fb.group({
    nombre      :[, [Validators.required,Validators.minLength(3) ]],
    precio      :[, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]],
  });
  constructor( private fb: FormBuilder) { }


  ngOnInit(){
    // para establecer valores al formulario utilizo el reset
    this.miFormulario.reset({
      nombre: 'RTX 4080TI',
      precio: 10000,
    });

  }


  campoEsValido( campo: string){
    return this.miFormulario.controls[campo].errors && 
           this.miFormulario.controls[campo].touched
  }

  guardar(){
    console.log(this.miFormulario.value);
    if (this.miFormulario.invalid) {
      // para que aparezcan los errores después de haber tocados los campos
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.miFormulario.reset();
  }

}
