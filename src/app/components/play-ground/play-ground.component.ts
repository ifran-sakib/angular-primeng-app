import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.css']
})
export class PlayGroundComponent implements OnInit {
  

  productList:Product[]=[];
  selectedPdtDdl='';
  selectedPdtMS=[];
  dob: Date | undefined;
  dob2: Date | undefined;
  startDateTime: Date | undefined;

  constructor(private productService:ProductService){
    
  }
  ngOnInit(): void {
    this.getProductList()
  }

  getProductList(){
    this.productService.getProductsList().subscribe(
      response=>{
        this.productList=response;
      })
  }

  selectDate(event:any){
    console.log(event,this.dob2);
  }
  }


