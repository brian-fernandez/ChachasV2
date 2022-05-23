import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { PanelComponent } from './components/panel/panel.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { ListaReservasComponent } from './components/lista-reservas/lista-reservas.component';
import { ListaMesasComponent } from './components/lista-mesas/lista-mesas.component';
import { ListaClienteComponent } from './components/lista-cliente/lista-cliente.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';



const routes: Routes = [

  {
    path: '', component: SidebarComponent,
    children: [
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
      { path: 'panel', component: PanelComponent,canActivate: [AuthGuard] },
      {path: 'lista-reservas', component:ListaReservasComponent , canActivate:[AuthGuard]},
      {path: 'lista-mesa', component: ListaMesasComponent, canActivate:[AuthGuard]},
      {path: 'lista-cliente', component: ListaClienteComponent, canActivate:[AuthGuard]},
      {path: 'lista-producto', component: ListaProductoComponent, canActivate:[AuthGuard]},
      // {path: 'restaurante/:idproducto', component: RestaurantComponent},
      // {path: 'restaurante', component:RestaurantComponent},
      // {path: 'habitacion', component:RoomsComponent},
      // {path: 'habitacion-room', component:RoomsSingleComponent},
      // {path: 'habitacion-categoria/:idhabitacion', component:RoomsCategoryComponent},
      // {path: 'habitacion-categoria', component:RoomsCategoryComponent},
      // {path: 'habitacion-detalles/:iddetalle', component:RoomsSingleComponent},
      // {path: 'cart-toggle', component:CartToggleComponent},
      // {path: 'transporte', component:TransporteComponent},

      // {path: 'eventos',component:EventsComponent},

      // {path: 'sesion', component:LoginV1Component},




    ]


  },
  {
    path: 'login', component: InicioSesionComponent,
  },



]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
