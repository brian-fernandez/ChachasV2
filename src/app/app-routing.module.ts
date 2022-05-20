import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { PanelComponent } from './components/panel/panel.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';



const routes: Routes = [

  {
    path: '', component: SidebarComponent,
    children: [
      { path: 'home', component: HomeComponent, },
      { path: 'panel', component: PanelComponent },
      // {path: 'nav', component: NavComponent,},
      // {path: 'footer', component: FooterComponent,},
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
