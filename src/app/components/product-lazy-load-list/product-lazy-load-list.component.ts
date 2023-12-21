import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { Product, ProductsResponse } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-lazy-load-list',
  templateUrl: './product-lazy-load-list.component.html',
  styleUrls: ['./product-lazy-load-list.component.css']
})
export class ProductLazyLoadListComponent implements OnInit {
  products:Product[]=[];
  totalRecord:number=0;
  loading:boolean=true;

  constructor(private productService:ProductService,
    private messageService: MessageService){

  }
  ngOnInit(): void {
  }

  loadProduct($event:any){
    console.log($event);
    this.loading=true;
    this.productService.getProductList($event.first||0).subscribe(
      (response:ProductsResponse)=>{
        this.loading=false;
        this.products=response.products;
        this.totalRecord=response.total;
      }
      )
  }

}
