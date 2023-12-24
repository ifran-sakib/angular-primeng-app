import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Customer } from 'src/app/interfaces/product';
import { OrdermasterService } from 'src/app/services/ordermaster.service';

@Component({
  selector: 'app-add-edit-order-master',
  templateUrl: './add-edit-order-master.component.html',
  styleUrls: ['./add-edit-order-master.component.css']
})
export class AddEditOrderMasterComponent implements OnInit {

  customerList:Customer[]=[];
  modalType="Add";
  orderForm=this.fb.group({
    id:[0],
    code:['',Validators.required],
    customer_id:[0,Validators.required],
    orderdate:['',Validators.required],
    grandtotal:[0,Validators.required],
    remarks:['',Validators.required]

  })

  constructor(private fb:FormBuilder,private orderService:OrdermasterService,private msgService: MessageService,private currentRoute: ActivatedRoute,private router: Router){

  }
  ngOnInit(): void {
   

    let id = this.currentRoute.snapshot.paramMap.get('id');
    if (id != null) {
     
      console.log(id);
      this.getOrderById(id);
      this.modalType="Update";
    }else{
      
    }
    this.geCustomerList();
  }

  getOrderById(id: number | string) {
    this.orderService.getOrderById(id).subscribe((data: any) => {
      console.log(data);
      this.orderForm=this.fb.group({
        id:[data.id],
        code:[data.code],
        customer_id:[data.customer_id],
        orderdate:[data.orderdate],
        grandtotal:[data.grandtotal],
        remarks:[data.remarks]
    
      })
    });
};

  geCustomerList(){
    this.orderService.getCustomers().subscribe(
      response=>{
        this.customerList=response;
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
    // this.orderService.addOrder(this.orderForm.value).subscribe(
    //   response=>{
    //     this.closeModal();
    //     const msg=this.modalType==='Add'?'Product Added':'Product Updated';
    //     this.msgService.add({ severity: 'success', summary: 'Success', detail: msg });
    //   },
    //   error=>{
    //     this.msgService.add({ severity: 'error', summary: 'error', detail: 'Something went wrong' });
    //   }
    // )
  }

  
}
