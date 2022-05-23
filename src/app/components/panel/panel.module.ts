import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { editdialogcomp } from './editdialog';
import { AngularMaterialModule } from 'src/app/angular-material.module';




@NgModule({
  declarations: [
    PanelComponent,
    editdialogcomp
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule

   
  ]
})
export class PanelModule { }
