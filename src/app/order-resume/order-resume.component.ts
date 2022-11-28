import { Component, Input } from '@angular/core';
import { Cart } from 'src/types';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-resume',
  templateUrl: './order-resume.component.html',
  styleUrls: ['./order-resume.component.css']
})
export class OrderResumeComponent {
  constructor(private cartService: CartService) {}
  @Input() link: string = ''
  cart = this.cartService.cart
}
