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
      this.modalType="Update";
    }else{
      
    }
    this.geCustomerList();
  }


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
    this.orderService.addOrder(this.orderForm.value).subscribe(
      response=>{
        this.closeModal();
        const msg=this.modalType==='Add'?'Product Added':'Product Updated';
        this.msgService.add({ severity: 'success', summary: 'Success', detail: msg });
      },
      error=>{
        this.msgService.add({ severity: 'error', summary: 'error', detail: 'Something went wrong' });
      }
    )
  }
}
