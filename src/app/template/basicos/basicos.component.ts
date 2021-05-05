import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  // uso de !
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX 300',
    precio: 1000000,
    existencias:10
  }

  constructor() { }

  ngOnInit(): void {
  }


  nombreValido(): boolean{
    return this.miFormulario?.controls.producto?.invalid
           && this.miFormulario?.controls.producto?.touched;
  }

  precioValido(): boolean {
    return this.miFormulario?.controls.precio?.touched   // si ha tocado el formulario
            && this.miFormulario?.controls.precio?.value < 0  // si el valor es menor a 0
            || this.miFormulario?.controls.precio?.value === null; // si el valor es null
  }

  // guardar(miFormulario: NgForm){
  //   console.log('submit hecho');
  //   console.log(miFormulario);
  // }
  
  guardar(){
    console.log('posteo correcto');
  
    this.miFormulario.resetForm({
      // valores por defecto
      producto:'escriba un producto',
      precio:0,
      existencias:0
    });
    }
    // un metodo para validar no postear la información que no corresponde | pero se recomienda una directiva
    //  if ( this.miFormulario.controls.precio.value < 0  || 
    //       this.miFormulario.controls.precio.value === null
    //       ) {
    //      console.log('No posteado');
    //      return;
    //  } 

}


/**
 * Estado de los ngForm (miFormulario) --> a secas
 * 
 * form: FormGroup
 *   pristine: true : el formulario no ha sido modificado de ninguna manera de que se le presento al usuario
 *   touched: false : nunca se ha tocado el formulario
 *   value:{}       : valores 
 *   dirty:false    : lo contrario al touched
 *   enabled        : si esta habilitado
 *   invalid        : si es invalido el formulario
 *   valid          : si es valido el formulario
 * 
 * 
 *  Para vincular los input con el formulario tenemos que utilizar ngModel 
 *   ngModel --> necesita el atributo name por fuerza
 *   los name deben ser unico --> mp duplicados
 * 
 *  Los formularios por template se crearn cuando el elemento es renderizado 
 * 
 * 
 *  @Input     : recibe un elemento que viene del componente padre
 *  @Output    : sirve para emitir un evento
 *  @ViewChild : Buscamos elementos con una referencia local
 */