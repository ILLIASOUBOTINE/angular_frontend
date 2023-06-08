import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

import { BehaviorSubject, Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // isAuth: boolean =  false;
  // access_token: string = ''; 
  // user: User;
  isAuth = new BehaviorSubject<boolean>(false);
  access_token = new BehaviorSubject<string>(''); 
 

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private router: Router ) {
   this.controlTokenExpiration();
  }

  register(name: string, email: string, password: string){
    const body = {
      name: name,
      email: email,
      password: password
    };
    return this.http.post('http://localhost:8000/api/register',body);
  }

  login(email: string, password: string){
    const body = {
      email: email,
      password: password
    };
    return this.http.post('http://localhost:8000/api/login',body);
  }

  logOut(){
    localStorage.removeItem('access_token');
    this.controlTokenExpiration();
    this.router.navigate(['/identification']);
  }

  controlTokenExpiration() {
    if(this.checkTokenStatus()) {
      
      const tokenInterval = setInterval(() => {
        if(!this.checkTokenStatus()) {
          clearInterval(tokenInterval);
          this.router.navigate(['/identification']);
         }// Выполняем проверку каждые 20 секунд
      }, 20000);
    }  
  }


  checkTokenStatus() : boolean{
    const token = localStorage.getItem('access_token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      console.log(this.jwtHelper.decodeToken(token));
      this.isAuth.next(true);
      this.access_token.next(token);
      return true;
    }else {
      this.isAuth.next(false);
      this.access_token.next('');

      // console.log("End");
      
      return false;
    }
  }
}
