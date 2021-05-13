import { FormControl } from '@angular/forms';


export const nombreApellidoPattern : string = '([a-zA-Z]+) ([a-zA-Z]+)';

export const emailPattern         : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

// transformamos nuestro metodo a una función

export const noPuedeSerStrider = (control: FormControl) =>{
  const valor: string = control.value?.trim().toLowerCase();
  console.log(valor);
  if (valor === 'strider') {
    return {
      noStrider: true
    }
  }
  return null
}

/**
 * Este metodo es opcional , 
 * debemos importar cada una de los elementos que queremos utilizar
 * Pero en este ejemplo utilizaremos el servicio validatorService
 */