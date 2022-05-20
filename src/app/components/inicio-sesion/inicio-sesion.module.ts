import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioSesionRoutingModule } from './inicio-sesion-routing.module';
import { InicioSesionComponent } from './inicio-sesion.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';


@NgModule({
  declarations: [
    InicioSesionComponent
  ],
  imports: [
    CommonModule,
    InicioSesionRoutingModule,
    AngularMaterialModule
  ]
})
export class InicioSesionModule { }
