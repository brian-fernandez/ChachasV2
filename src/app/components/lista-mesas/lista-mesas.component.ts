import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServicesService } from 'src/app/service/services.service';
import { reservarmesacomponete } from './reservar-mesa';

@Component({
  selector: 'app-lista-mesas',
  templateUrl: './lista-mesas.component.html',
  styleUrls: ['./lista-mesas.component.css']
})
export class ListaMesasComponent implements OnInit {
  datosmesas: any;

  constructor(private services:ServicesService,
                private dialog:MatDialog) { }

  ngOnInit(): void {
    this.vermesas();
  }


  anadir()
  {
    
  }
  vermesas()
  {
    this.services.obtmesas().subscribe(
      async data => {
        this.datosmesas = data.items;
        console.log(this.datosmesas);
           
      }, err => {
        console.log(err);
      }
    );
  }

  reservar(id:any)
  {
    const dialogRef = this.dialog.open(reservarmesacomponete, {
      width: '100%',
      data: {
        mode: 'reservar',
        Id: id.idMesa,
        Nombre: id.Nombre,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('hola');
        
    
    }
    );
  }

}
