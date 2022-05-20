import { Component, OnInit } from '@angular/core';
import { async } from 'rxjs';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public services:ServicesService) { }


  datos:any;

  ngOnInit(): void {
    this.ver();
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
    
    console.log(this.datos);
    

  }

}
