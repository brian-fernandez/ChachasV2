import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { SidebarComponent } from './sidebar.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { HomeComponent } from '../home/home.component';
import { PanelComponent } from '../panel/panel.component';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SidebarRoutingModule,
 
    AngularMaterialModule
  ]
})
export class SidebarModule { }
