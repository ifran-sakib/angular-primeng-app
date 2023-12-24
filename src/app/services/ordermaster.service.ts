import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrdersResponse } from '../interfaces/ordermaster';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class OrdermasterService {

  constructor(private http:HttpClient) { }


  getOrdersFiltered(skip:number,limit:number): Observable<OrdersResponse> {
    return this.http.get<OrdersResponse>(`http://localhost:5194/api/Order/getOrdersFiltered?limit=${limit}&skip=${skip}`);
  }
  addEditOrder(postData:any,selectedOrder:any){
    if(!selectedOrder){
      return this.http.post('http://localhost:5194/api/Order',postData);
    }else{
      return this.http.put(`http://localhost:5194/api/Order/${selectedOrder.id}`,postData);
    }
    
  }
  addOrder(postData:any){
    return this.http.post('http://localhost:5194/api/Order',postData);
  }
  deleteOrder(id: number) {
    return this.http.delete(`http://localhost:5194/api/Order/${id}`);
  }

  getCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>('http://localhost:5194/api/Customers');
  }
}
