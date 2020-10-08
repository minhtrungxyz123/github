import { Component, Input, OnInit } from '@angular/core';
import {IProduct} from '../model/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  @Input() product:IProduct

  public cart = {
     count: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  AddProductToCart(productInfo:IProduct){
    if(productInfo.quantity > 0){
      console.log(productInfo.id + ": " + productInfo.name);
      productInfo.quantity = productInfo.quantity - 1;
      this.cart.count = this.cart.count + 1;
    }
    else{
      alert("sản phẩm này đã hết hàng");
    }
  }

}
