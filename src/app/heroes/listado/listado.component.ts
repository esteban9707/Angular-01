import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes: string[] =['spiderman','ragnar','floki','thor'] 
  heroeBorrado :string ='';

  borrar():void{
    this.heroeBorrado = this.heroes.shift() || '';

  }

}
