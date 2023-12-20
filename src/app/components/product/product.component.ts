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
  displayAddModel=false;

  constructor(private productService:ProductService){

  }
  ngOnInit(): void {
    this.getProductList()
  }

  getProductList(){
    this.productService.getProducts().subscribe(
      response=>{
        this.products=response;
      }
    )

  }

  showAddModal(){
    this.displayAddModel=true;
  }

  hideAddModal(isClosed:boolean){
    this.displayAddModel=!isClosed;
  }

  saveProductToList(newDate:any){
    this.products.unshift(newDate);

  }
}
