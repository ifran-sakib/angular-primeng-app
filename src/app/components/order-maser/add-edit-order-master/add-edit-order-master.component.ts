import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Orderdetail } from 'src/app/interfaces/ordermaster';
import { Customer, Product } from 'src/app/interfaces/product';
import { OrdermasterService } from 'src/app/services/ordermaster.service';

@Component({
  selector: 'app-add-edit-order-master',
  templateUrl: './add-edit-order-master.component.html',
  styleUrls: ['./add-edit-order-master.component.css']
})
export class AddEditOrderMasterComponent implements OnInit {

  customerList:Customer[]=[];
  itemList:Product[]=[];
  orderDetails:Orderdetail[]=[];
  modalType="Submit";
  orderForm=this.fb.group({
    id:[0],
    code:['',Validators.required],
    customer_id:[0,Validators.required],
    orderdate:['',Validators.required],
    grandtotal:[0,Validators.required],
    remarks:['',Validators.required],
    orderDetails:[this.orderDetails]

  })

  constructor(private fb:FormBuilder,private orderService:OrdermasterService,private msgService: MessageService,private datepipe:DatePipe,private currentRoute: ActivatedRoute,private router: Router){

  }
  ngOnInit(): void {


    let id = this.currentRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.getOrderById(id);
      this.modalType="Update";
    }else{

    }
    this.geCustomerList();
    this.getItemList();
  }

  getOrderById(id: number | string) {
    this.orderService.getOrderById(id).subscribe((data: any) => {

      this.orderForm=this.fb.group({
        id:[data.id],
        code:[data.code],
        customer_id:[data.customer_id],
        orderdate:[this.datepipe.transform(data.orderdate, 'yyyy-MM-dd')],
        grandtotal:[data.grandtotal],
        remarks:[data.remarks],
        orderDetails:[data.orderDetails],



      })
      this.orderDetails=data.orderDetails;
      // console.log(this.orderForm.value,this.orderDetails);
    });


};

  geCustomerList(){
    this.orderService.getCustomers().subscribe(
      response=>{
        this.customerList=response;
      })
  }

  getItemList(){
    this.orderService.getProducts().subscribe(
      response=>{
        this.itemList=response;
      })
  }

    closeModal(){
    this.orderForm.reset();
    this.router.navigate(['/order-maser']);
    // this.clickClose.emit(true);
  }

  addEditOrder(){
    console.log(this.orderForm.value);

    if (this.orderForm.value.id != 0) {
      this.orderService.updateOrder(this.orderForm.value).subscribe(
        response=>{
          this.closeModal();
          this.msgService.add({ severity: 'success', summary: 'Success', detail: 'Product Updated' });
        },
        error=>{
          this.msgService.add({ severity: 'error', summary: 'error', detail: 'Something went wrong' });
        }
      )
    }
    else{
      this.orderService.addOrder(this.orderForm.value).subscribe(
          response=>{
            this.closeModal();
            this.msgService.add({ severity: 'success', summary: 'Success', detail: 'Product Added' });
          },
          error=>{
            this.msgService.add({ severity: 'error', summary: 'error', detail: 'Something went wrong' });
          }
        )

    }
  }

  addChild(){ 
    this.orderDetails.push({  id: 0,
      order_id: 0,
      item_id: 0,
      qty: 0,
      rate: 0,
      total: 0 });
  }
  deleteFGSaleDetailRow(Index: any) {
    if (confirm('Are you sure want to delete?')) {
      this.orderDetails.splice(Index, 1);
    }
  }
  deleteChild(Index: any): void {
    if (confirm('Are you sure want to delete?')) {
      this.orderDetails.splice(Index, 1);
    }
  }

}
