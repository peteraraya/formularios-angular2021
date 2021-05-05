import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validators } from "@angular/forms";

@Directive({
  selector:'[customMin][ngModel]',
  providers:[{
    provide: NG_VALIDATORS,
    useExisting: CustomMinDirective,
    multi: true
  }]
})
export class CustomMinDirective implements Validators {

  @Input() minimo!:number;

  constructor(){
    console.log('Directivas ' , this.minimo);
  }

  validate( control : FormControl ){
    const inputValue = control.value;

    // console.log(inputValue);

    // console.log(this.minimo);

    return (inputValue < this.minimo )
             ? {'customMin': true}
             : null; // no hay error de validación
  }


}





/***
 *  el decorador hacer esto sea una directiva
 *  las directivas neesitan el selector , es decir 
 * 
 *   crearemos un selector que ese asociado a un ngModel
 * 
 *  implementaremos
 *  Validators : nos permite realizar validaciones
 *     required
 * 
 *   utilizaremos un provider ( como un servicio )
 *     -NG_VALIDATORS
 * 
 * 
 *  */ 