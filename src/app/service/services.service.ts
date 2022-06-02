import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { Empleado } from './Empleados';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

 
  item : any = [];


  path = 'http://localhost:80/git/ChachasV2/src/app/servicesphp/';
  idUsuario: any;
  items = [];
  accesToken: any;
  httpOptions?: { headers: HttpHeaders } ;
  httpOptions2?: { headers: HttpHeaders; };
  url: any;
  total: any;
  
  constructor(private http:HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // 'Authorization':'Bearer '+ this.accesToken
      }),
    };

    this.httpOptions2 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    
  }



AgregarEmpleado():Observable<any>{
  return this.http.get(this.path,this.httpOptions);
}

getUsers(): Observable<any> {
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

  getiduser(id:any,password:any):Observable<any>
  {


    var body = 'ci=' + id + '';


    return this.http.post(this.path+'getiduser.php',body,this.httpOptions2).pipe(
      tap((data:any)=>{
      
        
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

  cambiarestadoproducto(id:any,opcion:any):Observable<any>
  
  {

    var body = 'id=' + id + '&opcion='+opcion+'';
    return this.http.post(this.path+'cambiarestadoprod.php',body, this.httpOptions2).pipe(
      tap((data: any) =>  {

       
        return of(data);
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }


  getidproducto(id:any):Observable<any>
  
  {

    var body = 'id=' + id +'';
    return this.http.post(this.path+'obtidproducto.php',body, this.httpOptions2).pipe(
      tap((data: any) =>  {

       
        return of(data);
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

    updateproducto(id:any,nombre:any,cantidad:any,precio:any,foto:any):Observable<any>
    {
      var body = 'id=' + id +'&nombre='+ nombre + '&precio='+precio+ '&cantidad='+cantidad+ '&foto='+foto+'';
      return this.http.post(this.path+'updateproduct.php',body,this.httpOptions2).pipe(
        tap((data: any) =>  {
  
         
          return of(data);
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
    }

    eliminarproducto(id:any):Observable<any>
    {
    
      
      var body = 'id=' + id;

      this.url = this.path+'eliminarproducto.php?'+body;
     
      
      
      return this.http.delete(this.url,this.httpOptions2).pipe(
        tap((data: any) =>  {
  
         
          return of(data);
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
    }

    
    creacionproducto(nombre:any,cantidad:any,precio:any,foto:any):Observable<any>
    {
    
      
      var body = 'nombre='+ nombre + '&precio='+precio+ '&cantidad='+cantidad+ '&foto='+foto+'';
      return this.http.post(this.path+'creacionproducto.php',body,this.httpOptions2).pipe(
        tap((data: any) =>  {
  
         
          return of(data);
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
    }


    

  /*  Reservas*/ 
  
  

  obtenerreservas():Observable<any>
  {
    return this.http.get(this.path+'obtreservas.php', this.httpOptions).pipe(
      tap((data: any) =>  {

       
        return of(data);
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
  reservarproducto(info:any,fecha:any,idUsuario:any,idcliente:any,mesaid:any,total:any):Observable<any>
  {

    // let convertidor = JSON.parse(info)
    var body = 'info='+ info + '&idUsuario='+idUsuario+ '&idcliente='+idcliente+ '&mesaid='+mesaid+'&total='+total+'&tiempo='+fecha+'';
    return this.http.post(this.path+'reservar.php?opcion=nuevo',body, this.httpOptions2).pipe(
      tap((data: any) =>  {

       
        return of(data);
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }



  /*  mesas* */

  obtmesas():Observable<any>
  {
    
    return this.http.get(this.path+'mesa.php?opcion=ver', this.httpOptions).pipe(
      tap((data: any) =>  {

       
        return of(data);
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
  reservmesa(id:any):Observable<any>
  {
    let body = 'id='+id+''
    return this.http.post(this.path+'mesa.php?opcion=ocupar',body, this.httpOptions2).pipe(
      tap((data: any) =>  {

       
        return of(data);
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
    
  }
  quitarreservmesa(id:any):Observable<any>
  {
    let body = 'id='+id+''
    return this.http.post(this.path+'mesa.php?opcion=desocupar',body, this.httpOptions2).pipe(
      tap((data: any) =>  {

       
        return of(data);
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
    
  }
  crearmesa(nombre:any):Observable<any>
  {
    let body = 'nombre='+nombre+''
    return this.http.post(this.path+'mesa.php?opcion=crear',body, this.httpOptions2).pipe(
      tap((data: any) =>  {

       
        return of(data);
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
    
  }
  eliminarmesa(id:any):Observable<any>
  {
   
    var body = 'opcion=eliminar&id=' + id;

    this.url = this.path+'mesa.php?'+body;

    
    return this.http.delete(this.url, this.httpOptions2).pipe(
      tap((data: any) =>  {

       
        return of(data);
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
    
  }

  /* CLIENTES*/
  
  getclientes():Observable<any>
  {
    return this.http.get(this.path+'cliente.php?opcion=ver', this.httpOptions).pipe(
      tap((data: any) =>  {

       
        return of(data);
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
  nuevocliente(nombre:any,apellido:any,carnet:any):Observable<any>
  {
    var body = 'nombre='+ nombre + '&apellido='+apellido+ '&carnet='+carnet+ '';
    return this.http.post(this.path+'cliente.php?opcion=nuevo',body, this.httpOptions2).pipe(
      tap((data: any) =>  {

       
        return of(data);
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  getidcliente(id:any):Observable<any>
  {
    var body = 'id='+ id  +'';
    return this.http.post(this.path+'cliente.php?opcion=getidcliente',body, this.httpOptions2).pipe(
      tap((data: any) =>  {

       
        return of(data);
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
  getdetallcliente(id:any):Observable<any>
  {
    var body = 'id='+ id  +'';
    return this.http.post(this.path+'cliente.php?opcion=detalle',body, this.httpOptions2).pipe(
      tap((data: any) =>  {

       
        return of(data);
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
  lista(id:any,cantidad:any,costo:any,nombre:any)
  {
    // let totalPriceProducto = (Math.round(total * 100) / 100).toFixed(2);

      let total =  cantidad * costo ;

      this.item.push({
        cantidad: cantidad,
        idproducto:id,
        costo:costo,
        nombre:nombre,
        total:total
      });
  }
  retornarlista()
  {
    return this.item;
  }
  eliminarlista(id:any)
  {
    this.items.splice(id,1)
    return this.item;
  }

  eliminarlistatotal()
  {
   
    return this.item.pop();
  }

  getTotalBill() {
    this.total = 0;


    if (this.item != null) {

      for (let items of this.item) {
        
        this.total += parseFloat(items.total);
      }
    }
    
    
    let tot = (Math.round(this.total * 100) / 100).toFixed(2);
 
    return tot
  }
}
