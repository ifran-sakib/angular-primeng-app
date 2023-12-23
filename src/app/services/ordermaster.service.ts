import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrdersResponse } from '../interfaces/ordermaster';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdermasterService {

  constructor(private http:HttpClient) { }


  getOrdersFiltered(skip:number,limit:number): Observable<OrdersResponse> {
    return this.http.get<OrdersResponse>(`http://localhost:5194/api/Order/getOrdersFiltered?limit=${limit}&skip=${skip}`);
  }

}
