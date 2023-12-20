import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {

  @Input( ) displayAddModel:boolean=true;
  @Output() clickClose:EventEmitter<boolean>=new EventEmitter<boolean>();
  @Output() clickAdd:EventEmitter<any>=new EventEmitter<any>();
  
  productForm=this.fb.group({
    title:['',Validators.required],
    price:[0,Validators.required],
    description:[''],
    category:['',Validators.required],
    image:['',Validators.required],

  })
  
  constructor(private fb:FormBuilder,private productService:ProductService,private msgService: MessageService){

  }
  ngOnInit(): void {
  }

  closeModal(){
    this.productForm.reset();
    this.clickClose.emit(true);
  }
  addProduct(){

    // console.log(this.productForm.value);
    this.productService.saveProducts(this.productForm.value).subscribe(
      response=>{
        this.clickAdd.emit(response);
        this.closeModal();
        this.msgService.add({ severity: 'success', summary: 'Success', detail: 'Save Successfully' });
      },
      error=>{
        this.msgService.add({ severity: 'error', summary: 'error', detail: 'Something went wrong' });
      }
    )
  }

}
