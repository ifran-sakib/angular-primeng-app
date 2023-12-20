import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[]=[];
  displayAddEditModel=false;
  selectedProduct:any=null;

  constructor(private productService:ProductService){

  }
  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){
    this.productService.getProducts().subscribe(
      response=>{
        this.products=response;
      }
    )

  }

  showAddModal(){
    this.displayAddEditModel=true;
  }

  hideAddModal(isClosed:boolean){
    this.displayAddEditModel=!isClosed;
  }

  saveUpdateProductToList(newData:any){
    if(newData.id===this.selectedProduct.id){
      const productIndex=this.products.findIndex(data=>data.id===newData.id);
      this.products[productIndex]=newData;

    }else{
      this.products.unshift(newData);
    }
   
   // this.getProductList();

  }

  showEditModal(product:Product){
    this.displayAddEditModel=true;
    this.selectedProduct=product;

  }
}
