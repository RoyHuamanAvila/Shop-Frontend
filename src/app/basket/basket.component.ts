import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  constructor(private cartService : CartService) {}
  cart = this.cartService.cart;
}
