import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductsResponse } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:5194/api/Items');
  }
  addEditProduct(postData:any,selectedProduct:any){
    if(!selectedProduct){
      return this.http.post('http://localhost:5194/api/Items',postData);
    }else{
      return this.http.put(`http://localhost:5194/api/Items/${selectedProduct.id}`,postData);
    }
    
  }
  deleteProduct(productId: number) {
    return this.http.delete(`http://localhost:5194/api/Items/${productId}`);
  }
  getProductList(skip:number): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(`https://dummyjson.com/products?limit=10&skip=${skip}`);
  }
  // getProductList(skip: number): Observable<ProductsResponse> {
  //   return this.http.get<ProductsResponse>(`https://dummyjson.com/products?limit=10&skip=${skip}`);
  // }

  // getProducts():Observable<Product[]>{
  //   return this.http.get<Product[]>('https://fakestoreapi.com/products');
  // }
  // addEditProduct(postData:any,selectedProduct:any){
  //   if(!selectedProduct){
  //     return this.http.post('https://fakestoreapi.com/products',postData);
  //   }else{
  //     return this.http.put(`https://fakestoreapi.com/products/${selectedProduct.id}`,postData);
  //   }
    
  // }
  // deleteProduct(productId: number) {
  //   return this.http.delete(`https://fakestoreapi.com/products/${productId}`);
  // }
  
}
