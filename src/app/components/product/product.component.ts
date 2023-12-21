import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,OnDestroy {

  products:Product[]=[];
  displayAddEditModel=false;
  selectedProduct:any=null;
  subscription:Subscription[]=[];
  pdtSubscription:Subscription=new Subscription();

  constructor(private productService:ProductService,
    private confirmationService:ConfirmationService,
    private messageService: MessageService){

  }

  ngOnInit(): void {
    this.getProductList();
  }
 
  getProductList(){
    this.pdtSubscription=this.productService.getProducts().subscribe(
      response=>{
        this.products=response;
      }
    )

    this.subscription.push(this.pdtSubscription)

  }

  showAddModal(){
    this.displayAddEditModel=true;
    this.selectedProduct=null;
  }

  hideAddModal(isClosed:boolean){
    this.displayAddEditModel=!isClosed;
    this.getProductList();
  }

  saveUpdateProductToList(newData:any){

    if (this.selectedProduct && newData.id === this.selectedProduct.id) {
      const productIndex = this.products.findIndex(data => data.id === newData.id);
      this.products[productIndex] = newData;
    } else {
      this.products.unshift(newData);
    }

  
  }

  showEditModal(product:Product){
    this.displayAddEditModel=true;
    this.selectedProduct=product;

  }

  deleteProduct(product:Product){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this product?',
      accept: () => {
        //Actual logic to perform a confirmation
        this.productService.deleteProduct(product.id).subscribe(
          response => {
            this.getProductList();
            this.products = this.products.filter(data => data.id !== product.id);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted Successfully' });
          },
          error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
          }
        )
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub=>sub.unsubscribe);
  }
}
