import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaClienteRoutingModule } from './lista-cliente-routing.module';
import { ListaClienteComponent } from './lista-cliente.component';


@NgModule({
  declarations: [
    ListaClienteComponent
  ],
  imports: [
    CommonModule,
    ListaClienteRoutingModule
  ]
})
export class ListaClienteModule { }
