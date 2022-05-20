import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { Empleado } from './Empleados';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  Api = 'http://localhost:80/chachasv1/chachas/src/app/appphp/index.php';





  path = 'http://localhost:80/git/ChachasV2/src/app/servicesphp/';
  idUsuario: any;
  items = [];
  accesToken: any;
  httpOptions?: { headers: HttpHeaders } ;
  httpOptions2?: { headers: HttpHeaders; };
  
  constructor(private http:HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // 'Authorization':'Bearer '+ this.accesToken
      }),
    };
    
  }



AgregarEmpleado():Observable<any>{
  return this.http.get(this.path,this.httpOptions);
}














  getUsers(): Observable<any> {
    // this.accesToken = localStorage.getItem('access_token');
   
  
    
    return this.http.get(this.path+'obt.php', this.httpOptions).pipe(
      tap((data: any) =>  {

       
        return of(data);
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }



  loginuser(correo:any,password:any):Observable<any>

  {

    this.httpOptions2 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    console.log('login');
    var body = 'ci=' + correo + '&contraseña=' + password + '';
    return this.http.post(this.path+'login.php',body,this.httpOptions2).pipe(
      tap((data:any)=>{
        console.log(data);
        
        return of(data);
      }),
      catchError((err)=>{
        console.log(err);
        
        return throwError(err);
      })
    )

  }



  /*Producto*/

  obtenerdatosproducto():Observable<any>
  {
    return this.http.get(this.path+'obtproducto.php', this.httpOptions).pipe(
      tap((data: any) =>  {

       
        return of(data);
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
  
}
