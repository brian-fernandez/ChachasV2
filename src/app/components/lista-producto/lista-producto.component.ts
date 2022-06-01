import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ServicesService } from 'src/app/service/services.service';
import { modalproductocomoponente } from './modalproducto';
import { nuevoproductocomponent } from './nuevo-producto';


export interface PeriodicElement {
  idProducto: any;
  Nombre: any;
  Foto: any;
  Estado: any;
  Cantidad: any;
  Precio: any;
}

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {
  datosproducto: any | PeriodicElement;
  tamanoproducto: any;
  datauser: any;
  dataSource?: any;
  displayedColumns: string[] = ['idProducto', 'Nombre', 'Foto', 'Estado', 'Cantidad', 'Precio', 'Acciones'];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;


  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  dataidpro: any;
  datoseliminados: any;

  constructor(private services: ServicesService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.obtproducto();

  }
  ngAfterViewInit() {
    this.datosproducto();
  }

  obtproducto() {
    this.services.obtenerdatosproducto().subscribe(
      async data => {
        this.datosproducto = data.items;
        this.dataSource = new MatTableDataSource(this.datosproducto);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  edit(idpro: any) {

    this.services.getidproducto(idpro).subscribe(
      async data => {
        this.dataidpro = data.items[0];
        console.log(this.dataidpro);
        const dialogRef = this.dialog.open(modalproductocomoponente, {
          width: '250px',
          data: {
            mode: 'edit',
            Id: this.dataidpro.idProducto,
            Nombre: this.dataidpro.Nombre,
            Foto: this.dataidpro.Foto,
            Cantidad: this.dataidpro.Cantidad,
            Precio: this.dataidpro.Precio
          },
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('hola');

          this.obtproducto();
        }
        );
      }, err => {
        console.log(err);
      }
    )





  }

  cambiaractivo(id: any) {

    this.services.cambiarestadoproducto(id, 1).subscribe(
      async data => {
        this.datosproducto = data;

        this._snackBar.open('Estado Cambiado', 'Close', {
          duration: 5000,
          verticalPosition: 'bottom',
          horizontalPosition: 'start'
        });
        this.obtproducto();
        console.log(this.datosproducto);

      }, err => {
        console.log(err);
      }
    );

  }

  cambiarinactivo(id: any) {
    this.services.cambiarestadoproducto(id, 2).subscribe(
      async data => {
        this.datosproducto = data;

        this._snackBar.open('Estado Cambiado', 'Close', {
          duration: 5000,
          verticalPosition: 'bottom',
          horizontalPosition: 'start'
        });
        this.obtproducto();
        console.log(this.datosproducto);



      }, err => {
        console.log(err);
      }
    );
  }


  eliminar(id: any) {
    this.services.eliminarproducto(id).subscribe(
      async data => {
        this.datoseliminados = data;

        this._snackBar.open('Producto eliminado', 'Close', {
          duration: 5000,
          verticalPosition: 'bottom',
          horizontalPosition: 'start'
        });
        this.obtproducto();
        console.log(this.datoseliminados);



      }, err => {
        console.log(err);
      }
    );
  }


  anadir() {
    const dialogRef = this.dialog.open(nuevoproductocomponent, {
      width: '50%', height: '400px',
      data: {
        mode: 'Nuevo',

      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('hola');

      this.obtproducto();
    }
    );
  }


}
