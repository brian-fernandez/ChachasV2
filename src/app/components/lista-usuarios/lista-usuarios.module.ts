import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaUsuariosRoutingModule } from './lista-usuarios-routing.module';
import { ListaUsuariosComponent } from './lista-usuarios.component';


@NgModule({
  declarations: [
    ListaUsuariosComponent
  ],
  imports: [
    CommonModule,
    ListaUsuariosRoutingModule
  ]
})
export class ListaUsuariosModule { }
