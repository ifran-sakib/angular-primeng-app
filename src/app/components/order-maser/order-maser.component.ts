import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Ordermaster, OrdersResponse } from 'src/app/interfaces/ordermaster';
import { OrdermasterService } from 'src/app/services/ordermaster.service';

@Component({
  selector: 'app-order-maser',
  templateUrl: './order-maser.component.html',
  styleUrls: ['./order-maser.component.css']
})
export class OrderMaserComponent implements OnInit{

  orders:Ordermaster[]=[]
  totalRecord:number=0;
  loading:boolean=true;

  constructor(private orderService:OrdermasterService,
    private messageService: MessageService, private router: Router){

  }
  ngOnInit(): void {
  //  this.getOrdersFiltered();
  }

  loadProduct($event:any){
    // console.log($event);
    this.loading=true;
    this.orderService.getOrdersFiltered($event.first,$event.rows).subscribe(
      (response:OrdersResponse)=>{
        console.log(response);
        this.loading=false;
        this.orders=response.orders;
        this.totalRecord=response.total;
        
      }
      )
  }
  openForEdit(id: number) {

    this.router.navigate(['/order-maser/edit/' + id]);
  }
  gotoNew() {
    this.router.navigate(['/add-order-maser']);
  }
  // getOrdersFiltered(){
  //   // console.log($event);
  //   this.loading=true;
  //   this.orderService.getOrdersFiltered(0,10).subscribe(
  //     (response:OrdersResponse)=>{
  //       console.log(response);
  //       this.loading=false;
  //       this.orders=response.orders;
  //       this.totalRecord=response.total;
        
  //     }
  //     )
  // }

}
