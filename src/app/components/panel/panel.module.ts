import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }
