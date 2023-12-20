import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit ,OnChanges{

  @Input( ) displayAddEditModel:boolean=true;
  @Input( ) selectedProduct:any=null;
  @Output() clickClose:EventEmitter<boolean>=new EventEmitter<boolean>();
  @Output() clickAddEdit:EventEmitter<any>=new EventEmitter<any>();
  modalType="Add";
  
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
  ngOnChanges(changes: SimpleChanges): void {
    if(this.selectedProduct){
      this.modalType='Edit';
      this.productForm.patchValue(this.selectedProduct);
    }else{
      this.productForm.reset();
      this.modalType='Add';
    }
  }

  closeModal(){
    this.productForm.reset();
    this.clickClose.emit(true);
  }
  addEditProduct(){

    // console.log(this.productForm.value);
    this.productService.addEditProduct(this.productForm.value,this.selectedProduct).subscribe(
      response=>{
        this.clickAddEdit.emit(response);
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
