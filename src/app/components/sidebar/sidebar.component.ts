import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  decrypted: any;
  nombre: any;

token:any;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  datauser: any;
  

  constructor(
    // private EncrDecr: EncrDecrService,
    private observer: BreakpointObserver,
    private router:Router,
    private services:ServicesService
    
    ) {
    // this.decrypted = this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('log'));
    // this.nombre = localStorage.getItem('name');
  }


  obtiduser()
  {
    var token = localStorage.getItem('ci');

    this.services.getiduser(token,'s').subscribe(
      async data => {
        this.datauser = data.items[0];
        console.table(this.datauser.Cargo);
        
      }, err => {
        console.log(err);
      }
    )
  }


  ngAfterViewInit() {
    this.observer.observe(['(max-width: 1200px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  ngOnInit(): void {
    this.obtiduser()
  }

  cerrar(): void {
    localStorage.clear();
    window.location.reload();
  }


}
