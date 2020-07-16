import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from '../product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLinkActive } from '@angular/router';
import { UserService } from '../user.service'
import { UserGuard } from '../user.guard';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 
title:string = "Product list"
public products: ProductModel[];
imageWidth:number = 50;
imageMargin:number= 2;

showImage: boolean = false;
selectedRowIndex:number = -1;
constructor(
  private productService:ProductService,
  private _router:Router,
  public _user:UserGuard,
  public user:UserService
  ) { }

toggleImage(): void{
  this.showImage = !this.showImage;
}

showForEdit(row){
  this.selectedRowIndex = row;
}

deleteProducts(product,index)
{
  if(window.confirm('Are you sure?')){
    this.productService.deleteProduct(product._id)
     .subscribe((data)=>{
       this.products.splice(index, 1);
      //  console.log(`Deleted product is ${data}`);
  })
}
}

  ngOnInit(): void {

this.productService.getProducts()
.subscribe((data)=>{
  this.products=JSON.parse(JSON.stringify(data))
},
(err)=>{ if ( err instanceof HttpErrorResponse){ 
  if ( err.status === 401) {
    this._router.navigate(['./login'])
  } }}
)
  }
}
