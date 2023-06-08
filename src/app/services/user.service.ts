import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUser(token: string){
    const headers = new HttpHeaders({'Authorization': `Bearer ${token}`});
    return this.http.get('http://localhost:8000/api/user', {headers});
    
   
  }
}
