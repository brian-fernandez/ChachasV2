import { DomElementSchemaRegistry } from "@angular/compiler";
import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from "@angular/material/snack-bar";
import { DomSanitizer } from "@angular/platform-browser";
import { NgxImageCompressService } from 'ngx-image-compress';
import { ServicesService } from "src/app/service/services.service";

export interface DialogData {
    mode:string
    id:string;
    nombre:string;
    Foto:string;
    Cantidad:string;
    Precio:string;
}

@Component({
    selector: 'modalproducto',
    templateUrl: 'modalproducto.html',
    styleUrls: ['./lista-producto.component.css']
})
export class modalproductocomoponente {
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


    constructor(
        public dialogRef: MatDialogRef<modalproductocomoponente>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private formBuilder: FormBuilder,
        private _snackBar: MatSnackBar,
        private imageCompress: NgxImageCompressService,
        private service: ServicesService,
        private sanitizer:DomSanitizer
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
        // this.lg.controls['ci'].setValue(this.datauser.id);
        this.lg.controls['Nombre'].setValue(this.dataproducto.Nombre);
        this.lg.controls['Cantidad'].setValue(this.dataproducto.Cantidad);
        this.lg.controls['Precio'].setValue(this.dataproducto.Precio);
        
      
    }

    ngOnInit(): void {

        
        
    }

    onNoClick(): void {
        this.dialogRef.close();
    }


   




    compressFile(num: any) {
        this.imageCompress.uploadFile().then(({ image, orientation }) => {
            console.log(image,orientation);
            
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

    actualizar()
    {
      

        this.service.updateproducto(
            this.dataproducto.Id,
            this.dataproducto.Nombre,
            this.dataproducto.Cantidad,
            this.dataproducto.Precio,
            this.dataproducto.Foto).subscribe(
            async data => {
              this.dataactulizado = data;
              console.log(this.dataactulizado);

              
              
            }, err => {
              console.log(err);
            }
          )
        
    }
}