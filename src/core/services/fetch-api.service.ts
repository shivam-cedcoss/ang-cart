import { Injectable } from '@angular/core';
import { apiUrl } from '../constant/ApiUrl';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FetchApiService {
  constructor(private http:HttpClient) { }
  getAllCategories(){
    return this.http.get(apiUrl.getAllCategories);
  }
  getAllProducts(){
    return this.http.get(apiUrl.getAllProducts);
  }
  getAllUsers(){
    return this.http.get(apiUrl.getAllUsers);
  }
}
