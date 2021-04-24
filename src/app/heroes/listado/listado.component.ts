import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  heroes:string[] = ['Spiderman','Iroman','Hulk','Thor','Superman']
  heroeBorrado:string = ''
  borrar(){
    this.heroeBorrado = this.heroes.pop() || ''
  }
}