import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from "@angular/material/snack-bar";
import { NgxImageCompressService } from 'ngx-image-compress';

export interface DialogData {
   
    id: string;
    nombre:string;
    apellido:string;
    foto:string;
 
    
}

@Component({
    selector: 'editdialog',
    templateUrl: 'editdialog.html',
    styleUrls: ['./panel.component.css']
})
export class editdialogcomp {
    lg: FormGroup;
    loading = { 1: false, 2: false, 3: false, 4: false };
    selected: any;
    id?: string;
    datauser: DialogData;
    imgResultBeforeCompress?: string;
    imgResultAfterCompress: string;
    cambio?: boolean = false;

    
    constructor(
        public dialogRef: MatDialogRef<editdialogcomp>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private formBuilder: FormBuilder,
        private _snackBar: MatSnackBar,
        private imageCompress: NgxImageCompressService,
        // public service: SerService
        ) 
        
        {

         


            this.datauser = this.data;
            this.imgResultAfterCompress = this.datauser.foto;
            this.lg = this.formBuilder.group({
                // ci: ['', [Validators.maxLength(8),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
                nombre: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]],
                apellido: ['',  [Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]],
            });
            // this.lg.controls['ci'].setValue(this.datauser.id);
            this.lg.controls['nombre'].setValue(this.datauser.nombre);
            this.lg.controls['apellido'].setValue(this.datauser.apellido);
            this.id = data.id;
        }

    onNoClick(): void {
        this.dialogRef.close();
    }

    compressFile(num:any) {
        this.imageCompress.uploadFile().then(({ image, orientation }) => {
            console.log(image);
            this.imgResultBeforeCompress = image;


            this.imageCompress.compressFile(image, orientation, 40, 40).then(
                result => {
                    // console.log(result);
                    
                    this.datauser.foto = result;
                    
                    this.cambio = true;

                  

                }
            );

        });

    }

    removerfoto()
    {
        this.datauser.foto = this.imgResultAfterCompress 
        this.cambio = false;
    }
}