import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaMesasRoutingModule } from './lista-mesas-routing.module';
import { ListaMesasComponent } from './lista-mesas.component';


@NgModule({
  declarations: [
    ListaMesasComponent
  ],
  imports: [
    CommonModule,
    ListaMesasRoutingModule
  ]
})
export class ListaMesasModule { }
