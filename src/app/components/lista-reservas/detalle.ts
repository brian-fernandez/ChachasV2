
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from 'src/app/service/services.service';

export interface DialogData {
    mode: any
    id: any;
    total:any;
    fecha:any;
  
}


@Component({
    selector: 'detalle',
    templateUrl: './detalle.html',
    styleUrls: ['./lista-reservas.component.css']
  })

export class verdetallecomponent
{
    

    constructor(
        public dialogRef: MatDialogRef<verdetallecomponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
       
    ){
        
         console.log(this.data.id);
        
    }

    printer()
    {
       
    }
}