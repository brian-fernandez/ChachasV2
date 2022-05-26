import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaMesasRoutingModule } from './lista-mesas-routing.module';
import { ListaMesasComponent } from './lista-mesas.component';
import { reservarmesacomponete } from './reservar-mesa';
import { nuevoclientecomponent } from '../lista-cliente/nuevlo-cliente';


@NgModule({
  declarations: [
    ListaMesasComponent,
    reservarmesacomponete,
    nuevoclientecomponent
  ],
  imports: [
    CommonModule,
    ListaMesasRoutingModule
  ]
})
export class ListaMesasModule { }
