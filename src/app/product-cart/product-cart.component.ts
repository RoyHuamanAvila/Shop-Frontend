import { Component, Input } from '@angular/core';
import { FoundProduct } from 'src/types';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent {
  @Input() product: FoundProduct
}
