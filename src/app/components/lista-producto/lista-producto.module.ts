import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaProductoRoutingModule } from './lista-producto-routing.module';
import { ListaProductoComponent } from './lista-producto.component';
import { modalproductocomoponente } from './modalproducto';


@NgModule({
  declarations: [
    ListaProductoComponent,
    modalproductocomoponente
  ],
  imports: [
    CommonModule,
    ListaProductoRoutingModule
  ]
})
export class ListaProductoModule { }
