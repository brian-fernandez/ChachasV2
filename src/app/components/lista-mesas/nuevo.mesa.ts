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


@Component({
    selector: 'nuevomesa',
    templateUrl: 'nuevo-mesa.html',
    styleUrls: ['./lista-mesas.component.css']
})
export class nuevomesacomponent {
    lg: FormGroup;
    constructor(private service: ServicesService,
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<nuevomesacomponent>,
        ) {
        this.lg = this.formBuilder.group({
            Nombre: ['', [Validators.required]]

        });
    }


    ngOnInit(): void {

    }
    anadir() {
        this.service.crearmesa(this.lg.value.Nombre).subscribe(
            async data => {

                console.log(data);
                this.onNoClick();
            }, err => {
                console.log(err);
            }
        );
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}

