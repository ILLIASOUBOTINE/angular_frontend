import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filter } from '../models/Filter';


@Injectable({
  providedIn: 'root'
})
export class FilterService {

  categories: Filter[] = [];

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get<Filter[]>('http://localhost:8000/api/getCategories');
  }
}
