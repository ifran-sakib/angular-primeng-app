import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
  saveProducts(postDate:any){
    return this.http.post('https://fakestoreapi.com/products',postDate);
  }
}
