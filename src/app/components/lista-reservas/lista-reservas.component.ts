import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from 'src/app/service/services.service';
import { verdetallecomponent } from './detalle';


export interface PeriodicElement {
  Fecha_reserva: any;
  Reserva_info: any;
  Usuario_CI: any;
  Reservaid: any;
  idcliente: any;
  mesaid: any;
  total: any;
}


@Component({
  selector: 'app-lista-reservas',
  templateUrl: './lista-reservas.component.html',
  styleUrls: ['./lista-reservas.component.css']
})
export class ListaReservasComponent implements OnInit {
  datareserva: any;
  dataSource?: any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  displayedColumns: string[] = ['Reservaid', 'Fecha_reserva', 'Usuario_CI', 'idcliente', 'mesaid', 'total', 'Acciones'];
  lista: any;
  constructor
    (
      private services: ServicesService,
      private dialog:MatDialog
    ) { }

  ngOnInit(): void {
    this.obtenerreserva();
  }

  obtenerreserva() {

    this.services.obtenerreservas().subscribe(
      async data => {
        this.datareserva = data.items;
        this.dataSource = new MatTableDataSource(this.datareserva);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.datareserva);

      }, err => {
        console.log(err);
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  detalle(ids: any) {
   this.lista =  JSON.parse(ids.informacion)    
    const dialogRef = this.dialog.open(verdetallecomponent, {
      
      width: '70%', height:'600px',
      data: {
        
        id:this.lista,
        total:ids.total,
        fecha:ids.Fecha
      
      },
    });

  }
}
