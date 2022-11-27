import { Component, Input } from '@angular/core';
import { FoundProduct } from 'src/types';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: FoundProduct

  constructor(private cart: CartService){}

  addToCart(){
    this.cart.addToCart(this.product);
  }
}
