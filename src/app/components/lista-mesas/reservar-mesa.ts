import { DomElementSchemaRegistry } from "@angular/compiler";
import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from "@angular/material/paginator";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { DomSanitizer } from "@angular/platform-browser";
import { NgxImageCompressService } from 'ngx-image-compress';
import { ServicesService } from "src/app/service/services.service";
import { nuevoclientecomponent } from "../lista-cliente/nuevlo-cliente";

export interface DialogData {
    mode: string
    Id: string;
    Nombre: string;

}

@Component({
    selector: 'reservarmesa',
    templateUrl: 'reservar-mesa.html',
    styleUrls: ['./lista-mesas.component.css']
})
export class reservarmesacomponete {
    index = 0;
    lista:any
    lg: FormGroup;
    seleccionar = false;
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
    datosidcliente: any;
    datosproductos: any;
    cantidad?: number[];
    seleccioncantidad: any;
    idproducto: any;
    nombre: any;
    costo: any;

    constructor(
        public dialogRef: MatDialogRef<reservarmesacomponete>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private formBuilder: FormBuilder,
        private _snackBar: MatSnackBar,
        private imageCompress: NgxImageCompressService,
        private service: ServicesService,
        private sanitizer: DomSanitizer,
        private dialog: MatDialog

        // public service: SerService
    ) {

        this.datamesa = this.data;
        console.log(this.dataproducto);


        this.lg = this.formBuilder.group({
            Nombre: ['', [Validators.required]],
            Cantidad: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],

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




            }, err => {
                console.log(err);
            }
        );
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }



    onNoClick(): void {
        this.dialogRef.close();
    }



    nuevocliente() {
        const dialogRef = this.dialog.open(nuevoclientecomponent, {
            width: '100%',
            data: {
                mode: 'añadir',

            },
        });
        dialogRef.afterClosed().subscribe(result => {


        });

    }
    atras() {
        this.seleccionar = false;
    }
    anadir(id: any) {

        this.service.getidcliente(id).subscribe(
            async data => {
                this.datosidcliente = data.items[0];
                this.seleccionar = true;
                this.obtproductos();
                console.table(this.datosidcliente)
            }, err => {
                console.log(err);
            }
        );
    }

    obtproductos() {
        this.service.obtenerdatosproducto().subscribe(
            async data => {

                this.datosproductos = data.items;
                let elemnt = [];

                for (let index = 0; index < this.datosproductos.length; index++) {


                    if (data.items[index].Estado == "Activo") {

                        elemnt.push(data.items[index]);
                    }

                }


                this.datosproductos = elemnt;


                console.table(this.datosproductos)
            }, err => {
                console.log(err);
            }
        );
    }
    onChange(centroId: any) {

        const arr = [];
        for (let index = 1; index <= centroId.Cantidad; index++) {

            arr.push(index);
        }
        this.cantidad = arr;
        this.idproducto = centroId.idProducto;
        this.nombre = centroId.Nombre;
        this.costo = centroId.Precio
        console.log(this.idproducto);


    }
    onChangecantidad(centroId: any) {
        console.log(centroId); // Aquí iría tu lógica al momento de seleccionar algo
        this.seleccioncantidad = centroId;

    }
    anadirlista() {
        
        const elemnt = {cantidad: this.seleccioncantidad,idproducto:this.idproducto};

        this.service.lista(this.idproducto,this.seleccioncantidad,this.costo,this.nombre,'');

        this.lista=this.service.retornarlista();
        console.log(this.lista);
        
        
    }
}