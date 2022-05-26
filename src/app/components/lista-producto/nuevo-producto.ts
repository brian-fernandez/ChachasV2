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
    selector: 'nuevo-producto',
    templateUrl: 'nuevo-producto.html',
    styleUrls: ['./lista-producto.component.css']
})
export class nuevoproductocomponent {
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
        public dialogRef: MatDialogRef<nuevoproductocomponent>,
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







    compressFile(num: any) {
        this.imageCompress.uploadFile().then(({ image, orientation }) => {
            console.log(image, orientation);

            this.imgResultBeforeCompress = image;



            this.imageCompress.compressFile(image, orientation, 40, 40).then(
                result => {
                    console.log(result);


                    this.dataproducto.Foto = result;

                    this.cambio = true;



                }
            );

        });

    }

    removerfoto() {
        this.dataproducto.Foto = this.imgResultAfterCompress
        this.sanitizer.bypassSecurityTrustUrl(this.dataproducto.Foto);
        this.cambio = false;
    }

    anadir() {
        this.service.creacionproducto(
            this.lg.value.Nombre,
            this.lg.value.Cantidad,
            this.lg.value.Precio,
            this.dataproducto.Foto
        ).subscribe(
            async data => {
                this.datosnuevo = data;

                this._snackBar.open('Producto creado', 'Close', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'start'
                });

                console.log(this.datosnuevo);

                this.dialogRef.close();



            }, err => {
                console.log(err);
            }
        );
    }

}