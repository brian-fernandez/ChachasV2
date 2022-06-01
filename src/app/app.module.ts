import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { HomeComponent } from './components/home/home.component';
import { MatTableModule } from '@angular/material/table';
import { PanelComponent } from './components/panel/panel.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { editdialogcomp } from './components/panel/editdialog';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { modalproductocomoponente } from './components/lista-producto/modalproducto';
import { nuevoproductocomponent } from './components/lista-producto/nuevo-producto';
import { ListaMesasComponent } from './components/lista-mesas/lista-mesas.component';
import { reservarmesacomponete } from './components/lista-mesas/reservar-mesa';
import { nuevoclientecomponent } from './components/lista-cliente/nuevlo-cliente';
import { nuevomesacomponent } from './components/lista-mesas/nuevo.mesa';
import { ListaReservasComponent } from './components/lista-reservas/lista-reservas.component';
import { verdetallecomponent } from './components/lista-reservas/detalle';
import {NgxPrintModule} from 'ngx-print';
import { ListaClienteComponent } from './components/lista-cliente/lista-cliente.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InicioSesionComponent,
    HomeComponent,
    PanelComponent,
    editdialogcomp,
    ListaProductoComponent,
    modalproductocomoponente,
    nuevoproductocomponent,
    ListaMesasComponent,
    reservarmesacomponete,
    nuevoclientecomponent,
    nuevomesacomponent,
    ListaReservasComponent,
    verdetallecomponent,
    ListaClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
