import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaClienteRoutingModule } from './lista-cliente-routing.module';
import { ListaClienteComponent } from './lista-cliente.component';
import { nuevoclientecomponent } from './nuevlo-cliente';
import { detalleclientecomponent } from './detallecliente';


@NgModule({
  declarations: [
    ListaClienteComponent,
    nuevoclientecomponent,
    detalleclientecomponent
  ],
  imports: [
    CommonModule,
    ListaClienteRoutingModule
  ]
})
export class ListaClienteModule { }
