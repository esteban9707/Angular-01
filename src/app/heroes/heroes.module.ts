import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core'
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  //compnentes
   declarations:[
        HeroeComponent,
        ListadoComponent
   ],
   //cosas que quiero que sean viastas fuera de este modulo
   exports:[
       ListadoComponent
   ],
   //usualmente aca van solo modulos
   imports:[
        CommonModule
   ]
})

export class HeroesModule{

}
