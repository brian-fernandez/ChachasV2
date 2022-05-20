import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  validator: any;
  datos: any;

  constructor(  
    private auth: ServicesService,
    private formBuilder: FormBuilder,
    public router: Router,
    private _snackBar: MatSnackBar) { }

 
  lg!: FormGroup;
  submitted = false;
  tipo?:  object | any;
  token: any;


  ngOnInit(): void {


    // if (localStorage.getItem('keylog')) {
    //   var decrypted = localStorage.getItem('keylog');
    //   if (decrypted) {
    //     localStorage.clear();
    //     this._snackBar.open(':D', 'Close', {
    //       duration: 2000,
    //       verticalPosition: 'top',
    //       horizontalPosition: 'start'
    //     });
    //   } else {
    //     this.router.navigate(['/home']);
    //   }
    // }
    this.lg = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
   
  }



  login() {
    this.submitted = true;
    console.log(this.lg);
    
    if (this.lg.valid) {
      this.auth.loginuser(this.lg.value.email, this.lg.value.password).subscribe((data) => {
      
        
        this.validator = data.items[1];
        if (this.validator == "Encontrado") {
         
          
          this._snackBar.open('Datos encontrados', 'Close', {
            duration: 5000,
            verticalPosition: 'bottom',
            horizontalPosition: 'start'
          });

          this.datos = data.items[0];
          console.log(this.datos);
        }
        
        // var enc = this.EncrDecr.set('123456$#@$^@1ERF', data.data.id);
         localStorage.setItem('ci', this.datos.CI);
        // localStorage.setItem('name', data.data.name);
        // this.token = data.token;
        // localStorage.setItem('token', this.token);
        // var tipo = this.EncrDecr.set('123456$#@$^@1ERF', data.data.tipo);
        // localStorage.setItem('log', tipo);
        // this._snackBar.open('Bienvenido', 'Close', {
        //   duration: 2000,
        //   verticalPosition: 'top',
        //   horizontalPosition: 'start'
        // });
        // if (data.data.tipo == 'Administrador') {
          // this.router.navigate(['/home']);
        // } else {
        //   this.router.navigate(['/inmuebles']);
        // }

      }, err => {
        console.log(err);
        
       

      });
    } else {
   
      this._snackBar.open('Please complete data', 'Close', {
        duration: 5000,
        verticalPosition: 'bottom',
        horizontalPosition: 'start'
      });
    }
  }

  // convenience getter for easy access to form fields
 // get f() { return this.lg.controls; }

}
