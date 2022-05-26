import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaProductoRoutingModule } from './lista-producto-routing.module';
import { ListaProductoComponent } from './lista-producto.component';
import { modalproductocomoponente } from './modalproducto';
import { nuevoproductocomponent } from './nuevo-producto';


@NgModule({
  declarations: [
    ListaProductoComponent,
    modalproductocomoponente,
    nuevoproductocomponent
  ],
  imports: [
    CommonModule,
    ListaProductoRoutingModule
  ]
})
export class ListaProductoModule { }
