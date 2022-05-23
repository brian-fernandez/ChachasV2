import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServicesService } from 'src/app/service/services.service';
import { editdialogcomp } from './editdialog';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}




@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  datauser: any;
 
 
  constructor(private services:ServicesService,
    public dialog:MatDialog) { }

  ngOnInit(): void {
    this.obtiduser();
  }


  obtiduser()
  {
    var token = localStorage.getItem('ci');

    this.services.getiduser(token,'s').subscribe(
      async data => {
        this.datauser = data.items[0];
        console.log(this.datauser);
        
      }, err => {
        console.log(err);
      }
    )
  }
  editar(id:any)
  {
    const dialogRef = this.dialog.open(editdialogcomp, {
      width: '250px',
      data: {id: this.datauser.CI,nombre:this.datauser.Nombre,apellido:this.datauser.Apellido,foto:this.datauser.Foto },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
    
  }

}
