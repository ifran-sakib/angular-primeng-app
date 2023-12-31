import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Ordermaster } from 'src/app/interfaces/ordermaster';
import { Customer } from 'src/app/interfaces/product';
import { OrdermasterService } from 'src/app/services/ordermaster.service';

@Component({
  selector: 'app-order-list-filtered',
  templateUrl: './order-list-filtered.component.html',
  styleUrls: ['./order-list-filtered.component.css']
})
export class OrderListFilteredComponent implements OnInit{
  orders!: Ordermaster[];
  loading: boolean = true;

  activityValues: number[] = [0, 100];

  customers:Customer[]=[];

  constructor(private orderService: OrdermasterService) {}
  ngOnInit(): void {
    this.orderService.getOrders().subscribe(
      response=>{
        this.orders=response;
        this.loading = false;
      });
      
      this.geCustomerList();
  }
  
  clear(table: Table) {
    table.clear();
}

geCustomerList(){
  this.orderService.getCustomers().subscribe(
    response=>{
      this.customers=response;
    })
}
}
