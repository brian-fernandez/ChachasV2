import { DomElementSchemaRegistry } from "@angular/compiler";
import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from "@angular/material/snack-bar";
import { DomSanitizer } from "@angular/platform-browser";
import { NgxImageCompressService } from 'ngx-image-compress';
import { ServicesService } from "src/app/service/services.service";

export interface DialogData {
    mode: string
    id: string;
    nombre: string;
    Foto: string;
    Cantidad: string;
    Precio: string;
}

@Component({
    selector: 'reservarmesa',
    templateUrl: 'reservar-mesa.html',
    styleUrls: ['./lista-mesas.component.css']
})
export class reservarmesacomponete {
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


    constructor(
        public dialogRef: MatDialogRef<reservarmesacomponete>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private formBuilder: FormBuilder,
        private _snackBar: MatSnackBar,
        private imageCompress: NgxImageCompressService,
        private service: ServicesService,
        private sanitizer: DomSanitizer
        // public service: SerService
    ) {

        this.dataproducto = this.data;
        console.log(this.dataproducto);

        this.imgResultAfterCompress = this.dataproducto.Foto;
        this.lg = this.formBuilder.group({
            Nombre: ['', [Validators.required]],
            Cantidad: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
            Precio: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
        });




    }

    ngOnInit(): void {



    }

    onNoClick(): void {
        this.dialogRef.close();
    }



    anadir() {


    }
}