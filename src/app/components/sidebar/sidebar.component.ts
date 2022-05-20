import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  decrypted: any;
  nombre: any;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    // private EncrDecr: EncrDecrService,
    private observer: BreakpointObserver
    
    ) {
    // this.decrypted = this.EncrDecr.get('123456$#@$^@1ERF', localStorage.getItem('log'));
    // this.nombre = localStorage.getItem('name');
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

  }

  cerrar(): void {
    localStorage.clear();
    window.location.reload();
  }


}
