import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  personajes: Personaje[] =[
    {nombre: 'Goku', poder: 15000},
    {nombre: 'Vegeta', poder: 14500}
  ]

  nuevo: Personaje = {
    nombre: 'Gohan',
    poder: 12000
  }

  agregarNuevo(argumento:Personaje){
    this.personajes.push(argumento)
  }

}
