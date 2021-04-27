import { Component, Input} from '@angular/core';
// import * as EventEmitter from 'node:events';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{
  
 

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter()

  constructor(private dbzService: DbzService){}

  agregar(){ 
    
    if(this.nuevo.nombre.trim().length === 0) return
    // this.onNewCharacter.emit(this.nuevo)
    // this.personajes.push(this.nuevo)

    this.dbzService.agregarPersonaje(this.nuevo)

    this.nuevo = {nombre:'',poder: 0}

    // console.log(this.personajes)
  }

}
