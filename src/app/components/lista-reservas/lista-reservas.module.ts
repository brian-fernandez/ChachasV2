import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaReservasRoutingModule } from './lista-reservas-routing.module';
import { ListaReservasComponent } from './lista-reservas.component';
import { verdetallecomponent } from './detalle';


@NgModule({
  declarations: [
    ListaReservasComponent,
    verdetallecomponent
  ],
  imports: [
    CommonModule,
    ListaReservasRoutingModule
  ]
})
export class ListaReservasModule { }
