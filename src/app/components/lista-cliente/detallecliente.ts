
import { DomElementSchemaRegistry } from "@angular/compiler";
import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from "@angular/material/paginator";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { DomSanitizer } from "@angular/platform-browser";

import { NgxImageCompressService } from 'ngx-image-compress';
import { ServicesService } from "src/app/service/services.service";


export interface DialogData {
    id:any;
    fecha:any;
    info:any;
    mesa:any;
    total:any;
}

@Component({
    selector: 'detallecliente',
    templateUrl: 'detallecliente.html',
    styleUrls: ['./lista-cliente.component.css']
})


export class detalleclientecomponent
{
    datadetalle: any;
    id: DialogData;

    constructor(

        public dialogRef: MatDialogRef<detalleclientecomponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private service:ServicesService
    )
    {
        this.id = data.id;
    }

    ngOnInit(): void {
       
       this.obtdetalle();
    }

    obtdetalle()
    {
        this.service.getdetallcliente(this.id).subscribe(
            async data => {
               
               
                    for (let index = 0; index < data.items.length; index++) {
                        data.items[index].info=   JSON.parse(data.items[index].info) 
                        
                    }
                    this.datadetalle = data.items;
              console.table(this.datadetalle);


            }, err => {
                console.log(err);
            }
        );
    }
}