import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaMesasRoutingModule } from './lista-mesas-routing.module';
import { ListaMesasComponent } from './lista-mesas.component';
import { reservarmesacomponete } from './reservar-mesa';


@NgModule({
  declarations: [
    ListaMesasComponent,
    reservarmesacomponete
  ],
  imports: [
    CommonModule,
    ListaMesasRoutingModule
  ]
})
export class ListaMesasModule { }
