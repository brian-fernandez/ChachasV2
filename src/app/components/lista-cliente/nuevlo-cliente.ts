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
    mode: string
    Id: string;
    Nombre: string;

}

@Component({
    selector: 'nuevocliente',
    templateUrl: 'nuevo-cliente.html',
    styleUrls: ['./lista-cliente.component.css']
})
export class nuevoclientecomponent {
    lg: FormGroup;
    loading = { 1: false, 2: false, 3: false, 4: false };
    selected: any;
    id?: string;
    dataopcion!: DialogData;
    imgResultBeforeCompress?: string;
    imgResultAfterCompress?: string;
    cambio?: boolean = false;
    dataproducto: any;
    dataactulizado: any;
    foto: any;
    datosnuevo: any;
    datamesa: DialogData;
    datoscliente: any;
    dataSource?: any;
    displayedColumns: string[] = ['Id', 'CI', 'Nombre', 'Apellido', 'Acciones'];
    @ViewChild(MatPaginator) paginator: MatPaginator | any;
    @ViewChild(MatSort) sort: MatSort | any;
    datosnuevocliente: any;
    constructor(
        public dialogRef: MatDialogRef<nuevoclientecomponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private formBuilder: FormBuilder,
        private _snackBar: MatSnackBar,
        private imageCompress: NgxImageCompressService,
        private service: ServicesService,
        private sanitizer: DomSanitizer
        // public service: SerService
    ) {

        this.datamesa = this.data;
        console.log(this.dataproducto);


        this.lg = this.formBuilder.group({
            Nombre: ['', [Validators.required]],
            Apellido: ['', [Validators.required]],
            Carnet: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
        });

    }
    ngOnInit(): void {
        this.obtcliente();
    }

    obtcliente() {
        this.service.getclientes().subscribe(
            async data => {
                this.datoscliente = data.items;
                this.dataSource = new MatTableDataSource(this.datoscliente);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;

                console.table(this.datoscliente);


            }, err => {
                console.log(err);
            }
        );
    }





    onNoClick(): void {
        this.dialogRef.close();
    }



    anadir() {
        this.service.nuevocliente(

            this.lg.value.Nombre,
            this.lg.value.Apellido,
            this.lg.value.Carnet

        ).subscribe(
            async data => {
                this.datosnuevocliente = data.items;


                console.table(this.datosnuevocliente);
                this.dialogRef.close();

                this._snackBar.open('Cliente añadido exitosamente', 'Close', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'start'
                });

            }, err => {
                console.log(err);
            }
        );

    }
}