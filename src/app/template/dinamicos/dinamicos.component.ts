import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})

export class DinamicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    nombre: '',
  }

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Peter',
    favoritos: [
      { id: 1 , nombre: 'Metal Gear'},
      { id: 2 , nombre: 'Mortal Kombat'},
      { id: 3 , nombre: 'Pes 2021'},
    ]
  }

  guardar(){
    console.log('Formulario posteado');
  }

  eliminar( index:number ){
    // eliminamos el elemento del arreglo
    this.persona.favoritos.splice(index, 1);

  }

  agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre:  this.nuevoJuego
    }

    // insertamos
    this.persona.favoritos.push( {...nuevoFavorito} );

    // limpiamos input
    this.nuevoJuego = '';
  }

}
