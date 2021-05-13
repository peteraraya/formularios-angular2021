import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map , delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator{

  constructor( private http: HttpClient) { }

  validate( control:AbstractControl):Observable<ValidationErrors | null>{
    
    const email = control.value;
    
    console.log('email : ',email);

    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
               .pipe(
                 //delay(3000), // hacemos que el servicio demore 3 segundos
                 map( resp => {
                   return (resp.length === 0 ) 
                     ? null // no existe este correo y lo podemos utilizar
                     : { emailTomado: true }
                 })
               )

  }

}


