import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (state.url === '/identification' && this.authService.isAuth.getValue()) {
      // Пользователь аутентифицирован, разрешаем доступ
      this.router.navigate(['/identification']);
      return true;
    }else if(this.authService.isAuth.getValue()) {
      
      return true;
    }else {
      // Пользователь не аутентифицирован, перенаправляем на страницу входа
      this.router.navigate(['/identification']);
      return false;
    }
  }
  
}
