import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
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
    private messageService: MessageService,  private confirmationService:ConfirmationService, private router: Router){

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

  // deleteOrder(order:Ordermaster){
  //   console.log(order);

  // }
  deleteOrder(id: number) {

    if (confirm("Are you sure to delete?")) {
      this.orderService.deleteOrder(id)
        .subscribe({
          next: (res) => {
            this.orders = this.orders.filter(data => data.id !== id);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted Successfully' });
          },
          error: (error) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
          }
        })
    }



  }
  AddNew(){
    this.router.navigate(['/add-order-maser']);
  }


}
