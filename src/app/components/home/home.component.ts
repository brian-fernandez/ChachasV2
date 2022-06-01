import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { async } from 'rxjs';
import { ServicesService } from 'src/app/service/services.service';


export interface user {
  Apellido: any;
  CI: any;
  Cargo_idCargo: any;
  Contraseña: any;
  Fecha_nacimiento: any;
  Nombre: any;
  Foto: any;

}

export interface PeriodicElement {
  Fecha: any;
  informacion: any;
  usuario: any;
  Producto: any;
  nombre_mesa: any;
  cliente: any;
  idreserva: any
}




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numero = 0;

  displayedColumns: string[] = ['Fecha', 'usuario', 'nombre_mesa', 'cliente'];

  datosproducto: any;

  tamanoproducto: any;
  foto: any;
  token: any;
  datauser!: user;
  datareserva: any | PeriodicElement;
  dataSource?: any;
  tamanoreserva: any;
  datamesa: any;
  tamanomesa: any;


  constructor(
    public services: ServicesService,
    private router: Router

  ) {

  }

  datos: any;

  ngOnInit(): void {
    this.ver();
    this.obtproducto();
    this.obtiduser();
    this.obtenerreserva();
    this.obtenermesa();


  }




  ver() {
    this.datos = this.services.getUsers().subscribe(
      async data => {
        this.datos = data.items;

      }, err => {
        console.log(err);

      }
    );
  }

  obtproducto() {
    this.datos = this.services.obtenerdatosproducto().subscribe(
      async data => {
        this.datosproducto = data.items;

        this.tamanoproducto = this.datosproducto.length;
      }, err => {
        console.log(err);
      }
    );
  }
  obtiduser() {
    var token = localStorage.getItem('ci');

    this.services.getiduser(token, 's').subscribe(
      async data => {
        this.datauser = data.items[0];
        console.log(this.datauser);

      }, err => {
        console.log(err);
      }
    )
  }

  obtenerreserva() {

    this.services.obtenerreservas().subscribe(
      async data => {
       
        let datis = []
        for (let index = 0; index < 3; index++) {
          datis.push(data.items[index]);

        }
        this.datareserva = datis;
        this.tamanoreserva = data.items.length;
        this.dataSource = new MatTableDataSource(this.datareserva);
        console.log(this.datareserva);

      }, err => {
        console.log(err);
      }
    )
  }
  obtenermesa() {
    this.services.obtmesas().subscribe(
      async data => {
        this.datamesa = data.items;

        this.tamanomesa = this.datamesa.length;


      }, err => {
        console.log(err);
      }
    )
  }

}
