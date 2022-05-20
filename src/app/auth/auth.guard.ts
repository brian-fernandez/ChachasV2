import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
// import { EncrDecrService } from '../services/encr-decr-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  // constructor(private router: Router,) { }
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> | Promise<boolean> | boolean {
  //   if (localStorage.getItem('keylog')) {
  //     var decrypted = localStorage.getItem('keylog');
  //     if (decrypted) {
  //       localStorage.clear();
  //     } else {
  //       if (localStorage.getItem('token')) {
  //         return true;
  //       } else {
  //         localStorage.clear();
  //       }
  //     }
  //   } else {
  //     this.router.navigate(['/login']);
  //     return false;
  //   }
  // }
}
