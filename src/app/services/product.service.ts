import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductById(id:number){
    return this.http.get<Product>('http://localhost:8000/api/getProductById?id='+id);
  }
}
