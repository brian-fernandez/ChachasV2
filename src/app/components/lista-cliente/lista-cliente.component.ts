import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from 'src/app/service/services.service';
import { detalleclientecomponent } from './detallecliente';


export interface PeriodicElement {
  idcliente: any;
  Nombre: any;
  Apellido: any;
  CI: any;
}
@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {
  dataSource?: any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  displayedColumns: string[] = ['idcliente', 'Nombre', 'CI', 'Apellido', 'Acciones'];
  lista: any;
  datacliente: any;
 
  constructor(
     private services: ServicesService,
      private dialog:MatDialog
  ) { 

    
  }

  ngOnInit(): void {
    this.obtenerreserva();
  }

  obtenerreserva() {

    this.services.getclientes().subscribe(
      async data => {
        this.datacliente = data.items;
        this.dataSource = new MatTableDataSource(this.datacliente);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.datacliente);

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
   
    const dialogRef = this.dialog.open(detalleclientecomponent, {
      
      width: '70%', height:'600px',
      data: {
        
        id:ids.idcliente
      
      },
    });

  }

}
