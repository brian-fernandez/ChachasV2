import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaMesasRoutingModule } from './lista-mesas-routing.module';
import { ListaMesasComponent } from './lista-mesas.component';
import { reservarmesacomponete } from './reservar-mesa';
import { nuevoclientecomponent } from '../lista-cliente/nuevlo-cliente';
import { nuevomesacomponent } from './nuevo.mesa';


@NgModule({
  declarations: [
    ListaMesasComponent,
    reservarmesacomponete,
    nuevoclientecomponent,
    nuevomesacomponent
  ],
  imports: [
    CommonModule,
    ListaMesasRoutingModule
  ]
})
export class ListaMesasModule { }
