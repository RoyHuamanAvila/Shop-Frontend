import { Injectable } from '@angular/core';
import { FoundProduct, Product } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: FoundProduct[] = []
  constructor() { }

  addToCart(product: FoundProduct){
    this.cart.push(product);
    console.log(this.cart)
  }
}
