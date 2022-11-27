import { Injectable } from '@angular/core';
import { Cart, FoundProduct } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart = {
    productsList: [],
    address: '',
    totalPrice: 0
  }

  constructor() {}

  addToCart(product: FoundProduct){
    this.cart.productsList.push(product);
    this.cart.totalPrice += product.price;
    console.log(this.cart)
  }
}
