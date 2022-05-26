import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaClienteRoutingModule } from './lista-cliente-routing.module';
import { ListaClienteComponent } from './lista-cliente.component';
import { nuevoclientecomponent } from './nuevlo-cliente';


@NgModule({
  declarations: [
    ListaClienteComponent,
    nuevoclientecomponent
  ],
  imports: [
    CommonModule,
    ListaClienteRoutingModule
  ]
})
export class ListaClienteModule { }
