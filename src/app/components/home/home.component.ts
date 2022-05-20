import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { async } from 'rxjs';
import { ServicesService } from 'src/app/service/services.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
 
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  datosproducto: any;

  
  constructor(public services:ServicesService) {

    
   }


  

  datos:any;

  ngOnInit(): void {
    this.ver();
    this.obtproducto();
  }

  ver()
  {
    this.datos = this.services.getUsers().subscribe(
      async data => {
      
        
        this.datos = data.items[0]
       
        
        console.log(this.datos);
        
        
      }, err => {
        console.log(err);

      }
    );
    
   
    

  }

  obtproducto()
  {
    this.datos = this.services.obtenerdatosproducto().subscribe(
      async data => {
      
        
        this.datosproducto = data;
       
        
        console.log(this.datosproducto);
        
      }, err => {
        console.log(err);

      }
    );
  }

}
